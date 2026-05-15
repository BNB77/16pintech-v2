export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '8 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ расширенная', description: 'Углубленная диагностика с логами', price: '12 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'E-Gear/ISR/LDF', price: '10 000 ₽' }],
  stage1_v10:     [{ name: 'Прошивка Stage 1', description: 'Тюнинг атмо V10', price: '45 000 ₽' }],
  stage1_v10_hi:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг V10 Performance', price: '55 000 ₽' }],
  stage1_v12:     [{ name: 'Прошивка Stage 1', description: 'Тюнинг атмо V12', price: '60 000 ₽' }],
  stage1_v12_hi:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг V12 SV/SVJ', price: '75 000 ₽' }],
  stage1_v8_turbo:[{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 Biturbo', price: '50 000 ₽' }],
  stage1_v8_perf: [{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 Performante', price: '60 000 ₽' }],
  stage1_hybrid:  [{ name: 'Прошивка Stage 1 Hybrid', description: 'Тюнинг гибридной системы', price: '85 000 ₽' }],
  trans_egear:    [{ name: 'Настройка E-Gear', description: 'Калибровка E-Gear', price: '25 000 ₽' }],
  trans_isr:      [{ name: 'Настройка ISR', description: 'Калибровка ISR трансмиссии', price: '30 000 ₽' }],
  trans_ldf:      [{ name: 'Настройка LDF', description: 'Калибровка LDF коробки', price: '35 000 ₽' }],
  cat_off:        [{ name: 'Удаление катализаторов', description: 'Sport cats/Decat', price: '25 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр твердых частиц', price: '30 000 ₽' }],
  lambda_off:     [{ name: 'Отключение лямбда-зондов', description: 'O2 sensors off', price: '20 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Speed limiter removal', price: '15 000 ₽' }],
  launch_opt:     [{ name: 'Оптимизация Launch Control', description: 'LC tuning', price: '25 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs Pro', description: 'Спортивные хлопки выхлопа', price: '35 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Полное отключение экологии', price: '40 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '15 000 ₽' }],
  valves_ctrl:    [{ name: 'Управление заслонками выхлопа', description: 'Exhaust valve control', price: '20 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'HV батарея/инверторы', price: '15 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'E-motor calibration', price: '25 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '20 000 ₽' }],
  anima_tune:     [{ name: 'Настройка ANIMA', description: 'Режимы вождения Strada/Sport/Corsa', price: '25 000 ₽' }],
  ads_tune:       [{ name: 'Настройка ADS/LDS', description: 'Магнитная подвеска', price: '20 000 ₽' }],
  awd_tune:       [{ name: 'Настройка AWD', description: 'Калибровка полного привода', price: '30 000 ₽' }],
};
 
const S = (...sets) => sets.flat();
 
export const lamboData = {
 
  'gallardo': {
    'дорестайлинг (2003–2008)': {
      '5.0 V10 (500 л.с.)':           S(servicePresets.stage1_v10, servicePresets.trans_egear, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles),
      '5.2 V10 (520 л.с.)':           S(servicePresets.stage1_v10, servicePresets.trans_egear, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles),
      'Superleggera 5.2 V10 (530 л.с.)': S(servicePresets.stage1_v10_hi, servicePresets.trans_egear, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_opt),
    },
    'FL (2008–2013)': {
      'LP 550-2 (550 л.с.) RWD':      S(servicePresets.stage1_v10_hi, servicePresets.trans_egear, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles),
      'LP 560-4 (560 л.с.)':          S(servicePresets.stage1_v10_hi, servicePresets.trans_egear, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.awd_tune),
      'LP 570-4 Superleggera (570 л.с.)': S(servicePresets.stage1_v10_hi, servicePresets.trans_egear, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_opt, servicePresets.awd_tune),
    },
  },
 
  'murcielago': {
    'дорестайлинг (2001–2006)': {
      '6.2 V12 (580 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_egear, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.awd_tune),
    },
    'FL LP640 (2006–2010)': {
      '6.5 V12 (640 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_egear, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.awd_tune),
      'LP670-4 SV (670 л.с.)':        S(servicePresets.stage1_v12_hi, servicePresets.trans_egear, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_opt, servicePresets.awd_tune),
    },
  },
 
  'aventador': {
    'LP700-4 (2011–2016)': {
      '6.5 V12 (700 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_isr, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.anima_tune, servicePresets.awd_tune),
    },
    'LP750-4 SV (2015–2017)': {
      '6.5 V12 (750 л.с.)':           S(servicePresets.stage1_v12_hi, servicePresets.trans_isr, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.launch_opt, servicePresets.anima_tune, servicePresets.awd_tune),
    },
    'LP740-4 S (2016–2021)': {
      '6.5 V12 (740 л.с.)':           S(servicePresets.stage1_v12_hi, servicePresets.trans_isr, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.anima_tune, servicePresets.awd_tune),
    },
    'LP770-4 SVJ (2018–2021)': {
      '6.5 V12 (770 л.с.)':           S(servicePresets.stage1_v12_hi, servicePresets.trans_isr, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.launch_opt, servicePresets.anima_tune, servicePresets.ads_tune, servicePresets.awd_tune),
    },
  },
 
  'huracan': {
    'дорестайлинг (2014–2019)': {
      'LP580-2 (580 л.с.) RWD':       S(servicePresets.stage1_v10, servicePresets.trans_ldf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.anima_tune),
      'LP610-4 (610 л.с.)':           S(servicePresets.stage1_v10_hi, servicePresets.trans_ldf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.anima_tune, servicePresets.awd_tune),
      'Performante 5.2 V10 (640 л.с.)': S(servicePresets.stage1_v10_hi, servicePresets.trans_ldf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.launch_opt, servicePresets.anima_tune, servicePresets.ads_tune, servicePresets.awd_tune),
    },
    'EVO (2019–2024)': {
      'EVO 5.2 V10 (640 л.с.)':       S(servicePresets.stage1_v10_hi, servicePresets.trans_ldf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.anima_tune, servicePresets.awd_tune, servicePresets.coding),
      'EVO RWD 5.2 V10 (610 л.с.)':   S(servicePresets.stage1_v10_hi, servicePresets.trans_ldf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.anima_tune, servicePresets.coding),
      'STO 5.2 V10 (640 л.с.) RWD':   S(servicePresets.stage1_v10_hi, servicePresets.trans_ldf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.launch_opt, servicePresets.anima_tune, servicePresets.ads_tune),
      'Tecnica 5.2 V10 (640 л.с.) RWD': S(servicePresets.stage1_v10_hi, servicePresets.trans_ldf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.anima_tune, servicePresets.ads_tune),
    },
  },
 
  'urus': {
    'дорестайлинг (2018–2022)': {
      '4.0 V8 Biturbo (650 л.с.)':    S(servicePresets.stage1_v8_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.anima_tune, servicePresets.ads_tune, servicePresets.awd_tune, servicePresets.coding),
    },
    'FL (2022–н.в.)': {
      'Urus S 4.0 V8 (666 л.с.)':     S(servicePresets.stage1_v8_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.anima_tune, servicePresets.ads_tune, servicePresets.awd_tune, servicePresets.coding),
      'Urus Performante 4.0 V8 (666 л.с.)': S(servicePresets.stage1_v8_perf, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.launch_opt, servicePresets.anima_tune, servicePresets.ads_tune, servicePresets.awd_tune, servicePresets.coding),
    },
  },
 
  'revuelto': {
    'I поколение (2023–н.в.)': {
      '6.5 V12 Hybrid (1015 л.с.)':   S(servicePresets.stage1_hybrid, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.launch_opt, servicePresets.anima_tune, servicePresets.ads_tune, servicePresets.awd_tune, servicePresets.coding),
    },
  },
 
  'countach': {
    'LP 400 (1974–1978)': {
      '4.0 V12 (375 л.с.)':           S(servicePresets.diagECU, servicePresets.trans_egear, servicePresets.cat_off, servicePresets.burbles),
    },
    'LP 500S (1982–1985)': {
      '4.8 V12 (375 л.с.)':           S(servicePresets.diagECU, servicePresets.trans_egear, servicePresets.cat_off, servicePresets.burbles),
    },
    'LP 5000 QV (1985–1990)': {
      '5.2 V12 (455 л.с.)':           S(servicePresets.stage1_v12, servicePresets.diagECU, servicePresets.trans_egear, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.burbles),
    },
    'LPI 800-4 (2021–2022)': {
      '6.5 V12 Hybrid (814 л.с.)':    S(servicePresets.stage1_hybrid, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.cat_off, servicePresets.gpf_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles, servicePresets.valves_ctrl, servicePresets.coding),
    },
  },
 
  'diablo': {
    'дорестайлинг (1990–1993)': {
      '5.7 V12 (492 л.с.)':           S(servicePresets.stage1_v12, servicePresets.diagECU, servicePresets.trans_egear, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.burbles),
    },
    'VT/SE (1993–1998)': {
      '5.7 V12 (492–530 л.с.)':       S(servicePresets.stage1_v12, servicePresets.diagECU, servicePresets.trans_egear, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.burbles, servicePresets.awd_tune),
    },
    'SV/GT (1995–2001)': {
      '5.7 V12 (530 л.с.)':           S(servicePresets.stage1_v12, servicePresets.diagECU, servicePresets.trans_egear, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles),
      '6.0 V12 (575 л.с.)':           S(servicePresets.stage1_v12_hi, servicePresets.diagECU, servicePresets.trans_egear, servicePresets.cat_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles),
    },
  },
 
  'gallardo-spyder':    { 'см. Gallardo соответствующего поколения': S() },
  'huracan-spyder':     { 'см. Huracan соответствующего поколения': S() },
  'aventador-roadster': { 'см. Aventador соответствующего поколения': S() },
  'murcielago-roadster':{ 'см. Murcielago соответствующего поколения': S() },
};