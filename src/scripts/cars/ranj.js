export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '3 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '4 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'ZF 6/8HP/Aisin', price: '3 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '15 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '18 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '20 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг TDV6/SDV6', price: '25 000 ₽' }],
  stage1_v8:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 двигателя', price: '30 000 ₽' }],
  stage1_v8_sc:   [{ name: 'Прошивка Stage 1', description: 'V8 Supercharged тюнинг', price: '35 000 ₽' }],
  stage1_svr:     [{ name: 'Прошивка Stage 1', description: 'SVR/SVAutobiography тюнинг', price: '45 000 ₽' }],
  trans_zf6:      [{ name: 'Настройка ZF 6HP', description: 'Калибровка 6-ст автомата', price: '15 000 ₽' }],
  trans_zf8:      [{ name: 'Настройка ZF 8HP', description: 'Калибровка 8-ст автомата', price: '18 000 ₽' }],
  trans_aisin:    [{ name: 'Настройка Aisin', description: 'Калибровка АКПП', price: '15 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '8 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '12 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '15 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '12 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '10 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '8 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '7 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '6 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '7 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '8 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '12 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '18 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '5 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '3 000 ₽' }],
  airmatic:       [{ name: 'Диагностика пневмоподвески', description: 'Air Suspension/EAS', price: '5 000 ₽' }],
  terrain_resp:   [{ name: 'Диагностика Terrain Response', description: 'Система управления рельефом', price: '4 000 ₽' }],
  hdc_setup:      [{ name: 'Настройка HDC', description: 'Hill Descent Control', price: '5 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций JLR', price: '7 000 ₽' }],
  svr_mode:       [{ name: 'Активация SVR режимов', description: 'Раскодировка SVR функций', price: '10 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const landRoverData = {

  'range rover': {
    'P38A (1994–2002)': {
      '2.5 DT/DSE (136 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU),
      '4.0 V8 (190/218 л.с.)':        S(servicePresets.stage1_v8, servicePresets.trans_zf6),
      '4.6 V8 (225 л.с.)':            S(servicePresets.stage1_v8, servicePresets.trans_zf6),
    },
    'L322 дорест (2002–2005)': {
      '3.0 TD6 (177 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_zf6),
      '4.4 V8 (286 л.с.)':            S(servicePresets.stage1_v8, servicePresets.trans_zf6),
      '4.4 V8 (299 л.с.)':            S(servicePresets.stage1_v8, servicePresets.trans_zf6),
    },
    'L322 FL1 (2005–2009)': {
      '3.6 TDV8 (272 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_zf6),
      '4.2 V8 Supercharged (396 л.с.)': S(servicePresets.stage1_v8_sc, servicePresets.trans_zf6, servicePresets.burbles),
      '4.4 V8 (299/305 л.с.)':        S(servicePresets.stage1_v8, servicePresets.trans_zf6),
    },
    'L322 FL2 (2009–2012)': {
      '3.6 TDV8 (272 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf6),
      '4.4 TDV8 (313 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '5.0 V8 (375 л.с.)':            S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
      '5.0 V8 Supercharged (510 л.с.)': S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
    },
    'L405 дорест (2012–2017)': {
      '3.0 TDV6 (258 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 SDV6 (292 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '4.4 SDV8 (339 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '5.0 V8 (380/510 л.с.)':        S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
      '5.0 V8 Supercharged (510/550 л.с.)': S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
      'SVAutobiography 5.0 V8 SC (565 л.с.)': S(servicePresets.stage1_svr, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
    },
    'L405 FL (2017–2021)': {
      '2.0 P400e PHEV (404 л.с.)':    S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.coding),
      '3.0 TDV6 (258 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 SDV6 (306 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '4.4 SDV8 (339 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '5.0 V8 Supercharged (525/565 л.с.)': S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
      'SVAutobiography 5.0 V8 SC (565 л.с.)': S(servicePresets.stage1_svr, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
    },
    'L460 (2021–н.в.)': {
      '3.0 D300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 D350 (350 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 P400 (400 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.gpf_off),
      '3.0 P510e PHEV (510 л.с.)':    S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.coding),
      '4.4 V8 (530 л.с.)':            S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
      'SV P615 (615 л.с.)':           S(servicePresets.stage1_svr, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
    },
  },

  'range rover sport': {
    'L320 дорест (2005–2009)': {
      '2.7 TDV6 (190 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_zf6),
      '3.6 TDV8 (272 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_zf6),
      '4.2 V8 Supercharged (390 л.с.)': S(servicePresets.stage1_v8_sc, servicePresets.trans_zf6, servicePresets.burbles),
      '4.4 V8 (299/305 л.с.)':        S(servicePresets.stage1_v8, servicePresets.trans_zf6),
    },
    'L320 FL (2009–2013)': {
      '3.0 TDV6 (245 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 SDV6 (256 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.6 TDV8 (272 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf6),
      '5.0 V8 (375/510 л.с.)':        S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
      '5.0 V8 Supercharged (510 л.с.)': S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
    },
    'L494 дорест (2013–2017)': {
      '3.0 TDV6 (258 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 SDV6 (292/306 л.с.)':      S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '4.4 SDV8 (339 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 V6 Supercharged (340/380 л.с.)': S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
      '5.0 V8 Supercharged (510/550 л.с.)': S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
      'SVR 5.0 V8 SC (550 л.с.)':     S(servicePresets.stage1_svr, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off, servicePresets.svr_mode),
    },
    'L494 FL (2017–2022)': {
      '2.0 Si4 (300 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_zf8, servicePresets.gpf_off),
      '2.0 P400e PHEV (404 л.с.)':    S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.coding),
      '3.0 TDV6 (258 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 SDV6 (306 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 V6 Supercharged (380 л.с.)': S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
      '5.0 V8 Supercharged (525/575 л.с.)': S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
      'SVR 5.0 V8 SC (575 л.с.)':     S(servicePresets.stage1_svr, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off, servicePresets.svr_mode),
    },
    'L461 (2022–н.в.)': {
      '3.0 D300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 D350 (350 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 P400 (400 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.gpf_off),
      '3.0 P440e PHEV (440 л.с.)':    S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.coding),
      '4.4 V8 (530 л.с.)':            S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
      'SV Edition One 4.4 V8 (635 л.с.)': S(servicePresets.stage1_svr, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off, servicePresets.svr_mode),
    },
  },

  'range rover evoque': {
    'L538 дорест (2011–2015)': {
      '2.0 Si4 (240 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_zf8, servicePresets.diagECU),
      '2.0 eD4 (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.diagECU),
      '2.2 TD4 (150/190 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_zf8),
      '2.2 SD4 (190 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
    },
    'L538 FL (2015–2018)': {
      '2.0 Si4 (240 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_zf8, servicePresets.gpf_off),
      '2.0 TD4 (150/180 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
    },
    'L551 (2018–н.в.)': {
      '2.0 D165 (163 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 D180 (180 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 D200 (204 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 P250 (249 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.trans_zf8, servicePresets.gpf_off),
      '2.0 P300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.gpf_off),
    },
  },

  'range rover velar': {
    'L560 дорест (2017–2021)': {
      '2.0 D180 (180 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 D240 (240 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 D300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 P250 (250 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.trans_zf8, servicePresets.gpf_off),
      '2.0 P300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.gpf_off),
      '3.0 P380 (380 л.с.)':          S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
      'SVAutobiography 5.0 V8 SC (550 л.с.)': S(servicePresets.stage1_svr, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
    },
    'L560 FL (2021–н.в.)': {
      '2.0 D200 (204 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 D300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 P250 (249 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.trans_zf8, servicePresets.gpf_off),
      '3.0 P400 (400 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.gpf_off),
    },
  },

  'discovery': {
    'Series I (1989–1998)': {
      '2.0 Mpi (136 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.5/3.9 V8 (155-182 л.с.)':    S(servicePresets.stage1_v8, servicePresets.diagECU),
      '2.5 200Tdi (107 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU),
      '2.5 300Tdi (111 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU),
    },
    'Series II (1998–2004)': {
      '4.0 V8 (182 л.с.)':            S(servicePresets.stage1_v8, servicePresets.diagECU),
      '4.6 V8 (218 л.с.)':            S(servicePresets.stage1_v8, servicePresets.diagECU),
      '2.5 Td5 (136 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU),
    },
    'Discovery 3/LR3 L319 (2004–2009)': {
      '2.7 TDV6 (190 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_zf6),
      '4.0 V6 (215 л.с.)':            S(servicePresets.stage1_na, servicePresets.trans_zf6),
      '4.4 V8 (299 л.с.)':            S(servicePresets.stage1_v8, servicePresets.trans_zf6),
    },
    'Discovery 4/LR4 L319 дорест (2009–2013)': {
      '2.7 TDV6 (190 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_zf6),
      '3.0 TDV6 (211/245 л.с.)':      S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 SDV6 (256 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '5.0 V8 (375 л.с.)':            S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
    },
    'Discovery 4/LR4 L319 FL (2013–2016)': {
      '3.0 TDV6 (211/256 л.с.)':      S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 SDV6 (292 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '5.0 V8 (375 л.с.)':            S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
    },
    'Discovery 5/L462 дорест (2016–2020)': {
      '2.0 Si4 (240/300 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.trans_zf8, servicePresets.gpf_off),
      '2.0 SD4 (240 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 TD6 (258 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 V6 Supercharged (340/380 л.с.)': S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
    },
    'Discovery 5/L462 FL (2020–н.в.)': {
      '2.0 D200 (204 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 D250 (249 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 D300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 P300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.gpf_off),
      '3.0 P360 (360 л.с.)':          S(servicePresets.stage1_v8, servicePresets.trans_zf8, servicePresets.gpf_off),
    },
  },

  'discovery sport': {
    'L550 дорест (2014–2019)': {
      '2.0 Si4 (240 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_zf8, servicePresets.gpf_off),
      '2.0 eD4 (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.diagECU),
      '2.2 TD4 (150/190 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_zf8),
      '2.2 SD4 (190 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
    },
    'L550 FL (2019–н.в.)': {
      '2.0 D165 (163 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 D180 (180 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 D200 (204 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 P250 (249 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.trans_zf8, servicePresets.gpf_off),
      '2.0 P300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.gpf_off),
    },
  },

  'defender': {
    '90/110/130 (1983–2016)': {
      '2.2 TDCi (122 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.diagECU),
      '2.4 TDCi (122 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.diagECU),
      '2.5 200Tdi (107 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU),
      '2.5 300Tdi (111 л.с.)':        S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU),
      '2.5 Td5 (122 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU),
      '3.5/3.9 V8 (134-182 л.с.)':    S(servicePresets.stage1_v8, servicePresets.diagECU),
      '4.0 V8 (182 л.с.)':            S(servicePresets.stage1_v8, servicePresets.diagECU),
      '5.0 V8 (405 л.с.)':            S(servicePresets.stage1_v8_sc, servicePresets.burbles),
    },
    'L663 (2020–н.в.)': {
      '2.0 D200 (200 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 D250 (249 л.с.)':          S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '3.0 D300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_zf8),
      '2.0 P300 (300 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.gpf_off),
      '3.0 P400 (400 л.с.)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_zf8, servicePresets.gpf_off),
      '5.0 P525 (525 л.с.)':          S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
      'V8 Carpathian Edition (525 л.с.)': S(servicePresets.stage1_v8_sc, servicePresets.trans_zf8, servicePresets.burbles, servicePresets.gpf_off),
    },
  },

  'freelander': {
    'L314 (1997–2006)': {
      '1.8 K-series (120 л.с.)':      S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 Di (97 л.с.)':             S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU),
      '2.0 Td4 (112 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU),
      '2.5 V6 (177 л.с.)':            S(servicePresets.stage1_na, servicePresets.trans_aisin),
    },
    'L359 дорест (2006–2012)': {
      '2.2 eD4 (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.diagECU),
      '2.2 TD4 (160 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.trans_aisin),
      '2.2 SD4 (190 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_aisin),
      '3.2 i6 (230 л.с.)':            S(servicePresets.stage1_na, servicePresets.trans_aisin),
    },
    'L359 FL (2012–2014)': {
      '2.2 eD4 (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.diagECU),
      '2.2 TD4 (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_aisin),
      '2.2 SD4 (190 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.dpf_off_adblue, servicePresets.trans_aisin),
      '2.0 Si4 (240 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.trans_aisin, servicePresets.gpf_off),
    },
  },

  'range rover sport svr':  { 'см. Range Rover Sport соответствующего поколения': S() },
  'range rover svautobiography': { 'см. Range Rover соответствующего поколения': S() },
  'defender 90':            { 'см. Defender соответствующего поколения': S() },
  'defender 110':           { 'см. Defender соответствующего поколения': S() },
  'defender 130':           { 'см. Defender соответствующего поколения': S() },
};