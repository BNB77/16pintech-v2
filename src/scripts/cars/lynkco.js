export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/DCT/Вариатор', price: '2 500 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг турбо', price: '18 000 ₽' }],
  stage1_sport:   [{ name: 'Прошивка Stage 1', description: 'Спортивный тюнинг 03+/Sport', price: '22 000 ₽' }],
  trans_at8:      [{ name: 'Настройка АКПП', description: 'Калибровка 8-ст автомата Aisin', price: '12 000 ₽' }],
  trans_dct7:     [{ name: 'Настройка DCT', description: 'Калибровка 7-ст робота', price: '10 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '6 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  cat_off:        [{ name: 'Отключение катализатора', description: 'Программное удаление катализатора', price: '7 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '6 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '9 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '3 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '5 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '4 000 ₽' }],
  lambda_off:     [{ name: 'Отключение лямбда-зондов', description: 'Lambda - кислородные датчики', price: '5 000 ₽' }],
  start_stop_off: [{ name: 'Отключение Start-Stop', description: 'Деактивация системы старт-стоп', price: '3 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций Volvo/Geely', price: '5 000 ₽' }],
  adas_calibr:    [{ name: 'Калибровка ADAS', description: 'Настройка систем помощи водителю', price: '4 500 ₽' }],
  cruise_adapt:   [{ name: 'Настройка адаптивного круиза', description: 'ACC/Radar cruise', price: '4 000 ₽' }],
  launch_control: [{ name: 'Launch Control', description: 'Система быстрого старта', price: '7 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '5 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'PHEV инвертор/контроллер', price: '4 500 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления PHEV', price: '9 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '2 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const lynkcoData = {

  '01': {
    'I поколение дорест (2017–2020)': {
      '1.5 Turbo (JLH-3G15TD)':       S(servicePresets.stage1_turbo, servicePresets.trans_dct7, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 Turbo Drive-E (B4204T23)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2020–2024)': {
      '1.5 Turbo (JLH-3G15TD)':       S(servicePresets.stage1_turbo, servicePresets.trans_dct7, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 Turbo Drive-E (B4204T23)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '1.5T EM-F Hybrid (245 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.adas_calibr, servicePresets.coding),
    },
    'I поколение FL2 (2024–н.в.)': {
      '2.0 Turbo Drive-E (B4204T23)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '1.5T EM-F Hybrid (245 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding),
    },
  },

  '02': {
    'I поколение CC11 (2021–2022)': {
      '2.0 Turbo Drive-E (B4204T6)':  S(servicePresets.stage1_turbo, servicePresets.trans_dct7, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
      '2.0 Turbo Drive-E (B4204T23)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
    'II поколение Z20 (2024–н.в.)': {
      '1.5T Hybrid (250 л.с.)':       S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding),
      'Electric Z20':                 S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.adas_calibr, servicePresets.cruise_adapt),
    },
  },

  '03': {
    'I поколение дорест (2018–2021)': {
      '1.5 Turbo (JLH-3G15TD)':       S(servicePresets.stage1_turbo, servicePresets.trans_dct7, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 Turbo Drive-E (B4204T23)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
    'I поколение FL (2021–н.в.)': {
      '1.5 Turbo (JLH-3G15TD)':       S(servicePresets.stage1_turbo, servicePresets.trans_dct7, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 Turbo Drive-E (B4204T23)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
      '03+ Sport 2.0 Turbo (265 л.с.)': S(servicePresets.stage1_sport, servicePresets.trans_at8, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
  },

  '05': {
    'I поколение (2020–н.в.)': {
      '1.5 Turbo (JLH-3G15TD)':       S(servicePresets.stage1_turbo, servicePresets.trans_dct7, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0 Turbo Mild Hybrid (254 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.hybrid_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  '06': {
    'I поколение дорест (2020–2024)': {
      '1.5T PHEV (299 л.с., 19 кВтч)': S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2024–н.в.)': {
      '1.5T PHEV (299 л.с., 19 кВтч)': S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  '08': {
    'I поколение (2024–н.в.)': {
      '1.5T PHEV (593 л.с., AWD)':    S(servicePresets.stage1_sport, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.gpf_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
  },

  '09': {
    'I поколение дорест (2021–2024)': {
      '2.0T Mild Hybrid (254 л.с.)':  S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.hybrid_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0T PHEV (431 л.с., 40 кВтч)': S(servicePresets.stage1_sport, servicePresets.trans_at8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.adas_calibr, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL EM-P (2024–н.в.)': {
      '2.0T Mild Hybrid (254 л.с.)':  S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.hybrid_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.egr_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.0T EM-P PHEV (555 л.с., 40 кВтч)': S(servicePresets.stage1_sport, servicePresets.trans_at8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.launch_control),
    },
  },

  'z10': {
    'I поколение (2024–н.в.)': {
      'Electric Sedan (798 л.с.)':    S(servicePresets.battery_hv, servicePresets.diagECU_plus, servicePresets.adas_calibr, servicePresets.cruise_adapt, servicePresets.coding, servicePresets.launch_control),
    },
  },
};
