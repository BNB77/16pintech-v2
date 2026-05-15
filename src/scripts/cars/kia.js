export const servicePresets = {
  diagECU:           [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:      [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:         [{ name: 'Диагностика трансмиссии', description: 'AT/DCT/CVT', price: '2 500 ₽' }],
  stage1_basic:      [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_comfort:    [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:   [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '18 000 ₽' }],
  stage1_gt:         [{ name: 'Прошивка Stage 1', description: 'GT/GT-Line тюнинг', price: '22 000 ₽' }],
  stage1_performance:[{ name: 'Прошивка Stage 1', description: 'Performance/N-Line', price: '28 000 ₽' }],
  stage1_extreme:    [{ name: 'Прошивка Stage 1', description: 'Stinger GT/High Performance', price: '35 000 ₽' }],
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
  flaps_off:         [{ name: 'Отключение выхлопных клапанов', description: 'Flaps - заслонки впускного коллектора', price: '5 000 ₽' }],
  maf_off:           [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '4 000 ₽' }],
  tva_off:           [{ name: 'Отключение TVA', description: 'Tva - дросельная заслонка', price: '4 000 ₽' }],
  evap_off:          [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '5 000 ₽' }],
  sap_off:           [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '6 000 ₽' }],
  burbles:           [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:             [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:           [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '3 000 ₽' }],
  disconnect_sens:   [{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '2 000 ₽' }],
  battery_hv:        [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '5 000 ₽' }],
  hybrid_diag:       [{ name: 'Диагностика гибридной системы', description: 'HEV/PHEV инвертор/контроллер', price: '4 000 ₽' }],
  hybrid_cal:        [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '8 000 ₽' }],
  airbag_clear:      [{ name: 'Удаление ошибок Airbag', description: 'Очистка crash data', price: '4 000 ₽' }],
  immo_off:          [{ name: 'Отключение иммобилайзера', description: 'Удаление привязки ключа', price: '6 000 ₽' }],
  coding:            [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  cluster_correct:   [{ name: 'Корректировка пробега', description: 'Коррекция показаний одометра', price: '7 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const kiaData = {

  'rio': {
    '1 поколение дорест DC (2000–2002)': {
      '1.3 (A3E)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.5 (A5D)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
    '1 поколение рест DC (2002–2005)': {
      '1.3 (A3E)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.5 (A5D)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (A6D)':                    S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение дорест JB (2005–2009)': {
      '1.4 (G4EE)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4ED)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение рест JB (2009–2011)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '3 поколение дорест QB (2011–2015)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at4),
    },
    '3 поколение рест QB (2015–2017)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '4 поколение дорест FB (2017–2020)': {
      '1.4 (G4LC)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '4 поколение рест FB (2020–н.в.)': {
      '1.4 (G4LC)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
  },

  'ceed': {
    '1 поколение дорест ED (2006–2010)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение рест ED (2010–2012)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение дорест JD (2012–2015)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_dct),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение рест JD (2015–2018)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_dct),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение дорест CD (2018–2021)': {
      '1.4 T-GDI (G4LD)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.5 T-GDI (G4FL)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение рест CD (2021–н.в.)': {
      '1.4 T-GDI (G4LD)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.5 T-GDI (G4FL)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'sportage': {
    '1 поколение JA (1993–2006)': {
      '2.0 (FE)':                     S(servicePresets.diagECU, servicePresets.stage1_basic),
      '2.0 TD (RF)':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
    '2 поколение дорест KM (2004–2008)': {
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4EA)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение рест KM (2008–2010)': {
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4EA)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '3 поколение дорест SL (2010–2014)': {
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.4 (G4KE)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение рест SL (2014–2016)': {
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '4 поколение дорест QL (2016–2018)': {
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '4 поколение рест QL (2018–2021)': {
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '5 поколение NQ5 (2021–н.в.)': {
      '2.0 Smartstream (G4NH)':       S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.5 Smartstream (G4KM)':       S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.0 CRDi (D4HE)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'sorento': {
    '1 поколение дорест BL (2002–2006)': {
      '2.4 (G4JS)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.5 CRDi (D4CB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '3.3 V6 (G6DB)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.5 V6 (G6CU)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '1 поколение рест BL (2006–2009)': {
      '2.4 (G4JS)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.5 CRDi (D4CB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '3.3 V6 (G6DB)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.8 V6 (G6DA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение дорест XM (2009–2012)': {
      '2.4 (G4KE)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '3.5 V6 (G6DH)':                S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '2 поколение рест XM (2012–2015)': {
      '2.4 (G4KE)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 CRDi (D4HA)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '3.5 V6 (G6DH)':                S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '3 поколение дорест UM (2014–2017)': {
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_at6),
      '3.3 V6 (G6DP)':                S(servicePresets.stage1_gt, servicePresets.trans_at6),
    },
    '3 поколение рест UM (2017–2020)': {
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_at6),
      '3.3 V6 (G6DP)':                S(servicePresets.stage1_gt, servicePresets.trans_at8),
      '3.5 V6 (G6DH)':                S(servicePresets.stage1_gt, servicePresets.trans_at8),
    },
    '4 поколение дорест MQ4 (2020–2023)': {
      '2.5 Smartstream (G4KM)':       S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
      '2.2 CRDi (D4HE)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_dct),
      '3.5 V6 Lambda (G6DH)':         S(servicePresets.stage1_gt, servicePresets.trans_at8),
      '1.6 T-GDI Hybrid (G4FJ)':      S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '4 поколение рест MQ4 (2023–н.в.)': {
      '2.5 Smartstream (G4KM)':       S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
      '2.2 CRDi (D4HE)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_dct),
      '3.5 V6 Lambda (G6DH)':         S(servicePresets.stage1_gt, servicePresets.trans_at8),
      '1.6 T-GDI Hybrid (G4FJ)':      S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'cerato': {
    '1 поколение дорест LD (2004–2007)': {
      '1.6 (G4ED)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '1 поколение рест LD (2007–2009)': {
      '1.6 (G4ED)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение дорест TD (2009–2010)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at4),
    },
    '2 поколение рест 1 TD (2010–2011)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '2 поколение рест 2 TD (2011–2013)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '3 поколение дорест YD (2013–2016)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '3 поколение рест YD (2016–2020)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '4 поколение дорест BD (2018–2021)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 MPI (G4NA)':               S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
    },
    '4 поколение рест BD (2021–н.в.)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 MPI (G4NA)':               S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
    },
  },

  'soul': {
    '1 поколение дорест AM (2008–2011)': {
      '1.6 (G4FC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение рест AM (2011–2014)': {
      '1.6 GDI (G4FD)':               S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение дорест PS (2013–2016)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_dct),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение рест PS (2017–2019)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_dct),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 T-GDI (G4FJ) 204 л.с.':    S(servicePresets.stage1_gt, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение дорест SK3 (2019–2022)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4NH)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
    },
    '3 поколение рест SK3 (2022–н.в.)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4NH)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
    },
  },

  'stinger': {
    '1 поколение дорест CK (2017–2020)': {
      '2.0 T-GDI (G4KH) 255 л.с.':    S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      '3.3 V6 T-GDI (G6DP) 370 л.с.': S(servicePresets.stage1_extreme, servicePresets.trans_at8, servicePresets.gpf_off, servicePresets.burbles),
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение рест CK (2020–2023)': {
      '2.0 T-GDI (G4KH) 247 л.с.':    S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      '2.5 T-GDI (Smartstream) 304 л.с.': S(servicePresets.stage1_performance, servicePresets.trans_at8, servicePresets.gpf_off, servicePresets.burbles),
      '3.3 V6 T-GDI (G6DP) 370 л.с.': S(servicePresets.stage1_extreme, servicePresets.trans_at8, servicePresets.gpf_off, servicePresets.burbles),
    },
  },

  'seltos': {
    '1 поколение дорест SP2 (2019–2023)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4NH)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
    },
    '1 поколение рест SP2 (2023–н.в.)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4NH)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
    },
  },

  'carnival': {
    '1 поколение UP (1998–2006)': {
      '2.5 V6 (K5)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.9 CRDi (J3)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
    '2 поколение дорест VQ (2006–2010)': {
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.5 V6 (G6CU)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение рест VQ (2010–2014)': {
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.5 V6 (G6CU)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '3 поколение дорест YP (2014–2018)': {
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_at6),
      '3.3 V6 (G6DP)':                S(servicePresets.stage1_gt, servicePresets.trans_at6),
    },
    '3 поколение рест YP (2018–2020)': {
      '2.2 CRDi (D4HB)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_at8),
      '3.3 V6 (G6DP)':                S(servicePresets.stage1_gt, servicePresets.trans_at8),
    },
    '4 поколение KA4 (2020–н.в.)': {
      '2.2 CRDi (D4HE)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_at8),
      '3.5 V6 Lambda (G6DH)':         S(servicePresets.stage1_gt, servicePresets.trans_at8),
    },
  },

  'mohave': {
    '1 поколение дорест HM (2008–2013)': {
      '3.0 V6 CRDi (J3)':             S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '3.8 V6 (G6DA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '1 поколение рест HM (2013–2019)': {
      '3.0 V6 CRDi (J3)':             S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '3.8 V6 (G6DA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    '1 поколение рест 2 HM (2019–н.в.)': {
      '3.0 V6 CRDi (J3)':             S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '3.8 V6 (G6DA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
    },
  },

  'stonic': {
    '1 поколение дорест YB (2017–2020)': {
      '1.4 (G4LC)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.0 T-GDI (G3LC)':             S(servicePresets.stage1_turbo, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение рест YB (2020–н.в.)': {
      '1.0 T-GDI (G3LC)':             S(servicePresets.stage1_turbo, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.4 T-GDI (G4LD)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'ev6': {
    '1 поколение CV (2021–н.в.)': {
      'Light/Standard RWD':           S(servicePresets.battery_hv, servicePresets.diagECU_plus),
      'Long Range AWD':               S(servicePresets.battery_hv, servicePresets.diagECU_plus),
      'GT-Line AWD':                  S(servicePresets.battery_hv, servicePresets.diagECU_plus),
      'GT AWD':                       S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'niro': {
    '1 поколение дорест DE (2016–2019)': {
      '1.6 GDI Hybrid (G4LE)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '1.6 GDI PHEV (G4LE)':          S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'EV (электро)':                 S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
    '1 поколение рест DE (2019–2022)': {
      '1.6 GDI Hybrid (G4LE)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '1.6 GDI PHEV (G4LE)':          S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'EV (электро)':                 S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
    '2 поколение SG2 (2022–н.в.)': {
      '1.6 GDI Hybrid (G4LE)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '1.6 T-GDI PHEV':               S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'EV (электро)':                 S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'picanto': {
    '1 поколение дорест SA (2004–2007)': {
      '1.0 (G4HE)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.1 (G4HG)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
    '1 поколение рест SA (2007–2011)': {
      '1.0 (G4HE)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.1 (G4HG)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
    '2 поколение дорест TA (2011–2015)': {
      '1.0 (G3LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (G4LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
    '2 поколение рест TA (2015–2017)': {
      '1.0 (G3LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (G4LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
    '3 поколение дорест JA (2017–2020)': {
      '1.0 (G3LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (G4LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
    '3 поколение рест JA (2020–н.в.)': {
      '1.0 (G3LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (G4LA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  'k5': {
    'Optima 1 поколение MS (2000–2005)': {
      '2.0 (G4JP)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.5 V6 (G6BV)':                S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    'Optima 2 поколение дорест MG (2005–2008)': {
      '2.0 (G4KA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at4),
      '2.4 (G4KE)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at4),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at4),
    },
    'Optima 2 поколение рест MG (2008–2010)': {
      '2.0 (G4KA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.4 (G4KE)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.7 V6 (G6BA)':                S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
    },
    'Optima 3 поколение дорест TF (2010–2013)': {
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 T-GDI (G4KH)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
    },
    'Optima 3 поколение рест TF (2013–2015)': {
      '2.0 (G4KD)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 T-GDI (G4KH)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
    },
    'Optima 4 поколение дорест JF (2015–2018)': {
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 T-GDI (G4KH)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
    },
    'Optima 4 поколение рест JF (2018–2020)': {
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.4 (G4KJ)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 T-GDI (G4KH)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
    },
    'K5 5 поколение дорест DL3 (2020–2023)': {
      '2.0 MPI (G4NH)':               S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.5 GDI (G4KM)':               S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.5 T-GDI (Smartstream)':      S(servicePresets.stage1_performance, servicePresets.trans_at8, servicePresets.gpf_off),
    },
    'K5 5 поколение рест DL3 (2023–н.в.)': {
      '2.5 GDI (G4KM)':               S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at8),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '2.5 T-GDI (Smartstream)':      S(servicePresets.stage1_performance, servicePresets.trans_at8, servicePresets.gpf_off),
    },
  },

  'proceed': {
    '1 поколение ED (2008–2013)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (G4GC)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение дорест JD (2013–2016)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_dct),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение рест JD (2016–2018)': {
      '1.0 T-GDI (G3LC)':             S(servicePresets.stage1_turbo, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.4 T-GDI (G4LD)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_dct),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение дорест CD (2019–2021)': {
      '1.4 T-GDI (G4LD)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение рест CD (2021–н.в.)': {
      '1.5 T-GDI (G4FL)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'xceed': {
    '1 поколение дорест CD (2019–2022)': {
      '1.0 T-GDI (G3LC)':             S(servicePresets.stage1_turbo, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.4 T-GDI (G4LD)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 GDI PHEV':                 S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '1 поколение рест CD (2022–н.в.)': {
      '1.5 T-GDI (G4FL)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 GDI PHEV':                 S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'carens': {
    '1 поколение FC (1999–2006)': {
      '1.8 (T8)':                     S(servicePresets.diagECU, servicePresets.stage1_basic),
      '2.0 (FE)':                     S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    '2 поколение дорест UN (2006–2010)': {
      '2.0 (G4KA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4EA)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение рест UN (2010–2013)': {
      '2.0 (G4KA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 CRDi (D4EA)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение RP (2013–2018)': {
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.0 (G4NA)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '1.7 CRDi (D4FD)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '4 поколение KY (2022–н.в.)': {
      '1.5 T-GDI (G4FL)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
      '1.6 T-GDI (G4FJ)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_dct, servicePresets.gpf_off),
    },
  },

  'venga': {
    '1 поколение дорест YN (2009–2014)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение рест YN (2014–2019)': {
      '1.4 (G4FA)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (G4FG)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 CRDi (D4FB)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'optima':         { 'см. K5': S() },
  'forte':          { 'см. Cerato/K3': S() },
  'rio x':          { 'см. Rio X-Line соответствующего поколения': S() },
  'ceed sw':        { 'см. Ceed SW соответствующего поколения': S() },
  'sportage gt-line': { 'см. Sportage соответствующего поколения': S() },
  'sorento prime':  { 'см. Sorento 3 поколение': S() },
};