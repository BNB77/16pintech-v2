# 16pin-tech — Сайт автосервиса

Курсовая работа по дисциплине «Веб-разработка на стороне клиента».

## Технологии

- **Vite** — сборщик
- **ESLint + Prettier** — линтинг и форматирование
- **BEM** — методология именования CSS-классов
- **ES6 классы** с приватными полями (`#field`)
- **Yandex Maps API 2.1** — карта на странице контактов
- **GitHub Actions** — автоматический деплой на GitHub Pages

## Запуск

```bash
npm install
npm run dev
```

Открывается на `http://localhost:3000`

## Сборка

```bash
npm run build
```

## Структура

```
src/
├── index.html
├── styles/
│   └── main.css
└── scripts/
    ├── main.js
    ├── NavMenu.js
    ├── CarSelector.js
    ├── MapWidget.js
    ├── carBrandMap.js
    └── cars/       # данные по маркам автомобилей
```

## Переменные окружения

Создай файл `.env` в корне:

```
VITE_YMAPS_KEY=your_key_here
```

Ключ получить на [developer.tech.yandex.ru](https://developer.tech.yandex.ru)
