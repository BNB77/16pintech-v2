export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: '6/8/10-ст автомат', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг EcoBoost двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '18 000 ₽' }],
  stage1_v8:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 двигателя', price: '22 000 ₽' }],
  trans_6sp:      [{ name: 'Настройка 6AT', description: 'Калибровка 6-ст автомата', price: '10 000 ₽' }],
  trans_8sp:      [{ name: 'Настройка 8AT', description: 'Калибровка 8-ст автомата', price: '11 000 ₽' }],
  trans_10sp:     [{ name: 'Настройка 10AT', description: 'Калибровка 10-ст автомата', price: '12 000 ₽' }],
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
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Hybrid инвертор/контроллер', price: '4 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '8 000 ₽' }],
  airsusp:        [{ name: 'Диагностика пневмоподвески', description: 'Адаптивная подвеска', price: '4 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const lincolnData = {

  'navigator': {
    '1 поколение UN173 (1997–2002)': {
      '5.4 V8 InTech':                S(servicePresets.stage1_v8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    '2 поколение дорест U228 (2002–2004)': {
      '5.4 V8 DOHC':                  S(servicePresets.stage1_v8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    '2 поколение FL U228 (2004–2006)': {
      '5.4 V8 DOHC (300 л.с.)':       S(servicePresets.stage1_v8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    '3 поколение дорест U326 (2007–2014)': {
      '5.4 V8 Triton (300-310 л.с.)': S(servicePresets.stage1_v8, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airsusp),
    },
    '3 поколение FL U326 (2014–2017)': {
      '5.4 V8 Triton (310 л.с.)':     S(servicePresets.stage1_v8, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airsusp),
    },
    '4 поколение дорест U554 (2017–2022)': {
      '3.5 V6 EcoBoost Twin-Turbo (450 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_10sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airsusp),
    },
    '4 поколение FL U554 (2022–н.в.)': {
      '3.5 V6 EcoBoost Twin-Turbo (440 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_10sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airsusp),
    },
  },

  'aviator': {
    '1 поколение UN152 (2002–2005)': {
      '4.6 V8 (302 л.с.)':            S(servicePresets.stage1_v8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    '2 поколение U611 (2018–н.в.)': {
      '3.0 V6 Twin-Turbo (400 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_10sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airsusp),
      'Grand Touring 3.0 Hybrid (494 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.trans_10sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.airsusp),
    },
  },

  'nautilus': {
    '1 поколение U540 (2018–2021)': {
      '2.0 EcoBoost (245 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.trans_8sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.7 V6 EcoBoost (335 л.с.)':   S(servicePresets.stage1_turbo_hi, servicePresets.trans_8sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    '1 поколение FL U540 (2021–2024)': {
      '2.0 EcoBoost (250 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.trans_8sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.7 V6 EcoBoost (335 л.с.)':   S(servicePresets.stage1_turbo_hi, servicePresets.trans_8sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    '2 поколение CDX707 (2024–н.в.)': {
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_8sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
  },

  'mkx': {
    '1 поколение дорест (2006–2010)': {
      '3.7 V6 Duratec (265 л.с.)':    S(servicePresets.stage1_na, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    '1 поколение FL (2010–2014)': {
      '3.7 V6 Duratec (305 л.с.)':    S(servicePresets.stage1_na, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    '2 поколение (2015–2018)': {
      '2.7 V6 EcoBoost (335 л.с.)':   S(servicePresets.stage1_turbo_hi, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.7 V6 Duratec (303 л.с.)':    S(servicePresets.stage1_na, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'corsair': {
    '1 поколение дорест (2019–2022)': {
      '2.0 EcoBoost (250 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.trans_8sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.3 EcoBoost (295 л.с.)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_8sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    '1 поколение FL (2022–н.в.)': {
      '2.0 EcoBoost (250 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.trans_8sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
  },

  'mkc': {
    '1 поколение дорест (2014–2018)': {
      '2.0 EcoBoost (245 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.3 EcoBoost (285 л.с.)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    '1 поколение FL (2018–2019)': {
      '2.0 EcoBoost (245 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.trans_6sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.3 EcoBoost (285 л.с.)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_6sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'continental': {
    '10 поколение D544 (2016–2020)': {
      '2.7 V6 Twin-Turbo (335 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_6sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airsusp),
      '3.0 V6 Twin-Turbo (400 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_6sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airsusp),
      '3.7 V6 (305 л.с.)':            S(servicePresets.stage1_na, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airsusp),
    },
  },

  'mkz': {
    '1 поколение (2006–2012)': {
      '3.5 V6 (263 л.с.)':            S(servicePresets.stage1_na, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '3.7 V6 (274 л.с.)':            S(servicePresets.stage1_na, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.5 Hybrid (191 л.с.)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
    '2 поколение дорест (2012–2015)': {
      '2.0 EcoBoost (240 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.7 V6 (300 л.с.)':            S(servicePresets.stage1_na, servicePresets.trans_6sp, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.0 Hybrid (188 л.с.)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
    '2 поколение FL (2016–2020)': {
      '2.0 EcoBoost (245 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.trans_6sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Twin-Turbo (400 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_6sp, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 Hybrid (188 л.с.)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'town car': {
    '2 поколение (1990–1997)': {
      '4.6 V8 Modular (190-210 л.с.)': S(servicePresets.stage1_v8, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
    '3 поколение дорест (1998–2003)': {
      '4.6 V8 SOHC (205-220 л.с.)':   S(servicePresets.stage1_v8, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.airsusp),
    },
    '3 поколение FL (2003–2011)': {
      '4.6 V8 SOHC (239 л.с.)':       S(servicePresets.stage1_v8, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.airsusp),
    },
  },

};
