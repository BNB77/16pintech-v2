export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '3 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '5 000 ₽' }],
  battery_diag:   [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '7 000 ₽' }],
  battery_deep:   [{ name: 'Углубленная диагностика батареи', description: 'Полный анализ ячеек и BMS', price: '11 000 ₽' }],
  battery_cal:    [{ name: 'Калибровка батареи', description: 'Адаптация и балансировка BMS', price: '9 000 ₽' }],
  inverter_diag:  [{ name: 'Диагностика инвертора', description: 'Проверка силовой электроники', price: '6 000 ₽' }],
  motor_diag:     [{ name: 'Диагностика электромотора', description: 'Проверка тягового двигателя', price: '5 000 ₽' }],
  motor_dual:     [{ name: 'Диагностика Dual Motor', description: '2 электромотора AWD', price: '7 000 ₽' }],
  cooling_diag:   [{ name: 'Диагностика системы охлаждения', description: 'Терморегуляция батареи и моторов', price: '5 000 ₽' }],
  charging_diag:  [{ name: 'Диагностика зарядной системы', description: 'DC/AC charging система', price: '6 000 ₽' }],
  charging_800v:  [{ name: 'Диагностика 800V системы', description: 'Ультрабыстрая зарядка', price: '8 000 ₽' }],
  software_update:[{ name: 'Обновление ПО', description: 'Xmart OS/Firmware updates', price: '7 000 ₽' }],
  xpilot_diag:    [{ name: 'Диагностика XPILOT', description: 'ADAS и автопилот', price: '7 000 ₽' }],
  xpilot_cal:     [{ name: 'Калибровка XPILOT', description: 'Настройка камер и радаров', price: '11 000 ₽' }],
  xpilot_pro:     [{ name: 'Диагностика XPILOT Pro', description: 'Расширенный автопилот', price: '9 000 ₽' }],
  xpilot_max:     [{ name: 'Диагностика XPILOT Max', description: 'Максимальная автопилот система', price: '12 000 ₽' }],
  lidar_diag:     [{ name: 'Диагностика LiDAR', description: 'Система лазерного сканирования', price: '10 000 ₽' }],
  lidar_cal:      [{ name: 'Калибровка LiDAR', description: 'Настройка лазерных датчиков', price: '13 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка максимальной скорости', price: '9 000 ₽' }],
  power_tune:     [{ name: 'Настройка отдачи', description: 'Оптимизация power delivery', price: '12 000 ₽' }],
  power_tune_hi:  [{ name: 'Производительная настройка', description: 'Увеличение мощности Performance', price: '18 000 ₽' }],
  regen_tune:     [{ name: 'Настройка рекуперации', description: 'Калибровка режимов торможения', price: '5 000 ₽' }],
  torque_vector:  [{ name: 'Настройка Torque Vectoring', description: 'Распределение крутящего момента', price: '9 000 ₽' }],
  launch_control: [{ name: 'Активация Launch Control', description: 'Режим максимального разгона', price: '7 000 ₽' }],
  xgp_mode:       [{ name: 'Активация XGP режима', description: 'X-Green Power эко-режим', price: '6 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '6 000 ₽' }],
  coding_premium: [{ name: 'Расширенное кодирование', description: 'Активация премиум функций', price: '12 000 ₽' }],
  xiaop_coding:   [{ name: 'Настройка Xiao P', description: 'Персонализация AI ассистента', price: '4 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const xpengData = {

  'g3': {
    '1 поколение дорест (2018–2020)': {
      'G3 400 (197 л.с., 50.5 кВтч)':    S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.coding, servicePresets.regen_tune, servicePresets.xiaop_coding),
      'G3 520 (197 л.с., 66.5 кВтч)':    S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.coding, servicePresets.regen_tune, servicePresets.xiaop_coding),
    },
    '1 поколение FL (2020–2024)': {
      'G3i 460 (197 л.с., 55.9 кВтч)':   S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.xpilot_cal, servicePresets.coding, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding),
      'G3i 520 (197 л.с., 66 кВтч)':     S(servicePresets.battery_deep, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.xpilot_cal, servicePresets.coding, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xgp_mode, servicePresets.xiaop_coding),
    },
  },

  'p7': {
    '1 поколение дорест (2020–2023)': {
      'P7 480 (267 л.с., 70.8 кВтч)':    S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.xpilot_cal, servicePresets.coding, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'P7 586 (267 л.с., 80.9 кВтч)':    S(servicePresets.battery_deep, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.xpilot_cal, servicePresets.coding, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'P7 670 (267 л.с., 86.2 кВтч)':    S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.xpilot_cal, servicePresets.coding, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'P7 Wing (430 л.с., 80.9 кВтч)':   S(servicePresets.battery_deep, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.coding, servicePresets.power_tune_hi, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.xiaop_coding, servicePresets.vmax_off),
    },
    '1 поколение FL (2023–н.в.)': {
      'P7i 562 (276 л.с., 60.2 кВтч)':   S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'P7i 702 (276 л.с., 86.2 кВтч)':   S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'P7+ 602 (276 л.с., 60.7 кВтч)':   S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_max, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'P7+ 702 (276 л.с., 76.3 кВтч)':   S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_max, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
    },
  },

  'p5': {
    '1 поколение (2021–н.в.)': {
      'P5 460 (211 л.с., 55.9 кВтч)':    S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.coding, servicePresets.regen_tune, servicePresets.xiaop_coding),
      'P5 550 (211 л.с., 66 кВтч)':      S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.coding, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding),
      'P5 600 (211 л.с., 71.4 кВтч)':    S(servicePresets.battery_deep, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
    },
  },

  'g6': {
    '1 поколение (2023–н.в.)': {
      'G6 580 (296 л.с., 66 кВтч)':      S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'G6 755 (296 л.с., 87.5 кВтч)':    S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'G6 AWD (483 л.с., 87.5 кВтч)':    S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune_hi, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.xiaop_coding, servicePresets.vmax_off),
    },
  },

  'g9': {
    '1 поколение дорест (2022–2024)': {
      'G9 570 (313 л.с., 98.6 кВтч)':    S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'G9 702 (313 л.с., 98.6 кВтч)':    S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'G9 AWD (551 л.с., 98.6 кВтч)':    S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune_hi, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.xiaop_coding, servicePresets.vmax_off),
    },
    '1 поколение FL (2024–н.в.)': {
      'G9 650 (313 л.с., 98 кВтч)':      S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_max, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'G9 AWD (551 л.с., 98 кВтч)':      S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_max, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune_hi, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.xiaop_coding, servicePresets.vmax_off),
    },
  },

  'x9': {
    '1 поколение (2024–н.в.)': {
      'X9 640 (313 л.с., 84.5 кВтч)':    S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_max, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'X9 702 (313 л.с., 101.5 кВтч)':   S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_max, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xiaop_coding, servicePresets.vmax_off),
      'X9 AWD (551 л.с., 101.5 кВтч)':   S(servicePresets.battery_deep, servicePresets.battery_cal, servicePresets.motor_dual, servicePresets.inverter_diag, servicePresets.diagECU_plus, servicePresets.charging_800v, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_max, servicePresets.xpilot_cal, servicePresets.lidar_diag, servicePresets.lidar_cal, servicePresets.coding_premium, servicePresets.power_tune_hi, servicePresets.regen_tune, servicePresets.torque_vector, servicePresets.launch_control, servicePresets.xiaop_coding, servicePresets.vmax_off),
    },
  },

  'mona m03': {
    '1 поколение (2024–н.в.)': {
      'M03 515 (163 л.с., 51.8 кВтч)':   S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_diag, servicePresets.coding, servicePresets.regen_tune, servicePresets.xgp_mode, servicePresets.xiaop_coding),
      'M03 620 (163 л.с., 62.2 кВтч)':   S(servicePresets.battery_diag, servicePresets.motor_diag, servicePresets.inverter_diag, servicePresets.diagECU, servicePresets.charging_diag, servicePresets.cooling_diag, servicePresets.software_update, servicePresets.xpilot_pro, servicePresets.xpilot_cal, servicePresets.coding, servicePresets.power_tune, servicePresets.regen_tune, servicePresets.xgp_mode, servicePresets.xiaop_coding),
    },
  },

};
