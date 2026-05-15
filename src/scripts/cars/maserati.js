export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '3 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '4 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'ZF 8HP автомат', price: '3 000 ₽' }],
  stage1_v6:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг V6 Twin Turbo', price: '25 000 ₽' }],
  stage1_v6_hi:   [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг V6 TT', price: '30 000 ₽' }],
  stage1_v8:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 Twin Turbo', price: '35 000 ₽' }],
  stage1_v8_hi:   [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг V8 TT', price: '42 000 ₽' }],
  stage1_nettuno: [{ name: 'Прошивка Stage 1', description: 'Тюнинг Nettuno V6 TT', price: '40 000 ₽' }],
  stage1_na_v8:   [{ name: 'Прошивка Stage 1', description: 'Атмосферный V8 4.2/4.7', price: '20 000 ₽' }],
  stage1_diesel:  [{ name: 'Прошивка Stage 1', description: 'Дизель V6 3.0', price: '22 000 ₽' }],
  stage1_hybrid:  [{ name: 'Прошивка Stage 1', description: 'Гибрид 2.0 MHEV', price: '18 000 ₽' }],
  trans_zf8:      [{ name: 'Настройка ZF 8HP', description: 'Калибровка 8-ст автомата', price: '15 000 ₽' }],
  trans_zf8_sport:[{ name: 'Настройка ZF 8HP Sport', description: 'Спортивная калибровка', price: '18 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '8 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '10 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '13 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '12 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '9 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '8 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '6 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '5 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '6 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '7 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '12 000 ₽' }],
  exhaust_sport:  [{ name: 'Спортивный режим выхлопа', description: 'Активация Sport/Corsa выхлопа', price: '10 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '15 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '4 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '3 000 ₽' }],
  skyhook:        [{ name: 'Диагностика Skyhook', description: 'Адаптивная подвеска', price: '5 000 ₽' }],
  q4_diag:        [{ name: 'Диагностика Q4 AWD', description: 'Система полного привода', price: '4 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '7 000 ₽' }],
  sport_mode:     [{ name: 'Активация Sport режимов', description: 'Раскодировка Sport/Corsa', price: '8 000 ₽' }],
  launch_control: [{ name: 'Активация Launch Control', description: 'Режим старта с места', price: '10 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'MHEV инвертор/контроллер', price: '5 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '9 000 ₽' }],
  ev_diag:        [{ name: 'Диагностика Folgore EV', description: 'Проверка электрической системы', price: '8 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '7 000 ₽' }],
};
 
const S = (...sets) => sets.flat();
 
export const maseratiData = {
 
  'ghibli': {
    'III поколение дорест (2013–2016)': {
      '3.0 V6 Twin Turbo (330 л.с.)':     S(servicePresets.stage1_v6, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 V6 Twin Turbo S (410 л.с.)':   S(servicePresets.stage1_v6_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '3.0 V6 Diesel (275 л.с.)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'III поколение FL (2016–2020)': {
      '3.0 V6 Twin Turbo (350 л.с.)':     S(servicePresets.stage1_v6, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 V6 Twin Turbo S (430 л.с.)':   S(servicePresets.stage1_v6_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '3.0 V6 Diesel (275 л.с.)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'III поколение FL2 (2020–2024)': {
      '2.0 Hybrid (330 л.с.)':            S(servicePresets.stage1_hybrid, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.coding, servicePresets.gpf_off, servicePresets.burbles),
      '3.0 V6 Twin Turbo (350 л.с.)':     S(servicePresets.stage1_v6, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 V6 Twin Turbo S (430 л.с.)':   S(servicePresets.stage1_v6_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '3.0 V6 Diesel (275 л.с.)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
  },
 
  'quattroporte': {
    'V поколение дорест (2003–2008)': {
      '4.2 V8 (400 л.с.)':                S(servicePresets.stage1_na_v8, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'V поколение FL (2008–2012)': {
      '4.7 V8 (430 л.с.)':                S(servicePresets.stage1_na_v8, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '4.7 V8 Sport GT S (440 л.с.)':     S(servicePresets.stage1_na_v8, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '4.7 V8 GTS (440 л.с.)':            S(servicePresets.stage1_na_v8, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
    },
    'VI поколение дорест (2013–2016)': {
      '3.0 V6 Twin Turbo (410 л.с.)':     S(servicePresets.stage1_v6_hi, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.8 V8 Twin Turbo GTS (530 л.с.)': S(servicePresets.stage1_v8_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      '3.0 V6 Diesel (275 л.с.)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'VI поколение FL (2016–2020)': {
      '3.0 V6 Twin Turbo S (430 л.с.)':   S(servicePresets.stage1_v6_hi, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.8 V8 Twin Turbo GTS (530 л.с.)': S(servicePresets.stage1_v8_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      '3.0 V6 Diesel (275 л.с.)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
    'VI поколение FL2 (2020–2023)': {
      '3.0 V6 Twin Turbo (430 л.с.)':     S(servicePresets.stage1_v6_hi, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.8 V8 Twin Turbo (580 л.с.)':     S(servicePresets.stage1_v8_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      '3.0 V6 Diesel (275 л.с.)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
    },
  },
 
  'levante': {
    'I поколение дорест (2016–2020)': {
      '3.0 V6 Twin Turbo (350 л.с.)':     S(servicePresets.stage1_v6, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 V6 Twin Turbo S (430 л.с.)':   S(servicePresets.stage1_v6_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '3.0 V6 Diesel (275 л.с.)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.diagTrans, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.euro2, servicePresets.vmax_off),
      '3.8 V8 Twin Turbo GTS (550 л.с.)': S(servicePresets.stage1_v8_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
    },
    'I поколение FL (2020–2024)': {
      '2.0 Hybrid (330 л.с.)':            S(servicePresets.stage1_hybrid, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.coding, servicePresets.gpf_off, servicePresets.burbles),
      '3.0 V6 Twin Turbo (350 л.с.)':     S(servicePresets.stage1_v6, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 V6 Twin Turbo Modena (430 л.с.)': S(servicePresets.stage1_v6_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '3.8 V8 Twin Turbo Trofeo (580 л.с.)': S(servicePresets.stage1_v8_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      '3.0 V6 Diesel (275 л.с.)':         S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.diagTrans, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.euro2, servicePresets.vmax_off),
    },
  },
 
  'granturismo': {
    'I поколение дорест (2007–2013)': {
      '4.2 V8 (405 л.с.)':                S(servicePresets.stage1_na_v8, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2013–2019)': {
      '4.7 V8 (440 л.с.)':                S(servicePresets.stage1_na_v8, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '4.7 V8 Sport (460 л.с.)':          S(servicePresets.stage1_na_v8, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '4.7 V8 MC Stradale (460 л.с.)':    S(servicePresets.stage1_na_v8, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
    },
    'II поколение (2022–н.в.)': {
      '3.0 V6 Nettuno TT Modena (490 л.с.)': S(servicePresets.stage1_nettuno, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      '3.0 V6 Nettuno TT Trofeo (550 л.с.)': S(servicePresets.stage1_nettuno, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      'Folgore (EV 761 л.с.)':            S(servicePresets.ev_diag, servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding, servicePresets.vmax_off, servicePresets.launch_control),
    },
  },
 
  'grancabrio': {
    'I поколение (2010–2019)': {
      '4.7 V8 (440 л.с.)':                S(servicePresets.stage1_na_v8, servicePresets.trans_zf8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '4.7 V8 Sport (460 л.с.)':          S(servicePresets.stage1_na_v8, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport),
      '4.7 V8 MC (460 л.с.)':             S(servicePresets.stage1_na_v8, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
    },
    'II поколение (2023–н.в.)': {
      '3.0 V6 Nettuno TT Modena (490 л.с.)': S(servicePresets.stage1_nettuno, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      '3.0 V6 Nettuno TT Trofeo (550 л.с.)': S(servicePresets.stage1_nettuno, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      'Folgore (EV 761 л.с.)':            S(servicePresets.ev_diag, servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.coding, servicePresets.vmax_off, servicePresets.launch_control),
    },
  },
 
  'mc20': {
    'I поколение (2020–н.в.)': {
      '3.0 V6 Nettuno TT (630 л.с.)':     S(servicePresets.stage1_nettuno, servicePresets.trans_zf8_sport, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      'Cielo (630 л.с.)':                 S(servicePresets.stage1_nettuno, servicePresets.trans_zf8_sport, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
    },
  },
 
  'grecale': {
    'I поколение (2022–н.в.)': {
      '2.0 Hybrid GT (300 л.с.)':         S(servicePresets.stage1_hybrid, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.coding, servicePresets.gpf_off, servicePresets.burbles),
      '2.0 Hybrid Modena (330 л.с.)':     S(servicePresets.stage1_hybrid, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.trans_zf8, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.coding, servicePresets.gpf_off, servicePresets.burbles),
      '3.0 V6 Twin Turbo Trofeo (530 л.с.)': S(servicePresets.stage1_v6_hi, servicePresets.trans_zf8_sport, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.q4_diag, servicePresets.skyhook, servicePresets.sport_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.exhaust_sport, servicePresets.launch_control),
      'Folgore (EV 550 л.с.)':            S(servicePresets.ev_diag, servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.q4_diag, servicePresets.coding, servicePresets.vmax_off, servicePresets.launch_control),
    },
  },
 
  '3200 gt': {
    '1 поколение (1998–2002)': {
      '3.2 V8 Twin Turbo (370 л.с.)':     S(servicePresets.stage1_v8, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
  },
 
  'coupe': {
    '1 поколение (2001–2007)': {
      '4.2 V8 (390 л.с.)':                S(servicePresets.stage1_na_v8, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
  },
 
  'spyder': {
    '1 поколение (2001–2007)': {
      '4.2 V8 (390 л.с.)':                S(servicePresets.stage1_na_v8, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
  },
};