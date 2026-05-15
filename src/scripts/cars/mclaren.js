export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '3 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '5 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'SSG/DCT диагностика', price: '3 500 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '25 000 ₽' }],
  stage1_hi:      [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '30 000 ₽' }],
  stage1_ultra:   [{ name: 'Прошивка Stage 1', description: 'Экстремальный тюнинг', price: '35 000 ₽' }],
  stage1_ultimate:[{ name: 'Прошивка Stage 1', description: 'Ultimate Series тюнинг', price: '45 000 ₽' }],
  stage2_turbo:   [{ name: 'Прошивка Stage 2', description: 'Stage 2 с аппаратными доработками', price: '35 000 ₽' }],
  stage2_hi:      [{ name: 'Прошивка Stage 2', description: 'Stage 2 максимальная мощность', price: '45 000 ₽' }],
  trans_ssg:      [{ name: 'Настройка SSG', description: 'Калибровка SSG трансмиссии', price: '15 000 ₽' }],
  trans_dct:      [{ name: 'Настройка DCT', description: 'Калибровка DCT трансмиссии', price: '18 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '12 000 ₽' }],
  cat_off:        [{ name: 'Удаление катализаторов', description: 'Sport cats / decat', price: '15 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '8 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '10 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '5 000 ₽' }],
  launch:         [{ name: 'Launch Control оптимизация', description: 'Настройка старта', price: '12 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '6 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Инвертор/контроллер/E-motor', price: '5 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '10 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '7 000 ₽' }],
  track_mode:     [{ name: 'Активация Track режимов', description: 'Раскодировка гоночных функций', price: '10 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const mclarenData = {

  'mp4-12c': {
    'MP4-12C дорест (2011–2012)': {
      '3.8 V8 Twin-Turbo (M838T 600 hp)':  S(servicePresets.stage1_turbo, servicePresets.stage2_turbo, servicePresets.trans_ssg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.coding),
    },
    'MP4-12C FL (2012–2014)': {
      '3.8 V8 Twin-Turbo (M838T 616 hp)':  S(servicePresets.stage1_turbo, servicePresets.stage2_turbo, servicePresets.trans_ssg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.coding),
    },
  },

  '650s': {
    '650S (2014–2017)': {
      '3.8 V8 Twin-Turbo (M838T 650 hp)':  S(servicePresets.stage1_hi, servicePresets.stage2_hi, servicePresets.trans_ssg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
      '675LT 3.8 V8 (M838T 675 hp)':       S(servicePresets.stage1_ultra, servicePresets.stage2_hi, servicePresets.trans_ssg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
    },
  },

  '540c': {
    '540C (2015–2019)': {
      '3.8 V8 Twin-Turbo (M838T 540 hp)':  S(servicePresets.stage1_turbo, servicePresets.stage2_turbo, servicePresets.trans_ssg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.coding),
    },
  },

  '570s': {
    '570S (2015–2021)': {
      '3.8 V8 Twin-Turbo (M838T 570 hp)':  S(servicePresets.stage1_turbo, servicePresets.stage2_turbo, servicePresets.trans_ssg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.coding),
    },
    '570S FL (2018–2021)': {
      '3.8 V8 Twin-Turbo (M838T 570 hp)':  S(servicePresets.stage1_turbo, servicePresets.stage2_turbo, servicePresets.trans_ssg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.coding),
    },
  },

  '570gt': {
    '570GT (2016–2021)': {
      '3.8 V8 Twin-Turbo (M838T 570 hp)':  S(servicePresets.stage1_turbo, servicePresets.stage2_turbo, servicePresets.trans_ssg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.coding),
    },
    '570GT FL (2018–2021)': {
      '3.8 V8 Twin-Turbo (M838T 570 hp)':  S(servicePresets.stage1_turbo, servicePresets.stage2_turbo, servicePresets.trans_ssg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.coding),
    },
  },

  '600lt': {
    '600LT (2018–2021)': {
      '3.8 V8 Twin-Turbo (M838T 600 hp)':  S(servicePresets.stage1_hi, servicePresets.stage2_hi, servicePresets.trans_ssg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
    },
  },

  '720s': {
    '720S (2017–2023)': {
      '4.0 V8 Twin-Turbo (M840T 720 hp)':  S(servicePresets.stage1_hi, servicePresets.stage2_hi, servicePresets.trans_dct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
    },
    '720S FL (2020–2023)': {
      '4.0 V8 Twin-Turbo (M840T 720 hp)':  S(servicePresets.stage1_hi, servicePresets.stage2_hi, servicePresets.trans_dct, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
      '765LT 4.0 V8 (M840T 765 hp)':       S(servicePresets.stage1_ultra, servicePresets.stage2_hi, servicePresets.trans_dct, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
    },
  },

  '750s': {
    '750S (2023–н.в.)': {
      '4.0 V8 Twin-Turbo (M840T 750 hp)':  S(servicePresets.stage1_ultra, servicePresets.stage2_hi, servicePresets.trans_dct, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
    },
  },

  'gt': {
    'GT (2019–2023)': {
      '4.0 V8 Twin-Turbo (M840T 620 hp)':  S(servicePresets.stage1_hi, servicePresets.stage2_turbo, servicePresets.trans_dct, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.coding),
    },
  },

  'artura': {
    'Artura (2021–2023)': {
      '3.0 V6 Hybrid (M630 680 hp)':       S(servicePresets.stage1_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.trans_dct, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.coding),
    },
    'Artura FL (2024–н.в.)': {
      '3.0 V6 Hybrid (M630 700 hp)':       S(servicePresets.stage1_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.trans_dct, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.coding),
    },
  },

  'p1': {
    'P1 (2013–2015)': {
      '3.8 V8 Hybrid (M838TQ 916 hp)':     S(servicePresets.stage1_ultimate, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.trans_dct, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
    },
  },

  'senna': {
    'Senna (2018–2020)': {
      '4.0 V8 Twin-Turbo (M840TR 800 hp)': S(servicePresets.stage1_ultimate, servicePresets.trans_dct, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
    },
  },

  'speedtail': {
    'Speedtail (2019–2020)': {
      '4.0 V8 Hybrid (M840TR 1070 hp)':    S(servicePresets.stage1_ultimate, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.trans_dct, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.coding),
    },
  },

  'w1': {
    'W1 (2024–н.в.)': {
      '4.0 V8 Hybrid (MHP-8 1275 hp)':     S(servicePresets.stage1_ultimate, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.trans_dct, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
    },
  },

  'elva': {
    'Elva (2020–2021)': {
      '4.0 V8 Twin-Turbo (M840TR 815 hp)': S(servicePresets.stage1_ultimate, servicePresets.trans_dct, servicePresets.gpf_off, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.track_mode, servicePresets.coding),
    },
  },

  'gt3': {
    'см. 720S соответствующего поколения': S(),
  },

};
