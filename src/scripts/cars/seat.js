export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'DSG-6/7/Tiptronic', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг TSI/TDI', price: '18 000 ₽' }],
  stage1_cupra:   [{ name: 'Прошивка Stage 1', description: 'Cupra тюнинг', price: '22 000 ₽' }],
  stage1_cupra_r: [{ name: 'Прошивка Stage 1', description: 'Cupra R тюнинг', price: '28 000 ₽' }],
  trans_dsg6:     [{ name: 'Настройка DSG-6', description: 'Калибровка 6-ст робота', price: '10 000 ₽' }],
  trans_dsg7:     [{ name: 'Настройка DSG-7', description: 'Калибровка 7-ст робота', price: '12 000 ₽' }],
  trans_tiptronic:[{ name: 'Настройка Tiptronic', description: 'Калибровка автомата', price: '10 000 ₽' }],
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
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций VAG', price: '5 000 ₽' }],
  cupra_mode:     [{ name: 'Активация Cupra режимов', description: 'Раскодировка Cupra функций', price: '7 000 ₽' }],
  dcc_setup:      [{ name: 'Настройка DCC', description: 'Dynamic Chassis Control', price: '6 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const seatData = {

  'leon': {
    '1M дорест (1999–2003)': {
      '1.4 16V (75 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16V (105 л.с.)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 20V (125 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.8 20V Turbo (180 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.vmax_off),
      '1.9 TDI (90/110/150 л.с.)':    S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      'Cupra R 1.8T (210 л.с.)':      S(servicePresets.stage1_cupra, servicePresets.burbles, servicePresets.vmax_off),
    },
    '1M FL (2003–2006)': {
      '1.4 16V (75 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16V (105 л.с.)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 20V Turbo (180 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.vmax_off),
      '1.9 TDI (90/110/150 л.с.)':    S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '2.0 FSI (150 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      'Cupra R 1.8T (225 л.с.)':      S(servicePresets.stage1_cupra, servicePresets.burbles, servicePresets.vmax_off),
    },
    '1P дорест (2006–2009)': {
      '1.4 TSI (125 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.6 MPI (102 л.с.)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 TSI (160 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '2.0 FSI (150 л.с.)':           S(servicePresets.stage1_na, servicePresets.trans_dsg6),
      '2.0 TFSI (200 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '1.9 TDI (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '2.0 TDI (140/170 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_dsg6),
      'Cupra 2.0 TFSI (240 л.с.)':    S(servicePresets.stage1_cupra, servicePresets.burbles, servicePresets.trans_dsg6),
    },
    '1P FL (2009–2012)': {
      '1.2 TSI (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.4 TSI (122/125 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.6 TDI (90/105 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '1.8 TSI (160 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '2.0 TDI (140/170 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg6),
      'Cupra 2.0 TSI (265 л.с.)':     S(servicePresets.stage1_cupra, servicePresets.burbles, servicePresets.trans_dsg6),
    },
    '5F дорест (2012–2016)': {
      '1.2 TSI (86/105/110 л.с.)':    S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.4 TSI (122/140/150 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '1.8 TSI (180 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6, servicePresets.gpf_off),
      '1.6 TDI (90/105/110 л.с.)':    S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '2.0 TDI (150/184 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg6),
      'Cupra 2.0 TSI (280/290 л.с.)': S(servicePresets.stage1_cupra, servicePresets.burbles, servicePresets.trans_dsg6, servicePresets.gpf_off),
    },
    '5F FL (2016–2020)': {
      '1.0 TSI (95/115 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.4 TSI (125/150 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '1.5 TSI (130/150 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '2.0 TSI (190 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '1.6 TDI (115 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue),
      '2.0 TDI (150/184 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg7),
      'Cupra 2.0 TSI (300 л.с.)':     S(servicePresets.stage1_cupra_r, servicePresets.burbles, servicePresets.trans_dsg7, servicePresets.gpf_off, servicePresets.dcc_setup),
    },
    '5FN (2020–н.в.)': {
      '1.0 TSI (90/110 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off),
      '1.5 TSI (130/150 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '2.0 TDI (115/150 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg7),
      'Cupra 2.0 TSI (300/310 л.с.)': S(servicePresets.stage1_cupra_r, servicePresets.burbles, servicePresets.trans_dsg7, servicePresets.gpf_off, servicePresets.dcc_setup),
    },
  },

  'ibiza': {
    '6K дорест (1993–1996)': {
      '1.0/1.3/1.4 (45-60 л.с.)':     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (75 л.с.)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 (90 л.с.)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.9 D/TDI/SDI (64-90 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.0 (115 л.с.)':               S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    '6K FL (1996–1999)': {
      '1.4 (60 л.с.)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (75/101 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 (125 л.с.)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.9 TDI/SDI (64-110 л.с.)':    S(servicePresets.stage1_turbo, servicePresets.egr_off),
      'Cupra 1.8T (156 л.с.)':        S(servicePresets.stage1_cupra, servicePresets.vmax_off),
    },
    '6K 2-й FL (1999–2002)': {
      '1.4 16V (75/100 л.с.)':        S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (101 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 20V Turbo (156 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.vmax_off),
      '1.9 TDI/SDI (64-130 л.с.)':    S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      'Cupra 1.8T (180 л.с.)':        S(servicePresets.stage1_cupra, servicePresets.burbles, servicePresets.vmax_off),
      'Cupra R 1.9 TDI (160 л.с.)':   S(servicePresets.stage1_cupra, servicePresets.egr_off, servicePresets.dpf_off),
    },
    '6L (2002–2008)': {
      '1.2 (64/70 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 (75/85/100 л.с.)':         S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (105 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 20V Turbo (150 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.vmax_off),
      '1.9 TDI (100/130 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '1.4 TDI (80 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      'Cupra 1.8T (180 л.с.)':        S(servicePresets.stage1_cupra, servicePresets.burbles, servicePresets.vmax_off),
    },
    '6J дорест (2008–2012)': {
      '1.2 (60/70 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 (85 л.с.)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.2 TSI (85/105 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.4 TSI (150/180 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.2 TDI (75 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '1.6 TDI (90/105 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '2.0 TDI (143 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off),
      'Cupra 1.4 TSI (180 л.с.)':     S(servicePresets.stage1_cupra, servicePresets.burbles, servicePresets.trans_dsg7),
    },
    '6J FL (2012–2017)': {
      '1.2 (60/70 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 (85 л.с.)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.2 TSI (85/90/105/110 л.с.)': S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.4 TSI (140/150 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.2 TDI (75 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '1.6 TDI (90/105 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue),
      'Cupra 1.8 TSI (192 л.с.)':     S(servicePresets.stage1_cupra, servicePresets.burbles, servicePresets.trans_dsg7, servicePresets.gpf_off),
    },
    '6F дорест (2017–2021)': {
      '1.0 MPI (65/75/80 л.с.)':      S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.0 TSI (95/115 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.5 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '1.6 TDI (80/95 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue),
    },
    '6F FL (2021–н.в.)': {
      '1.0 MPI (80 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.0 TSI (95/110 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '1.5 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
    },
  },

  'ateca': {
    'KH7 дорест (2016–2020)': {
      '1.0 TSI (115 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.4 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '1.5 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '2.0 TSI (190 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '1.6 TDI (115 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue),
      '2.0 TDI (150/190 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg7),
      'Cupra 2.0 TSI (300 л.с.)':     S(servicePresets.stage1_cupra_r, servicePresets.burbles, servicePresets.trans_dsg7, servicePresets.gpf_off, servicePresets.dcc_setup),
    },
    'KH7 FL (2020–н.в.)': {
      '1.0 TSI (110 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off),
      '1.5 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '2.0 TSI (190 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '2.0 TDI (115/150 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg7),
      'Cupra 2.0 TSI (300 л.с.)':     S(servicePresets.stage1_cupra_r, servicePresets.burbles, servicePresets.trans_dsg7, servicePresets.gpf_off, servicePresets.dcc_setup),
    },
  },

  'arona': {
    'KJ7 дорест (2017–2021)': {
      '1.0 TSI (95/115 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.5 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '1.0 TGI CNG (90 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 TDI (95/115 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue),
    },
    'KJ7 FL (2021–н.в.)': {
      '1.0 TSI (95/110 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '1.5 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7, servicePresets.gpf_off),
    },
  },

  'tarraco': {
    'KN2 (2018–2024)': {
      '1.5 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off),
      '2.0 TSI (190 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg7, servicePresets.gpf_off),
      '2.0 TDI (150/190 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg7),
      '1.4 TSI eHybrid (245 л.с.)':   S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6, servicePresets.coding),
    },
  },

  'toledo': {
    '1L (1991–1999)': {
      '1.6 (71/75 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 (88/90 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (115 л.с.)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.9 D/TD/TDI (64-110 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    '1M (1998–2004)': {
      '1.4 16V (75 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (105 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 20V (125 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.8 20V Turbo (180 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.vmax_off),
      '1.9 TDI (90/110/130/150 л.с.)': S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '2.3 V5 (150/170 л.с.)':        S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    '5P (2004–2009)': {
      '1.4 TSI (125 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.6 (102 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 TSI (160 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '2.0 FSI (150 л.с.)':           S(servicePresets.stage1_na, servicePresets.trans_dsg6),
      '2.0 TFSI (200 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '1.9 TDI (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '2.0 TDI (140/170 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_dsg6),
    },
    'NH (2012–2019)': {
      '1.2 TSI (85/105/110 л.с.)':    S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.4 TSI (122/125 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.6 TDI (90/105 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue),
      '1.0 TSI (95/110 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.diagECU),
    },
  },

  'altea': {
    '5P дорест (2004–2009)': {
      '1.4 16V (86 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (102 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 TSI (125 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.8 TSI (160 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '2.0 FSI (150 л.с.)':           S(servicePresets.stage1_na, servicePresets.trans_dsg6),
      '2.0 TFSI (200 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '1.9 TDI (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '2.0 TDI (140/170 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_dsg6),
    },
    '5P FL (2009–2015)': {
      '1.2 TSI (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.4 TSI (125 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.6 (102 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 TSI (160 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '2.0 TFSI (211 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6, servicePresets.gpf_off),
      '1.6 TDI (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue),
      '2.0 TDI (140/170 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg7),
    },
  },

  'altea xl': {
    '5P дорест (2006–2009)': {
      '1.4 16V (86 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (102 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 TSI (125 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.8 TSI (160 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '2.0 FSI (150 л.с.)':           S(servicePresets.stage1_na, servicePresets.trans_dsg6),
      '1.9 TDI (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '2.0 TDI (140/170 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_dsg6),
    },
    '5P FL (2009–2015)': {
      '1.2 TSI (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.4 TSI (125 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '1.6 (102 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 TSI (160 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6),
      '1.6 TDI (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue),
      '2.0 TDI (140/170 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg7),
    },
  },

  'altea freetrack': {
    '5P (2007–2015)': {
      '1.4 TSI (125 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg7),
      '2.0 TFSI (200/211 л.с.)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6, servicePresets.gpf_off),
      '2.0 TDI (140/170 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg6),
    },
  },

  'alhambra': {
    '7N дорест (2010–2015)': {
      '1.4 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg6),
      '2.0 TSI (200 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6, servicePresets.gpf_off),
      '2.0 TDI (115/140/170 л.с.)':   S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg6),
    },
    '7N FL (2015–2020)': {
      '1.4 TSI (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_dsg6, servicePresets.gpf_off),
      '2.0 TSI (220 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_dsg6, servicePresets.gpf_off),
      '2.0 TDI (150/184 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_dsg6),
    },
  },

  'exeo': {
    '3R (2008–2013)': {
      '1.6 (102 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 TSI (120/160 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.trans_tiptronic),
      '2.0 TSI (200/211 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.trans_tiptronic, servicePresets.gpf_off),
      '2.0 TDI (120/143/170 л.с.)':   S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_tiptronic),
    },
  },

  'cordoba': {
    '6K (1993–2002)': {
      '1.4 (60 л.с.)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (75/101 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 (125 л.с.)':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.9 TDI/SDI (64-110 л.с.)':    S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.0 (115 л.с.)':               S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    '6L (2002–2009)': {
      '1.2 (64/70 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 (75/86 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (105 л.с.)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 TDI (80 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
      '1.9 TDI (100/130 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
    },
  },

  'mii': {
    '(2011–2021)': {
      '1.0 (60/75 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.0 CNG (68 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'leon st': { 'см. Leon соответствующего поколения': S() },
  'leon sc': { 'см. Leon соответствующего поколения': S() },
  'ibiza st': { 'см. Ibiza соответствующего поколения': S() },
  'ibiza sc': { 'см. Ibiza соответствующего поколения': S() },
};