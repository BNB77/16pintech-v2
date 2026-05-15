import { BRAND_MAP } from './carBrandMap.js';

const CAR_MODULES = import.meta.glob('./cars/*.js');

export class CarSelector {
  #brandSelect;
  #modelSelect;
  #generationSelect;
  #engineSelect;
  #modelGroup;
  #generationGroup;
  #engineGroup;
  #resultsEl;
  #servicesListEl;
  #cache = {};

  constructor(ids) {
    this.#brandSelect = document.getElementById(ids.brandSelectId);
    this.#modelSelect = document.getElementById(ids.modelSelectId);
    this.#generationSelect = document.getElementById(ids.generationSelectId);
    this.#engineSelect = document.getElementById(ids.engineSelectId);
    this.#modelGroup = document.getElementById(ids.modelGroupId);
    this.#generationGroup = document.getElementById(ids.generationGroupId);
    this.#engineGroup = document.getElementById(ids.engineGroupId);
    this.#resultsEl = document.getElementById(ids.resultsId);
    this.#servicesListEl = document.getElementById(ids.servicesListId);

    this.#populateBrands();
    this.#bindEvents();
  }

  #populateBrands() {
    Object.keys(BRAND_MAP)
      .sort()
      .forEach((key) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = BRAND_MAP[key].label;
        this.#brandSelect.appendChild(opt);
      });
  }

  #bindEvents() {
    this.#brandSelect.addEventListener('change', () => this.#onBrandChange());
    this.#modelSelect.addEventListener('change', () => this.#onModelChange());
    this.#generationSelect.addEventListener('change', () => this.#onGenerationChange());
    this.#engineSelect.addEventListener('change', () => this.#onEngineChange());
  }

  async #onBrandChange() {
    const brand = this.#brandSelect.value;

    this.#resetFrom('model');
    this.#hideResults();

    if (!brand) return;

    this.#setLoading(this.#modelSelect, 'Загрузка моделей...');
    this.#showGroup(this.#modelGroup);

    const data = await this.#loadBrand(brand);
    if (!data) {
      this.#modelSelect.innerHTML = '<option value="">— Ошибка загрузки —</option>';
      return;
    }

    this.#fillSelect(this.#modelSelect, Object.keys(data), (k) => k.toUpperCase());
    this.#modelSelect.disabled = false;
  }

  #onModelChange() {
    const { brand, model } = this.#selected();

    this.#resetFrom('generation');
    this.#hideResults();

    if (!model) return;

    const data = this.#cache[brand];
    if (!data?.[model]) return;

    this.#fillSelect(this.#generationSelect, Object.keys(data[model]));
    this.#generationSelect.disabled = false;
    this.#showGroup(this.#generationGroup);
  }

  #onGenerationChange() {
    const { brand, model, generation } = this.#selected();

    this.#resetFrom('engine');
    this.#hideResults();

    if (!generation) return;

    const data = this.#cache[brand];
    if (!data?.[model]?.[generation]) return;

    this.#fillSelect(this.#engineSelect, Object.keys(data[model][generation]));
    this.#engineSelect.disabled = false;
    this.#showGroup(this.#engineGroup);
  }

  #onEngineChange() {
    const { brand, model, generation, engine } = this.#selected();
    if (!engine) return;

    const services = this.#cache[brand]?.[model]?.[generation]?.[engine];
    if (services) this.#renderResults(services);
  }

  async #loadBrand(brand) {
    if (this.#cache[brand]) return this.#cache[brand];

    const info = BRAND_MAP[brand];
    if (!info) return null;

    const key = `./cars/${info.file}`;
    const loader = CAR_MODULES[key];
    if (!loader) {
      console.error('CarSelector: файл не найден в glob', key);
      return null;
    }

    try {
      const module = await loader();
      this.#cache[brand] = module[info.export];
      return this.#cache[brand];
    } catch (err) {
      console.error('CarSelector: ошибка загрузки', brand, err);
      return null;
    }
  }

  #renderResults(services) {
    this.#servicesListEl.innerHTML = '';
    services.forEach((svc) => {
      const li = document.createElement('li');
      li.className = 'result-card';
      li.innerHTML = `
        <div class="result-card__info">
          <p class="result-card__name">${svc.name}</p>
          <p class="result-card__desc">${svc.description}</p>
        </div>
        <span class="result-card__price">${svc.price}</span>
      `;
      this.#servicesListEl.appendChild(li);
    });
    this.#resultsEl.hidden = false;
  }

  #fillSelect(selectEl, keys, labelFn = (k) => k) {
    selectEl.innerHTML = '<option value="">— Выберите —</option>';
    keys.forEach((key) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = labelFn(key);
      selectEl.appendChild(opt);
    });
  }

  #showGroup(groupEl) {
    groupEl.classList.remove('select-group--hidden');
    groupEl.classList.add('select-group--visible');
  }

  #hideGroup(groupEl) {
    groupEl.classList.remove('select-group--visible');
    groupEl.classList.add('select-group--hidden');
  }

  #setLoading(selectEl, text) {
    selectEl.innerHTML = `<option value="">${text}</option>`;
    selectEl.disabled = true;
  }

  #resetFrom(level) {
    const levels = ['model', 'generation', 'engine'];
    const idx = levels.indexOf(level);
    if (idx === -1) return;

    const selects = [this.#modelSelect, this.#generationSelect, this.#engineSelect];
    const groups = [this.#modelGroup, this.#generationGroup, this.#engineGroup];
    const labels = ['Выберите модель', 'Выберите поколение', 'Выберите двигатель'];

    for (let i = idx; i < levels.length; i++) {
      selects[i].innerHTML = `<option value="">— ${labels[i]} —</option>`;
      selects[i].disabled = true;
      this.#hideGroup(groups[i]);
    }
  }

  #hideResults() {
    this.#resultsEl.hidden = true;
    this.#servicesListEl.innerHTML = '';
  }

  #selected() {
    return {
      brand: this.#brandSelect.value,
      model: this.#modelSelect.value,
      generation: this.#generationSelect.value,
      engine: this.#engineSelect.value,
    };
  }
}
