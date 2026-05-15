export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '3 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '5 000 ₽' }],
  battery_diag:   [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '8 000 ₽' }],
  battery_deep:   [{ name: 'Углубленная диагностика батареи', description: 'Полный анализ ячеек и BMS', price: '12 000 ₽' }],
  battery_cal:    [{ name: 'Калибровка батареи', description: 'Адаптация и балансировка', price: '10 000 ₽' }],
  inverter_diag:  [{ name: 'Диагностика инвертора', description: 'Проверка силовой электроники', price: '6 000 ₽' }],
  motor_diag:     [{ name: 'Диагностика электромоторов', description: 'Проверка тяговых двигателей', price: '5 000 ₽' }],
  motor_dual:     [{ name: 'Диагностика Dual Motor', description: '2 электромотора AWD', price: '7 000 ₽' }],
  motor_tri:      [{ name: 'Диагностика Tri Motor', description: '3 электромотора Sapphire', price: '10 000 ₽' }],
  cooling_diag:   [{ name: 'Диагностика системы охлаждения', description: 'Терморегуляция батареи и моторов', price: '5 000 ₽' }],
  charging_diag:  [{ name: 'Диагностика зарядной системы', description: 'DC/AC charging 900V', price: '6 000 ₽' }],
  software_update:[{ name: 'Обновление ПО', description: 'OTA/Service updates', price: '8 000 ₽' }],
  dreamdrive_diag:[{ name: 'Диагностика DreamDrive', description: 'ADAS и автопилот', price: '7 000 ₽' }],
  dreamdrive_cal: [{ name: 'Калибровка DreamDrive', description: 'Настройка камер и радаров', price: '12 000 ₽' }],
  airsusp_diag:   [{ name: 'Диагностика пневмоподвески', description: 'Adaptive air suspension', price: '6 000 ₽' }],
  airsusp_cal:    [{ name: 'Калибровка подвески', description: 'Адаптация высоты и жесткости', price: '8 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка максимальной скорости', price: '10 000 ₽' }],
  power_tune:     [{ name: 'Настройка отдачи', description: 'Оптимизация power delivery', price: '15 000 ₽' }],
  power_tune_hi:  [{ name: 'Производительная настройка', description: 'Увеличение мощности GT/Dream', price: '25 000 ₽' }],
  power_sapphire: [{ name: 'Настройка Sapphire', description: 'Tri-Motor performance tune', price: '35 000 ₽' }],
  regen_tune:     [{ name: 'Настройка рекуперации', description: 'Калибровка режимов торможения', price: '5 000 ₽' }],
  torque_vector:  [{ name: 'Настройка Torque Vectoring', description: 'Распределение крутящего момента', price: '10 000 ₽' }],
  launch_control: [{ name: 'Активация Launch Control', description: 'Режим максимального разгона', price: '8 000 ₽' }],
  track_mode:     [{ name: 'Активация Track Mode', description: 'Гоночные настройки Sapphire', price: '12 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '7 000 ₽' }],
  coding_premium: [{ name: 'Расширенное кодирование', description: 'Активация премиум функций', price: '15 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const lucidData = {

  'air': {
    '1 поколение дорест (2021–2023)': {
      'Air Pure RWD (480 л.с.)':         S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.airsusp_diag, servicePresets.coding, servicePresets.regen_tune, servicePresets.vmax_off),
      'Air Pure AWD (480 л.с.)':         S(servicePresets.battery_diag, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.airsusp_diag, servicePresets.coding, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.vmax_off),
      'Air Touring AWD (620 л.с.)':      S(servicePresets.battery_diag, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.dreamdrive_cal, servicePresets.airsusp_diag, servicePresets.airsusp_cal, servicePresets.power_tune, servicePresets.coding, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.vmax_off),
      'Air Grand Touring AWD (819 л.с.)': S(servicePresets.battery_deep, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.dreamdrive_cal, servicePresets.airsusp_diag, servicePresets.airsusp_cal, servicePresets.power_tune_hi, servicePresets.coding_premium, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.vmax_off),
      'Air Dream Edition AWD (1111 л.с.)': S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.dreamdrive_cal, servicePresets.airsusp_diag, servicePresets.airsusp_cal, servicePresets.power_tune_hi, servicePresets.coding_premium, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.vmax_off),
      'Air Sapphire AWD (1234 л.с.)':    S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_tri, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.dreamdrive_cal, servicePresets.airsusp_diag, servicePresets.airsusp_cal, servicePresets.power_sapphire, servicePresets.coding_premium, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.track_mode, servicePresets.vmax_off),
    },
    '1 поколение FL (2024–н.в.)': {
      'Air Pure RWD (430 л.с.)':         S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.dreamdrive_cal, servicePresets.airsusp_diag, servicePresets.coding, servicePresets.regen_tune, servicePresets.vmax_off),
      'Air Pure AWD (430 л.с.)':         S(servicePresets.battery_diag, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.dreamdrive_cal, servicePresets.airsusp_diag, servicePresets.coding, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.vmax_off),
      'Air Touring AWD (620 л.с.)':      S(servicePresets.battery_diag, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.dreamdrive_cal, servicePresets.airsusp_diag, servicePresets.airsusp_cal, servicePresets.power_tune, servicePresets.coding, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.vmax_off),
      'Air Grand Touring AWD (828 л.с.)': S(servicePresets.battery_deep, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.dreamdrive_cal, servicePresets.airsusp_diag, servicePresets.airsusp_cal, servicePresets.power_tune_hi, servicePresets.coding_premium, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.vmax_off),
      'Air Sapphire AWD (1234 л.с.)':    S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_tri, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.dreamdrive_diag, servicePresets.dreamdrive_cal, servicePresets.airsusp_diag, servicePresets.airsusp_cal, servicePresets.power_sapphire, servicePresets.coding_premium, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.track_mode, servicePresets.vmax_off),
    },
  },

};
