
export const servicePresets = {
  diagECU:           [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '4 500 ₽' }],
  diagECU_plus:      [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '6 000 ₽' }],
  diagTrans:         [{ name: 'Диагностика трансмиссии', description: 'AT/DCT/CVT', price: '5 500 ₽' }],
  stage1_basic:      [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмосферного ДВС', price: '8 000 ₽' }],
  stage1_comfort:    [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 500 ₽' }],
  stage1_turbo_hi:   [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '15 000 ₽' }],
  stage1_gt:         [{ name: 'Прошивка Stage 1', description: 'Polestar/GT тюнинг', price: '18 000 ₽' }],
  stage1_performance:[{ name: 'Прошивка Stage 1', description: 'Performance/Recharge', price: '22 000 ₽' }],
  stage1_extreme:    [{ name: 'Прошивка Stage 1', description: 'High Performance / V8', price: '30 000 ₽' }],
  trans_at4:         [{ name: 'Настройка AT', description: 'Калибровка 4-ст автомата', price: '8 500 ₽' }],
  trans_at6:         [{ name: 'Настройка AT', description: 'Калибровка 6-ст автомата', price: '10 000 ₽' }],
  trans_at8:         [{ name: 'Настройка AT', description: 'Калибровка 8-ст автомата', price: '12 000 ₽' }],
  trans_dct:         [{ name: 'Настройка DCT', description: 'Настройка робота Powershift/DCT', price: '13 500 ₽' }],
  egr_off:           [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '6 000 ₽' }],
  dpf_off:           [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '8 000 ₽' }],
  dpf_off_adblue:    [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '10 000 ₽' }],
  gpf_off:           [{ name: 'Удаление GPF/OPF', description: 'Бензиновый фильтр частиц', price: '8 000 ₽' }],
  adblue_off:        [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '7 000 ₽' }],
  vmax_off:          [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка максимальной скорости', price: '5 000 ₽' }],
  flaps_off:         [{ name: 'Отключение заслонок выхлопа', description: 'Flaps / заслонки впуска/выпуска', price: '4 000 ₽' }],
  maf_off:           [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '3 500 ₽' }],
  tva_off:           [{ name: 'Отключение TVA', description: 'Дроссельная заслонка', price: '3 500 ₽' }],
  evap_off:          [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '4 500 ₽' }],
  sap_off:           [{ name: 'Отключение SAP', description: 'Вторичный воздух', price: '5 000 ₽' }],
  burbles:           [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '7 000 ₽' }],
  euro2:             [{ name: 'Прошивка на Евро 2', description: 'Отключение экосистем', price: '10 000 ₽' }],
  dtc_off:           [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '2 500 ₽' }],
  disconnect_sens:   [{ name: 'Disconnect Sensors', description: 'Снятие разъемов с отключаемых систем', price: '2 500 ₽' }],
  battery_hv:        [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '8 000 ₽' }],
  hybrid_diag:       [{ name: 'Диагностика гибридной системы', description: 'HEV/PHEV инвертор/контроллер', price: '6 000 ₽' }],
  hybrid_cal:        [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '10 000 ₽' }],
  airbag_clear:      [{ name: 'Удаление ошибок Airbag', description: 'Очистка crash data', price: '5 000 ₽' }],
  immo_off:          [{ name: 'Отключение иммобилайзера', description: 'Удаление привязки ключа', price: '6 000 ₽' }],
  coding:            [{ name: 'Кодирование функций', description: 'Раскодировка/активация опций', price: '5 500 ₽' }],
};

// ===== Хелпер =====
export const S = (...sets) => sets.flat();

