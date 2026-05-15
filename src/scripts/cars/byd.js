export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'DCT/AT коробки передач', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '18 000 ₽' }],
  stage1_phev:    [{ name: 'Прошивка Stage 1', description: 'PHEV тюнинг ДВС части', price: '20 000 ₽' }],
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
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '5 000 ₽' }],
  battery_ev:     [{ name: 'Диагностика EV батареи', description: 'Диагностика Blade Battery', price: '6 000 ₽' }],
  phev_diag:      [{ name: 'Диагностика PHEV системы', description: 'DM-i/DM-p гибрид', price: '4 000 ₽' }],
  phev_cal:       [{ name: 'Калибровка PHEV', description: 'Адаптации DM-i/DM-p', price: '8 000 ₽' }],
  ev_diag:        [{ name: 'Диагностика EV системы', description: 'Электромоторы/инвертор', price: '5 000 ₽' }],
  ev_cal:         [{ name: 'Калибровка EV системы', description: 'Настройка рекуперации/мощности', price: '10 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const bydData = {

  'f3': {
    '1-е поколение дорест (2005–2010)': {
      '1.5 (BYD473QB)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 (Mitsubishi 4G18)':        S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    '1-е поколение FL (2010–2013)': {
      '1.5 (BYD473QE)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'f6': {
    '1-е поколение (2007–2012)': {
      '2.0 (Mitsubishi 4G63)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.4 (Mitsubishi 4G69)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'g6': {
    '1-е поколение (2010–2015)': {
      '1.5T (BYD487ZQA)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      '2.0 (Mitsubishi 4G63)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  's6': {
    '1-е поколение дорест (2011–2014)': {
      '2.0 (Mitsubishi 4G63)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.4 (Mitsubishi 4G69)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
    '1-е поколение FL (2014–2017)': {
      '2.0 (BYD487QA)':               S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.0T (BYD487ZQA)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
    },
  },

  's7': {
    '1-е поколение (2017–2020)': {
      '2.0T (BYD487ZQB)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
  },

  'tang': {
    '1-е поколение (2015–2018)': {
      '2.0T (BYD487ZQA)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.0T PHEV':                    S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding),
    },
    '2-е поколение (2018–2022)': {
      '2.0T (BYD487ZQB)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
      '2.0T DM (PHEV)':               S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding),
      'EV600':                        S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
    '3-е поколение (2022–н.в.)': {
      '1.5T DM-i (PHEV)':             S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding),
      '2.0T DM-p (PHEV)':             S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'song': {
    '1-е поколение дорест (2015–2017)': {
      '1.5T (BYD476ZQA)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      '2.0 (BYD487QA)':               S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
    },
    '1-е поколение FL (2017–2021)': {
      '1.5T (BYD476ZQA)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '1.5T DM (PHEV)':               S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding),
      'EV400':                        S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'song plus': {
    '1-е поколение (2020–н.в.)': {
      '1.5T DM-i (PHEV)':             S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding),
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'song pro': {
    '1-е поколение (2019–2021)': {
      '1.5T (BYD476ZQC)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
      '1.5T DM (PHEV)':               S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding),
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'yuan': {
    '1-е поколение (2016–2021)': {
      '1.5 (BYD473QE)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      'EV360':                        S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'yuan plus': {
    '1-е поколение (2021–н.в.)': {
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'han': {
    '1-е поколение (2020–н.в.)': {
      '2.0T DM-p (PHEV)':             S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'qin': {
    '1-е поколение (2013–2017)': {
      '1.5T (BYD476ZQA)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      '1.5T DM (PHEV)':               S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding),
    },
    '2-е поколение (2018–2022)': {
      '1.5T (BYD476ZQC)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.burbles),
      '1.5T DM (PHEV)':               S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding),
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'qin plus': {
    '1-е поколение (2021–н.в.)': {
      '1.5T DM-i (PHEV)':             S(servicePresets.stage1_phev, servicePresets.phev_diag, servicePresets.phev_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.coding),
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'dolphin': {
    '1-е поколение (2021–н.в.)': {
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'seagull': {
    '1-е поколение (2023–н.в.)': {
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'seal': {
    '1-е поколение (2022–н.в.)': {
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'atto 3': {
    '1-е поколение (2022–н.в.)': {
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'e6': {
    '1-е поколение (2009–н.в.)': {
      'EV':                           S(servicePresets.ev_diag, servicePresets.ev_cal, servicePresets.battery_ev, servicePresets.diagECU, servicePresets.coding),
    },
  },

};