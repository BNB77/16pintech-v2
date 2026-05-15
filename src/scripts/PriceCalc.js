const SERVICES = {
  chip1: { label: 'Чип-тюнинг Stage 1', base: [8000, 14000] },
  chip2: { label: 'Чип-тюнинг Stage 2', base: [14000, 24000] },
  diag: { label: 'Диагностика ЭБУ', base: [2000, 3500] },
  dpf: { label: 'Удаление DPF / EGR', base: [6000, 11000] },
  akpp: { label: 'Настройка АКПП / DSG', base: [8000, 14000] },
  adblue: { label: 'Отключение AdBlue / SCR', base: [6000, 10000] },
};

const ENGINE_MULT = {
  small: 1.0,
  mid: 1.25,
  large: 1.5,
  xl: 1.75,
};

const ORIGIN_MULT = {
  eu: 1.0,
  jp: 1.1,
  us: 1.05,
  cn: 0.9,
};

export class PriceCalc {
  #modal;
  #overlay;
  #serviceSelect;
  #engineSelect;
  #originSelect;
  #resultEl;

  constructor(modalId) {
    this.#modal = document.getElementById(modalId);
    if (!this.#modal) return;

    this.#overlay = this.#modal.querySelector('.modal__overlay');
    this.#serviceSelect = this.#modal.querySelector('#calcService');
    this.#engineSelect = this.#modal.querySelector('#calcEngine');
    this.#originSelect = this.#modal.querySelector('#calcOrigin');
    this.#resultEl = this.#modal.querySelector('.calc__result');

    this.#bindEvents();
  }

  open() {
    this.#modal.classList.add('modal--open');
    document.body.classList.add('scroll-lock');
    this.#resultEl.hidden = true;
  }

  close() {
    this.#modal.classList.remove('modal--open');
    document.body.classList.remove('scroll-lock');
  }

  #bindEvents() {
    this.#modal.querySelector('.modal__close').addEventListener('click', () => this.close());
    this.#overlay.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.#modal.classList.contains('modal--open')) this.close();
    });

    this.#modal.querySelector('.calc__btn').addEventListener('click', () => this.#calculate());

  }

  #calculate() {
    const svc = SERVICES[this.#serviceSelect.value];
    const engMult = ENGINE_MULT[this.#engineSelect.value];
    const originMult = ORIGIN_MULT[this.#originSelect.value];

    if (!svc || !engMult || !originMult) return;

    const low = Math.round((svc.base[0] * engMult * originMult) / 500) * 500;
    const high = Math.round((svc.base[1] * engMult * originMult) / 500) * 500;

    this.#modal.querySelector('.calc__price').textContent = `${low.toLocaleString('ru-RU')} – ${high.toLocaleString('ru-RU')} ₽`;
    this.#modal.querySelector('.calc__service-name').textContent = svc.label;
    this.#resultEl.hidden = false;
  }
}
