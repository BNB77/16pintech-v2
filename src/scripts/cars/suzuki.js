export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/вариатор', price: '2 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '8 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  trans_auto:     [{ name: 'Настройка АКПП', description: 'Калибровка автомата', price: '8 000 ₽' }],
  trans_cvt:      [{ name: 'Настройка вариатора', description: 'Калибровка CVT', price: '9 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '5 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '7 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка скорости', price: '5 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Во впускном коллекторе', price: '4 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '3 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '4 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Вторичный воздух', price: '5 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '6 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '10 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '2 500 ₽' }],
  immo_off:       [{ name: 'Отключение иммобилайзера', description: 'Программное отключение', price: '6 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '4 000 ₽' }],
  o2_off:         [{ name: 'Отключение лямбда-зондов', description: 'O2 sensor off', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const suzukiData = {

  'grand vitara': {
    'FT дорест (1998–2001)': {
      '1.6 (G16B)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 (J20A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.5 V6 (H25A)':                S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.0 TD (RF)':                  S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'FT FL (2001–2005)': {
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 (J20A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.5 V6 (H25A)':                S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.0 TD (RHW)':                 S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'JT дорест (2005–2008)': {
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 (J20A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.4 (J24B)':                   S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.7 V6 (H27A)':                S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off),
      '3.2 V6 (N32A)':                S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off),
      '1.9 DDiS (F9Q)':               S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.0 DDiS (RHW)':               S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'JT FL (2008–2015)': {
      '2.0 (J20A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.4 (J24B)':                   S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.2 V6 (N32A)':                S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off),
      '1.9 DDiS (F9Q)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.0 DDiS (RHW)':               S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'vitara': {
    'LY (2015–2018)': {
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.4 Turbo (K14C)':             S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    'LY FL (2018–2024)': {
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.4 Turbo (K14C)':             S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '1.0 Turbo (K10C)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
    },
  },

  'sx4': {
    'GY дорест (2006–2010)': {
      '1.5 (M15A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 (J20A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.9 DDiS (D19AA)':             S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'GY FL (2010–2014)': {
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.0 (J20A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.6 DDiS (D16AA)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'JY (2013–2016)': {
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'JY FL (2016–2021)': {
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.4 Turbo (K14C)':             S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
  },

  'swift': {
    'EA/MA дорест (2000–2003)': {
      '1.0 (G10)':                    S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.3 (G13BB)':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.5 (M15A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'EA/MA FL (2003–2005)': {
      '1.3 (M13A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.5 (M15A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'MZ дорест (2005–2007)': {
      '1.3 (M13A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.5 (M15A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 Sport (M16A)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
    },
    'MZ FL (2007–2010)': {
      '1.3 (M13A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.5 (M15A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 Sport (M16A)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
    },
    'FZ дорест (2010–2013)': {
      '1.2 (K12B)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'FZ FL (2013–2017)': {
      '1.2 (K12B)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'AZ дорест (2017–2020)': {
      '1.0 Turbo (K10C)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      '1.2 (K12C)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.4 Turbo (K14C)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
    },
    'AZ FL (2020–н.в.)': {
      '1.2 (K12C)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.4 Turbo (K14C)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
    },
  },

  'jimny': {
    'JB23/33/43 дорест (1998–2005)': {
      '1.3 (G13BB)':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'JB23/33/43 FL (2005–2012)': {
      '1.3 (M13A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'JB23/43 FL2 (2012–2018)': {
      '1.3 (M13A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'JB64/74 (2018–н.в.)': {
      '1.5 (K15B)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
  },

  'liana': {
    'RH дорест (2001–2004)': {
      '1.3 (M13A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'RH FL (2004–2007)': {
      '1.4 (M14A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
  },

  'ignis': {
    'FH дорест (2000–2003)': {
      '1.3 (M13A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.5 (M15A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'FH FL (2003–2008)': {
      '1.3 (M13A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.5 (M15A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'MF (2016–2020)': {
      '1.2 (K12C)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'MF FL (2020–н.в.)': {
      '1.2 (K12C)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
  },

  'wagon r+': {
    'MA (1997–2000)': {
      '1.0 (G10)':                    S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.2 (G13BB)':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'MM (2000–2008)': {
      '1.3 (M13A)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'splash': {
    'EX дорест (2008–2012)': {
      '1.0 (K10B)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.2 (K12B)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'EX FL (2012–2015)': {
      '1.0 (K10B)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.2 (K12B)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
  },

  'baleno': {
    'SY (1995–1999)': {
      '1.3 (G13BA)':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 (G16B)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'SY FL (1999–2002)': {
      '1.3 (G13BB)':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 (M16A)':                   S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'EW (2015–2019)': {
      '1.0 Turbo (K10C)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      '1.2 (K12C)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'EW FL (2019–2022)': {
      '1.2 (K12C)':                   S(servicePresets.stage1_basic, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
  },

  'escudo': {
    'см. Grand Vitara соответствующего поколения': S(),
  },

  'kizashi': {
    'FR (2009–2015)': {
      '2.4 (J24B)':                   S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'alto': {
    'HA (1994–1998)': {
      '0.8 (F8B)':                    S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.0 (F10D)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'HA FL (1998–2002)': {
      '1.0 (F10D)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'HA12S (2002–2006)': {
      '1.1 (F10D)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'HA25 (2009–2014)': {
      '1.0 (K10B)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
  },
};
