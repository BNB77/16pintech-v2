
export const servicePresets = {
  diagECU:           [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:      [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:         [{ name: 'Диагностика трансмиссии', description: 'AT/DCT/CVT', price: '2 500 ₽' }],
  stage1_basic:      [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_comfort:    [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:   [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '18 000 ₽' }],
  stage1_gt:         [{ name: 'Прошивка Stage 1', description: 'GT/GT-Line тюнинг', price: '22 000 ₽' }],
  stage1_performance:[{ name: 'Прошивка Stage 1', description: 'Performance/N-Line', price: '28 000 ₽' }],
  stage1_extreme:    [{ name: 'Прошивка Stage 1', description: 'High Performance V6/V8', price: '35 000 ₽' }],
  trans_at4:         [{ name: 'Настройка AT', description: 'Калибровка 4-ст автомата', price: '10 000 ₽' }],
  trans_at6:         [{ name: 'Настройка AT', description: 'Калибровка 6-ст автомата', price: '12 000 ₽' }],
  trans_at8:         [{ name: 'Настройка AT', description: 'Калибровка 8-ст автомата', price: '14 000 ₽' }],
  trans_dct:         [{ name: 'Настройка DCT', description: 'Настройка робота DCT', price: '15 000 ₽' }],
  egr_off:           [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:           [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '9 000 ₽' }],
  dpf_off_adblue:    [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '11 000 ₽' }],
  gpf_off:           [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  adblue_off:        [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '8 000 ₽' }],
  vmax_off:          [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '6 000 ₽' }],
  flaps_off:         [{ name: 'Отключение выхлопных клапанов', description: 'Flaps/заслонки', price: '5 000 ₽' }],
  maf_off:           [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '4 000 ₽' }],
  tva_off:           [{ name: 'Отключение TVA', description: 'Дроссельная заслонка', price: '4 000 ₽' }],
  evap_off:          [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
  sap_off:           [{ name: 'Отключение SAP', description: 'Вторичный воздух', price: '6 000 ₽' }],
  burbles:           [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:             [{ name: 'Прошивка на Евро 2', description: 'Отключение экологических систем', price: '12 000 ₽' }],
  dtc_off:           [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  disconnect_sens:   [{ name: 'Disconnect Sensors', description: 'Снятие разъемов отключаемых систем', price: '2 000 ₽' }],
  battery_hv:        [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '5 000 ₽' }],
  hybrid_diag:       [{ name: 'Диагностика гибридной системы', description: 'HEV/PHEV инвертор/контроллер', price: '4 000 ₽' }],
  hybrid_cal:        [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '8 000 ₽' }],
  airbag_clear:      [{ name: 'Удаление ошибок Airbag', description: 'Очистка crash data', price: '4 000 ₽' }],
  immo_off:          [{ name: 'Отключение иммобилайзера', description: 'Удаление привязки ключа', price: '6 000 ₽' }],
  coding:            [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  cluster_correct:   [{ name: 'Корректировка пробега', description: 'Коррекция одометра', price: '7 000 ₽' }],
};

export const S = (...sets) => sets.flat();

export const hyundaiData = {

  // ====== A/B/C-сегмент ======
  'atos / amica': {
    'MX дорест/рест (1997–2014)': {
      '1.0 (G4HC)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.1 (G4HD)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  'getz': {
    'TB (2002–2011)': {
      '1.1 (G4HD)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.3 (G4EA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 (G4EE)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4ED)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.5 CRDi (D3EA/D4FA)':         S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
  },

  'i10': {
    'PA (2007–2013)': {
      '1.0/1.1 (G4HG/G4HD)':          S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
    'IA (2013–2019)': {
      '1.0/1.2 (G3LA/G4LA)':          S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  'i20': {
    'PB/GB дорест/рест (2008–2020)': {
      '1.2 (G4LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.1/1.4 CRDi (D3FA/D4FC)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'solaris': {
    '1 поколение дорест RB (2010–2014)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '1 поколение рест RB (2014–2017)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение дорест HC (2017–2020)': {
      '1.4 (G4LC)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение рест HC (2020–2023)': {
      '1.4 (G4LC)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение рест II HC (2023–н.в.)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  'accent / verna': {
    'LC/MC дорест/рест (2002–2012)': {
      '1.4 (G4EE)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.5 CRDi (D3EA)':              S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '1.6 (G4ED/G4EK)':              S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  'pony / excel': {
    'X2/X3 (1989–2000)': {
      '1.5 (G4DJ/G4AJ)':              S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.5 (G4EK)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  // ====== Седаны/хэтч (C/D) ======
  'elantra': {
    'HD (2006–2011)': {
      '1.6 (G4FC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    'MD/UD (2011–2015)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.8 (G4NB)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    'AD дорест/рест (2015–2020)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 T-GDI (G4FJ/N-Line)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    'CN7 (2020–н.в.)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 Hybrid (G4FP)':            S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '2.0 (G4NH)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 T-GDI (G4FJ/N Line)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
    },
  },

  'i30': {
    'FD (2007–2012)': {
      '1.4 (G4EE)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'GD дорест/рест (2012–2017)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'PD дорест/рест (2017–н.в.)': {
      '1.4 T-GDI (G4LD)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB/D4FE)':         S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'i40': {
    'VF (2011–2019)': {
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.7 CRDi (D4FD)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'sonata': {
    'NF (2004–2010)': {
      '2.0 (G4KA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.4 (G4KC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.3 V6 (G6DB)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4EA)':              S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'YF (2010–2014)': {
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 T-GDI (G4KH)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
    },
    'LF (2014–2019)': {
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
    },
    'DN8 дорест/рест (2019–н.в.)': {
      '2.0 (G4ND/G4NA)':              S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.5 (G4KM)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
      '1.6 T-GDI (G4FP)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.0 HEV (G4NA + e-motor)':     S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'grandeur (azera)': {
    'TG (2005–2011)': {
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.3 V6 (G6DB)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.8 V6 (G6DA)':                S(servicePresets.stage1_gt),
    },
    'HG (2011–2017)': {
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.0/3.3 V6 (G6DG/G6DB)':       S(servicePresets.stage1_gt),
    },
  },

  'coupe': {
    '1 поколение RD дорест/рест (1996–2001)': {
      '1.6 (G4GR)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (G4GM)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4GF)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  'tiburon': {
    '2 поколение GK (2001–2008)': {
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  // ====== Кроссоверы/SUV ======
  'creta': {
    '1 поколение дорест GS (2016–2020)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '1 поколение рест GS (2020–2021)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '2 поколение дорест SU2 (2021–2023)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '2 поколение рест SU2 (2023–н.в.)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
  },

  'tucson': {
    '1 поколение JM (2004–2009)': {
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4EA)':              S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    '2 поколение ix35 LM дорест (2010–2013)': {
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.4 (G4KE)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение ix35 LM рест (2013–2015)': {
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение TL дорест (2015–2018)': {
      '1.6 GDI (G4FD)':               S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение TL рест (2018–2020)': {
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '4 поколение NX4 (2020–н.в.)': {
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.5 (G4KM)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
      '2.0 CRDi (D4HE)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 T-GDI Hybrid (G4FP)':      S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'santa fe': {
    '2 поколение CM (2006–2012)': {
      '2.4 (G4JS/G4KE)':              S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.3 V6 (G6DB)':                S(servicePresets.diagECU, servicePresets.stage1_comфорт),
      '2.2 CRDi (D4EB/D4HB)':         S(servicePresets.stage1_turbo_hi, servicePresets.egr_off),
    },
    '3 поколение дорест DM (2012–2015)': {
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 T-GDI (G4KH)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение рест DM (2015–2018)': {
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 T-GDI (G4KH)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '4 поколение TM дорест (2018–2020)': {
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 T-GDI (G4KH)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '4 поколение TM рест (2020–2023)': {
      '2.5 (G4KM)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
      '1.6 T-GDI Hybrid (G4FP)':      S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '2.2 CRDi (D4HE, SCR)':         S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '5 поколение SX2 (2023–н.в.)': {
      '2.5 (G4KM)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
      '1.6 T-GDI Hybrid (G4FP)':      S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '2.2 CRDi (D4HE, SCR)':         S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'palisade': {
    'LX2 (2018–н.в.)': {
      '3.5 V6 (G6DU/G6DH)':           S(servicePresets.stage1_gt, servicePresets.trans_at8),
      '2.2 CRDi (D4HB/D4HE, SCR)':    S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'creta grand / alcazar': {
    'SU2 LWB (2021–н.в.)': {
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.5 CRDi (U2/D4FA)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'kona': {
    'OS дорест/рест (2017–2023)': {
      '1.6 T-GDI (G4FJ)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      'EV (электро)':                 S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
    'SX2 (2023–н.в.)': {
      '1.6 T-GDI (G4FJ)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      'EV (электро)':                 S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'bayon': {
    'BC3 (2021–н.в.)': {
      '1.0 T-GDI (G3LC MHEV)':        S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.2 (G4LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  'venue': {
    'QX (2019–н.в.)': {
      '1.6 (G4FG/G4FM)':              S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  'galloper': {
    'JK (1991–2004)': {
      '2.5 Diesel (D4BA/D4BH)':       S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '3.0 V6 (G6AT)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  // ====== LCV / MPV ======
  'staria': {
    'US4 (2021–н.в.)': {
      '3.5 V6 (G6DU)':                S(servicePresets.stage1_gt, servicePresets.trans_at8),
      '2.2 CRDi (D4HE, SCR)':         S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '3.5 LPi (L6DC)':               S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
    },
  },

  'starex (H-1) / grand starex': {
    'TQ дорест/рест (2007–2021)': {
      '2.5 CRDi (D4CB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.4 (G4JS/G4KE)':              S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  'porter / h100': {
    'A1/TQ (2004–н.в.)': {
      '2.5 CRDi (D4CB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'trajet': {
    'FO (1999–2008)': {
      '2.0 (G4JP)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4EA)':              S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
  },

  'matrix (lavita)': {
    'FC (2001–2010)': {
      '1.6 (G4ED)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (G4GB)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.5 CRDi (D3EA)':              S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
  },

  // ====== EV / HEV / PHEV ======
  'ioniq': {
    'AE (2016–2022)': {
      '1.6 GDI Hybrid (G4LE/G4FP)':   S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'PHEV 1.6 GDI (G4LE)':          S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'EV (электро)':                 S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'ioniq 5': {
    'NE (2021–н.в.)': {
      'Standard/Long RWD/AWD':        S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding),
      'N AWD':                        S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'ioniq 6': {
    'CE (2022–н.в.)': {
      'RWD/AWD':                      S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'kona electric': {
    'OS/SX2 (2018–н.в.)': {
      '39–64 kWh':                    S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  // ====== Представительский ======
  'equus': {
    '2 поколение VI (2009–2016)': {
      '3.8 V6 (G6DA)':                S(servicePresets.stage1_gt, servicePresets.trans_at8),
      '4.6 V8 (G8BA)':                S(servicePresets.stage1_extreme, servicePresets.trans_at8),
      '5.0 V8 (G8BB)':                S(servicePresets.stage1_extreme, servicePresets.trans_at8),
    },
  },

  // ====== Ссылки на семьи ======
  'santa fe classic': { 'см. Santa Fe CM/SM в зависимости от рынка': S() },
  'ix35':             { 'см. Tucson 2 поколение (LM)': S() },
  'verna':            { 'см. Accent соответствующего поколения': S() },
};