export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '3 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '5 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '7 000 ₽' }],
  battery_hv_plus:[{ name: 'Диагностика HV батареи', description: 'Расширенная + калибровка BMS', price: '12 000 ₽' }],
  battery_mega:   [{ name: 'Диагностика батареи MEGA', description: 'Проверка HV батареи 102 кВт·ч', price: '15 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'EREV генератор/инвертор/контроллеры', price: '8 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной системы', description: 'Оптимизация EREV работы', price: '15 000 ₽' }],
  motor_diag:     [{ name: 'Диагностика электромоторов', description: 'Передний и задний моторы', price: '6 000 ₽' }],
  motor_cal:      [{ name: 'Калибровка электромоторов', description: 'Настройка мощности и крутящего момента', price: '10 000 ₽' }],
  charging_diag:  [{ name: 'Диагностика системы зарядки', description: 'AC/DC зарядка', price: '5 000 ₽' }],
  charging_mega:  [{ name: 'Диагностика быстрой зарядки', description: 'DC быстрая зарядка 500 кВт', price: '8 000 ₽' }],
  software_update:[{ name: 'Обновление ПО', description: 'OTA обновления системы', price: '6 000 ₽' }],
  airmatic:       [{ name: 'Диагностика пневмоподвески', description: 'Пневмоподвеска', price: '6 000 ₽' }],
  airmatic_cal:   [{ name: 'Калибровка пневмоподвески', description: 'Двухкамерная пневмоподвеска', price: '10 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '8 000 ₽' }],
  coding_ultra:   [{ name: 'Кодирование функций Ultra', description: 'Раскодировка премиум опций', price: '12 000 ₽' }],
  adas_diag:      [{ name: 'Диагностика ADAS', description: 'Системы помощи водителю', price: '7 000 ₽' }],
  adas_cal:       [{ name: 'Калибровка ADAS', description: 'Калибровка систем ADAS', price: '12 000 ₽' }],
  lidar_diag:     [{ name: 'Диагностика LiDAR', description: 'LiDAR ATL 300м', price: '10 000 ₽' }],
  camera_cal:     [{ name: 'Калибровка камер', description: 'Калибровка камер 360', price: '8 000 ₽' }],
  audio_setup:    [{ name: 'Настройка аудиосистемы', description: '19-21 динамик премиум аудио', price: '6 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '5 000 ₽' }],
  range_optim:    [{ name: 'Оптимизация запаса хода', description: 'Улучшение энергоэффективности', price: '10 000 ₽' }],
  regen_cal:      [{ name: 'Калибровка рекуперации', description: 'Настройка рекуперативного торможения', price: '8 000 ₽' }],
  power_unlock:   [{ name: 'Разблокировка мощности', description: 'Для китайских версий', price: '15 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка 180 км/ч', price: '10 000 ₽' }],
  ev_diag:        [{ name: 'Полная диагностика EV', description: 'Комплексная диагностика электромобиля', price: '12 000 ₽' }],
  display_setup:  [{ name: 'Настройка дисплеев', description: 'Потолочный дисплей и экраны', price: '5 000 ₽' }],
  climate_diag:   [{ name: 'Диагностика климата', description: 'Многозонный климат-контроль', price: '4 000 ₽' }],
  seats_setup:    [{ name: 'Настройка сидений', description: 'Массаж 16 точек / откидные столики', price: '6 000 ₽' }],
  generator_diag: [{ name: 'Диагностика генератора', description: '1.5T бензиновый генератор', price: '5 000 ₽' }],
  inverter_diag:  [{ name: 'Диагностика инвертора', description: 'Силовая электроника', price: '8 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const liautoData = {

  'one': {
    'I поколение (2019–2022)': {
      'EREV 1.2T + 2EM (326 л.с.)':   S(servicePresets.diagECU, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.motor_diag, servicePresets.charging_diag, servicePresets.coding, servicePresets.adas_diag, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.dtc_off),
    },
  },

  'l6': {
    'I поколение (2024–н.в.)': {
      'Pro EREV 1.5T + 2EM (407 л.с.) 36.8 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.dtc_off),
      'Max EREV 1.5T + 2EM (407 л.с.) 36.8 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.dtc_off),
      'Ultra EREV 1.5T + 2EM (407 л.с.) 36.8 кВт·ч':  S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding_ultra, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.lidar_diag, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
    },
  },

  'l7': {
    'I поколение дорест (2022–2024)': {
      'Air EREV 1.5T + 2EM (448 л.с.) 42.8 кВт·ч':    S(servicePresets.diagECU, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.motor_diag, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.coding, servicePresets.adas_diag, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.software_update, servicePresets.dtc_off),
      'Pro EREV 1.5T + 2EM (448 л.с.) 42.8 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.dtc_off),
      'Max EREV 1.5T + 2EM (448 л.с.) 42.8 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
    },
    'I поколение FL (2024–н.в.)': {
      'Pro EREV 1.5T + 2EM (448 л.с.) 42.8 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.dtc_off),
      'Max EREV 1.5T + 2EM (448 л.с.) 52.3 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
      'Ultra EREV 1.5T + 2EM (448 л.с.) 52.3 кВт·ч':  S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding_ultra, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.lidar_diag, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
    },
  },

  'l8': {
    'I поколение дорест (2022–2024)': {
      'Air EREV 1.5T + 2EM (449 л.с.) 42.8 кВт·ч':    S(servicePresets.diagECU, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.motor_diag, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.coding, servicePresets.adas_diag, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.software_update, servicePresets.dtc_off),
      'Pro EREV 1.5T + 2EM (449 л.с.) 42.8 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.dtc_off),
      'Max EREV 1.5T + 2EM (449 л.с.) 42.8 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
    },
    'I поколение FL (2024–н.в.)': {
      'Pro EREV 1.5T + 2EM (449 л.с.) 42.8 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.dtc_off),
      'Max EREV 1.5T + 2EM (449 л.с.) 52.3 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
      'Ultra EREV 1.5T + 2EM (449 л.с.) 52.3 кВт·ч':  S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding_ultra, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.lidar_diag, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
    },
  },

  'l9': {
    'I поколение дорест (2022–2024)': {
      'Air EREV 1.5T + 2EM (449 л.с.) 44.5 кВт·ч':    S(servicePresets.diagECU, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.motor_diag, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.coding, servicePresets.adas_diag, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
      'Pro EREV 1.5T + 2EM (449 л.с.) 44.5 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
      'Max EREV 1.5T + 2EM (449 л.с.) 44.5 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
    },
    'I поколение FL (2024–н.в.)': {
      'Pro EREV 1.5T + 2EM (449 л.с.) 44.5 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
      'Max EREV 1.5T + 2EM (449 л.с.) 52.3 кВт·ч':    S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
      'Ultra EREV 1.5T + 2EM (449 л.с.) 52.3 кВт·ч':  S(servicePresets.diagECU_plus, servicePresets.battery_hv_plus, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_diag, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding_ultra, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.lidar_diag, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
    },
  },

  'mega': {
    'I поколение (2024–н.в.)': {
      'BEV 2EM (544 л.с.) 102.7 кВт·ч':   S(servicePresets.diagECU_plus, servicePresets.battery_mega, servicePresets.ev_diag, servicePresets.motor_diag, servicePresets.motor_cal, servicePresets.charging_mega, servicePresets.airmatic, servicePresets.airmatic_cal, servicePresets.coding_ultra, servicePresets.adas_diag, servicePresets.adas_cal, servicePresets.lidar_diag, servicePresets.camera_cal, servicePresets.audio_setup, servicePresets.range_optim, servicePresets.regen_cal, servicePresets.vmax_off, servicePresets.power_unlock, servicePresets.software_update, servicePresets.display_setup, servicePresets.seats_setup, servicePresets.dtc_off),
    },
  },

};
