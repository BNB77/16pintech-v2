export const servicePresetsPontiac = {
  // Диагностика / кодирование
  diagECU:            [{ name: 'Диагностика ЭБУ GM', description: 'OBD-II + Tech2, чтение ошибок', price: '2 000 ₽' }],
  diagECU_plus:       [{ name: 'Диагностика + логи', description: 'Расширенные логи, адаптации', price: '3 000 ₽' }],
  diagTrans:          [{ name: 'Диагностика трансмиссии', description: '4T60E/4T65E/4L60E/6L50/6L80', price: '2 500 ₽' }],
  coding:             [{ name: 'Кодирование/адаптации BCM', description: 'Опции комфорта/свет/DRL', price: '5 000 ₽' }],
  speedo_corr:        [{ name: 'Коррекция спидометра', description: 'Размер колёс/главная пара', price: '4 000 ₽' }],

  // Stage 1
  stage1_basic:       [{ name: 'Stage 1 атмосферный', description: '4-цил базовая оптимизация', price: '10 000 ₽' }],
  stage1_na:          [{ name: 'Stage 1 атмосферный', description: 'V6 оптимизация под АИ-95/98', price: '12 000 ₽' }],
  stage1_na_3800:     [{ name: 'Stage 1 3800 Series', description: '3.8 V6 Series II/III', price: '14 000 ₽' }],
  stage1_supercharged:[{ name: 'Stage 1 Supercharged', description: '3.8 V6 L67 с наддувом', price: '18 000 ₽' }],
  stage1_turbo:       [{ name: 'Stage 1 Turbo', description: 'Ecotec LNF/Solstice GXP', price: '18 000 ₽' }],
  stage1_v8:          [{ name: 'Stage 1 V8', description: 'LS1/LS2/LS3/L76 (5.3/6.0/6.2)', price: '22 000 ₽' }],
  stage1_ram_air:     [{ name: 'Stage 1 Ram Air', description: 'Firebird Ram Air/Formula', price: '25 000 ₽' }],
  stage1_ws6:         [{ name: 'Stage 1 WS6/Trans Am', description: 'Trans Am WS6/Firehawk', price: '28 000 ₽' }],

  // Трансмиссии
  trans_4t60:         [{ name: 'Настройка 4T60E', description: '4-ст автомат переднеприв.', price: '8 000 ₽' }],
  trans_4t65:         [{ name: 'Настройка 4T65E', description: '4-ст автомат усиленный', price: '10 000 ₽' }],
  trans_4l60:         [{ name: 'Настройка 4L60E/4L65E', description: '4-ст автомат заднеприв.', price: '10 000 ₽' }],
  trans_6l50:         [{ name: 'Настройка 6L50', description: '6-ст автомат', price: '12 000 ₽' }],
  trans_6l80:         [{ name: 'Настройка 6L80', description: '6-ст автомат (G8)', price: '14 000 ₽' }],

  // Эко/системы
  egr_off:            [{ name: 'EGR OFF', description: 'Программное отключение EGR', price: '7 000 ₽' }],
  gpf_off:            [{ name: 'GPF/OPF OFF', description: 'Фильтр бензиновых частиц', price: '10 000 ₽' }],
  sai_off:            [{ name: 'SAI/AIR OFF', description: 'Вторичный воздух', price: '6 000 ₽' }],
  post_o2_off:        [{ name: 'Вторые O2 OFF', description: 'Отключение пост-кат датчиков', price: '4 000 ₽' }],
  afm_dod_off:        [{ name: 'Отключение AFM/DOD', description: 'Деактивация цилиндров V8', price: '8 000 ₽' }],
  evap_off:           [{ name: 'EVAP OFF', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],

  // Прочее
  vmax_off:           [{ name: 'Vmax OFF', description: 'Снятие ограничителя скорости', price: '6 000 ₽' }],
  rev_limit:          [{ name: 'Сдвиг отсечки', description: 'Коррекция RPM limit', price: '4 000 ₽' }],
  idle_rpm:           [{ name: 'ХХ RPM', description: 'Настройка холостых оборотов', price: '3 000 ₽' }],
  burbles:            [{ name: 'Pops & Bangs', description: 'Хлопки в выхлопе', price: '8 000 ₽' }],
  euro2:              [{ name: 'Прошивка на Евро 2', description: 'Отключение экологии', price: '12 000 ₽' }],
  dtc_off:            [{ name: 'DTC OFF', description: 'Селективное отключение ошибок', price: '3 000 ₽' }],
  skip_shift:         [{ name: 'Отключение Skip Shift', description: 'CAGS 1→4 блокировка (МКПП)', price: '3 000 ₽' }],
};

export const S = (...sets) => sets.flat();

export const pontiacData = {

  'firebird': {
    '4-е поколение дорест (1993–1997)': {
      '3.4 V6 (L32)':                   S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.trans_4l60, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '5.7 V8 LT1 (LT1)':               S(servicePresetsPontiac.stage1_v8, servicePresetsPontiac.trans_4l60, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
      'Trans Am 5.7 V8 (LT1)':          S(servicePresetsPontiac.stage1_ram_air, servicePresetsPontiac.trans_4l60, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles, servicePresetsPontiac.skip_shift),
    },
    '4-е поколение FL (1998–2002)': {
      '3.8 V6 (L36)':                   S(servicePresetsPontiac.stage1_na_3800, servicePresetsPontiac.trans_4l60, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '5.7 V8 LS1 (LS1)':               S(servicePresetsPontiac.stage1_v8, servicePresetsPontiac.trans_4l60, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
      'Trans Am WS6 5.7 V8 (LS1)':      S(servicePresetsPontiac.stage1_ws6, servicePresetsPontiac.trans_4l60, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles, servicePresetsPontiac.skip_shift),
      'Formula/Ram Air (LS1)':          S(servicePresetsPontiac.stage1_ram_air, servicePresetsPontiac.trans_4l60, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
    },
  },

  'gto': {
    '6-е поколение дорест (2004–2005)': {
      '5.7 V8 LS1 (LS1)':               S(servicePresetsPontiac.stage1_v8, servicePresetsPontiac.trans_4l60, servicePresetsPontiac.diagECU, servicePresetsPontiac.diagTrans, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
    },
    '6-е поколение FL (2005–2006)': {
      '6.0 V8 LS2 (LS2)':               S(servicePresetsPontiac.stage1_v8, servicePresetsPontiac.trans_4l60, servicePresetsPontiac.diagECU, servicePresetsPontiac.diagTrans, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
    },
  },

  'grand prix': {
    '7-е поколение (1997–2003)': {
      '3.1 V6 (L82)':                   S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.8 V6 (L36)':                   S(servicePresetsPontiac.stage1_na_3800, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.8 V6 Supercharged (L67) GTP':  S(servicePresetsPontiac.stage1_supercharged, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
    },
    '8-е поколение дорест (2004–2006)': {
      '3.8 V6 (L36)':                   S(servicePresetsPontiac.stage1_na_3800, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.8 V6 Supercharged (L67) GTP':  S(servicePresetsPontiac.stage1_supercharged, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
      '5.3 V8 (LM4) GXP':               S(servicePresetsPontiac.stage1_v8, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
    },
    '8-е поколение FL (2006–2008)': {
      '3.8 V6 (L36)':                   S(servicePresetsPontiac.stage1_na_3800, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '5.3 V8 (LM4) GXP':               S(servicePresetsPontiac.stage1_v8, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
    },
  },

  'grand am': {
    '5-е поколение дорест (1999–2002)': {
      '2.4 (LD9)':                      S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.trans_4t60, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.4 V6 (LA1)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t60, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
    '5-е поколение FL (2002–2005)': {
      '2.2 Ecotec (L61)':               S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.trans_4t60, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.4 V6 (LA1)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t60, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
  },

  'bonneville': {
    '9-е поколение (1992–1999)': {
      '3.8 V6 (L36)':                   S(servicePresetsPontiac.stage1_na_3800, servicePresetsPontiac.trans_4t60, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.8 V6 Supercharged (L67) SSEi': S(servicePresetsPontiac.stage1_supercharged, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
    },
    '10-е поколение (2000–2005)': {
      '3.8 V6 (L36)':                   S(servicePresetsPontiac.stage1_na_3800, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.8 V6 Supercharged (L67) SSEi': S(servicePresetsPontiac.stage1_supercharged, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
    },
  },

  'vibe': {
    '1-е поколение (2002–2008)': {
      '1.8 (1ZZ-FE) — Toyota двиг.':    S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
    '2-е поколение (2008–2010)': {
      '1.8 (2ZR-FE) — Toyota двиг.':    S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '2.4 (2AZ-FE) — Toyota двиг.':    S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
  },

  'g6': {
    '1-е поколение дорест (2004–2008)': {
      '2.4 Ecotec (LE5)':               S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.5 V6 (LZ4/LZE)':               S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.9 V6 (LZ9) GTP':               S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_6l50, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off),
    },
    '1-е поколение FL (2008–2010)': {
      '2.4 Ecotec (LE5)':               S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.5 V6 (LZ4)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_6l50, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.6 V6 (LY7)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_6l50, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off),
    },
  },

  'g8': {
    '1-е поколение (2008–2009)': {
      '3.6 V6 (LY7)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_6l50, servicePresetsPontiac.diagECU, servicePresetsPontiac.diagTrans, servicePresetsPontiac.vmax_off),
      '6.0 V8 (L76) GT':                S(servicePresetsPontiac.stage1_v8, servicePresetsPontiac.trans_6l80, servicePresetsPontiac.diagECU, servicePresetsPontiac.diagTrans, servicePresetsPontiac.afm_dod_off, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
      '6.2 V8 (LS3) GXP':               S(servicePresetsPontiac.stage1_ws6, servicePresetsPontiac.trans_6l80, servicePresetsPontiac.diagECU, servicePresetsPontiac.diagTrans, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles, servicePresetsPontiac.skip_shift),
    },
  },

  'solstice': {
    '1-е поколение (2005–2010)': {
      '2.4 Ecotec (LE5)':               S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '2.0 Turbo (LNF) GXP':            S(servicePresetsPontiac.stage1_turbo, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off, servicePresetsPontiac.burbles),
    },
  },

  'aztek': {
    '1-е поколение дорест (2000–2004)': {
      '3.4 V6 (LA1)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
    '1-е поколение FL (2004–2005)': {
      '3.4 V6 (LA1)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
  },

  'montana': {
    '2-е поколение (1998–2004)': {
      '3.4 V6 (LA1)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
    '3-е поколение дорест (2004–2006)': {
      '3.4 V6 (LA1)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.5 V6 (LX9)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
    '3-е поколение FL (2006–2009)': {
      '3.5 V6 (LX9)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.9 V6 (LZ9)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_4t65, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
  },

  'torrent': {
    '1-е поколение дорест (2005–2008)': {
      '3.4 V6 (LA1)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_6l50, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
    '1-е поколение FL (2008–2009)': {
      '3.4 V6 (LA1)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_6l50, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '3.6 V6 (LY7)':                   S(servicePresetsPontiac.stage1_na, servicePresetsPontiac.trans_6l50, servicePresetsPontiac.diagECU, servicePresetsPontiac.vmax_off),
    },
  },

  'g5': {
    '1-е поколение дорест (2004–2008)': {
      '2.2 Ecotec (L61/LAP)':           S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '2.4 Ecotec (LE5)':               S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
    '1-е поколение FL (2008–2010)': {
      '2.2 Ecotec (LAP)':               S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '2.4 Ecotec (LE5)':               S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
  },

  'sunfire': {
    '2-е поколение дорест (1995–1999)': {
      '2.2 (LN2)':                      S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '2.4 (LD9)':                      S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
    '2-е поколение FL (1999–2005)': {
      '2.2 (LN2)':                      S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '2.4 (LD9)':                      S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
      '2.2 Ecotec (L61)':               S(servicePresetsPontiac.stage1_basic, servicePresetsPontiac.diagECU, servicePresetsPontiac.euro2),
    },
  },

};
