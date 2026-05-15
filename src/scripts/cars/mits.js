// Mitsubishi: полный каталог моделей (с дорест/FL), адаптированные услуги под марку
// Источник: Drom.ru и официальные поколения. Обновлено с добавлением редких и исторических моделей.

export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'INVECS-II/III, CVT Jatco, Aisin', price: '2 500 ₽' }],

  stage1_basic:   [{ name: 'Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo:   [{ name: 'Stage 1 Turbo', description: 'Тюнинг турбо двигателя (4B11T, 4G63T)', price: '15 000 ₽' }],
  stage1_diesel:  [{ name: 'Stage 1 Diesel', description: 'Оптимизация дизеля (4N15, 4D56, 4M41)', price: '13 000 ₽' }],

  trans_cvt:      [{ name: 'Настройка CVT', description: 'Адаптация вариатора Jatco/INVECS', price: '8 000 ₽' }],
  trans_at:       [{ name: 'Настройка АКПП', description: 'Aisin/F4A51/F5A51/6AT', price: '9 000 ₽' }],
  trans_dct:      [{ name: 'Настройка DCT', description: '6DCT (Outlander PHEV, Eclipse Cross)', price: '10 000 ₽' }],

  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции отработавших газов', price: '7 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр (дизель)', price: '9 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF', description: 'Бензиновый фильтр частиц', price: '10 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue', description: 'SCR система мочевины', price: '8 000 ₽' }],
  vmax_off:       [{ name: 'Снятие Vmax', description: 'Удаление ограничителя скорости', price: '6 000 ₽' }],

  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  pops:           [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы (Lancer Evo, Ralliart)', price: '7 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Разблокировка скрытых опций', price: '5 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Outlander PHEV, Eclipse Cross PHEV', price: '5 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптация и обновления', price: '8 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const mitsubishiData = {
  // ===== Основные легковые =====
  'lancer': {
    'IX (2000–2007)': {
      '1.6/1.8/2.0 (4G18/4G93)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      'Evo IX 2.0T (4G63T)':     S(servicePresets.stage1_turbo, servicePresets.trans_at, servicePresets.pops),
    },
    'X (2007–2016)': {
      '1.5/1.6/1.8 (4A91/4A92)': S(servicePresets.stage1_basic, servicePresets.trans_cvt),
      '2.0/2.4 (4B11/4B12)':     S(servicePresets.stage1_basic, servicePresets.trans_cvt),
      'Evo X 2.0T (4B11T)':      S(servicePresets.stage1_turbo, servicePresets.trans_at, servicePresets.pops),
    },
  },

  'mirage': {
    'A00 (2012–2020)': {
      '1.0/1.2 (3A90/3A92)': S(servicePresets.stage1_basic, servicePresets.trans_cvt),
    },
    'A03 (2020–н.в.)': {
      '1.2 (3A92)':          S(servicePresets.stage1_basic, servicePresets.trans_cvt),
    },
  },

  'colt': {
    'Z3–Z30 (2004–2012)': {
      '1.3/1.5 (4A90/4A91)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      '1.5T CZT (4G15T)':   S(servicePresets.stage1_turbo, servicePresets.trans_at),
    },
  },

  'galant': {
    'VIII (1996–2006)': {
      '2.0/2.4 (4G63/4G64)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      '2.5/3.0 V6 (6A13/6G72)': S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
    'IX (2006–2012)': {
      '2.4 (4G69)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      '3.8 (6G75)': S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
  },

  'carisma': {
    'DA2A (1995–2004)': {
      '1.6/1.8 (4G92/4G93)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      '1.9D (F8Q)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'grandis': {
    'NA4W (2003–2011)': {
      '2.0/2.4 (4G63/4G69)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      '2.0D (BSY)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off),
    },
  },

  'fto': {
    'DE3A (1994–2000)': {
      '1.8/2.0 V6 (6A12)': S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
  },

  'diamante': {
    'F31A–F36A (1990–2005)': {
      '2.5/3.0 V6 (6G73/6G72)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      '3.5 V6 (6G74)': S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
  },

  // ===== Кроссоверы / SUV =====
  'outlander': {
    'CU (2003–2006)': {
      '2.0/2.4 (4G63/4G64)':     S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
    'CW (2006–2012)': {
      '2.0/2.4 (4B11/4B12)':     S(servicePresets.stage1_basic, servicePresets.trans_cvt),
      '3.0 V6 (6B31)':           S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
    'GF (2012–2021)': {
      '2.0/2.4 (4B11/4B12)':     S(servicePresets.stage1_basic, servicePresets.trans_cvt),
      '3.0 V6 (6B31)':           S(servicePresets.stage1_basic, servicePresets.trans_at),
      '2.4 PHEV (4B12 + e)':     S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'GN (2021–н.в.)': {
      '2.5 (PR25)':              S(servicePresets.stage1_basic, servicePresets.trans_cvt),
      '2.4 PHEV':                S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'asx': {
    'GA (2010–2020)': {
      '1.6/1.8/2.0 (4A92/4B10/4B11)': S(servicePresets.stage1_basic, servicePresets.trans_cvt),
      '1.8D (4N13)':                  S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'GL (2020–н.в.)': {
      '1.6/2.0 (4A92/4B11)':          S(servicePresets.stage1_basic, servicePresets.trans_cvt),
    },
  },

  'eclipse cross': {
    'GK (2017–2023)': {
      '1.5T (4B40)':           S(servicePresets.stage1_turbo, servicePresets.trans_cvt),
      '2.2D (4N14)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'GL (2023–н.в.)': {
      '2.4 PHEV':   S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'rvr/airtrek': {
    'CU2W–CU4W (2000–2008)': {
      '1.8/2.0/2.4 (4G63/4G64)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      '1.8T (4G93T)': S(servicePresets.stage1_turbo, servicePresets.trans_at),
    },
  },

  'pajero': {
    'III (1999–2006)': {
      '3.0/3.5/3.8 V6 (6G72/6G74/6G75)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      '3.2D (4M41)':                     S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'IV (2006–2021)': {
      '3.0/3.8 V6 (6G72/6G75)':          S(servicePresets.stage1_basic, servicePresets.trans_at),
      '3.2D (4M41)':                     S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'pajero sport': {
    'KH (2008–2015)': {
      '3.0 V6 (6B31)':       S(servicePresets.stage1_basic, servicePresets.trans_at),
      '2.5D (4D56)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'KR (2015–н.в.)': {
      '2.4D (4N15)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.adblue_off),
      '3.0 V6 (6B31)':       S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
  },

  'l200': {
    'IV (2005–2015)': {
      '2.5D (4D56)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'V (2015–н.в.)': {
      '2.4D (4N15)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.adblue_off),
    },
  },

  'delica': {
    'D:5 (2007–н.в.)': {
      '2.0/2.4 (4B11/4B12)': S(servicePresets.stage1_basic, servicePresets.trans_cvt),
      '2.2D (4N14)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  '3000gt': {
    'Z15A/Z16A (1990–2000)': {
      '3.0 V6 (6G72/6G72TT)': S(servicePresets.stage1_turbo, servicePresets.trans_at, servicePresets.vmax_off),
    },
  },

  'endeavor': {
    'DJ (2003–2011)': {
      '3.8 V6 (6G75)': S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
  },

  'space star': {
    'A00/A03 (2012–н.в.)': {
      '1.0/1.2 (3A90/3A92)': S(servicePresets.stage1_basic, servicePresets.trans_cvt),
    },
  },

  'space wagon': {
    'N8W (1995–2003)': {
      '2.0/2.4 (4G63/4G64)': S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
  },

  'chariot': {
    'N84W–N94W (1991–2003)': {
      '2.0/2.4 (4G63/4G64)': S(servicePresets.stage1_basic, servicePresets.trans_at),
      '2.4GDI (4G64GDI)': S(servicePresets.stage1_basic, servicePresets.trans_at),
    },
  },

  'ralliart': { 'см. Lancer Evo соответствующих поколений': S() },
  'montero': { 'см. Pajero соответствующего поколения': S() },
};
