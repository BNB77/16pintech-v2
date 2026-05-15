export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП 4T65E/6T70/6T75', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '18 000 ₽' }],
  stage1_v8:      [{ name: 'Прошивка Stage 1', description: 'V8 тюнинг', price: '22 000 ₽' }],
  stage1_gs:      [{ name: 'Прошивка Stage 1', description: 'GS/GNX тюнинг', price: '28 000 ₽' }],
  trans_4t65:     [{ name: 'Настройка 4T65E', description: 'Калибровка 4-ст автомата', price: '10 000 ₽' }],
  trans_6t:       [{ name: 'Настройка 6T70/6T75', description: 'Калибровка 6-ст автомата', price: '12 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '9 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '11 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '8 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '6 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '5 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '4 000 ₽' }],
  tva_off:        [{ name: 'Отключение TVA', description: 'Tva - дросельная заслонка', price: '4 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '5 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '6 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '3 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '2 000 ₽' }],
  magnride:       [{ name: 'Диагностика MagneRide', description: 'Магнитореологическая подвеска', price: '4 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const buickData = {

  'century': {
    '5-е поколение (1997–2005)': {
      '3.1 V6 (L82)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.8 V6 (L36)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'enclave': {
    '1-е поколение дорест (2007–2012)': {
      '3.6 V6 (LY7)':                 S(servicePresets.stage1_na, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    '1-е поколение FL (2013–2017)': {
      '3.6 V6 (LFY)':                 S(servicePresets.stage1_na, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    '2-е поколение (2017–н.в.)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_6t, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.6 V6 (LGX)':                 S(servicePresets.stage1_na, servicePresets.trans_6t, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'encore': {
    '1-е поколение (2012–2019)': {
      '1.4 Turbo (LUJ/LUV)':          S(servicePresets.stage1_turbo, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    '2-е поколение (2019–н.в.)': {
      '1.2/1.3 Turbo (L2I/L3T)':      S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
    },
  },

  'envision': {
    '1-е поколение дорест (2014–2018)': {
      '1.5/2.0 Turbo':                S(servicePresets.stage1_turbo, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    '1-е поколение FL (2018–2020)': {
      '1.5/2.0 Turbo':                S(servicePresets.stage1_turbo, servicePresets.trans_6t, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    '2-е поколение (2020–н.в.)': {
      '2.0 Turbo (LSY)':              S(servicePresets.stage1_turbo, servicePresets.trans_6t, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
  },

  'lacrosse': {
    '2-е поколение дорест (2004–2008)': {
      '3.6 V6 (LY7)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '3.8 V6 (L36)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '5.3 V8 (LS4)':                 S(servicePresets.stage1_v8, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    '2-е поколение FL (2008–2009)': {
      '3.6 V6 (LY7)':                 S(servicePresets.stage1_na, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '5.3 V8 (LS4)':                 S(servicePresets.stage1_v8, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    '3-е поколение (2009–2016)': {
      '2.4 (LE5/LEA)':                S(servicePresets.stage1_basic, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.0 V6 (LF1)':                 S(servicePresets.stage1_na, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '3.6 V6 (LFX)':                 S(servicePresets.stage1_na, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    '4-е поколение (2016–2019)': {
      '2.5 (LKW)':                    S(servicePresets.stage1_basic, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.6 V6 (LGX)':                 S(servicePresets.stage1_na, servicePresets.trans_6t, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'lesabre': {
    '8-е поколение (1999–2005)': {
      '3.8 V6 (L36)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
  },

  'lucerne': {
    '1-е поколение (2005–2011)': {
      '3.8 V6 (L36)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.9 V6 (LA1)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '4.6 V8 Northstar (LD8/L37)':   S(servicePresets.stage1_v8, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'park avenue': {
    '2-е поколение (1996–2005)': {
      '3.8 V6 (L36/L67)':             S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.8 V6 Supercharged (L67)':    S(servicePresets.stage1_turbo, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'rainier': {
    '1-е поколение (2003–2007)': {
      '4.2 I6 (LL8)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '5.3 V8 (LM4)':                 S(servicePresets.stage1_v8, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'regal': {
    '4-е поколение (1997–2004)': {
      '3.8 V6 (L36)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.8 V6 Supercharged (L67)':    S(servicePresets.stage1_turbo, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    '5-е поколение дорест (2008–2013)': {
      '2.0 Turbo (LNF)':              S(servicePresets.stage1_turbo, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.4 (LE5/LEA)':                S(servicePresets.stage1_basic, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    '5-е поколение FL (2013–2017)': {
      '2.0 Turbo (LTG)':              S(servicePresets.stage1_turbo, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.4 (LEA)':                    S(servicePresets.stage1_basic, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.0 Turbo GS (LTG)':           S(servicePresets.stage1_gs, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    '6-е поколение (2017–2020)': {
      '2.0 Turbo (LTG)':              S(servicePresets.stage1_turbo, servicePresets.trans_6t, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.6 V6 (LGX)':                 S(servicePresets.stage1_na, servicePresets.trans_6t, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.0 Turbo GS (LTG)':           S(servicePresets.stage1_gs, servicePresets.trans_6t, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'rendezvous': {
    '1-е поколение (2001–2007)': {
      '3.4 V6 (LA1)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.5/3.6 V6 (LX9/LY7)':         S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'terraza': {
    '1-е поколение (2004–2007)': {
      '3.5 V6 (LX9)':                 S(servicePresets.stage1_na, servicePresets.trans_4t65, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
  },

  'verano': {
    '1-е поколение (2011–2017)': {
      '2.0 Turbo (LTG)':              S(servicePresets.stage1_turbo, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.4 (LE5/LEA)':                S(servicePresets.stage1_basic, servicePresets.trans_6t, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
  },

};