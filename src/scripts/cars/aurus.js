export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '3 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '4 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'KATE 9-ст автомат', price: '3 500 ₽' }],
  stage1_hybrid:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация гибридной системы', price: '25 000 ₽' }],
  stage1_v8:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг V8 4.4 biturbo', price: '30 000 ₽' }],
  trans_kate:     [{ name: 'Настройка KATE-R932', description: 'Калибровка 9-ст автомата', price: '15 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '8 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '10 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '12 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '11 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '9 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '7 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '6 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '5 000 ₽' }],
  tva_off:        [{ name: 'Отключение TVA', description: 'Tva - дросельная заслонка', price: '5 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '6 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '7 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '10 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '15 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '4 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '3 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '6 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Электромотор/инвертор/контроллер', price: '5 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '10 000 ₽' }],
  airmatic:       [{ name: 'Диагностика пневмоподвески', description: 'Регулируемый дорожный просвет', price: '5 000 ₽' }],
  awd_setup:      [{ name: 'Настройка полного привода', description: 'ATC система постоянного AWD', price: '7 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '6 000 ₽' }],
  premium_mode:   [{ name: 'Активация премиум функций', description: 'Раскодировка дополнительных опций', price: '8 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const aurusData = {

  'senat': {
    'ЕМП-4123 дорест (2018–2024)': {
      '4.4 V8 Biturbo + E-motor (НАМИ-4123)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_kate, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.premium_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.awd_setup),
    },
    'ЕМП-41231SB Лимузин (2018–2024)': {
      '4.4 V8 Biturbo + E-motor (НАМИ-4123)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_kate, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.premium_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.awd_setup),
    },
    'ЕМП-412311 Удлиненный (2018–2024)': {
      '4.4 V8 Biturbo + E-motor (НАМИ-4123)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_kate, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.premium_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.awd_setup),
    },
    'Рестайлинг (2025–н.в.)': {
      '4.4 V8 Biturbo + E-motor (НАМИ-4123)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_kate, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.premium_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.awd_setup),
    },
    'Кабриолет (в разработке)': {
      '4.4 V8 Biturbo + E-motor (НАМИ-4123)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_kate, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.premium_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.awd_setup),
    },
  },

  'komendant': {
    'ЕМП-4124 (2022–н.в.)': {
      '4.4 V8 Biturbo + E-motor (НАМИ-4123)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_kate, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.airmatic, servicePresets.coding, servicePresets.premium_mode, servicePresets.vmax_off, servicePresets.burbles, servicePresets.awd_setup),
    },
  },

  'arsenal': {
    'ЕМП-4125 (2018–н.в.)': {
      '4.4 V8 Biturbo + E-motor (НАМИ-4123)': S(servicePresets.stage1_hybrid, servicePresets.stage1_v8, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_kate, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.battery_hv, servicePresets.gpf_off, servicePresets.coding, servicePresets.premium_mode, servicePresets.vmax_off, servicePresets.awd_setup),
    },
  },

};