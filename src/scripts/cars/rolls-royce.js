export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика V12', price: '5 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ Pro', description: 'Расширенная диагностика с логами', price: '8 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'ZF 8HP/Satellite Aided Transmission', price: '6 000 ₽' }],
  stage1_v12:     [{ name: 'Прошивка Stage 1', description: 'Оптимизация V12 Twin-Turbo', price: '45 000 ₽' }],
  stage1_v12_hi:  [{ name: 'Прошивка Stage 1 Pro', description: 'Производительный тюнинг V12', price: '65 000 ₽' }],
  stage1_v8:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация V8 Turbo', price: '35 000 ₽' }],
  trans_zf8:      [{ name: 'Настройка ZF 8HP', description: 'Калибровка 8-ст автомата', price: '25 000 ₽' }],
  trans_sat:      [{ name: 'Настройка SAT', description: 'Satellite Aided Transmission', price: '30 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка скорости', price: '15 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '20 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '18 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '8 000 ₽' }],
  air_susp:       [{ name: 'Диагностика пневмоподвески', description: 'Air Suspension System', price: '8 000 ₽' }],
  air_setup:      [{ name: 'Настройка пневмоподвески', description: 'Калибровка уровня клиренса', price: '12 000 ₽' }],
  planar_susp:    [{ name: 'Диагностика Planar', description: 'Planar Suspension System', price: '10 000 ₽' }],
  flagbearer:     [{ name: 'Настройка Flagbearer', description: 'Система адаптивной подвески', price: '15 000 ₽' }],
  magic_carpet:   [{ name: 'Калибровка Magic Carpet Ride', description: 'Система управления подвеской', price: '18 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '12 000 ₽' }],
  coding_premium: [{ name: 'Кодирование премиум функций', description: 'Активация скрытых возможностей', price: '20 000 ₽' }],
  bespoke:        [{ name: 'Активация Bespoke опций', description: 'Индивидуальные функции', price: '25 000 ₽' }],
  starlight:      [{ name: 'Настройка Starlight', description: 'Конфигурация звёздного потолка', price: '10 000 ₽' }],
  cameras:        [{ name: 'Калибровка камер', description: 'Vision Assist/Night Vision', price: '12 000 ₽' }],
  hud:            [{ name: 'Настройка HUD', description: 'Head-Up Display', price: '8 000 ₽' }],
  spirit:         [{ name: 'Настройка Spirit of Ecstasy', description: 'Моторизованная статуэтка', price: '6 000 ₽' }],
  audio:          [{ name: 'Настройка аудиосистемы', description: 'Bespoke Audio/Lexicon', price: '15 000 ₽' }],
  massage:        [{ name: 'Калибровка массажа', description: 'Система массажных кресел', price: '8 000 ₽' }],
  climate:        [{ name: 'Настройка климат-контроля', description: '4-зонный климат', price: '10 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const rollsRoyceData = {

  'phantom': {
    'VII дорест (2003–2009)': {
      '6.75 V12 (N73 460 л.с.)':      S(servicePresets.stage1_v12, servicePresets.trans_zf8, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding, servicePresets.vmax_off),
    },
    'VII FL (2009–2012)': {
      '6.75 V12 (N73 460 л.с.)':      S(servicePresets.stage1_v12, servicePresets.trans_zf8, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding, servicePresets.vmax_off, servicePresets.cameras),
    },
    'VII Series II (2012–2017)': {
      '6.75 V12 (N73 460 л.с.)':      S(servicePresets.stage1_v12, servicePresets.trans_sat, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding_premium, servicePresets.vmax_off, servicePresets.cameras, servicePresets.hud),
    },
    'VIII (2017–н.в.)': {
      '6.75 V12 (N74 571 л.с.)':      S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.planar_susp, servicePresets.flagbearer, servicePresets.coding_premium, servicePresets.bespoke, servicePresets.vmax_off, servicePresets.cameras, servicePresets.hud, servicePresets.audio, servicePresets.starlight),
    },
  },

  'ghost': {
    'I дорест (2009–2014)': {
      '6.6 V12 Twin-Turbo (N74 570 л.с.)': S(servicePresets.stage1_v12, servicePresets.trans_zf8, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I Series II (2014–2020)': {
      '6.6 V12 Twin-Turbo (N74 570 л.с.)': S(servicePresets.stage1_v12, servicePresets.trans_sat, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding_premium, servicePresets.vmax_off, servicePresets.burbles, servicePresets.cameras, servicePresets.hud),
    },
    'II (2020–н.в.)': {
      '6.75 V12 Twin-Turbo (N74 571 л.с.)': S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.planar_susp, servicePresets.magic_carpet, servicePresets.coding_premium, servicePresets.bespoke, servicePresets.vmax_off, servicePresets.burbles, servicePresets.cameras, servicePresets.hud, servicePresets.audio, servicePresets.starlight),
    },
  },

  'wraith': {
    '(2013–2016)': {
      '6.6 V12 Twin-Turbo (N74 632 л.с.)': S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'FL (2016–2023)': {
      '6.6 V12 Twin-Turbo (N74 632 л.с.)': S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding_premium, servicePresets.vmax_off, servicePresets.burbles, servicePresets.cameras, servicePresets.hud, servicePresets.starlight),
      'Black Badge 6.6 V12 (N74 632 л.с.)': S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding_premium, servicePresets.bespoke, servicePresets.vmax_off, servicePresets.burbles, servicePresets.cameras, servicePresets.hud, servicePresets.starlight),
    },
  },

  'dawn': {
    '(2015–2017)': {
      '6.6 V12 Twin-Turbo (N74 570 л.с.)': S(servicePresets.stage1_v12, servicePresets.trans_sat, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'FL (2017–2023)': {
      '6.6 V12 Twin-Turbo (N74 570 л.с.)': S(servicePresets.stage1_v12, servicePresets.trans_sat, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding_premium, servicePresets.vmax_off, servicePresets.burbles, servicePresets.cameras, servicePresets.hud, servicePresets.starlight),
      'Black Badge 6.6 V12 (N74 593 л.с.)': S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.air_setup, servicePresets.coding_premium, servicePresets.bespoke, servicePresets.vmax_off, servicePresets.burbles, servicePresets.cameras, servicePresets.hud, servicePresets.starlight),
    },
  },

  'cullinan': {
    '(2018–2024)': {
      '6.75 V12 Twin-Turbo (N74 571 л.с.)': S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.magic_carpet, servicePresets.coding_premium, servicePresets.vmax_off, servicePresets.cameras, servicePresets.hud, servicePresets.audio, servicePresets.starlight),
      'Black Badge 6.75 V12 (N74 600 л.с.)': S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.air_susp, servicePresets.magic_carpet, servicePresets.coding_premium, servicePresets.bespoke, servicePresets.vmax_off, servicePresets.burbles, servicePresets.cameras, servicePresets.hud, servicePresets.audio, servicePresets.starlight),
    },
    'FL (2024–н.в.)': {
      '6.75 V12 Twin-Turbo (N74 571 л.с.)': S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.planar_susp, servicePresets.magic_carpet, servicePresets.coding_premium, servicePresets.bespoke, servicePresets.vmax_off, servicePresets.cameras, servicePresets.hud, servicePresets.audio, servicePresets.starlight, servicePresets.climate),
      'Black Badge 6.75 V12 (N74 600 л.с.)': S(servicePresets.stage1_v12_hi, servicePresets.trans_sat, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.planar_susp, servicePresets.magic_carpet, servicePresets.coding_premium, servicePresets.bespoke, servicePresets.vmax_off, servicePresets.burbles, servicePresets.cameras, servicePresets.hud, servicePresets.audio, servicePresets.starlight, servicePresets.climate),
    },
  },

  'silver seraph': {
    '(1998–2002)': {
      '5.4 V12 (M73 326 л.с.)':       S(servicePresets.stage1_v12, servicePresets.diagECU, servicePresets.air_susp, servicePresets.coding),
    },
  },

  'park ward': {
    '(2000–2002)': {
      '5.4 V12 (M73 326 л.с.)':       S(servicePresets.stage1_v12, servicePresets.diagECU, servicePresets.air_susp, servicePresets.coding),
    },
  },

  'corniche': {
    'V (2000–2003)': {
      '6.75 V8 Turbo (L410 325 л.с.)': S(servicePresets.stage1_v8, servicePresets.diagECU, servicePresets.air_susp, servicePresets.coding),
    },
  },

  'spectre': {
    '(2023–н.в.)': {
      'Electric (585 л.с.)':          S(servicePresets.diagECU_plus, servicePresets.planar_susp, servicePresets.coding_premium, servicePresets.bespoke, servicePresets.cameras, servicePresets.hud, servicePresets.audio, servicePresets.starlight, servicePresets.spirit),
    },
  },
};
