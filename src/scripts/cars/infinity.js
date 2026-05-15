export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'Jatco 7AT/9AT, CVT, DCT', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного VQ/VK', price: '12 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо (KR20DDET/2.0t/проч.)', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг (VR30DDTT)', price: '18 000 ₽' }],
  stage1_rs400:   [{ name: 'Прошивка Red Sport', description: 'Q50/Q60 3.0t RS400 (VR30DDTT)', price: '22 000 ₽' }],
  trans_7at:      [{ name: 'Настройка 7AT (Jatco RE7R01A/7R01)', description: 'Калибровки давлений/алгоритмов', price: '10 000 ₽' }],
  trans_9at:      [{ name: 'Настройка 9AT (QX60 2021+)', description: 'Адаптации/обновления', price: '12 000 ₽' }],
  trans_cvt:      [{ name: 'Настройка CVT (Jatco JF011E/JF016E/JF017E)', description: 'Адаптации, устранение дерганий', price: '9 000 ₽' }],
  trans_dct_7g:   [{ name: 'Настройка 7G‑DCT', description: 'Q30/QX30 (платформа Daimler)', price: '10 000 ₽' }],
  trans_5at:      [{ name: 'Настройка 5AT', description: 'RE5R05A/Jatco 5‑ст АКПП', price: '8 000 ₽' }],
  trans_4at:      [{ name: 'Настройка 4AT', description: 'Старые 4‑ст АКПП', price: '7 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр (FX30d/Q70 3.0d)', price: '9 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Бензиновый фильтр частиц (если есть)', price: '10 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter — разблокировка скорости', price: '6 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Во впускном коллекторе (VQ/VK)', price: '5 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '4 000 ₽' }],
  tva_off:        [{ name: 'Отключение TVA', description: 'Дроссельная заслонка (при свапе)', price: '4 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Вторичный воздух', price: '6 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки/выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро‑2', description: 'Отключение экологии целиком', price: '12 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снятие разъёмов с отключаемых систем', price: '2 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'M/Q70h, Q50 Hybrid', price: '4 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '8 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка модуля/баланс', price: '5 000 ₽' }],
  awd_attesa:     [{ name: 'ATTESA E‑TS', description: 'Диагностика/адаптации муфты/сцепления', price: '4 000 ₽' }],
  das_cal:        [{ name: 'DAS калибровка', description: 'Direct Adaptive Steering (Q50/Q60)', price: '5 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Разблокировка/опции', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const infinitiData = {
  'g-series (G35/G37)': {
    'V35 дорест (2002–2004)': {
      'G35 3.5 V6 (VQ35DE)':      S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU),
    },
    'V35 FL (2004–2006)': {
      'G35 3.5 V6 (VQ35DE/RevUp)': S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU),
    },
    'V36 дорест (2006–2010)': {
      'G35 3.5 V6 (VQ35HR)':      S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU),
      'G37 3.7 V6 (VQ37VHR)':     S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.diagECU),
      'G25 2.5 V6 (VQ25HR)':      S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.diagECU),
    },
    'V36 FL (2010–2013)': {
      'G37 3.7 V6 (VQ37VHR)':     S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.diagECU),
      'G25 2.5 V6 (VQ25HR)':      S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.diagECU),
    },
  },

  'g20 (P10/P11)': {
    'P10 (1990–1996)': {
      'G20 2.0 (SR20DE)':         S(servicePresets.stage1_na, servicePresets.trans_4at, servicePresets.diagECU),
    },
    'P11 (1996–2002)': {
      'G20 2.0 (SR20DE)':         S(servicePresets.stage1_na, servicePresets.trans_4at, servicePresets.diagECU),
    },
  },

  'i30/i35': {
    'i30 A32/A33 (1996–2001)': {
      'I30 3.0 V6 (VQ30DE)':      S(servicePresets.stage1_na, servicePresets.trans_4at, servicePresets.diagECU),
    },
    'i35 A33 (2001–2004)': {
      'I35 3.5 V6 (VQ35DE)':      S(servicePresets.stage1_na, servicePresets.trans_4at, servicePresets.diagECU),
    },
  },

  'j30 (Y32)': {
    'одно поколение (1992–1997)': {
      'J30 3.0 V6 (VG30DE)':      S(servicePresets.stage1_na, servicePresets.trans_4at, servicePresets.diagECU),
    },
  },

  'q50 (V37)': {
    'дорест (2013–2016)': {
      '3.7 V6 (VQ37VHR)':         S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.diagECU),
      'Hybrid 3.5 (VQ35HR + EM)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '2.2d (OM651)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'FL (2016–2024)': {
      '2.0t (M274)':              S(servicePresets.stage1_turbo, servicePresets.trans_7at, servicePresets.gpf_off),
      '3.0t (VR30DDTT)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_7at, servicePresets.das_cal),
      '3.0t Red Sport 400':       S(servicePresets.stage1_rs400, servicePresets.trans_7at, servicePresets.das_cal),
      'Hybrid 3.5 (VQ35HR + EM)':  S(servicePresets.stage1_na, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'q60 (V37 coupe)': {
    'дорест (2016–2017)': {
      '2.0t (M274)':              S(servicePresets.stage1_turbo, servicePresets.trans_7at, servicePresets.gpf_off),
      '3.0t (VR30DDTT)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_7at, servicePresets.das_cal),
    },
    'FL (2017–2022)': {
      '3.0t (VR30DDTT)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_7at, servicePresets.das_cal),
      'Red Sport 400':            S(servicePresets.stage1_rs400, servicePresets.trans_7at, servicePresets.das_cal),
    },
  },

  'm/q70 (Y50/Y51)': {
    'Y50 дорест (2004–2007)': {
      'M35 3.5 (VQ35DE)':         S(servicePresets.stage1_na, servicePresets.diagECU),
      'M45 4.5 (VK45DE)':         S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'Y50 FL (2007–2010)': {
      'M35 3.5 (VQ35HR)':         S(servicePresets.stage1_na, servicePresets.diagECU),
      'M45 4.5 (VK45DE)':         S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'Y51 дорест (2010–2013)': {
      'M37 3.7 (VQ37VHR)':        S(servicePresets.stage1_na, servicePresets.trans_7at),
      'M56 5.6 (VK56VD)':         S(servicePresets.stage1_na, servicePresets.trans_7at),
      'M30d 3.0d (V9X)':          S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'M35h Hybrid':              S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'Q70 FL (2013–2019)': {
      'Q70 3.7 (VQ37VHR)':        S(servicePresets.stage1_na, servicePresets.trans_7at),
      'Q70 5.6 (VK56VD)':         S(servicePresets.stage1_na, servicePresets.trans_7at),
      'Q70 3.0d (V9X)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Q70 Hybrid':               S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'fx/qx70 (S50/S51)': {
    'S50 дорест (2002–2006)': {
      'FX35 3.5 (VQ35DE)':        S(servicePresets.stage1_na, servicePresets.awd_attesa, servicePresets.diagECU),
      'FX45 4.5 (VK45DE)':        S(servicePresets.stage1_na, servicePresets.awd_attesa),
    },
    'S50 FL (2006–2008)': {
      'FX35 3.5 (VQ35DE)':        S(servicePresets.stage1_na, servicePresets.awd_attesa),
      'FX45 4.5 (VK45DE)':        S(servicePresets.stage1_na, servicePresets.awd_attesa),
    },
    'S51 дорест (2008–2011)': {
      'FX35/37 (VQ35HR/VQ37VHR)': S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.awd_attesa),
      'FX50 5.0 (VK50VE)':        S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.awd_attesa),
      'FX30d 3.0d (V9X)':         S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'S51 FL (2011–2013); QX70 (2013–2019)': {
      'QX70 3.7 (VQ37VHR)':       S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.awd_attesa),
      'QX70 5.0 (VK50VE)':        S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.awd_attesa),
      'QX70 3.0d (V9X)':          S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'ex/qx50 (J50 → J55)': {
    'EX дорест (2007–2011)': {
      'EX25 2.5 (VQ25HR)':        S(servicePresets.stage1_na, servicePresets.awd_attesa),
      'EX35 3.5 (VQ35HR)':        S(servicePresets.stage1_na, servicePresets.awd_attesa),
    },
    'EX/QX50 FL (2011–2017)': {
      'EX/QX50 3.7 (VQ37VHR)':    S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.awd_attesa),
      'EX37 3.7 (VQ37VHR)':       S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.awd_attesa),
    },
    'QX50 (J55, 2017–2023)': {
      '2.0 VC‑Turbo (KR20DDET)':  S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.gpf_off),
    },
  },

  'qx55 (J55 coupe, 2021–2025)': {
    'одно поколение (2021–2025)': {
      '2.0 VC‑Turbo (KR20DDET)':  S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.gpf_off),
    },
  },

  'qx60 (L50 → L51)': {
    'JX35/QX60 L50 дорест (2012–2015)': {
      'JX35 3.5 (VQ35DE) + CVT':  S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.awd_attesa),
      '2.5 Hybrid + CVT':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_cvt),
    },
    'QX60 L50 FL (2016–2020)': {
      '3.5 V6 (VQ35DE) + CVT':    S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.awd_attesa),
    },
    'QX60 L51 (2021–н.в.)': {
      '3.5 V6 (VQ35DD) + 9AT':    S(servicePresets.stage1_na, servicePresets.trans_9at, servicePresets.awd_attesa),
    },
  },

  'qx80 (Z62 → Z63)': {
    'Z62 дорест (2010–2013)': {
      'QX56 5.6 (VK56VD)':        S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.awd_attesa),
    },
    'Z62 FL (2013–2023)': {
      'QX80 5.6 (VK56VD)':        S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.awd_attesa),
    },
    'Z63 (2024–н.в.)': {
      'QX80 3.5 V6 TT (VR35DDTT)':S(servicePresets.stage1_turbo_hi, servicePresets.trans_9at, servicePresets.awd_attesa, servicePresets.gpf_off),
    },
  },

  'q30/qx30 (H15)': {
    'одно поколение (2016–2019)': {
      '1.6/2.0t (M270/M274) 7G‑DCT': S(servicePresets.stage1_turbo, servicePresets.trans_dct_7g, servicePresets.gpf_off),
      '2.2d (OM651) 7G‑DCT':          S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.trans_dct_7g),
    },
  },

  'q40': { 'V36 (2015)': { 'Q40 3.7 (VQ37VHR)': S(servicePresets.stage1_na, servicePresets.trans_7at, servicePresets.diagECU) } },
  'q45 (FY33/F50)': {
    'FY33 (1996–2001)': { 'Q45 4.1 V8 (VH41DE)': S(servicePresets.stage1_na, servicePresets.trans_4at, servicePresets.diagECU) },
    'F50 (2001–2006)':  { 'Q45 4.5 V8 (VK45DE)': S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU) },
  },
  'qx4 (R50)': {
    'одно поколение (1997–2003)': {
      'QX4 3.3/3.5 V6 (VG33E/VQ35DE)': S(servicePresets.stage1_na, servicePresets.trans_4at, servicePresets.awd_attesa),
    },
  },
  'esq (F15 China)': { 'одно поколение (2012–2018)': { '1.6 Turbo (MR16DDT) + CVT': S(servicePresets.stage1_turbo, servicePresets.trans_cvt) } },

  'ex25': { 'см. EX/QX50 соответствующего поколения': S() },
  'ex35': { 'см. EX/QX50 соответствующего поколения': S() },
  'ex37': { 'см. EX/QX50 соответствующего поколения': S() },
  'fx30d': { 'см. FX/QX70 соответствующего поколения': S() },
  'fx35':  { 'см. FX/QX70 соответствующего поколения': S() },
  'fx37':  { 'см. FX/QX70 соответствующего поколения': S() },
  'fx45':  { 'см. FX/QX70 соответствующего поколения': S() },
  'fx50':  { 'см. FX/QX70 соответствующего поколения': S() },
  'g25':   { 'см. G‑series (V36)': S() },
  'g35':   { 'см. G‑series (V35/V36)': S() },
  'g37':   { 'см. G‑series (V36)': S() },
  'i30':   { 'см. i30/i35': S() },
  'i35':   { 'см. i30/i35': S() },
  'j30':   { 'см. J30 (Y32)': S() },
  'jx35':  { 'см. QX60 (L50 дорест)': S() },
  'm25':   { 'см. M/Y51 (японский рынок)': S() },
  'm30':   { 'см. J30 (для США M30 coupe 1990–1992)': S() },
  'm35':   { 'см. M/Y50': S() },
  'm37':   { 'см. M/Y51': S() },
  'm45':   { 'см. M/Y50': S() },
  'm56':   { 'см. M/Y51': S() },
  'q30':   { 'см. Q30/QX30 (H15)': S() },
  'q45':   { 'см. Q45 (FY33/F50)': S() },
  'q50':   { 'см. Q50 (V37)': S() },
  'q60':   { 'см. Q60 (V37)': S() },
  'q70':   { 'см. M/Q70 (Y51)': S() },
  'qx30':  { 'см. Q30/QX30 (H15)': S() },
  'qx50':  { 'см. EX/QX50 (J50/J55)': S() },
  'qx55':  { 'см. QX55 (J55)': S() },
  'qx56':  { 'см. QX80 Z62 дорест': S() },
  'qx60':  { 'см. QX60 (L50/L51)': S() },
  'qx65':  { 'см. QX4/QX56 — уточнить версию': S() },
  'qx70':  { 'см. FX/QX70 (S50/S51)': S() },
  'qx80':  { 'см. QX80 (Z62/Z63)': S() },

  'qx70s/limited': { 'см. FX/QX70 соответствующего поколения': S() },
  'ipl':           { 'см. Q60 (IPL на базе V36/V37)': S() },
};
