const LOCATION = [55.8567, 37.4887];
const DAILY_LOAD_LIMIT = 900;
const STORAGE_KEY = 'ymaps_daily';

class MapRateLimiter {
  static canLoad() {
    const today = new Date().toISOString().slice(0, 10);
    const raw = localStorage.getItem(STORAGE_KEY);
    const record = raw ? JSON.parse(raw) : { date: today, count: 0 };

    if (record.date !== today) {
      record.date = today;
      record.count = 0;
    }

    if (record.count >= DAILY_LOAD_LIMIT) {
      console.warn('MapWidget: достигнут суточный лимит загрузок карты');
      return false;
    }

    record.count += 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    return true;
  }
}

export class MapWidget {
  #containerId;

  constructor(containerId) {
    this.#containerId = containerId;
    this.#init();
  }

  #init() {
    const container = document.getElementById(this.#containerId);
    if (!container) return;

    if (!MapRateLimiter.canLoad()) {
      this.#renderError(container, 'Превышен суточный лимит загрузок карты');
      return;
    }

    const apiKey = import.meta.env.VITE_YMAPS_KEY;
    if (!apiKey) {
      this.#renderError(container, 'VITE_YMAPS_KEY не задан в .env');
      return;
    }

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;

    script.onload = () => {
      window.ymaps.ready(() => {
        try {
          this.#buildMap(container);
        } catch (err) {
          console.error('MapWidget build error:', err);
          this.#renderError(container, `Ошибка инициализации: ${err.message}`);
        }
      });
    };

    script.onerror = () => {
      this.#renderError(container, 'Не удалось загрузить Яндекс Карты — проверь API-ключ');
    };

    document.head.appendChild(script);
  }

  #buildMap(container) {
    const map = new window.ymaps.Map(container, {
      center: LOCATION,
      zoom: 15,
      controls: ['zoomControl', 'fullscreenControl'],
    });

    const placemark = new window.ymaps.Placemark(
      LOCATION,
      {
        balloonContentHeader: '16pin-tech',
        balloonContentBody: 'Беломорская ул., д. 40с2<br>+7 (903) 534-80-46',
        balloonContentFooter: 'Пн–Вс: 10:00–21:00',
        hintContent: '16pin-tech — Чип-тюнинг и диагностика',
      },
      {
        preset: 'islands#blueAutoIcon',
      }
    );

    map.geoObjects.add(placemark);
    placemark.balloon.open();
  }

  #renderError(container, msg) {
    container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;
                  height:100%;color:#6c757d;font-size:0.9rem;padding:20px;text-align:center">
        ${msg}
      </div>`;
  }
}
