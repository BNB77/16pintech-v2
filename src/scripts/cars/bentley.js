export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '4 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '5 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'ZF 8HP/Aisin 8-ст автомат', price: '4 500 ₽' }],
  stage1_w12:     [{ name: 'Прошивка Stage 1', description: 'Тюнинг W12 6.0 twin-turbo', price: '35 000 ₽' }],
  stage1_v8:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 4.0 twin-turbo', price: '28 000 ₽' }],
  stage1_v8_675:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 6.75', price: '30 000 ₽' }],
  stage1_hybrid:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация гибридной системы', price: '32 000 ₽' }],
  stage1_diesel:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 4.0 diesel', price: '25 000 ₽' }],
  trans_zf:       [{ name: 'Настройка ZF 8HP', description: 'Калибровка 8-ст автомата', price: '18 000 ₽' }],
  trans_6speed:   [{ name: 'Настройка 6-ст АКПП', description: 'Калибровка 6-ст автомата', price: '15 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '9 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '12 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '15 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '13 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '10 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '8 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '7 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '6 000 ₽' }],
  tva_off:        [{ name: 'Отключение TVA', description: 'Tva - дросельная заслонка', price: '6 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '7 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '8 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '12 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '18 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '5 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '4 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '7 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Электромотор/инвертор/контроллер', price: '6 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '12 000 ₽' }],
  airmatic:       [{ name: 'Диагностика пневмоподвески', description: 'Adaptive Air Suspension', price: '6 000 ₽' }],
  awd_setup:      [{ name: 'Настройка полного привода', description: 'Torsen дифференциал AWD', price: '8 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '7 000 ₽' }],
  mulliner:       [{ name: 'Активация Mulliner функций', description: 'Раскодировка премиальных опций', price: '10 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const bentleyData = {

  'continental-gt': {
    'дорест (2003–2007)': {
      '6.0 W12 (552 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
    'FL (2007–2010)': {
      '6.0 W12 (560 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 Speed (610 л.с.)':       S(servicePresets.stage1_w12, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
    'FL2 (2010–2013)': {
      '6.0 W12 (575 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 Speed (625 л.с.)':       S(servicePresets.stage1_w12, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
    'II поколение дорест (2012–2015)': {
      '4.0 V8 (507 л.с.)':              S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 S (528 л.с.)':            S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 (575 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 Speed (625 л.с.)':       S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
    'II поколение FL (2015–2018)': {
      '4.0 V8 (507 л.с.)':              S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 S (528 л.с.)':            S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 (582 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 Speed (635 л.с.)':       S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
    'III поколение (2017–2024)': {
      '6.0 W12 (635 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 (550 л.с.)':              S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
    'IV поколение (2024–н.в.)': {
      '4.0 V8 Hybrid Core (671 л.с.)':  S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 Hybrid Azure (671 л.с.)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 Hybrid Speed (771 л.с.)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
  },

  'continental-gtc': {
    'см. Continental GT соответствующего поколения': S(),
  },

  'flying-spur': {
    'I поколение (2005–2013)': {
      '6.0 W12 (560 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '6.0 W12 Speed (610 л.с.)':       S(servicePresets.stage1_w12, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
    },
    'II поколение (2013–2019)': {
      '4.0 V8 (507 л.с.)':              S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 (625 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
    'III поколение (2019–2024)': {
      '4.0 V8 (550 л.с.)':              S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 (635 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '3.0 V6 Hybrid (450 л.с.)':       S(servicePresets.stage1_hybrid, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.airmatic, servicePresets.awd_setup),
    },
    'IV поколение (2025–н.в.)': {
      '4.0 V8 Hybrid Core (671 л.с.)':  S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 Hybrid Azure (671 л.с.)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 Hybrid Speed (771 л.с.)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
  },

  'bentayga': {
    'дорест (2016–2020)': {
      '6.0 W12 (608 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 (550 л.с.)':              S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 Diesel (435 л.с.)':       S(servicePresets.stage1_diesel, servicePresets.trans_zf, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 Speed (635 л.с.)':       S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
    'FL (2020–н.в.)': {
      '6.0 W12 (608 л.с.)':             S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 (550 л.с.)':              S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '3.0 V6 Hybrid (449 л.с.)':       S(servicePresets.stage1_hybrid, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.airmatic, servicePresets.awd_setup),
      '6.0 W12 Speed (635 л.с.)':       S(servicePresets.stage1_w12, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
      '4.0 V8 Speed (550 л.с.)':        S(servicePresets.stage1_v8, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic, servicePresets.awd_setup),
    },
  },

  'mulsanne': {
    'дорест (2010–2016)': {
      '6.75 V8 (512 л.с.)':             S(servicePresets.stage1_v8_675, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '6.75 V8 Speed (537 л.с.)':       S(servicePresets.stage1_v8_675, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
    },
    'FL (2016–2020)': {
      '6.75 V8 (512 л.с.)':             S(servicePresets.stage1_v8_675, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '6.75 V8 Speed (537 л.с.)':       S(servicePresets.stage1_v8_675, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '6.75 V8 EWB (512 л.с.)':         S(servicePresets.stage1_v8_675, servicePresets.trans_zf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.airmatic),
    },
  },

  'azure': {
    '1995–2003': {
      '6.75 V8 Turbo (400 л.с.)':       S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    '2006–2009': {
      '6.75 V8 Turbo (450 л.с.)':       S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '6.75 V8 T (500 л.с.)':           S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
    },
  },

  'brooklands': {
    '2008–2011': {
      '6.75 V8 Turbo (530 л.с.)':       S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
    },
  },

  'arnage': {
    '1998–2009': {
      '6.75 V8 (400–500 л.с.)':         S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'continental-r': {
    'дорест (1991–1994)': {
      '6.75 V8 Turbo (325 л.с.)':       S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'FL (1994–1996)': {
      '6.75 V8 Turbo (360 л.с.)':       S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'FL2 (1996–2003)': {
      '6.75 V8 Turbo (385–400 л.с.)':   S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '6.75 V8 T (420 л.с.)':           S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles),
      '6.75 V8 Mulliner (420 л.с.)':    S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'turbo-r': {
    'дорест (1985–1992)': {
      '6.75 V8 Turbo (300 л.с.)':       S(servicePresets.stage1_v8_675, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'FL (1992–1998)': {
      '6.75 V8 Turbo (325–385 л.с.)':   S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '6.75 V8 S (408 л.с.)':           S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles),
    },
    'Turbo RT (1998–1999)': {
      '6.75 V8 Turbo (400 л.с.)':       S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles),
      '6.75 V8 RT Mulliner (420 л.с.)': S(servicePresets.stage1_v8_675, servicePresets.trans_6speed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.mulliner, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'continental': {
    '1984–1995': {
      '6.75 V8 (200–241 л.с.)':         S(servicePresets.stage1_v8_675, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.coding),
    },
  },

  'eight': {
    '1984–1992': {
      '6.75 V8 (200–220 л.с.)':         S(servicePresets.stage1_v8_675, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.coding),
    },
  },

  't-series': {
    'T1 (1965–1977)': {
      '6.2/6.75 V8 (180–200 л.с.)':     S(servicePresets.stage1_v8_675, servicePresets.diagECU, servicePresets.coding),
    },
    'T2 (1977–1980)': {
      '6.75 V8 (200 л.с.)':             S(servicePresets.stage1_v8_675, servicePresets.diagECU, servicePresets.coding),
    },
  },

  's': {
    'S1 (1955–1959)': {
      '4.9 I6 (160 л.с.)':              S(servicePresets.diagECU, servicePresets.coding),
    },
    'S2 (1959–1962)': {
      '6.2 V8 (180 л.с.)':              S(servicePresets.stage1_v8_675, servicePresets.diagECU, servicePresets.coding),
    },
    'S3 (1962–1965)': {
      '6.2 V8 (200 л.с.)':              S(servicePresets.stage1_v8_675, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'r-type': {
    '1952–1955': {
      '4.6/4.9 I6 (155 л.с.)':          S(servicePresets.diagECU, servicePresets.coding),
      'Continental (4.9 I6 - 165 л.с.)': S(servicePresets.diagECU, servicePresets.mulliner, servicePresets.coding),
    },
  },

};