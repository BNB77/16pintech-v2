export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/МКПП', price: '2 500 ₽' }],
  diag4WD:        [{ name: 'Диагностика 4WD', description: 'Полный привод', price: '2 500 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_diesel:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг дизельного двигателя', price: '18 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '9 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '11 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '8 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка скорости', price: '6 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '12 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Во впускном коллекторе', price: '5 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const ssangyongData = {

  'rexton': {
    'Y200 дорест (2001–2004)': {
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.7 Diesel (D27DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '2.9 Diesel (OM602)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding, servicePresets.vmax_off),
    },
    'Y200 FL (2004–2006)': {
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.7 Diesel (D27DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '2.9 Diesel (OM602)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding, servicePresets.vmax_off),
    },
    'Y250 (2006–2012)': {
      '2.7 Diesel (D27DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2, servicePresets.vmax_off),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding, servicePresets.vmax_off),
    },
    'Y300 дорест (2012–2016)': {
      '2.0 Turbo (G20DF)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '2.2 Diesel (D22DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'Y300 FL (2016–2017)': {
      '2.0 Turbo (G20DF)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '2.2 Diesel (D22DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'Y400 (2017–н.в.)': {
      '2.0 Turbo (G20DF)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding, servicePresets.vmax_off),
      '2.2 Diesel (D22DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
  },

  'actyon': {
    'C100 дорест (2005–2010)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'C100 FL (2010–2011)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTF)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'C200 дорест (2011–2013)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTF)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'C200 FL (2013–2018)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
  },

  'actyon sports': {
    'Q100 дорест (2006–2011)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'Q100 FL-1 (2011–2012)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTF)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'Q100 FL-2 (2012–2016)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTF)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'Q200 (2018–н.в.)': {
      '2.0 Turbo (G20DF)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.2 Diesel (D22DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
  },

  'kyron': {
    'D200 дорест (2005–2007)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '2.7 Diesel (D27DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding, servicePresets.vmax_off),
    },
    'D200 FL (2007–2014)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTF)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '2.7 Diesel (D27DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'korando': {
    'KJ дорест (1996–1999)': {
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD),
      '2.9 Diesel (OM602)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD),
    },
    'KJ FL (1999–2006)': {
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.9 Diesel (OM602)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
    },
    'C200 дорест (2010–2013)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTF)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'C200 FL (2013–2019)': {
      '2.0 (G20DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
    'C300 (2019–н.в.)': {
      '1.5 Turbo (G15T)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.0 Diesel (D20DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
  },

  'tivoli': {
    'X100 дорест (2015–2019)': {
      '1.6 (G16DF)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.6 Turbo (G16TGDi)':          S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.6 Diesel (D16S)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    'X100 FL (2019–2022)': {
      '1.5 Turbo (G15T)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.6 Diesel (D16S)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    'X100 Grand (2020–н.в.)': {
      '1.5 Turbo (G15T)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.6 Diesel (D16S)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  'musso': {
    'FJ (1993–1998)': {
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD),
      '2.9 Diesel (OM602)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD),
    },
    'FJ FL (1998–2005)': {
      '2.3 (M162)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.9 Diesel (OM602)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
    },
    'Q200 (2018–н.в.)': {
      '2.0 Turbo (G20DF)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.coding),
      '2.2 Diesel (D22DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.diag4WD, servicePresets.euro2),
    },
  },

  'chairman': {
    'H (1997–2003)': {
      '2.8 Diesel (662)':             S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'CM (2004–2008)': {
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '3.6 (M272)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.7 Diesel (D27DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    'W (2008–2014)': {
      '3.6 (M272)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '5.0 V8 (273)':                 S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.7 Diesel (D27DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  'rodius': {
    'A100 (2004–2013)': {
      '2.7 Diesel (D27DT)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '3.2 (M104)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'A100 FL (2013–2019)': {
      '2.0 Diesel (D20DTR)':          S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  'korando sports':   { 'см. Actyon Sports соответствующего поколения': S() },
  'tivoli grand':     { 'см. Tivoli Grand': S() },
  'musso sports':     { 'см. Actyon Sports / Musso': S() },
};
