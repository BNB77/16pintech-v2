export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'CVT/Робот', price: '2 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация', price: '8 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  stage1_electric:[{ name: 'Прошивка Stage 1', description: 'Оптимизация электромотора', price: '15 000 ₽' }],
  trans_cvt:      [{ name: 'Настройка CVT', description: 'Калибровка вариатора', price: '8 000 ₽' }],
  trans_robot:    [{ name: 'Настройка робота', description: 'Калибровка роботизированной КПП', price: '9 000 ₽' }],
  trans_manual:   [{ name: 'Диагностика МКПП', description: 'Проверка механической КПП', price: '1 500 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '5 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '7 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '8 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '6 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '5 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '3 000 ₽' }],
  tva_off:        [{ name: 'Отключение TVA', description: 'Tva - дросельная заслонка', price: '3 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '4 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '5 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '6 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '10 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '2 500 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '1 500 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '4 000 ₽' }],
  battery_service:[{ name: 'Обслуживание батареи', description: 'Калибровка и тестирование', price: '3 000 ₽' }],
  electric_diag:  [{ name: 'Диагностика электросистемы', description: 'Проверка электромотора/инвертора', price: '3 500 ₽' }],
  electric_cal:   [{ name: 'Калибровка электросистемы', description: 'Адаптации/обновления', price: '7 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '4 000 ₽' }],
  carburetor:     [{ name: 'Настройка карбюратора', description: 'Регулировка карбюратора', price: '2 000 ₽' }],
  ignition:       [{ name: 'Регулировка зажигания', description: 'Установка угла опережения', price: '1 500 ₽' }],
  classic_diag:   [{ name: 'Диагностика классики', description: 'Проверка систем классического авто', price: '1 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const moskvichData = {

  '400': {
    '400-420 (1947–1954)': {
      '1.1 L (23 л.с.)':              S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
    '401-420А (1954–1956)': {
      '1.1 L (26 л.с.)':              S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
  },

  '402': {
    '402 (1956–1958)': {
      '1.2 L (35 л.с.)':              S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
    '407 (1958–1963)': {
      '1.4 L (45 л.с.)':              S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
    '403 (1963–1965)': {
      '1.4 L (50 л.с.)':              S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
  },

  '408': {
    '408 (1964–1969)': {
      '1.4 L (50 л.с.)':              S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
    '408 (1969–1975)': {
      '1.5 L (55 л.с.)':              S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
  },

  '412': {
    '412 (1967–1976)': {
      '1.5 L УЗАМ-412 (75 л.с.)':     S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
    '412 ИЖ (1976–1997)': {
      '1.5 L УЗАМ-412 (75 л.с.)':     S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
      '1.7 L УЗАМ-331 (85 л.с.)':     S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
  },

  '427': {
    '427 (1967–1976)': {
      '1.5 L УЗАМ-412 (75 л.с.)':     S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
  },

  '2138': {
    '2138 (1990–1998)': {
      '1.5 L (68 л.с.)':              S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
      '1.7 L (85 л.с.)':              S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
    },
  },

  '2141': {
    '2141 дорест (1986–1991)': {
      '1.5 L (68 л.с.)':              S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
      '1.6 L (75 л.с.)':              S(servicePresets.classic_diag, servicePresets.carburetor, servicePresets.ignition),
    },
    '2141 (1991–1997)': {
      '1.5 L (68 л.с.)':              S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
      '1.7 L (85 л.с.)':              S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
      '1.8 L (90 л.с.)':              S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
    },
    '2142 (1997–2001)': {
      '1.5 L (68 л.с.)':              S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
      '1.7 L (85 л.с.)':              S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
    },
  },

  'святогор': {
    'Святогор (1997–2001)': {
      '1.7 L (85 л.с.)':              S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
      '2.0 L Renault (113 л.с.)':     S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  '3': {
    '1 поколение (2022–н.в.)': {
      '1.5 Turbo MT (150 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_manual, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.gpf_off, servicePresets.egr_off),
      '1.5 Turbo CVT (150 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_cvt, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.gpf_off, servicePresets.egr_off),
      '1.5 Turbo GDI (174 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_robot, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.gpf_off, servicePresets.egr_off),
    },
  },

  '3e': {
    '1 поколение (2022–н.в.)': {
      'Электро (193 л.с., 65.7 кВт⋅ч)': S(servicePresets.stage1_electric, servicePresets.battery_hv, servicePresets.electric_diag, servicePresets.electric_cal, servicePresets.diagECU_plus, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  '6': {
    '1 поколение (2023–н.в.)': {
      '1.5 CVT (136 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_cvt, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.gpf_off, servicePresets.egr_off),
      '1.5 Turbo GDI (174 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_robot, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.gpf_off, servicePresets.egr_off),
    },
  },
};
