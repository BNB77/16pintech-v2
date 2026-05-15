export const servicePresets = {
  diagECU:          [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 500 ₽' }],
  diagECU_plus:     [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 500 ₽' }],
  diagTrans:        [{ name: 'Диагностика трансмиссии', description: '68RFE/8HP/ZF8', price: '3 000 ₽' }],
  stage1_v6:        [{ name: 'Прошивка Stage 1', description: 'Оптимизация V6 Pentastar', price: '12 000 ₽' }],
  stage1_hemi57:    [{ name: 'Прошивка Stage 1', description: 'Тюнинг 5.7L HEMI V8', price: '18 000 ₽' }],
  stage1_hemi64:    [{ name: 'Прошивка Stage 1', description: 'Тюнинг 6.4L HEMI V8', price: '22 000 ₽' }],
  stage1_ecodiesel: [{ name: 'Прошивка Stage 1', description: 'Тюнинг 3.0L EcoDiesel V6', price: '20 000 ₽' }],
  stage1_cummins:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг Cummins 5.9/6.7L', price: '25 000 ₽' }],
  stage1_trx:       [{ name: 'Прошивка Stage 1', description: 'Тюнинг 6.2L Supercharged V8', price: '35 000 ₽' }],
  stage1_hurricane: [{ name: 'Прошивка Stage 1', description: 'Тюнинг 3.0L Hurricane I6', price: '20 000 ₽' }],
  trans_68rfe:      [{ name: 'Настройка 68RFE', description: 'Калибровка 6-ст автомата', price: '12 000 ₽' }],
  trans_8hp:        [{ name: 'Настройка 8HP/ZF8', description: 'Калибровка 8-ст автомата', price: '14 000 ₽' }],
  trans_aisin:      [{ name: 'Настройка AISIN', description: 'Калибровка 6-ст автомата', price: '12 000 ₽' }],
  egr_off:          [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '8 000 ₽' }],
  dpf_off:          [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '10 000 ₽' }],
  dpf_off_def:      [{ name: 'Удаление DPF + DEF', description: 'DPF + система DEF (AdBlue)', price: '13 000 ₽' }],
  def_off:          [{ name: 'Отключение DEF (SCR)', description: 'Удаление системы AdBlue', price: '9 000 ₽' }],
  mds_off:          [{ name: 'Отключение MDS', description: 'Multi-Displacement System', price: '7 000 ₽' }],
  vmax_off:         [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '7 000 ₽' }],
  burbles:          [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '10 000 ₽' }],
  euro2:            [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '15 000 ₽' }],
  dtc_off:          [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '3 500 ₽' }],
  disconnect_sens:  [{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '2 500 ₽' }],
  coding:           [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '6 000 ₽' }],
  throttle_boost:   [{ name: 'Throttle Response', description: 'Улучшение отклика педали газа', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const ramData = {

  '1500': {
    'III поколение (2002–2005)': {
      '3.7L Magnum V6':               S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '4.7L Magnum V8':               S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
    },
    'III поколение FL (2006–2008)': {
      '3.7L Magnum V6':               S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '4.7L Magnum V8':               S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
    },
    'IV поколение дорест (2009–2013)': {
      '3.6L Pentastar V6':            S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.coding, servicePresets.throttle_boost, servicePresets.vmax_off),
      '3.7L Magnum V6':               S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '4.7L Magnum V8':               S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
    },
    'IV поколение FL (2013–2018)': {
      '3.6L Pentastar V6':            S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.coding, servicePresets.throttle_boost, servicePresets.vmax_off),
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '3.0L EcoDiesel V6':            S(servicePresets.stage1_ecodiesel, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'V поколение дорест (2019–2022)': {
      '3.6L Pentastar V6':            S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.coding, servicePresets.throttle_boost, servicePresets.vmax_off),
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '3.0L EcoDiesel V6':            S(servicePresets.stage1_ecodiesel, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'V поколение FL (2023–н.в.)': {
      '3.6L Pentastar V6':            S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.coding, servicePresets.throttle_boost, servicePresets.vmax_off),
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '3.0L Hurricane I6 Standard':   S(servicePresets.stage1_hurricane, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.coding, servicePresets.throttle_boost, servicePresets.burbles, servicePresets.vmax_off),
      '3.0L Hurricane I6 High-Output': S(servicePresets.stage1_hurricane, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.coding, servicePresets.throttle_boost, servicePresets.burbles, servicePresets.vmax_off),
    },
    'TRX (2021–н.в.)': {
      '6.2L Supercharged HEMI V8':    S(servicePresets.stage1_trx, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
    },
  },

  '2500': {
    'III поколение (2003–2005)': {
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
      '5.9L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'III поколение FL (2006–2009)': {
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
      '5.9L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      '6.7L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'IV поколение дорест (2010–2013)': {
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '6.7L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'IV поколение FL (2014–2019)': {
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '6.4L HEMI V8':                 S(servicePresets.stage1_hemi64, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '6.7L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'V поколение (2019–н.в.)': {
      '6.4L HEMI V8':                 S(servicePresets.stage1_hemi64, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '6.7L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
  },

  '3500': {
    'III поколение (2003–2005)': {
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
      '5.9L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      '8.0L Magnum V10':              S(servicePresets.stage1_hemi64, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
    },
    'III поколение FL (2006–2009)': {
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
      '5.9L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      '6.7L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'IV поколение дорест (2010–2013)': {
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '6.7L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'IV поколение FL (2014–2019)': {
      '5.7L HEMI V8':                 S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '6.4L HEMI V8':                 S(servicePresets.stage1_hemi64, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '6.7L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'V поколение (2019–н.в.)': {
      '6.4L HEMI V8':                 S(servicePresets.stage1_hemi64, servicePresets.diagECU, servicePresets.trans_8hp, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.throttle_boost, servicePresets.vmax_off),
      '6.7L Cummins I6 Diesel':       S(servicePresets.stage1_cummins, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      '6.7L Cummins I6 Diesel HO':    S(servicePresets.stage1_cummins, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_68rfe, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
  },

  'promaster': {
    'I поколение дорест (2014–2018)': {
      '3.6L Pentastar V6':            S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.coding, servicePresets.throttle_boost),
      '3.0L EcoDiesel I4':            S(servicePresets.stage1_ecodiesel, servicePresets.dpf_off_def, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'I поколение FL (2019–н.в.)': {
      '3.6L Pentastar V6':            S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.coding, servicePresets.throttle_boost),
    },
  },

  'promaster city': {
    'I поколение (2015–2022)': {
      '2.4L Tigershark I4':           S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.coding, servicePresets.throttle_boost),
    },
  },

  'dakota': {
    'III поколение (2005–2011)': {
      '3.7L Magnum V6':               S(servicePresets.stage1_v6, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.coding),
      '4.7L Magnum V8':               S(servicePresets.stage1_hemi57, servicePresets.diagECU, servicePresets.trans_aisin, servicePresets.diagTrans, servicePresets.mds_off, servicePresets.coding, servicePresets.burbles),
    },
  },
};
