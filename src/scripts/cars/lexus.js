// Пресеты услуг для Lexus
export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 500 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/CVT/Гибридная система', price: '3 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '14 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '18 000 ₽' }],
  stage1_v8:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 двигателя', price: '22 000 ₽' }],
  stage1_v8_plus: [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг V8', price: '28 000 ₽' }],
  stage1_fsport:  [{ name: 'Прошивка Stage 1', description: 'F Sport Performance тюнинг', price: '25 000 ₽' }],
  stage1_rc_f:    [{ name: 'Прошивка Stage 1', description: 'RC F / GS F тюнинг', price: '32 000 ₽' }],
  stage1_lfa:     [{ name: 'Прошивка Stage 1', description: 'LFA Performance', price: '50 000 ₽' }],
  trans_auto:     [{ name: 'Настройка АКПП', description: 'Калибровка автоматической КПП', price: '12 000 ₽' }],
  trans_cvt:      [{ name: 'Настройка CVT', description: 'Калибровка вариатора', price: '10 000 ₽' }],
  trans_hybrid:   [{ name: 'Настройка гибридной системы', description: 'Калибровка eCVT/трансмиссии', price: '15 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '8 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '10 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '12 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '11 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '9 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '7 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '6 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '5 000 ₽' }],
  tva_off:        [{ name: 'Отключение TVA', description: 'Tva - дросельная заслонка', price: '5 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '6 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '7 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '10 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '15 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '4 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '2 500 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '6 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Инвертор/контроллер/электромотор', price: '5 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления/настройка', price: '10 000 ₽' }],
  hybrid_full:    [{ name: 'Комплексная настройка гибрида', description: 'ДВС + электромотор + батарея', price: '18 000 ₽' }],
  avs_setup:      [{ name: 'Настройка AVS', description: 'Adaptive Variable Suspension', price: '7 000 ₽' }],
  air_susp:       [{ name: 'Диагностика пневмоподвески', description: 'Пневматическая подвеска', price: '5 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '6 000 ₽' }],
  fsport_mode:    [{ name: 'Активация F Sport режимов', description: 'Раскодировка F Sport функций', price: '8 000 ₽' }],
  mark_levinson:  [{ name: 'Настройка Mark Levinson', description: 'Аудиосистема премиум', price: '5 000 ₽' }],
  lexus_safety:   [{ name: 'Калибровка Lexus Safety System', description: 'Системы безопасности', price: '6 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const lexusData = {

  'rx': {
    'XU10 дорест (1998–2001)': {
      '3.0 V6 (1MZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'XU10 рестайлинг (2001–2003)': {
      '3.0 V6 (1MZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'XU30 дорест (2003–2006)': {
      '3.0 V6 (1MZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.3 V6 (3MZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      'RX400h 3.3 Hybrid (3MZ-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XU30 рестайлинг (2006–2009)': {
      '3.3 V6 (3MZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      'RX400h 3.3 Hybrid (3MZ-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'AL10 дорест (2009–2012)': {
      '2.7 I4 (1AR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      'RX450h 3.5 Hybrid (2GR-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_full),
    },
    'AL10 рестайлинг (2012–2015)': {
      '2.7 I4 (1AR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'RX450h 3.5 Hybrid (2GR-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.gpf_off),
    },
    'AL20 дорест (2015–2019)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'RX450h 3.5 Hybrid (2GR-FXS)':  S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.gpf_off),
    },
    'AL20 рестайлинг (2019–2022)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'RX450h 3.5 Hybrid (2GR-FXS)':  S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.gpf_off),
      'RX450h+ 3.5 PHEV (2GR-FXS)':   S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.battery_hv),
    },
    'AL30 (2022–н.в.)': {
      '2.4 Turbo (T24A-FTS)':         S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      'RX350h 2.5 Hybrid (A25A-FXS)': S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.gpf_off),
      'RX450h+ 2.5 PHEV (A25A-FXS)':  S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.battery_hv),
      'RX500h 2.4 Turbo Hybrid (T24A-FTS)': S(servicePresets.stage1_turbo, servicePresets.hybrid_full, servicePresets.fsport_mode),
    },
  },

  'es': {
    'XV10 (1991–1996)': {
      '3.0 V6 (3VZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'XV20 (1996–2001)': {
      '3.0 V6 (1MZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'XV30 (2001–2006)': {
      '3.0 V6 (1MZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.3 V6 (3MZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
    'XV40 дорест (2006–2009)': {
      '2.4 I4 (2AZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
    'XV40 рестайлинг (2009–2012)': {
      '2.4 I4 (2AZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
    'XV60 дорест (2012–2015)': {
      '2.5 I4 (2AR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      'ES300h 2.5 Hybrid (2AR-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XV60 рестайлинг (2015–2018)': {
      '2.5 I4 (2AR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'ES300h 2.5 Hybrid (2AR-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XZ10 дорест (2018–2021)': {
      '2.0 I4 (M20A-FKS)':            S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.5 I4 (A25A-FKS)':            S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'ES300h 2.5 Hybrid (A25A-FXS)': S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XZ10 рестайлинг (2021–н.в.)': {
      '2.0 I4 (M20A-FKS)':            S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.5 I4 (A25A-FKS)':            S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'ES300h 2.5 Hybrid (A25A-FXS)': S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'nx': {
    'Z10 дорест (2014–2017)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.5 I4 (2AR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      'NX300h 2.5 Hybrid (2AR-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'Z10 рестайлинг (2017–2021)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.5 I4 (2AR-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      'NX300h 2.5 Hybrid (2AR-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'AZ20 (2021–н.в.)': {
      '2.0 I4 (M20A-FKS)':            S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.gpf_off),
      '2.5 I4 (A25A-FKS)':            S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.4 Turbo (T24A-FTS)':         S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off, servicePresets.fsport_mode),
      'NX350h 2.5 Hybrid (A25A-FXS)': S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'NX450h+ 2.5 PHEV (A25A-FXS)':  S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.battery_hv),
    },
  },

  'is': {
    'E10 (1999–2005)': {
      '2.0 I6 (1G-FE)':               S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU),
      '3.0 I6 (2JZ-GE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
    'E20 дорест (2005–2008)': {
      '2.5 V6 (4GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.0 V6 (3GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      'IS F 5.0 V8 (2UR-GSE)':        S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.fsport_mode),
    },
    'E20 рестайлинг (2008–2013)': {
      '2.5 V6 (4GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.0 V6 (3GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      'IS F 5.0 V8 (2UR-GSE)':        S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.fsport_mode),
    },
    'E30 дорест (2013–2016)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.5 V6 (4GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'IS300h 2.5 Hybrid (2AR-FSE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'E30 рестайлинг (2016–2020)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.5 V6 (4GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'IS300h 2.5 Hybrid (2AR-FSE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'E30 2-й рестайлинг (2020–2024)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.5 V6 (4GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'IS300h 2.5 Hybrid (A25A-FXS)': S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'IS500 5.0 V8 (2UR-GSE)':       S(servicePresets.stage1_v8_plus, servicePresets.trans_auto, servicePresets.fsport_mode),
    },
  },

  'gs': {
    'S140 (1991–1997)': {
      '3.0 I6 (2JZ-GE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'S160 дорест (1997–2000)': {
      '3.0 I6 (2JZ-GE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '4.0 V8 (1UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
    },
    'S160 рестайлинг (2000–2005)': {
      '3.0 I6 (2JZ-GE)':              S(servicePresets.stage1_na, servicePresets.trans_auto),
      '4.3 V8 (3UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
    },
    'S190 дорест (2005–2007)': {
      '3.0 V6 (3GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '4.3 V8 (3UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
      'GS450h 3.5 Hybrid (2GR-FSE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'S190 рестайлинг (2007–2012)': {
      '3.0 V6 (3GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '4.6 V8 (1UR-FSE)':             S(servicePresets.stage1_v8, servicePresets.trans_auto),
      'GS450h 3.5 Hybrid (2GR-FSE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'L10 дорест (2011–2015)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto),
      '2.5 V6 (4GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.5 V6 (2GR-FSE)':             S(servicePresets.stage1_na, servicePresets.trans_auto),
      'GS300h 2.5 Hybrid (2AR-FSE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'GS450h 3.5 Hybrid (2GR-FXS)':  S(servicePresets.stage1_na, servicePresets.hybrid_full),
    },
    'L10 рестайлинг (2015–2020)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'GS300h 2.5 Hybrid (2AR-FSE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'GS450h 3.5 Hybrid (2GR-FXS)':  S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.gpf_off),
      'GS F 5.0 V8 (2UR-GSE)':        S(servicePresets.stage1_rc_f, servicePresets.trans_auto, servicePresets.fsport_mode),
    },
  },

  'ls': {
    'F10 (1989–1994)': {
      '4.0 V8 (1UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'F20 (1994–2000)': {
      '4.0 V8 (1UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'F30 (2000–2006)': {
      '4.3 V8 (3UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
    },
    'F40 дорест (2006–2009)': {
      '4.6 V8 (1UR-FSE)':             S(servicePresets.stage1_v8, servicePresets.trans_auto),
      'LS600h 5.0 Hybrid (2UR-FSE)':  S(servicePresets.stage1_v8, servicePresets.hybrid_full),
    },
    'F40 рестайлинг (2009–2012)': {
      '4.6 V8 (1UR-FSE)':             S(servicePresets.stage1_v8, servicePresets.trans_auto),
      'LS600h 5.0 Hybrid (2UR-FSE)':  S(servicePresets.stage1_v8, servicePresets.hybrid_full),
    },
    'F40 2-й рестайлинг (2012–2017)': {
      '4.6 V8 (1UR-FSE)':             S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.gpf_off),
      'LS600h 5.0 Hybrid (2UR-FSE)':  S(servicePresets.stage1_v8, servicePresets.hybrid_full, servicePresets.gpf_off),
    },
    'F50 (2017–н.в.)': {
      '3.5 V6 Twin-Turbo (V35A-FTS)': S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      'LS500h 3.5 Hybrid (8GR-FXS)':  S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.gpf_off),
    },
  },

  'lx': {
    'J80 (1995–1997)': {
      '4.5 I6 (1FZ-FE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'J100 (1998–2007)': {
      '4.7 V8 (2UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
    },
    'J200 дорест (2007–2012)': {
      '4.7 V8 (2UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_v8_plus, servicePresets.trans_auto),
    },
    'J200 рестайлинг (2012–2015)': {
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_v8_plus, servicePresets.trans_auto),
    },
    'J200 2-й рестайлинг (2015–2021)': {
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.gpf_off),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_v8_plus, servicePresets.trans_auto, servicePresets.gpf_off),
    },
    'J300 (2021–н.в.)': {
      '3.5 V6 Twin-Turbo (V35A-FTS)': S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.3 Twin-Turbo Diesel (F33A-FTV)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'LX600h 3.5 Hybrid (V35A-FTS)': S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'gx': {
    'J120 дорест (2002–2006)': {
      '4.7 V8 (2UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'J120 рестайлинг (2006–2009)': {
      '4.7 V8 (2UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
    },
    'J150 дорест (2009–2013)': {
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
    },
    'J150 рестайлинг (2013–2019)': {
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.gpf_off),
    },
    'J150 2-й рестайлинг (2019–2023)': {
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.gpf_off),
    },
    'J250 (2023–н.в.)': {
      '3.5 V6 Twin-Turbo (V35A-FTS)': S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
    },
  },

  'ux': {
    'Z10 дорест (2018–2022)': {
      '2.0 I4 (M20A-FKS)':            S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.gpf_off),
      'UX250h 2.0 Hybrid (M20A-FXS)': S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'Z10 рестайлинг (2022–н.в.)': {
      '2.0 I4 (M20A-FKS)':            S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.gpf_off),
      'UX250h 2.0 Hybrid (M20A-FXS)': S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'UX300e Electric':              S(servicePresets.battery_hv, servicePresets.hybrid_diag),
    },
  },

  'rc': {
    'C10 дорест (2014–2018)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'RC300h 2.5 Hybrid (2AR-FSE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'RC F 5.0 V8 (2UR-GSE)':        S(servicePresets.stage1_rc_f, servicePresets.trans_auto, servicePresets.fsport_mode, servicePresets.burbles),
    },
    'C10 рестайлинг (2018–2024)': {
      '2.0 Turbo (8AR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off),
      'RC300h 2.5 Hybrid (2AR-FSE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'RC F 5.0 V8 (2UR-GSE)':        S(servicePresets.stage1_rc_f, servicePresets.trans_auto, servicePresets.fsport_mode, servicePresets.burbles),
    },
  },

  'lc': {
    'Z100 (2017–н.в.)': {
      '3.5 V6 (8GR-FKS)':             S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.gpf_off, servicePresets.fsport_mode),
      '5.0 V8 (2UR-GSE)':             S(servicePresets.stage1_v8_plus, servicePresets.trans_auto, servicePresets.gpf_off, servicePresets.fsport_mode, servicePresets.burbles),
      'LC500h 3.5 Hybrid (8GR-FXS)':  S(servicePresets.stage1_na, servicePresets.hybrid_full, servicePresets.gpf_off, servicePresets.fsport_mode),
    },
  },

  'lfa': {
    'LFA1 (2010–2012)': {
      '4.8 V10 (1LR-GUE)':            S(servicePresets.stage1_lfa, servicePresets.fsport_mode, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  'sc': {
    'Z30 (1991–2000)': {
      '3.0 I6 (2JZ-GE)':              S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU),
      '4.0 V8 (1UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto, servicePresets.diagECU),
    },
    'Z40 (2001–2010)': {
      '4.3 V8 (3UZ-FE)':              S(servicePresets.stage1_v8, servicePresets.trans_auto),
    },
  },

  'ct': {
    'A10 дорест (2010–2014)': {
      'CT200h 1.8 Hybrid (2ZR-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'A10 рестайлинг (2014–2017)': {
      'CT200h 1.8 Hybrid (2ZR-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.gpf_off),
    },
    'A10 2-й рестайлинг (2017–2022)': {
      'CT200h 1.8 Hybrid (2ZR-FXE)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.gpf_off),
    },
  },

  // Ссылочные модели
  'rx l':             { 'см. RX соответствующего поколения (удлиненная версия)': S() },
  'es hybrid':        { 'см. ES соответствующего поколения ES300h': S() },
  'is hybrid':        { 'см. IS соответствующего поколения IS300h': S() },
  'gs hybrid':        { 'см. GS соответствующего поколения GS300h/450h': S() },
  'ls hybrid':        { 'см. LS соответствующего поколения LS500h/600h': S() },
  'nx hybrid':        { 'см. NX соответствующего поколения NX300h/350h/450h+': S() },
  'rx hybrid':        { 'см. RX соответствующего поколения RX450h/450h+': S() },
  'ux hybrid':        { 'см. UX соответствующего поколения UX250h': S() },
  'rc hybrid':        { 'см. RC соответствующего поколения RC300h': S() },
  'lc hybrid':        { 'см. LC соответствующего поколения LC500h': S() },
};