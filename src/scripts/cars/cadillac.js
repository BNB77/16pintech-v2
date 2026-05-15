export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: '6L80/8L90/10L90 Hydra-Matic', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '18 000 ₽' }],
  stage1_v_series:[{ name: 'Прошивка Stage 1', description: 'V-Series тюнинг', price: '22 000 ₽' }],
  stage1_v_high:  [{ name: 'Прошивка Stage 1', description: 'V-Series высокой мощности', price: '28 000 ₽' }],
  stage1_blackwing:[{ name: 'Прошивка Stage 1', description: 'V-Series Blackwing', price: '35 000 ₽' }],
  trans_6l80:     [{ name: 'Настройка 6L80', description: 'Калибровка 6-ст автомата', price: '10 000 ₽' }],
  trans_8l90:     [{ name: 'Настройка 8L90', description: 'Калибровка 8-ст автомата', price: '12 000 ₽' }],
  trans_10l90:    [{ name: 'Настройка 10L90', description: 'Калибровка 10-ст автомата', price: '15 000 ₽' }],
  trans_performance:[{ name: 'Настройка Performance АКПП', description: 'V-Series трансмиссия', price: '18 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '9 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + DEF', description: 'DPF + система DEF (мочевина)', price: '11 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  def_off:        [{ name: 'Отключение DEF (SCR)', description: 'Удаление системы DEF', price: '8 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Speed Limiter - разблокировка', price: '6 000 ₽' }],
  afm_dod_off:    [{ name: 'Отключение AFM/DOD', description: 'Active Fuel Management', price: '8 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '4 000 ₽' }],
  tps_off:        [{ name: 'Отключение TPS', description: 'Tps - датчик положения дросселя', price: '4 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '5 000 ₽' }],
  air_off:        [{ name: 'Отключение AIR', description: 'Secondary Air - вторичный воздух', price: '6 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '3 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '2 000 ₽' }],
  magnetic_ride:  [{ name: 'Диагностика Magnetic Ride', description: 'Магнитная подвеска', price: '4 000 ₽' }],
  air_suspension: [{ name: 'Диагностика Air Ride', description: 'Пневмоподвеска', price: '4 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  v_series_mode:  [{ name: 'Активация V-Series режимов', description: 'Раскодировка V-функций', price: '7 000 ₽' }],
  start_stop_off: [{ name: 'Отключение Start-Stop', description: 'Система старт-стоп', price: '4 000 ₽' }],
  flex_fuel:      [{ name: 'Калибровка FlexFuel', description: 'E85 этанол настройка', price: '10 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const cadillacData = {

  'escalade': {
    '1 поколение GMT435 (1999–2000)': {
      '5.7 V8 (L31)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80, servicePresets.vmax_off),
    },
    '2 поколение GMT800 дорест (2001–2002)': {
      '5.3 V8 (LM7)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80, servicePresets.afm_dod_off),
      '6.0 V8 (LQ9)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80, servicePresets.vmax_off),
    },
    '2 поколение GMT800 FL (2003–2006)': {
      '5.3 V8 (LM7)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80, servicePresets.afm_dod_off),
      '6.0 V8 (LQ9)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80, servicePresets.vmax_off),
    },
    '3 поколение GMT900 дорест (2007–2010)': {
      '6.2 V8 (L92/L94)':             S(servicePresets.stage1_na, servicePresets.trans_6l80, servicePresets.afm_dod_off, servicePresets.vmax_off),
      '6.0 Hybrid (LFA)':             S(servicePresets.stage1_na, servicePresets.diagECU_plus),
    },
    '3 поколение GMT900 FL (2011–2014)': {
      '6.2 V8 (L92/L94)':             S(servicePresets.stage1_na, servicePresets.trans_6l80, servicePresets.afm_dod_off, servicePresets.vmax_off),
    },
    '4 поколение GMT K2 дорест (2014–2016)': {
      '6.2 V8 (L86)':                 S(servicePresets.stage1_na, servicePresets.trans_8l90, servicePresets.afm_dod_off, servicePresets.vmax_off),
    },
    '4 поколение GMT K2 FL (2017–2020)': {
      '6.2 V8 (L86)':                 S(servicePresets.stage1_na, servicePresets.trans_8l90, servicePresets.afm_dod_off, servicePresets.vmax_off),
    },
    '5 поколение GMT1XX дорест (2020–2024)': {
      '3.0 Turbo Diesel (LM2)':       S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_10l90),
      '6.2 V8 (L87)':                 S(servicePresets.stage1_na, servicePresets.trans_10l90, servicePresets.afm_dod_off, servicePresets.vmax_off),
    },
    '5 поколение GMT1XX FL (2024–н.в.)': {
      '3.0 Turbo Diesel (LM2)':       S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_10l90),
      '6.2 V8 (L87)':                 S(servicePresets.stage1_na, servicePresets.trans_10l90, servicePresets.afm_dod_off, servicePresets.vmax_off),
    },
  },

  'cts': {
    '1 поколение дорест (2002–2005)': {
      '2.6 V6 (LA1)':                 S(servicePresets.stage1_basic, servicePresets.diagECU),
      '3.2 V6 (LA3)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.6 V6 (LY7)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80),
      'CTS-V 5.7 V8 (LS6)':           S(servicePresets.stage1_v_series, servicePresets.trans_performance),
    },
    '1 поколение FL (2005–2007)': {
      '2.8 V6 (LP1)':                 S(servicePresets.stage1_basic, servicePresets.diagECU),
      '3.6 V6 (LY7)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80),
      'CTS-V 6.0 V8 (LS2)':           S(servicePresets.stage1_v_series, servicePresets.trans_performance),
    },
    '2 поколение дорест (2008–2010)': {
      '2.8/3.0/3.6 V6 (LY7/LFW)':     S(servicePresets.stage1_na, servicePresets.trans_6l80),
      'CTS-V 6.2 V8 Supercharged (LSA)': S(servicePresets.stage1_v_high, servicePresets.trans_performance),
    },
    '2 поколение FL (2010–2014)': {
      '2.0 Turbo (LNF)':              S(servicePresets.stage1_turbo, servicePresets.trans_6l80),
      '3.0/3.6 V6 (LFW/LFX)':         S(servicePresets.stage1_na, servicePresets.trans_6l80),
      'CTS-V 6.2 V8 Supercharged (LSA)': S(servicePresets.stage1_v_high, servicePresets.trans_performance),
    },
    '3 поколение (2013–2019)': {
      '2.0 Turbo (LTG)':              S(servicePresets.stage1_turbo, servicePresets.trans_8l90),
      '3.6 V6 Twin-Turbo (LF3/LF4)':  S(servicePresets.stage1_turbo_hi, servicePresets.trans_8l90),
      'CTS-V 6.2 V8 Supercharged (LT4)': S(servicePresets.stage1_blackwing, servicePresets.trans_performance, servicePresets.vmax_off),
    },
  },

  'sts': {
    '1 поколение дорест (2004–2007)': {
      '3.6 V6 (LY7)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.6 V8 (LH2)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80),
      'STS-V 4.4 V8 Supercharged (LC3)': S(servicePresets.stage1_v_series, servicePresets.trans_performance),
    },
    '1 поколение FL (2007–2011)': {
      '3.6 V6 (LY7)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.6 V8 (LH2)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80),
      'STS-V 4.4 V8 Supercharged (LC3)': S(servicePresets.stage1_v_series, servicePresets.trans_performance),
    },
  },

  'ats': {
    '1 поколение дорест (2012–2014)': {
      '2.0 Turbo (LTG)':              S(servicePresets.stage1_turbo, servicePresets.trans_8l90),
      '2.5 (LCV)':                    S(servicePresets.stage1_basic, servicePresets.diagECU),
      '3.6 V6 (LFX)':                 S(servicePresets.stage1_na, servicePresets.trans_8l90),
      'ATS-V 3.6 V6 Twin-Turbo (LF4)': S(servicePresets.stage1_v_high, servicePresets.trans_performance),
    },
    '1 поколение FL (2014–2019)': {
      '2.0 Turbo (LTG)':              S(servicePresets.stage1_turbo, servicePresets.trans_8l90),
      '2.5 (LCV)':                    S(servicePresets.stage1_basic, servicePresets.diagECU),
      '3.6 V6 (LFX)':                 S(servicePresets.stage1_na, servicePresets.trans_8l90),
      'ATS-V 3.6 V6 Twin-Turbo (LF4)': S(servicePresets.stage1_v_high, servicePresets.trans_performance),
    },
  },

  'ct4': {
    '1 поколение (2019–н.в.)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_10l90, servicePresets.gpf_off),
      '2.7 Turbo (L3B)':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10l90, servicePresets.gpf_off),
      'CT4-V 2.7 Turbo (L3B)':        S(servicePresets.stage1_v_series, servicePresets.trans_10l90, servicePresets.gpf_off),
      'CT4-V Blackwing 3.6 TT (LF4)': S(servicePresets.stage1_blackwing, servicePresets.trans_performance, servicePresets.vmax_off),
    },
  },

  'ct5': {
    '1 поколение дорест (2019–2023)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_10l90, servicePresets.gpf_off),
      '3.0 V6 Twin-Turbo (LGY)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_10l90, servicePresets.gpf_off),
      'CT5-V 3.0 TT (LGY)':           S(servicePresets.stage1_v_series, servicePresets.trans_10l90, servicePresets.gpf_off),
      'CT5-V Blackwing 6.2 SC (LT4)': S(servicePresets.stage1_blackwing, servicePresets.trans_performance, servicePresets.vmax_off),
    },
    '1 поколение FL (2023–н.в.)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_10l90, servicePresets.gpf_off),
      '3.0 V6 Twin-Turbo (LGY)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_10l90, servicePresets.gpf_off),
      'CT5-V 3.0 TT (LGY)':           S(servicePresets.stage1_v_series, servicePresets.trans_10l90, servicePresets.gpf_off),
      'CT5-V Blackwing 6.2 SC (LT4)': S(servicePresets.stage1_blackwing, servicePresets.trans_performance, servicePresets.vmax_off),
    },
  },

  'ct6': {
    '1 поколение дорест (2016–2020)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_10l90),
      '3.0 V6 Twin-Turbo (LGW)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_10l90),
      '3.6 V6 (LGX)':                 S(servicePresets.stage1_na, servicePresets.trans_8l90),
      'CT6-V 4.2 V8 Twin-Turbo (LTA)': S(servicePresets.stage1_blackwing, servicePresets.trans_10l90, servicePresets.vmax_off),
    },
    '1 поколение FL (2020–н.в.) (Китай)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_10l90, servicePresets.gpf_off),
    },
  },

  'srx': {
    '1 поколение (2003–2009)': {
      '3.6 V6 (LY7)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.6 V8 (LH2)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80),
    },
    '2 поколение дорест (2009–2012)': {
      '2.8 Turbo (LE9)':              S(servicePresets.stage1_turbo, servicePresets.trans_6l80),
      '3.0 V6 (LF1)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80),
      '3.6 V6 (LFX)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80),
    },
    '2 поколение FL (2012–2016)': {
      '3.6 V6 (LFX)':                 S(servicePresets.stage1_na, servicePresets.trans_6l80),
    },
  },

  'xt4': {
    '1 поколение дорест (2018–2023)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_9l90, servicePresets.gpf_off),
    },
    '1 поколение FL (2023–н.в.)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_9l90, servicePresets.gpf_off),
    },
  },

  'xt5': {
    '1 поколение дорест (2016–2019)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_8l90),
      '3.6 V6 (LGX)':                 S(servicePresets.stage1_na, servicePresets.trans_8l90),
    },
    '1 поколение FL (2019–2024)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_9l90, servicePresets.gpf_off),
      '3.6 V6 (LGX)':                 S(servicePresets.stage1_na, servicePresets.trans_9l90),
    },
    '2 поколение (2024–н.в.) (Китай)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_9l90, servicePresets.gpf_off),
    },
  },

  'xt6': {
    '1 поколение (2019–н.в.)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_9l90, servicePresets.gpf_off),
      '3.6 V6 (LGX)':                 S(servicePresets.stage1_na, servicePresets.trans_9l90),
    },
  },

  'lyriq': {
    '1 поколение (2020–н.в.)': {
      'RWD Electric (Ultium)':        S(servicePresets.diagECU_plus, servicePresets.coding),
      'AWD Electric (Ultium)':        S(servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'escalade esv':     { 'см. Escalade соответствующего поколения': S() },
  'escalade ext':     { 'см. Escalade соответствующего поколения': S() },
  'cts coupe':        { 'см. CTS соответствующего поколения': S() },
  'cts sport wagon': { 'см. CTS соответствующего поколения': S() },
  'ats coupe':        { 'см. ATS соответствующего поколения': S() },
};