// ===== Каталог Volvo =====
export const volvoData = {

  // ——— Ретро/классика 200-серии ———
  '260': {
    '1 поколение (1974–1982)': {
      '2.7 V6 PRV (B27)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
    'рестайлинг (1982–1985)': {
      '2.8 V6 PRV (B28)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  '340': {
    'дорест/рест (1976–1991)': {
      '1.4 бензин (B14)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.7 бензин (B172/F)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  '343': {
    'дорест/рест (1976–1982)': {
      '1.4 бензин (B14)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  '345': {
    'дорест/рест (1979–1986)': {
      '1.4 бензин (B14)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  '360': {
    'дорест/рест (1982–1991)': {
      '2.0 бензин (B200)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '2.0 инжектор (B200E)':                S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  '440': {
    'дорест/рест (1988–1996)': {
      '1.7 бензин/турбо (B18U/B18FT)':       S(servicePresets.stage1_turbo, servicePresets.trans_at4),
      '2.0 бензин (B20F)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.9 TD дизель (F8Q)':                 S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
  },

  '460': {
    'дорест/рест (1988–1996)': {
      '1.7 бензин/турбо (B18U/B18FT)':       S(servicePresets.stage1_turbo, servicePresets.trans_at4),
      '2.0 бензин (B20F)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.9 TD дизель (F8Q)':                 S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
  },

  '480': {
    'дорест/рест (1986–1995)': {
      '1.7 турбо (B18FT)':                   S(servicePresets.stage1_turbo, servicePresets.trans_at4),
      '2.0 бензин (B20F)':                   S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  // ——— 800/900/850/960 ———
  '850': {
    'дорест/рест (1991–1997)': {
      '2.0/2.5 бензин (B5204/B5254)':        S(servicePresets.diagECU, servicePresets.stage1_basic),
      '2.3 T5 турбо (B5234T)':               S(servicePresets.stage1_turbo, servicePresets.trans_at4),
      '2.5 TDI дизель (D5252T)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      'R 2.3 Turbo (B5234T5/T6)':            S(servicePresets.stage1_gt, servicePresets.trans_at4),
    },
  },

  '960': {
    '1 поколение (1990–1994)': {
      '2.5/3.0 бензин (B6254/B6304)':        S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
    'рест (1994–1998)': {
      '2.5/2.9 бензин (B6254/B6304)':        S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  // ——— Компактные хэтч/купе ———
  'c30': {
    '1 поколение (2006–2013)': {
      '1.6/1.8/2.0 бензин (B4164/B4184/B4204)':  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '2.5T (B5254T) T5':                        S(servicePresets.stage1_turbo, servicePresets.trans_at5),
      '1.6D/2.0D (D4164T/D4204T)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
  },

  'c40': {
    'Recharge (2021–н.в.)': {
      'EV Single/Dual Motor':                    S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'c70': {
    '2 поколение (2005–2013)': {
      '2.4/2.5T бензин (B5244S/B5254T)':         S(servicePresets.stage1_turbo, servicePresets.trans_at5),
      'D5 дизель (D5244T)':                      S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
  },

  // ——— S-серия ———
  's40': {
    '2 поколение (2004–2012)': {
      '1.8/2.0 бензин (B4184S/B4204S)':         S(servicePresets.diagECU, servicePresets.stage1_basic),
      '2.5T (B5254T)':                          S(servicePresets.stage1_turbo, servicePresets.trans_at5),
      '2.0D дизель (D4204T)':                   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Powershift (робот)':                      S(servicePresets.trans_dct),
    },
  },

  's60': {
    '1 поколение дорест/рест (2000–2009)': {
      '2.4 (B5244) бензин':                     S(servicePresets.diagECU, servicePresets.stage1_basic),
      '2.5T (B5254T) бензин турбо':             S(servicePresets.stage1_turbo, servicePresets.trans_at5),
      '2.4D / D5 (D5244T) дизель':              S(servicePresets.stage1_turbo, servicePresets.dpf_off),
      'R 2.5 T5/T6':                             S(servicePresets.stage1_gt, servicePresets.trans_at5),
    },
    '2 поколение дорест (2010–2013)': {
      'T5 2.0 (B4204T)':                        S(servicePresets.stage1_turbo, servicePresets.trans_at6),
      'T6 3.0 (B6304T)':                        S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6),
      'D3/D4 2.0 (D5204T/D4204T)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение рест (2014–2018)': {
      'T5/T6 2.0 (B4204T)':                     S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8),
      'D4 2.0 (D4204T)':                        S(servicePresets.stage1_turbo, servicePresets.dpf_off),
      'Polestar (T6)':                           S(servicePresets.stage1_gt, servicePresets.trans_at8, servicePresets.gpf_off),
    },
    '3 поколение (2018–н.в.)': {
      'T5/T6 2.0 (B4204T)':                     S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      'B4/B5 (мягкий гибрид)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      'T8 Recharge PHEV':                       S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  's70': {
    '1 поколение (1996–2000)': {
      '2.4/2.5 бензин (B5244/B5254)':          S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.4T/2.5T бензин':                       S(servicePresets.stage1_turbo, servicePresets.trans_at4),
      '2.5 TDI дизель (D5252T)':                S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
  },

  's80': {
    '1 поколение (1998–2006)': {
      '2.4/2.9 бензин (B5244/B6294)':          S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.8 T6 (B6284T)':                        S(servicePresets.stage1_turbo_hi, servicePresets.trans_at4),
      'D5 (D5244T)':                             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    '2 поколение (2006–2016)': {
      '3.2 (B6324S) бензин':                    S(servicePresets.stage1_comfort, servicePresets.trans_at6),
      'T6 3.0 (B6304T)':                        S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6),
      'V8 4.4 (B8444S)':                        S(servicePresets.stage1_extreme, servicePresets.trans_at6),
      'D3/D4/D5 (D5204T/D5244T)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
  },

  's90': {
    '1 поколение (2016–н.в.)': {
      'T5/T6 2.0 (B4204T)':                     S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      'B4/B5 (48В)':                            S(servicePresets.diagECU, servicePresets.stage1_comfort),
      'D4/D5 2.0 (D4204T)':                      S(servicePresets.stage1_turbo, servicePresets.dpf_off),
      'T8 Recharge PHEV':                       S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  // ——— V-серия ———
  'v40': {
    '1 поколение (1995–2004)': {
      '1.8/2.0 бензин (B4204)':                S(servicePresets.diagECU, servicePresets.stage1_basic),
      '2.0T/2.5T бензин':                       S(servicePresets.stage1_turbo, servicePresets.trans_at4),
      '1.9D дизель (F9Q/D4192T)':               S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    '2 поколение (2012–2019)': {
      'T3/T4/T5 1.5–2.0 (B3154T/B4204T)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
      'D2/D3/D4 (D4162T/D4204T)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off),
      'Powershift/двойной сцепление':          S(servicePresets.trans_dct),
    },
  },

  'v50': {
    '1 поколение (2004–2012)': {
      '1.8/2.0 бензин (B4184S/B4204S)':        S(servicePresets.diagECU, servicePresets.stage1_basic),
      '2.5T (B5254T)':                          S(servicePresets.stage1_turbo, servicePresets.trans_at5),
      '2.0D дизель (D4204T)':                   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Powershift (робот)':                      S(servicePresets.trans_dct),
    },
  },

  'v60': {
    '1 поколение (2010–2018)': {
      'T5/T6 2.0 (B4204T)':                     S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8),
      'D3/D4 2.0 (D4204T)':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off),
      'Polestar T6':                             S(servicePresets.stage1_gt, servicePresets.trans_at8),
    },
    '2 поколение (2018–н.в.)': {
      'T5/T6 2.0 (B4204T)':                     S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      'B4/B5 (48В)':                            S(servicePresets.diagECU, servicePresets.stage1_comfort),
      'T8 Recharge PHEV':                       S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'v70': {
    '2 поколение (2000–2007)': {
      '2.4/2.5 бензин':                          S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.5T бензин турбо':                        S(servicePresets.stage1_turbo, servicePresets.trans_at5),
      'D5 дизель (D5244T)':                       S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
    '3 поколение (2007–2016)': {
      '3.2 (B6324S)':                             S(servicePresets.stage1_comfort, servicePresets.trans_at6),
      'T6 3.0 (B6304T)':                          S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6),
      'D3/D4/D5 (D5244T/D5204T)':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
  },

  'v90': {
    '1 поколение (2016–н.в.)': {
      'T5/T6 2.0 (B4204T)':                      S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      'B4/B5 (48В)':                             S(servicePresets.diagECU, servicePresets.stage1_comfort),
      'D4/D5 2.0 (D4204T)':                       S(servicePresets.stage1_turbo, servicePresets.dpf_off),
      'T8 Recharge PHEV':                        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  // ——— XC-серия ———
  'xc40': {
    'дорест/рест (2017–н.в.)': {
      'T3/T4/T5 1.5–2.0 бензин (B3154T/B4204T)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      'D3/D4 2.0 дизель (D4204T)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off),
      'Recharge (PHEV/EV)':                      S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'xc60': {
    '1 поколение (2008–2017)': {
      'T5 2.0 (B4204T)':                          S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6),
      'T6 3.0 (B6304T)':                          S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6),
      'D4/D5 (D5244T/D4204T)':                    S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
    '2 поколение (2017–н.в.)': {
      'T5/T6 2.0 (B4204T)':                       S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      'B4/B5 (48В)':                              S(servicePresets.diagECU, servicePresets.stage1_comfort),
      'T8 Recharge PHEV':                         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'D4/D5 2.0 (D4204T)':                        S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
  },

  'xc70': {
    '2 поколение (2000–2007)': {
      '2.4/2.5 бензин/турбо':                     S(servicePresets.diagECU, servicePresets.stage1_comfort),
      'D5 дизель (D5244T)':                        S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
    '3 поколение (2007–2016)': {
      '3.2 (B6324S)':                              S(servicePresets.stage1_comfort, servicePresets.trans_at6),
      'T6 3.0 (B6304T)':                           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6),
      'D3/D4/D5 (D5244T/D5204T)':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
  },

  'xc90': {
    '1 поколение (2002–2014)': {
      '2.5T (B5254T)':                              S(servicePresets.stage1_turbo, servicePresets.trans_at5),
      '3.2 (B6324S)':                               S(servicePresets.stage1_comfort, servicePresets.trans_at6),
      'V8 4.4 (B8444S)':                            S(servicePresets.stage1_extreme, servicePresets.trans_at6),
      'D5 (D5244T)':                                S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
    '2 поколение (2015–н.в.)': {
      'T5/T6 2.0 (B4204T)':                         S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      'B5/B6 (48В)':                                S(servicePresets.diagECU, servicePresets.stage1_comfort),
      'T8 Recharge PHEV':                           S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'D4/D5 2.0 (D4204T)':                          S(servicePresets.stage1_turbo, servicePresets.dpf_off),
    },
  },

  // ——— Новые EV/MPV ———
  'ex30': {
    '1 поколение (2023–н.в.)': {
      'EV (Single/Dual Motor)':                     S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'ex90': {
    '1 поколение (2024–н.в.)': {
      'EV (Twin Motor)':                            S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'em90': {
    '1 поколение (2023–н.в.)': {
      'EV (MPV)':                                    S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'es90': {
    'анонс/ожидание': {
      'EV (седан)':                                  S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding),
    },
  },
};