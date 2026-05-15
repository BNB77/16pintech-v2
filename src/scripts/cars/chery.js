export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/CVT/Вариатор', price: '2 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '7 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '9 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг турбо', price: '15 000 ₽' }],
  trans_at:       [{ name: 'Настройка АКПП', description: 'Калибровка автомата', price: '8 000 ₽' }],
  trans_cvt:      [{ name: 'Настройка CVT', description: 'Калибровка вариатора', price: '9 000 ₽' }],
  trans_robot:    [{ name: 'Настройка робота', description: 'Калибровка роботизированной КПП', price: '8 500 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции отработанных газов', price: '5 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Удаление сажевого фильтра', price: '7 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF', description: 'Фильтр частиц бензиновых', price: '8 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '6 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '5 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '8 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '3 500 ₽' }],
  adas_calibr:    [{ name: 'Калибровка ADAS', description: 'Настройка систем помощи водителю', price: '4 000 ₽' }],
  cruise_adapt:   [{ name: 'Настройка адаптивного круиза', description: 'ACC/Radar cruise', price: '3 500 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '7 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '2 500 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '4 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '3 500 ₽' }],
  cat_off:        [{ name: 'Отключение катализатора', description: 'Программное удаление катализатора', price: '6 000 ₽' }],
  start_stop_off: [{ name: 'Отключение Start-Stop', description: 'Деактивация системы старт-стоп', price: '3 000 ₽' }],
  lambda_off:     [{ name: 'Отключение лямбда-зондов', description: 'Lambda - кислородные датчики', price: '4 500 ₽' }],
  immo_off:       [{ name: 'Отключение иммобилайзера', description: 'Программное удаление IMMO', price: '5 500 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '4 000 ₽' }],
  cold_start:     [{ name: 'Калибровка холодного старта', description: 'Оптимизация запуска в мороз', price: '3 000 ₽' }],
  fuel_economy:   [{ name: 'Экономичная прошивка', description: 'Оптимизация расхода топлива', price: '9 000 ₽' }],
  launch_control: [{ name: 'Launch Control', description: 'Система быстрого старта', price: '6 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '1 500 ₽' }],
};

const S = (...sets) => sets.flat();

export const cheryData = {

  'tiggo 4 pro': {
    'T215 дорест (2020–2022)': {
      '1.5 Turbo (F4J15)':            S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'T215 FL (2022–н.в.)': {
      '1.5 Turbo (F4J15)':            S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'tiggo 7 pro': {
    'T1D дорест (2020–2022)': {
      '1.5 Turbo (F4J16)':            S(servicePresets.stage1_turbo, servicePresets.trans_robot, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '1.6 Turbo (F4J16)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_robot, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
    'T1D FL (2022–н.в.)': {
      '1.5 Turbo (F4J16)':            S(servicePresets.stage1_turbo, servicePresets.trans_robot, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '1.6 Turbo (F4J16)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_robot, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
  },

  'tiggo 7 pro max': {
    'T1E (2022–н.в.)': {
      '1.6 Turbo (F4J16)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_robot, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
      '2.0 Turbo (F4J20)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
  },

  'tiggo 8 pro': {
    'T1G дорест (2020–2022)': {
      '1.6 Turbo (F4J16)':            S(servicePresets.stage1_turbo, servicePresets.trans_robot, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 Turbo (F4J20)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
    'T1G FL (2022–н.в.)': {
      '1.6 Turbo (F4J16)':            S(servicePresets.stage1_turbo, servicePresets.trans_robot, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 Turbo (F4J20)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
  },

  'tiggo 8 pro max': {
    'T1H (2022–н.в.)': {
      '2.0 Turbo (F4J20)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
  },

  'tiggo': {
    'T11 (2005–2013)': {
      '1.6 (SQR481F)':                S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.egr_off, servicePresets.coding, servicePresets.dtc_off),
      '1.8 (SQR481FC)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.egr_off, servicePresets.coding, servicePresets.dtc_off),
      '2.0 (ACTECO SQR484F)':         S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.egr_off, servicePresets.cat_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
      '2.4 (ACTECO SQR484F)':         S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.egr_off, servicePresets.cat_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
    'T11 FL (2013–2016)': {
      '1.6 (SQR481F)':                S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.egr_off, servicePresets.coding, servicePresets.dtc_off),
      '2.0 (ACTECO SQR484F)':         S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.egr_off, servicePresets.cat_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'tiggo 3': {
    'T21 дорест (2017–2019)': {
      '1.6 (SQR481FC)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.egr_off, servicePresets.coding, servicePresets.dtc_off),
    },
    'T21 FL (2019–н.в.)': {
      '1.5 (SQR481FC)':               S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.egr_off, servicePresets.coding, servicePresets.dtc_off),
    },
  },

  'tiggo 3xe': {
    'T22 (2019–н.в.)': {
      'Электро (49 кВт⋅ч)':           S(servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'tiggo 5': {
    'T21 дорест (2013–2015)': {
      '2.0 (ACTECO SQR484F)':         S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.egr_off, servicePresets.cat_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
    'T21 FL (2015–2020)': {
      '1.5 Turbo (F4J15)':            S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.dtc_off),
      '2.0 (ACTECO SQR484F)':         S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.egr_off, servicePresets.cat_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'tiggo 5x': {
    'T15 (2017–н.в.)': {
      '1.5 Turbo (F4J15)':            S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.dtc_off),
    },
  },

  'tiggo 2': {
    'T22 дорест (2016–2019)': {
      '1.5 (SQR481FC)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'T22 FL (2019–н.в.)': {
      '1.5 (SQR481FC)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'tiggo 2 pro': {
    'T23 (2020–н.в.)': {
      '1.5 (SQR481FC)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'arrizo 5': {
    'M16 дорест (2016–2019)': {
      '1.5 (ACTECO SQR477F)':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.egr_off, servicePresets.coding, servicePresets.dtc_off),
    },
    'M16 FL (2019–н.в.)': {
      '1.5 (ACTECO SQR477F)':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.egr_off, servicePresets.coding, servicePresets.dtc_off),
    },
  },

  'arrizo 6 pro': {
    'M34 дорест (2019–2021)': {
      '1.5 Turbo (F4J16)':            S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.dtc_off),
    },
    'M34 FL (2021–н.в.)': {
      '1.5 Turbo (F4J16)':            S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.dtc_off),
    },
  },

  'arrizo 7': {
    'M31 дорест (2013–2016)': {
      '1.6 Turbo (SQRE4T16)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.dtc_off),
    },
    'M31 FL (2016–2020)': {
      '1.6 Turbo (SQRE4T16)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.dtc_off),
    },
  },

  'arrizo 8': {
    'M37 (2022–н.в.)': {
      '1.6 Turbo (F4J16)':            S(servicePresets.stage1_turbo, servicePresets.trans_robot, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control, servicePresets.dtc_off),
      '2.0 Turbo (F4J20)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control, servicePresets.dtc_off),
    },
  },

  'amulet': {
    'A15 (2003–2010)': {
      '1.5 (SQR480)':                 S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (SQR481F)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'bonus': {
    'A13 дорест (2011–2014)': {
      '1.5 (ACTECO SQR477F)':         S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'A13 FL (2014–2018)': {
      '1.5 (ACTECO SQR477F)':         S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'crosseastar': {
    'V21 (2006–2014)': {
      '2.0 (ACTECO SQR484F)':         S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.4 (Mitsubishi 4G64)':        S(servicePresets.stage1_na, servicePresets.diagECU),
    },
  },

  'exeed txl': {
    'VX11 (2019–н.в.)': {
      '1.6 Turbo (F4J16)':            S(servicePresets.stage1_turbo, servicePresets.trans_robot, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control, servicePresets.dtc_off),
    },
  },

  'exeed lx': {
    'VX21 (2019–н.в.)': {
      '1.5 Turbo (F4J15)':            S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.dtc_off),
    },
  },

  'exeed vx': {
    'VX31 (2020–н.в.)': {
      '2.0 Turbo (F4J20)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control, servicePresets.dtc_off),
    },
  },

  'fora': {
    'A21 дорест (2006–2010)': {
      '1.6 (SQR481F)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (ACTECO SQR484F)':         S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'A21 FL (2010–2013)': {
      '1.6 (SQR481F)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (ACTECO SQR484F)':         S(servicePresets.stage1_na, servicePresets.diagECU),
    },
  },

  'kimo': {
    'S12 (2007–2015)': {
      '1.3 (SQR473F)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 (SQR480ED)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'm11': {
    'M11 дорест (2007–2010)': {
      '1.6 (SQR481F)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'M11 FL (2010–2014)': {
      '1.6 (SQR481F)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'oriental son': {
    'B11 (2004–2010)': {
      '1.8 (SQR481FC)':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (ACTECO SQR484F)':         S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.4 (Mitsubishi 4G64)':        S(servicePresets.stage1_na, servicePresets.diagECU),
    },
  },

  'qq': {
    'S11 (2003–2014)': {
      '0.8 (SQR372)':                 S(servicePresets.diagECU),
      '1.1 (SQR472F)':                S(servicePresets.diagECU),
    },
  },

  'very': {
    'A13 (2011–2016)': {
      '1.5 (ACTECO SQR477F)':         S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'omoda c5': {
    'H42 (2022–н.в.)': {
      '1.5 Turbo (F4J15)':            S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.dtc_off),
    },
  },

  'omoda s5': {
    'H43 (2023–н.в.)': {
      '1.5 Turbo (F4J15)':            S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.dtc_off),
    },
  },

  'tiggo 9': {
    'T1K (2023–н.в.)': {
      '2.0 Turbo (F4J20)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control, servicePresets.dtc_off),
    },
  },

  // Справочные секции
  'tiggo 4':          { 'См. Tiggo 4 Pro': S() },
  'tiggo 7':          { 'См. Tiggo 7 Pro или Tiggo 7 Pro Max': S() },
  'tiggo 8':          { 'См. Tiggo 8 Pro или Tiggo 8 Pro Max': S() },
  'arrizo 6':         { 'См. Arrizo 6 Pro': S() },
  'exeed tx':         { 'См. Exeed TXL': S() },
  'tiggo 3x':         { 'Доступна диагностика, уточняйте комплектацию': S() },
};