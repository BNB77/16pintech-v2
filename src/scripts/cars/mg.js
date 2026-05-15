export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'CVT/DCT/Автомат', price: '2 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '8 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '15 000 ₽' }],
  trans_cvt:      [{ name: 'Настройка CVT', description: 'Калибровка вариатора', price: '8 000 ₽' }],
  trans_dct:      [{ name: 'Настройка DCT', description: 'Калибровка робота', price: '10 000 ₽' }],
  trans_at:       [{ name: 'Настройка автомата', description: 'Калибровка АКПП', price: '9 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '6 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '8 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '10 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '9 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '7 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '5 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '4 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '3 500 ₽' }],
  tva_off:        [{ name: 'Отключение TVA', description: 'Tva - дросельная заслонка', price: '3 500 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '4 500 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '5 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '7 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '10 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '2 500 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '1 500 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '4 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Инвертор/контроллер/батарея', price: '3 500 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '7 000 ₽' }],
  ev_diag:        [{ name: 'Диагностика EV', description: 'Полная диагностика электромобиля', price: '3 000 ₽' }],
  ev_battery:     [{ name: 'Диагностика батареи EV', description: 'Проверка аккумулятора', price: '4 500 ₽' }],
  ev_motor:       [{ name: 'Диагностика электродвигателя', description: 'Проверка тяговых моторов', price: '3 500 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '4 000 ₽' }],
  coding_pro:     [{ name: 'Расширенное кодирование', description: 'Раскодировка доп. функций', price: '6 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const mgData = {

  '3': {
    '1 поколение (2008–2011)': {
      '1.4 (87 л.с.)':                S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.8 (143 л.с.)':               S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
    },
    '2 поколение дорест (2011–2013)': {
      '1.3 (88 л.с.)':                S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.5 (108 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_at, servicePresets.coding),
    },
    '2 поколение FL 2013 (2013–2018)': {
      '1.5 (108 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding),
      '1.5 Turbo (126 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    '2 поколение FL 2018 (2018–2024)': {
      '1.5 (106 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding),
      '1.5 Turbo (163 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
    },
    '3 поколение (2024–н.в.)': {
      '1.5 Hybrid+ (194 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding_pro, servicePresets.gpf_off),
    },
  },

  '5': {
    '1 поколение (2011–2018)': {
      '1.5 (109 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_at, servicePresets.coding),
      '1.5 (129 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_at, servicePresets.coding),
      '1.8 TCI-Tech (133 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding),
    },
    '2 поколение (2020–2023)': {
      '1.5 (120 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_cvt, servicePresets.diagTrans, servicePresets.coding),
      '1.5 Turbo (173 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
    },
    '3 поколение для России (2023–н.в.)': {
      '1.5 (114 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_cvt, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
    },
  },

  '6': {
    '1 поколение (2010–2014)': {
      '1.8 TCI-Tech (133 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding),
      '1.8 TCI-Tech Turbo (160 л.с.)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '1.9 DTI-Tech (150 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    '1 поколение FL (2014–2017)': {
      '1.8 TCI-Tech (133 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding),
      '1.8 TCI-Tech Turbo (160 л.с.)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    '2 поколение дорест (2017–2020)': {
      '1.5 Turbo (148 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
      '1.5 Turbo (169 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
    },
    '2 поколение FL (2020–н.в.)': {
      '1.5 Turbo (148 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
      '1.5 Turbo Pro (180 л.с.)':     S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  '7': {
    '1 поколение (2024–н.в.)': {
      '2.0 Turbo (261 л.с.)':         S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding_pro, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  'zs': {
    '1 поколение дорест (2017–2019)': {
      '1.5 (114 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_at, servicePresets.trans_cvt, servicePresets.coding),
      '1.5 Turbo (156 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    '1 поколение FL 2019 (2019–2020)': {
      '1.5 (114 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_at, servicePresets.trans_cvt, servicePresets.diagTrans, servicePresets.coding),
      '1.5 Turbo (156 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    '1 поколение FL 2020 (2020–2024)': {
      '1.0 T-GDI (111 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding),
      '1.3 T-GDI (163 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
      '1.5 (114 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_at, servicePresets.trans_cvt, servicePresets.diagTrans, servicePresets.coding),
    },
    '2 поколение (2024–н.в.)': {
      '1.5 Turbo (170 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_at, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding_pro, servicePresets.burbles),
    },
  },

  'zs ev': {
    '1 поколение (2018–2021)': {
      'Electric (143 л.с.)':          S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding),
      'Electric (150 л.с.)':          S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding),
    },
    '1 поколение FL (2021–н.в.)': {
      'Electric (156 л.с.) 50.3 kWh': S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro),
      'Electric (176 л.с.) 51.1 kWh': S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro),
      'Electric (177 л.с.) 72.6 kWh': S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro),
    },
  },

  'hs': {
    '1 поколение (2018–2023)': {
      '1.5 Turbo (169 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.0 Turbo (231 л.с.)':         S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
    },
    '1 поколение FL (2023–2025)': {
      '1.5 Turbo (162 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
      '1.5 PHEV (258 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding_pro, servicePresets.gpf_off),
    },
    '2 поколение (2024–н.в.)': {
      '1.5 Turbo (172 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_dct, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding_pro, servicePresets.burbles),
      '2.0 Turbo (231 л.с.)':         S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding_pro, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  'rx5': {
    '1 поколение (2024–н.в.)': {
      '2.0 Turbo (220 л.с.)':         S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding_pro, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  'rx8': {
    '1 поколение (2024–н.в.)': {
      '2.0 Turbo (220 л.с.)':         S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding_pro, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  'rx9': {
    '1 поколение (2024–н.в.)': {
      '2.0 Turbo (204 л.с.)':         S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.trans_at, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding_pro, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  '4 ev': {
    '1 поколение (2022–н.в.)': {
      'Electric 51 kWh (170 л.с.)':   S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro),
      'Electric 64 kWh (204 л.с.)':   S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro, servicePresets.vmax_off),
      'Electric 77 kWh (245 л.с.)':   S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro, servicePresets.vmax_off),
      'XPower AWD (435 л.с.)':        S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro, servicePresets.vmax_off),
    },
  },

  'marvel r': {
    '1 поколение (2021–н.в.)': {
      'Electric RWD (180 л.с.) 70 kWh': S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro),
      'Electric AWD (288 л.с.) 70 kWh': S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro, servicePresets.vmax_off),
    },
  },

  'cyberster': {
    '1 поколение (2023–н.в.)': {
      'Electric RWD (310 л.с.) 64 kWh': S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro, servicePresets.vmax_off),
      'Electric AWD (536 л.с.) 77 kWh': S(servicePresets.ev_diag, servicePresets.ev_battery, servicePresets.ev_motor, servicePresets.coding_pro, servicePresets.vmax_off),
    },
  },
};
