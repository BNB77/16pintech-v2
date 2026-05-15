export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '10 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '15 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'Ricardo 7-ст DSG/8-ст DCT', price: '12 000 ₽' }],
  stage1_w16:     [{ name: 'Прошивка Stage 1', description: 'Тюнинг W16 8.0 quad-turbo', price: '100 000 ₽' }],
  stage1_w16_ss:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг W16 8.0 (1200 л.с.)', price: '120 000 ₽' }],
  stage1_v16:     [{ name: 'Прошивка Stage 1', description: 'Тюнинг V16 8.3 атмо', price: '150 000 ₽' }],
  stage1_hybrid:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация гибридной системы', price: '130 000 ₽' }],
  trans_ricardo:  [{ name: 'Настройка Ricardo DSG', description: 'Калибровка 7-ст робота', price: '50 000 ₽' }],
  trans_dct:      [{ name: 'Настройка DCT', description: 'Калибровка 8-ст DCT', price: '60 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '30 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '50 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '20 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '15 000 ₽' }],
  tva_off:        [{ name: 'Отключение TVA', description: 'Tva - дросельная заслонка', price: '15 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '20 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '40 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '10 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '8 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '20 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Электромоторы/инвертор/контроллер', price: '18 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '35 000 ₽' }],
  aero_setup:     [{ name: 'Настройка аэродинамики', description: 'Активное крыло/дифференциал', price: '25 000 ₽' }],
  awd_setup:      [{ name: 'Настройка полного привода', description: 'Haldex AWD система', price: '30 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '20 000 ₽' }],
  special_tuning: [{ name: 'Эксклюзивный тюнинг', description: 'Индивидуальные настройки', price: '200 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const bugattiData = {

  'veyron': {
    '16.4 дорест (2005–2011)': {
      '8.0 W16 Quad-Turbo (1001 л.с.)':    S(servicePresets.stage1_w16, servicePresets.trans_ricardo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.aero_setup, servicePresets.awd_setup),
    },
    '16.4 Super Sport (2010–2015)': {
      '8.0 W16 Quad-Turbo (1200 л.с.)':    S(servicePresets.stage1_w16_ss, servicePresets.trans_ricardo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.special_tuning, servicePresets.vmax_off, servicePresets.burbles, servicePresets.aero_setup, servicePresets.awd_setup),
    },
    '16.4 Grand Sport (2008–2012)': {
      '8.0 W16 Quad-Turbo (1001 л.с.)':    S(servicePresets.stage1_w16, servicePresets.trans_ricardo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles, servicePresets.aero_setup, servicePresets.awd_setup),
    },
    '16.4 Grand Sport Vitesse (2012–2015)': {
      '8.0 W16 Quad-Turbo (1200 л.с.)':    S(servicePresets.stage1_w16_ss, servicePresets.trans_ricardo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.special_tuning, servicePresets.vmax_off, servicePresets.burbles, servicePresets.aero_setup, servicePresets.awd_setup),
    },
  },

  'chiron': {
    'дорест (2016–2020)': {
      '8.0 W16 Quad-Turbo (1500 л.с.)':    S(servicePresets.stage1_w16_ss, servicePresets.trans_ricardo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.special_tuning, servicePresets.vmax_off, servicePresets.burbles, servicePresets.aero_setup, servicePresets.awd_setup),
    },
    'Sport/Pur Sport (2018–2021)': {
      '8.0 W16 Quad-Turbo (1500 л.с.)':    S(servicePresets.stage1_w16_ss, servicePresets.trans_ricardo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.special_tuning, servicePresets.vmax_off, servicePresets.burbles, servicePresets.aero_setup, servicePresets.awd_setup),
    },
    'Super Sport 300+ (2021–2024)': {
      '8.0 W16 Quad-Turbo (1600 л.с.)':    S(servicePresets.stage1_w16_ss, servicePresets.trans_ricardo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.gpf_off, servicePresets.special_tuning, servicePresets.vmax_off, servicePresets.burbles, servicePresets.aero_setup, servicePresets.awd_setup),
    },
  },

  'tourbillon': {
    '(2024–н.в.)': {
      '8.3 V16 + 3 E-motors (1800 л.с.)':  S(servicePresets.stage1_v16, servicePresets.stage1_hybrid, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_dct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.special_tuning, servicePresets.vmax_off, servicePresets.burbles, servicePresets.aero_setup, servicePresets.awd_setup),
    },
  },

};