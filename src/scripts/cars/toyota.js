export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/CVT/E-CVT', price: '2 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '7 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '9 000 ₽' }],
  stage1_na_v6:   [{ name: 'Прошивка Stage 1', description: 'Оптимизация V6 атмо', price: '11 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг турбо', price: '15 000 ₽' }],
  stage1_diesel:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация D-4D дизеля', price: '10 000 ₽' }],
  stage1_sport:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг GR/TRD версий', price: '18 000 ₽' }],
  stage1_supra:   [{ name: 'Прошивка Stage 1', description: 'Спортивный тюнинг Supra', price: '22 000 ₽' }],
  trans_at:       [{ name: 'Настройка АКПП', description: 'Калибровка автомата', price: '8 000 ₽' }],
  trans_cvt:      [{ name: 'Настройка CVT', description: 'Калибровка вариатора', price: '9 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Программное удаление EGR', price: '5 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Удаление сажевого фильтра', price: '7 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '9 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF', description: 'Фильтр частиц бензиновых', price: '8 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue', description: 'Удаление системы SCR', price: '6 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение экологии', price: '8 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '4 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'HSD инвертор/контроллер', price: '3 500 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/сброс ошибок', price: '6 000 ₽' }],
  hybrid_reset:   [{ name: 'Сброс гибридной батареи', description: 'Калибровка BMS/ячеек', price: '5 000 ₽' }],
  vsc_setup:      [{ name: 'Настройка VSC/4WD', description: 'Стабилизация/полный привод', price: '4 500 ₽' }],
  crawl_control:  [{ name: 'Активация Crawl Control', description: 'Раскодировка функций', price: '5 000 ₽' }],
  toyota_safety:  [{ name: 'Настройка Toyota Safety Sense', description: 'TSS/адаптивный круиз', price: '4 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '3 500 ₽' }],
};

const S = (...sets) => sets.flat();

export const toyotaData = {

  'corolla': {
    'E120 (2000–2007)': {
      '1.4 VVT-i (4ZZ-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 VVT-i (3ZZ-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 VVT-i (1ZZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 D-4D (1CD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'E140/E150 (2006–2013)': {
      '1.4 VVT-i (4ZZ-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 VVT-i (1ZR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 VVT-i (2ZR-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 D-4D (1AD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'E160/E170 дорест (2012–2015)': {
      '1.6 VVT-i (1ZR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 VVT-i (2ZR-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.4 D-4D (1ND-TV)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'E160/E170 FL (2015–2018)': {
      '1.6 VVT-i (1ZR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 VVT-i (2ZR-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.6 D-4D (1WW)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '1.8 Hybrid (2ZR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'E210 дорест (2018–2022)': {
      '1.6 VVT-i (1ZR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 Dynamic Force (M20A-FKS)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.gpf_off),
      '1.8 Hybrid (2ZR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '2.0 Hybrid (M20A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'E210 FL (2022–н.в.)': {
      '2.0 Dynamic Force (M20A-FKS)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.gpf_off),
      '1.8 Hybrid (2ZR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '2.0 Hybrid (M20A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'GR Sport 2.0 Hybrid':          S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.stage1_na),
    },
  },

  'camry': {
    'XV30 (2001–2006)': {
      '2.0 VVT-i (1AZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.4 VVT-i (2AZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.0 V6 (1MZ-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'XV40 дорест (2006–2009)': {
      '2.4 VVT-i (2AZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.4 Hybrid (2AZ-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XV40 FL (2009–2011)': {
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XV50 дорест (2011–2014)': {
      '2.0 (6AR-FSE)':                S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XV50 FL (2014–2017)': {
      '2.0 (6AR-FSE)':                S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XV70 дорест (2017–2021)': {
      '2.5 (A25A-FKS)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (A25A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XV70 FL (2021–н.в.)': {
      '2.5 (A25A-FKS)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 Hybrid (A25A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'rav4': {
    'XA20 (2000–2005)': {
      '2.0 VVT-i (1AZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.4 VVT-i (2AZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 D-4D (1CD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'XA30 дорест (2005–2008)': {
      '2.0 VVT-i (1AZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.4 VVT-i (2AZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.2 D-4D (2AD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'XA30 FL (2008–2012)': {
      '2.0 VVT-i (1AZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.2 D-4D (2AD-FHV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'XA40 дорест (2012–2015)': {
      '2.0 (3ZR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.2 D-4D (2AD-FHV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'XA40 FL (2015–2018)': {
      '2.0 (3ZR-FAE)':                S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XA50 дорест (2018–2021)': {
      '2.0 (M20A-FKS)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 (A25A-FKS)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 Hybrid (A25A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XA50 FL (2021–н.в.)': {
      '2.0 (M20A-FKS)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 (A25A-FKS)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 Hybrid (A25A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '2.5 Plug-in Hybrid (A25A-FXS)': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
  },

  'highlander': {
    'XU20 (2000–2007)': {
      '2.4 VVT-i (2AZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.0 V6 (1MZ-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '3.3 V6 (3MZ-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'XU40 дорест (2007–2010)': {
      '2.7 (1AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '3.5 Hybrid (2GR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XU40 FL (2010–2013)': {
      '2.7 (1AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '3.5 Hybrid (2GR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XU50 дорест (2013–2016)': {
      '2.7 (1AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '3.5 Hybrid (2GR-FXS)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XU50 FL (2016–2019)': {
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '3.5 Hybrid (2GR-FXS)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XU70 (2019–н.в.)': {
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (A25A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'land cruiser': {
    'J100 (1998–2007)': {
      '4.2 TD (1HD-FTE)':             S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '4.5 V8 D-4D (1VD-FTV)':        S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '4.7 V8 (2UZ-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'J200 дорест (2007–2012)': {
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '4.5 V8 D-4D (1VD-FTV)':        S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'J200 FL1 (2012–2015)': {
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '4.5 V8 D-4D (1VD-FTV)':        S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'J200 FL2 (2015–2021)': {
      '4.5 V8 D-4D (1VD-FTV)':        S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'J300 (2021–н.в.)': {
      '3.3 V6 Twin-Turbo Diesel':     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '3.5 V6 Twin-Turbo (V35A-FTS)': S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      'GR Sport 3.5 Twin-Turbo':      S(servicePresets.stage1_sport, servicePresets.diagECU),
    },
  },

  'land cruiser prado': {
    'J120 (2002–2009)': {
      '2.7 (2TR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '3.0 D-4D (1KD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'J150 дорест (2009–2013)': {
      '2.7 (2TR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '3.0 D-4D (1KD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'J150 FL (2013–2017)': {
      '2.7 (2TR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '3.0 D-4D (1KD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'J150 FL2 (2017–2021)': {
      '2.7 (2TR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.8 D-4D (1GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'J250 (2023–н.в.)': {
      '2.8 D-4D (1GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.4 Turbo (T24A-FTS)':         S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
    },
  },

  'hilux': {
    'VII дорест (2004–2011)': {
      '2.5 D-4D (2KD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 D-4D (1KD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'VII FL (2011–2015)': {
      '2.5 D-4D (2KD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 D-4D (1KD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'VIII дорест (2015–2020)': {
      '2.4 D-4D (2GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.8 D-4D (1GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.7 VVT-i (2TR-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'VIII FL (2020–н.в.)': {
      '2.4 D-4D (2GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.8 D-4D (1GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'GR Sport 2.8 D-4D':            S(servicePresets.stage1_sport, servicePresets.dpf_off_adblue),
    },
  },

  'prius': {
    'XW20 (2003–2009)': {
      '1.5 Hybrid (1NZ-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.hybrid_reset),
    },
    'XW30 дорест (2009–2012)': {
      '1.8 Hybrid (2ZR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.hybrid_reset),
    },
    'XW30 FL (2012–2015)': {
      '1.8 Hybrid (2ZR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.hybrid_reset),
    },
    'XW50 дорест (2015–2018)': {
      '1.8 Hybrid (2ZR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.hybrid_reset),
    },
    'XW50 FL (2018–2022)': {
      '1.8 Hybrid (2ZR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.hybrid_reset),
    },
    'XW60 (2022–н.в.)': {
      '2.0 Hybrid (M20A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '2.0 Plug-in Hybrid (M20A-FXS)': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
  },

  'supra': {
    'A80 (1993–2002)': {
      '3.0 Twin-Turbo (2JZ-GTE)':     S(servicePresets.stage1_supra, servicePresets.diagECU),
      '3.0 NA (2JZ-GE)':              S(servicePresets.stage1_sport, servicePresets.diagECU),
    },
    'A90 дорест (2019–2021)': {
      '2.0 Turbo (B48)':              S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '3.0 Turbo (B58)':              S(servicePresets.stage1_supra, servicePresets.diagECU),
    },
    'A90 FL (2021–2023)': {
      '2.0 Turbo (B48)':              S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '3.0 Turbo (B58)':              S(servicePresets.stage1_supra, servicePresets.diagECU),
    },
    'A91 (2023–н.в.)': {
      '2.0 Turbo (B48)':              S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '3.0 Turbo (B58)':              S(servicePresets.stage1_supra, servicePresets.diagECU),
    },
  },

  'gr86': {
    'ZN8 (2021–н.в.)': {
      '2.4 Boxer (FA24)':             S(servicePresets.stage1_sport, servicePresets.diagECU),
    },
  },

  'gt86': {
    'ZN6 дорест (2012–2016)': {
      '2.0 Boxer (FA20)':             S(servicePresets.stage1_sport, servicePresets.diagECU),
    },
    'ZN6 FL (2016–2021)': {
      '2.0 Boxer (FA20)':             S(servicePresets.stage1_sport, servicePresets.diagECU),
    },
  },

  'alphard': {
    'H10 (2002–2008)': {
      '2.4 (2AZ-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.0 V6 (1MZ-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'H20 дорест (2008–2011)': {
      '2.4 (2AZ-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.4 Hybrid (2AZ-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'H20 FL (2011–2014)': {
      '2.4 (2AZ-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.4 Hybrid (2AZ-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'H30 дорест (2015–2017)': {
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'H30 FL (2017–2022)': {
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'H40 (2023–н.в.)': {
      '2.5 (A25A-FKS)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 Hybrid (A25A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'vellfire': {
    'H20 (2008–2014)': {
      '2.4 (2AZ-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'H30 дорест (2015–2017)': {
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'H30 FL (2017–2022)': {
      '2.5 (2AR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'H40 (2023–н.в.)': {
      '2.5 (A25A-FKS)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 Hybrid (A25A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'c-hr': {
    'XH10 дорест (2016–2019)': {
      '1.2 Turbo (8NR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.8 Hybrid (2ZR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XH10 FL (2019–н.в.)': {
      '1.2 Turbo (8NR-FTS)':          S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.8 Hybrid (2ZR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      '2.0 Hybrid (M20A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'yaris': {
    'P1 (1999–2005)': {
      '1.0 VVT-i (1SZ-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.3 VVT-i (2SZ-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 VVT-i (1NZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'P9 дорест (2005–2008)': {
      '1.0 VVT-i (1KR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.3 VVT-i (1NR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 VVT-i (1NZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'P9 FL (2008–2011)': {
      '1.0 VVT-i (1KR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.3 VVT-i (1NR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 VVT-i (1NZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'P13 дорест (2011–2014)': {
      '1.0 VVT-i (1KR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.3 VVT-i (1NR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 VVT-i (1NZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'P13 FL (2014–2020)': {
      '1.0 VVT-i (1KR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.3 VVT-i (1NR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 VVT-i (1NZ-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 Hybrid (1NZ-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'P21 (2020–н.в.)': {
      '1.0 VVT-i (1KR-FE)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 (M15A-FKS)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 Hybrid (M15A-FXE)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'GR Yaris 1.6 Turbo (G16E-GTS)': S(servicePresets.stage1_sport, servicePresets.diagECU),
    },
  },

  '4runner': {
    'N210 дорест (2002–2005)': {
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '4.7 V8 (2UZ-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'N210 FL (2005–2009)': {
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '4.7 V8 (2UZ-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'N280 дорест (2009–2013)': {
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'N280 FL (2013–н.в.)': {
      '4.0 V6 (1GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
  },

  'tundra': {
    'XK50 дорест (2007–2013)': {
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'XK50 FL (2013–2021)': {
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'XK70 (2021–н.в.)': {
      '3.5 V6 Twin-Turbo (V35A-FTS)': S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '3.5 Hybrid (V35A-FTS)':        S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'tacoma': {
    'N300 дорест (2015–2020)': {
      '2.7 (2TR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'N300 FL (2020–н.в.)': {
      '2.7 (2TR-FE)':                 S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
  },

  'sequoia': {
    'XK60 дорест (2007–2013)': {
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'XK60 FL (2013–2022)': {
      '4.6 V8 (1UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '5.7 V8 (3UR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'XK80 (2022–н.в.)': {
      '3.5 V6 Twin-Turbo (V35A-FTS)': S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '3.5 Hybrid (V35A-FTS)':        S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'avalon': {
    'XX30 (2004–2012)': {
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'XX40 дорест (2012–2015)': {
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XX40 FL (2015–2018)': {
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (2AR-FXE)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'XX50 (2018–2022)': {
      '3.5 V6 (2GR-FKS)':             S(servicePresets.stage1_na_v6, servicePresets.diagECU),
      '2.5 Hybrid (A25A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'fortuner': {
    'AN160 дорест (2015–2020)': {
      '2.4 D-4D (2GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.7 VVT-i (2TR-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.8 D-4D (1GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'AN160 FL (2020–н.в.)': {
      '2.4 D-4D (2GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.7 VVT-i (2TR-FE)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.8 D-4D (1GD-FTV)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'sienna': {
    'XL30 (2010–2020)': {
      '3.5 V6 (2GR-FE)':              S(servicePresets.stage1_na_v6, servicePresets.diagECU),
    },
    'XL40 (2020–н.в.)': {
      '2.5 Hybrid (A25A-FXS)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'bz4x': {
    '(2022–н.в.)': {
      'bZ4X FWD/AWD':                 S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  // Справочные секции
  'camry hybrid':     { 'см. Camry соответствующего поколения': S() },
  'rav4 hybrid':      { 'см. RAV4 соответствующего поколения': S() },
  'highlander hybrid': { 'см. Highlander соответствующего поколения': S() },
  'prius prime':      { 'см. Prius соответствующего поколения': S() },
  'corolla cross':    { 'Доступна диагностика, уточняйте комплектацию': S() },
};