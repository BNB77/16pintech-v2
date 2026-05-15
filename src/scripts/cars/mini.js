export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/DCT/Steptronic', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '18 000 ₽' }],
  stage1_s:       [{ name: 'Прошивка Stage 1', description: 'Cooper S тюнинг', price: '16 000 ₽' }],
  stage1_jcw:     [{ name: 'Прошивка Stage 1', description: 'John Cooper Works тюнинг', price: '20 000 ₽' }],
  stage1_jcw_gp:  [{ name: 'Прошивка Stage 1', description: 'JCW GP тюнинг', price: '25 000 ₽' }],
  stage2:         [{ name: 'Прошивка Stage 2', description: 'Stage 2 с даунпайпом', price: '22 000 ₽' }],
  trans_auto:     [{ name: 'Настройка АКПП', description: 'Калибровка автомата', price: '10 000 ₽' }],
  trans_dct:      [{ name: 'Настройка DCT', description: 'Калибровка робота DCT', price: '12 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '6 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '8 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '10 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '9 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '7 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '5 000 ₽' }],
  lambda_off:     [{ name: 'Отключение лямбда-зондов', description: 'O2 sensor - кислородные датчики', price: '5 000 ₽' }],
  cat_off:        [{ name: 'Удаление катализаторов', description: 'Cat delete - отключение катов', price: '6 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '4 000 ₽' }],
  tva_off:        [{ name: 'Отключение Valvetronic', description: 'Система изменения хода клапанов', price: '5 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '5 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '6 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  crackle:        [{ name: 'Crackle Map', description: 'Потрескивания в выхлопе', price: '7 000 ₽' }],
  launch:         [{ name: 'Launch Control', description: 'Система старта с места', price: '10 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '11 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '3 000 ₽' }],
  start_stop_off: [{ name: 'Отключение Start-Stop', description: 'Деактивация системы старт-стоп', price: '4 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  jcw_mode:       [{ name: 'Активация JCW режимов', description: 'Раскодировка JCW функций', price: '7 000 ₽' }],
  exhaust_valve:  [{ name: 'Управление клапанами выхлопа', description: 'Exhaust valve control', price: '6 000 ₽' }],
  cold_start:     [{ name: 'Отключение cold start', description: 'Убрать прогревочные обороты', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const miniData = {

  'cooper': {
    'R50/R52/R53 дорест (2001–2004)': {
      '1.6 One (W10B16)':             S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.coding),
      '1.6 Cooper (W10B16)':          S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.coding, servicePresets.cat_off),
      '1.6 Cooper S (W11B16)':        S(servicePresets.stage1_s, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.cat_off, servicePresets.vmax_off, servicePresets.burbles),
    },
    'R50/R52/R53 FL (2004–2006)': {
      '1.6 One (W10B16)':             S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.coding),
      '1.6 Cooper (W10B16)':          S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.coding, servicePresets.cat_off),
      '1.6 Cooper S (W11B16)':        S(servicePresets.stage1_s, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.cat_off, servicePresets.vmax_off, servicePresets.burbles),
    },
    'R55/R56/R57 дорест (2006–2010)': {
      '1.4 One (N12B14)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.coding),
      '1.6 One/Cooper (N12B16)':      S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.coding, servicePresets.cat_off),
      '1.6 Cooper S (N14B16)':        S(servicePresets.stage1_s, servicePresets.stage2, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles),
      '1.6 John Cooper Works (N14B16)': S(servicePresets.stage1_jcw, servicePresets.stage2, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
      '1.6 Cooper D (N47C16)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'R55/R56/R57 FL (2010–2014)': {
      '1.6 One (N16B16)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.coding, servicePresets.gpf_off),
      '1.6 Cooper (N16B16)':          S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.coding, servicePresets.cat_off, servicePresets.gpf_off),
      '1.6 Cooper S (N18B16)':        S(servicePresets.stage1_s, servicePresets.stage2, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.crackle),
      '1.6 John Cooper Works (N18B16)': S(servicePresets.stage1_jcw, servicePresets.stage2, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
      '1.6 Cooper D (N47C16)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.0 Cooper SD (N47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
    },
    'F55/F56/F57 дорест (2014–2018)': {
      '1.5 One/Cooper (B38A15)':      S(servicePresets.stage1_turbo, servicePresets.trans_dct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off, servicePresets.start_stop_off),
      '2.0 Cooper S (B48A20)':        S(servicePresets.stage1_s, servicePresets.stage2, servicePresets.trans_dct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.crackle, servicePresets.exhaust_valve),
      '2.0 John Cooper Works (B48A20)': S(servicePresets.stage1_jcw, servicePresets.stage2, servicePresets.trans_dct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.exhaust_valve),
      '1.5 Cooper D (B37C15)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.0 Cooper SD (B47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
    },
    'F55/F56/F57 FL (2018–2023)': {
      '1.5 One/Cooper (B38A15)':      S(servicePresets.stage1_turbo, servicePresets.trans_dct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off, servicePresets.start_stop_off, servicePresets.cold_start),
      '2.0 Cooper S (B48A20)':        S(servicePresets.stage1_s, servicePresets.stage2, servicePresets.trans_dct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.crackle, servicePresets.exhaust_valve),
      '2.0 John Cooper Works (B48A20)': S(servicePresets.stage1_jcw, servicePresets.stage2, servicePresets.trans_dct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.exhaust_valve),
      '1.5 Cooper D (B37C15)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.0 Cooper SD (B47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
    },
  },

  'countryman': {
    'R60 дорест (2010–2014)': {
      '1.6 One/Cooper (N16B16)':      S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '1.6 Cooper S (N18B16)':        S(servicePresets.stage1_s, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles),
      '1.6 Cooper S ALL4 (N18B16)':   S(servicePresets.stage1_s, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles),
      '1.6 John Cooper Works (N18B16)': S(servicePresets.stage1_jcw, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
      '1.6 Cooper D (N47C16)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.0 Cooper SD (N47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'R60 FL (2014–2017)': {
      '1.6 Cooper (N16B16)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '1.6 Cooper S (N18B16)':        S(servicePresets.stage1_s, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles),
      '1.6 John Cooper Works (N18B16)': S(servicePresets.stage1_jcw, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
      '1.6 Cooper D (N47C16)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.0 Cooper SD (N47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'F60 дорест (2017–2020)': {
      '1.5 Cooper (B38A15)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off, servicePresets.start_stop_off),
      '2.0 Cooper S (B48A20)':        S(servicePresets.stage1_s, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_valve),
      '2.0 John Cooper Works (B48A20)': S(servicePresets.stage1_jcw, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.exhaust_valve),
      '1.5 Cooper D (B37C15)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.0 Cooper SD (B47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'F60 FL (2020–н.в.)': {
      '1.5 Cooper (B38A15)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off, servicePresets.start_stop_off, servicePresets.cold_start),
      '2.0 Cooper S (B48A20)':        S(servicePresets.stage1_s, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.crackle, servicePresets.exhaust_valve),
      '2.0 John Cooper Works (B48A20)': S(servicePresets.stage1_jcw, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.exhaust_valve),
      '1.5 Cooper D (B37C15)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.0 Cooper SD (B47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      'Cooper SE ALL4 (Hybrid)':      S(servicePresets.stage1_turbo, servicePresets.diagECU_plus, servicePresets.trans_auto, servicePresets.diagTrans, servicePresets.coding),
    },
  },

  'clubman': {
    'R55 (2007–2014)': {
      '1.6 One/Cooper (N12B16)':      S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.coding, servicePresets.cat_off),
      '1.6 Cooper S (N14B16/N18B16)': S(servicePresets.stage1_s, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles),
      '1.6 John Cooper Works (N18B16)': S(servicePresets.stage1_jcw, servicePresets.diagECU, servicePresets.trans_auto, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
      '1.6 Cooper D (N47C16)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.0 Cooper SD (N47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'F54 дорест (2015–2019)': {
      '1.5 Cooper (B38A15)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off, servicePresets.start_stop_off),
      '2.0 Cooper S (B48A20)':        S(servicePresets.stage1_s, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_valve),
      '2.0 John Cooper Works (B48A20)': S(servicePresets.stage1_jcw, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.exhaust_valve),
      '1.5 Cooper D (B37C15)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.0 Cooper SD (B47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'F54 FL (2019–2023)': {
      '1.5 Cooper (B38A15)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off, servicePresets.start_stop_off, servicePresets.cold_start),
      '2.0 Cooper S (B48A20)':        S(servicePresets.stage1_s, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.crackle, servicePresets.exhaust_valve),
      '2.0 John Cooper Works (B48A20)': S(servicePresets.stage1_jcw, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.exhaust_valve),
      '1.5 Cooper D (B37C15)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.0 Cooper SD (B47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
  },

  'paceman': {
    'R61 (2012–2016)': {
      '1.6 Cooper (N16B16)':          S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '1.6 Cooper S (N18B16)':        S(servicePresets.stage1_s, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles),
      '1.6 John Cooper Works (N18B16)': S(servicePresets.stage1_jcw, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
      '1.6 Cooper D (N47C16)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.0 Cooper SD (N47C20)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  'roadster': {
    'R58/R59 (2012–2015)': {
      '1.6 Cooper (N16B16)':          S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.gpf_off),
      '1.6 Cooper S (N18B16)':        S(servicePresets.stage1_s, servicePresets.diagECU, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.crackle),
      '1.6 John Cooper Works (N18B16)': S(servicePresets.stage1_jcw, servicePresets.diagECU, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
    },
  },

  'coupe': {
    'R58 (2011–2015)': {
      '1.6 Cooper (N16B16)':          S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.gpf_off),
      '1.6 Cooper S (N18B16)':        S(servicePresets.stage1_s, servicePresets.diagECU, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.crackle),
      '1.6 John Cooper Works (N18B16)': S(servicePresets.stage1_jcw, servicePresets.diagECU, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
    },
  },

  'cabrio': {
    'см. Cooper соответствующего поколения': S(),
  },

  'electric': {
    'Cooper SE F56 (2020–2023)': {
      'Electric (электро)':           S(servicePresets.diagECU_plus, servicePresets.coding),
    },
    'Cooper SE F65/F66 (2023–н.в.)': {
      'Electric (электро)':           S(servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'jcw gp': {
    'R53 GP (2006)': {
      '1.6 John Cooper Works GP (W11B16)': S(servicePresets.stage1_jcw_gp, servicePresets.diagECU, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
    },
    'R56 GP (2012)': {
      '1.6 John Cooper Works GP (N18B16)': S(servicePresets.stage1_jcw_gp, servicePresets.diagECU, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch),
    },
    'F56 GP (2020)': {
      '2.0 John Cooper Works GP (B48A20)': S(servicePresets.stage1_jcw_gp, servicePresets.trans_dct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.jcw_mode, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch, servicePresets.exhaust_valve),
    },
  },

};
