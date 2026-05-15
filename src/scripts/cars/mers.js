export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: '7G/9G-Tronic/Speedshift', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '18 000 ₽' }],
  stage1_amg43:   [{ name: 'Прошивка Stage 1', description: 'AMG 43/53 тюнинг', price: '22 000 ₽' }],
  stage1_amg63:   [{ name: 'Прошивка Stage 1', description: 'AMG 63/65 тюнинг', price: '28 000 ₽' }],
  stage1_amg_black:[{ name: 'Прошивка Stage 1', description: 'AMG Black Series/GT', price: '35 000 ₽' }],
  trans_7g:       [{ name: 'Настройка 7G-Tronic', description: 'Калибровка 7-ст автомата', price: '10 000 ₽' }],
  trans_9g:       [{ name: 'Настройка 9G-Tronic', description: 'Калибровка 9-ст автомата', price: '12 000 ₽' }],
  trans_amg:      [{ name: 'Настройка AMG Speedshift', description: 'AMG трансмиссия', price: '15 000 ₽' }],
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
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'EQ Power инвертор/контроллер', price: '4 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '8 000 ₽' }],
  airmatic:       [{ name: 'Диагностика Airmatic', description: 'Пневмоподвеска', price: '4 000 ₽' }],
  abc_setup:      [{ name: 'Настройка ABC', description: 'Active Body Control', price: '6 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  amg_mode:       [{ name: 'Активация AMG режимов', description: 'Раскодировка AMG функций', price: '7 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const mersData = {

  'c-class': {
    'W203 дорест (2000–2004)': {
      '1.8 Kompressor (M271)':        S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 Kompressor (M271)':        S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      '2.5/3.0 V6 (M272)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.trans_7g, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.2/2.7/3.0 CDI (OM611/OM612/OM613)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'C32/C55 AMG (M112/M113)':      S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.coding),
    },
    'W203 FL (2004–2007)': {
      '1.8 Kompressor (M271)':        S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.5/3.0/3.5 V6 (M272)':        S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.2/3.0 CDI (OM646/OM642)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      'C55 AMG (M113)':               S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.coding),
    },
    'W204 дорест (2007–2011)': {
      '1.8 Kompressor (M271)':        S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.5/3.0/3.5 V6 (M272)':        S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.2/3.0 CDI (OM646/OM642)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      'C63 AMG (M156)':               S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'W204 FL (2011–2014)': {
      '1.6/1.8 Turbo (M271)':         S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.5/3.0/3.5 V6 (M272)':        S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.2/3.0 CDI (OM651/OM642)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      'C63 AMG (M156)':               S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'C63 AMG Black Series (M156)':  S(servicePresets.stage1_amg_black, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'W205 дорест (2014–2018)': {
      '1.6/2.0 Turbo (M274)':         S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Turbo (M276)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.1/2.2 CDI (OM651)':          S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'C43 AMG 3.0 V6 (M276)':        S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'C63/C63S AMG (M177)':          S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'W205 FL (2018–2021)': {
      '1.5/2.0 Turbo (M264)':         S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Turbo (M276)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'C43 AMG 3.0 V6 (M276)':        S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'C63/C63S AMG (M177)':          S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'C300e/C300de (Hybrid)':        S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
    'W206 (2021–н.в.)': {
      '1.5 Turbo (M254)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.0 Turbo (M254)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'C43 AMG 2.0 Turbo (M139)':     S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'C63S E Performance (M139)':    S(servicePresets.stage1_amg63, servicePresets.hybrid_diag, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'C300e 4MATIC (Hybrid)':        S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'e-class': {
    'W210 дорест (1995–1999)': {
      '2.0/2.3 (M111)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.8/3.2/4.3 V8 (M112/M113)':   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.7/3.0/3.2 CDI (OM612/OM613)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'E55 AMG (M113)':               S(servicePresets.stage1_amg63, servicePresets.diagECU, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.coding),
    },
    'W210 FL (1999–2003)': {
      '2.0/2.3 (M111)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.8/3.2/4.3 V8 (M112/M113)':   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.7/3.0/3.2 CDI (OM612/OM613)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'E55 AMG (M113)':               S(servicePresets.stage1_amg63, servicePresets.diagECU, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.coding),
    },
    'W211 дорест (2002–2006)': {
      '1.8/2.0 Kompressor (M271)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.5/3.0/3.5 V6 (M272)':        S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '5.0/5.5 V8 (M113)':            S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '2.2/2.7/3.0/3.2 CDI (OM646/OM647/OM648)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'E55 AMG Kompressor (M113)':    S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.airmatic),
    },
    'W211 FL (2006–2009)': {
      '1.8/2.0 Kompressor (M271)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0/3.5 V6 (M272)':            S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '2.2/3.0 CDI (OM646/OM642)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      'E63 AMG (M156)':               S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
    },
    'W212 дорест (2009–2013)': {
      '1.8/2.0 Turbo (M271/M274)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0/3.5 V6 (M272/M276)':       S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '2.2/3.0 CDI (OM651/OM642)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      'E63 AMG (M157)':               S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
    },
    'W212 FL (2013–2016)': {
      '2.0 Turbo (M274)':             S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0/3.5 V6 Turbo (M276)':      S(servicePresets.stage1_turbo_hi, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '2.1/2.2 CDI (OM651)':          S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '3.0 CDI (OM642)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'E63/E63S AMG (M157)':          S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
    },
    'W213 дорест (2016–2020)': {
      '2.0 Turbo (M264)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Turbo (M256)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '3.0 CDI (OM656)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'E43 AMG (M276)':               S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      'E53 AMG (M256)':               S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      'E63/E63S AMG (M177)':          S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      'E300e/E300de (Hybrid)':        S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
    'W213 FL (2020–н.в.)': {
      '2.0 Turbo (M264)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Turbo (M256)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'E53 AMG 3.0 (M256)':           S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      'E63S AMG 4.0 V8 (M177)':       S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      'E300e/E400e (Hybrid)':         S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
  },

  's-class': {
    'W220 (1998–2005)': {
      '2.8/3.2/4.3/5.0 V8 (M112/M113)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '5.5 V12 (M137)':               S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '3.2/4.0 CDI (OM613/OM628)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off, servicePresets.airmatic),
      'S55 AMG (M113)':               S(servicePresets.stage1_amg63, servicePresets.diagECU, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.coding, servicePresets.airmatic),
    },
    'W221 дорест (2005–2009)': {
      '3.0/3.5 V6 (M272)':            S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '4.7/5.5 V8 (M273/M273)':       S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '6.0 V12 (M275)':               S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '3.0/3.2 CDI (OM642/OM648)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off, servicePresets.airmatic),
      'S63/S65 AMG (M156/M275)':      S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.abc_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'W221 FL (2009–2013)': {
      '3.0/3.5 V6 (M272)':            S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '4.7/5.5 V8 (M278)':            S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '6.0 V12 (M275)':               S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.airmatic),
      '3.0 CDI (OM642)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off, servicePresets.airmatic),
      'S63/S65 AMG (M157/M279)':      S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.abc_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'W222 дорест (2013–2017)': {
      '3.0 V6 Turbo (M276)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_7g, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '4.7 V8 Turbo (M278)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_7g, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '6.0 V12 Turbo (M277)':         S(servicePresets.stage1_turbo_hi, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '3.0 CDI (OM642)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off, servicePresets.airmatic),
      'S63/S65 AMG (M177/M279)':      S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.abc_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'S500e Plug-in (M276)':         S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding, servicePresets.airmatic),
    },
    'W222 FL (2017–2020)': {
      '3.0 V6 Turbo (M256)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '4.0 V8 Turbo (M176/M177)':     S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '6.0 V12 Turbo (M279)':         S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '3.0 CDI (OM656)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off, servicePresets.airmatic),
      'S63/S65 AMG (M177/M279)':      S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.abc_setup, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'S560e Plug-in (M256)':         S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding, servicePresets.airmatic),
    },
    'W223 (2020–н.в.)': {
      '3.0 I6 Turbo (M256)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '4.0 V8 Turbo (M176)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 CDI (OM656)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off, servicePresets.airmatic),
      'S63 AMG 4.0 V8 (M177)':        S(servicePresets.stage1_amg63, servicePresets.trans_9g, servicePresets.abc_setup, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'S580e 4MATIC (Hybrid)':        S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding, servicePresets.airmatic),
      'Maybach S-Class':              S(servicePresets.diagECU_plus, servicePresets.airmatic, servicePresets.coding),
    },
  },

  'gla': {
    'X156 дорест (2013–2017)': {
      '1.6/2.0 Turbo (M270/M270)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.2 CDI (OM651)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'GLA45 AMG (M133)':             S(servicePresets.stage1_amg43, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'X156 FL (2017–2020)': {
      '1.6/2.0 Turbo (M270/M270)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.2 CDI (OM651)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'GLA45 AMG (M133)':             S(servicePresets.stage1_amg43, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'H247 (2020–н.в.)': {
      '1.3/2.0 Turbo (M282/M260)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'GLA35 AMG (M260)':             S(servicePresets.stage1_amg43, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLA45 AMG (M139)':             S(servicePresets.stage1_amg43, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'glb': {
    'X247 (2019–н.в.)': {
      '1.3/2.0 Turbo (M282/M260)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'GLB35 AMG (M260)':             S(servicePresets.stage1_amg43, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'glc': {
    'X253 дорест (2015–2019)': {
      '2.0 Turbo (M274)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Turbo (M276)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.1/2.2 CDI (OM651)':          S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'GLC43 AMG (M276)':             S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLC63/63S AMG (M177)':         S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLC350e (Hybrid)':             S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
    'X253 FL (2019–н.в.)': {
      '2.0 Turbo (M264)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Turbo (M256)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'GLC43 AMG (M256)':             S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLC63S AMG (M177)':            S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLC300e/300de (Hybrid)':       S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'gle': {
    'W166 дорест (2011–2015)': {
      '2.0 Turbo (M274)':             S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0/3.5 V6 (M276)':            S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '5.5 V8 Turbo (M157)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.airmatic),
      '3.0 CDI (OM642)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'ML63 AMG (M157)':              S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'W166 FL (2015–2019)': {
      '2.0 Turbo (M274)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Turbo (M276)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 CDI (OM642)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'GLE43 AMG (M276)':             S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLE63/63S AMG (M157)':         S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLE500e Plug-in (M276)':       S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding, servicePresets.airmatic),
    },
    'V167 дорест (2019–2023)': {
      '2.0 Turbo (M264)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 I6 Turbo (M256)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '4.0 V8 Turbo (M176)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0/3.0 CDI (OM654/OM656)':    S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'GLE53 AMG (M256)':             S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLE63S AMG (M177)':            S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLE350de/GLE400e (Hybrid)':    S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding, servicePresets.airmatic),
    },
    'V167 FL (2023–н.в.)': {
      '2.0 Turbo (M264)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 I6 Turbo (M256)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'GLE53 AMG (M256)':             S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLE63S AMG (M177)':            S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'GLE350e/GLE400e (Hybrid)':     S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding, servicePresets.airmatic),
    },
  },

  'gls': {
    'X166 (2015–2019)': {
      '3.0 V6 Turbo (M276)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_7g, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '4.7/5.5 V8 (M278)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_7g, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 CDI (OM642)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'GLS63 AMG (M157)':             S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'X167 (2019–н.в.)': {
      '3.0 I6 Turbo (M256)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '4.0 V8 Turbo (M176)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 CDI (OM656)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'GLS600 4.0 V8 (M176)':         S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.airmatic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      'Maybach GLS600':               S(servicePresets.diagECU_plus, servicePresets.airmatic, servicePresets.coding),
    },
  },

  'g-class': {
    'W463 (1990–2018)': {
      '3.0/3.5 V6 (M272/M276)':       S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '5.5 V8 (M273/M157)':           S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 CDI (OM642)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'G63/G65 AMG (M157/M279)':      S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'W463A (2018–н.в.)': {
      '3.0 I6 Turbo (M256)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '4.0 V8 Turbo (M176/M177)':     S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.9 CDI (OM656)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'G63 AMG 4.0 V8 (M177)':        S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'cls': {
    'C219 дорест (2004–2008)': {
      '3.0/3.5 V6 (M272)':            S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '5.0/5.5 V8 (M113/M273)':       S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '3.0 CDI (OM642)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'CLS55/63 AMG (M113/M156)':     S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'C219 FL (2008–2010)': {
      '3.0/3.5 V6 (M272)':            S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '5.5 V8 (M273)':                S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '3.0 CDI (OM642)':              S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'CLS63 AMG (M156)':             S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'C218 дорест (2010–2014)': {
      '2.0/3.0 Turbo (M274/M276)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.5 V6 (M276)':                S(servicePresets.stage1_turbo_hi, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '5.5 V8 (M278)':                S(servicePresets.stage1_turbo_hi, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.2/3.0 CDI (OM651/OM642)':    S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      'CLS63 AMG (M157)':             S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'C218 FL (2014–2018)': {
      '2.0 Turbo (M274)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Turbo (M276)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.1 CDI (OM651)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'CLS63 AMG (M157)':             S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'C257 (2018–н.в.)': {
      '2.0/3.0 Turbo (M264/M256)':    S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'CLS53 AMG (M256)':             S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'a-class': {
    'W176 дорест (2012–2015)': {
      '1.6/2.0 Turbo (M270)':         S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '1.5/1.8/2.1 CDI (OM607/OM651)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'A45 AMG (M133)':               S(servicePresets.stage1_amg43, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'W176 FL (2015–2018)': {
      '1.6/2.0 Turbo (M270)':         S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '1.5/2.1 CDI (OM607/OM651)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'A45 AMG (M133)':               S(servicePresets.stage1_amg43, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'W177 (2018–н.в.)': {
      '1.3/2.0 Turbo (M282/M260)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '1.5/2.0 CDI (OM608/OM654)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'A35 AMG (M260)':               S(servicePresets.stage1_amg43, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'A45/A45S AMG (M139)':          S(servicePresets.stage1_amg43, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'b-class': {
    'W246 дорест (2011–2014)': {
      '1.6/2.0 Turbo (M270)':         S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '1.5/1.8/2.1 CDI (OM607/OM651)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'W246 FL (2014–2018)': {
      '1.6/2.0 Turbo (M270)':         S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '1.5/2.1 CDI (OM607/OM651)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'W247 (2019–н.в.)': {
      '1.3/2.0 Turbo (M282/M260)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '1.5/2.0 CDI (OM608/OM654)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'cla': {
    'C117 дорест (2013–2016)': {
      '1.6/2.0 Turbo (M270)':         S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.1 CDI (OM651)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'CLA45 AMG (M133)':             S(servicePresets.stage1_amg43, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'C117 FL (2016–2019)': {
      '1.6/2.0 Turbo (M270)':         S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.1 CDI (OM651)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'CLA45 AMG (M133)':             S(servicePresets.stage1_amg43, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'C118 (2019–н.в.)': {
      '1.3/2.0 Turbo (M282/M260)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '2.0 CDI (OM654)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      'CLA35 AMG (M260)':             S(servicePresets.stage1_amg43, servicePresets.trans_7g, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'CLA45/45S AMG (M139)':         S(servicePresets.stage1_amg43, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'slk / slc': {
    'R170 (1996–2004)': {
      '2.0/2.3 Kompressor (M111)':    S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '3.2 V6 (M112)':                S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      'SLK32 AMG (M112)':             S(servicePresets.stage1_amg63, servicePresets.diagECU, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.coding),
    },
    'R171 (2004–2011)': {
      '1.8/2.0 Kompressor (M271)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0/3.5 V6 (M272)':            S(servicePresets.stage1_na, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      'SLK55 AMG (M113)':             S(servicePresets.stage1_amg63, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'R172 дорест (2011–2015)': {
      '1.8/2.0 Turbo (M271/M274)':    S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.5 V6 (M276)':                S(servicePresets.stage1_turbo, servicePresets.trans_7g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      'SLK55 AMG (M152)':             S(servicePresets.stage1_amg63, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'R172 FL (2015–2020)': {
      '2.0 Turbo (M274)':             S(servicePresets.stage1_turbo, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.0 V6 Turbo (M276)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      'SLC43 AMG (M276)':             S(servicePresets.stage1_amg43, servicePresets.trans_9g, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'eqc': {
    'N293 (2019–н.в.)': {
      'EQC400 4MATIC':                S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'eqs': {
    'V297 (2021–н.в.)': {
      'EQS450+/EQS500':               S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.airmatic),
      'EQS580 4MATIC':                S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.airmatic),
      'AMG EQS53 4MATIC+':            S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.amg_mode),
    },
  },

  'eqe': {
    'V295 (2022–н.в.)': {
      'EQE300/EQE350':                S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.airmatic),
      'EQE500 4MATIC':                S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.airmatic),
      'AMG EQE43/53 4MATIC+':         S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.amg_mode),
    },
  },

  'amg gt': {
    'C190 (2014–2020)': {
      'AMG GT 4.0 V8 (M178)':         S(servicePresets.stage1_amg_black, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'AMG GT S/C/R (M178)':          S(servicePresets.stage1_amg_black, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'AMG GT Black Series (M178)':   S(servicePresets.stage1_amg_black, servicePresets.trans_amg, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'C190 FL (2020–2023)': {
      'AMG GT 4.0 V8 (M178)':         S(servicePresets.stage1_amg_black, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
      'AMG GT S/C/R (M178)':          S(servicePresets.stage1_amg_black, servicePresets.trans_amg, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.amg_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'e-class coupe':    { 'см. E-Class соответствующего поколения': S() },
  'e-class cabrio':   { 'см. E-Class соответствующего поколения': S() },
  'c-class coupe':    { 'см. C-Class соответствующего поколения': S() },
  'c-class cabrio':   { 'см. C-Class соответствующего поколения': S() },
  'glc coupe':        { 'см. GLC соответствующего поколения': S() },
  'gle coupe':        { 'см. GLE соответствующего поколения': S() },
  'maybach':          { 'см. S-Class или GLS Maybach': S() },
};  