export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'Роботизированная КПП', price: '2 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '8 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  stage1_brabus:  [{ name: 'Прошивка Stage 1 Brabus', description: 'Тюнинг версий Brabus', price: '15 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '5 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '7 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '8 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка скорости', price: '5 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '2 500 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '10 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '4 000 ₽' }],
  electric_diag:  [{ name: 'Диагностика электросистемы', description: 'Проверка HV батареи и инвертора', price: '4 000 ₽' }],
  battery_calibr: [{ name: 'Калибровка батареи', description: 'Адаптация электросистемы', price: '6 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const smartData = {

  'fortwo': {
    'W450 City Coupe (1998–2002)': {
      '0.6 (M160)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '0.6 Diesel (OM660)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'W450 Fortwo дорест (2002–2004)': {
      '0.6 (M160)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '0.7 (M160)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '0.6 Diesel (OM660)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '0.7 Brabus':                   S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'W450 Fortwo FL (2004–2007)': {
      '0.7 (M160)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.0 (M132)':                   S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '0.8 CDI (OM660)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '0.7 Brabus':                   S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'W451 дорест (2007–2010)': {
      '1.0 (M132)':                   S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '0.8 CDI (OM660)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.0 Brabus':                   S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.gpf_off),
    },
    'W451 FL-1 (2010–2012)': {
      '1.0 (M132)':                   S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '0.8 CDI (OM660)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.0 Brabus':                   S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.gpf_off),
      'Electric Drive':               S(servicePresets.electric_diag, servicePresets.battery_calibr, servicePresets.diagECU, servicePresets.coding),
    },
    'W451 FL-2 (2012–2015)': {
      '1.0 (M132)':                   S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '0.8 CDI (OM660)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.0 Brabus':                   S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.gpf_off),
      'Electric Drive':               S(servicePresets.electric_diag, servicePresets.battery_calibr, servicePresets.diagECU, servicePresets.coding),
    },
    'W453 дорест (2014–2018)': {
      '0.9 Turbo (M281)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '1.0 (M281)':                   S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '0.9 Brabus Turbo':             S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.gpf_off),
      'Electric Drive':               S(servicePresets.electric_diag, servicePresets.battery_calibr, servicePresets.diagECU, servicePresets.coding),
    },
    'W453 FL (2018–2019)': {
      '0.9 Turbo (M281)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '1.0 (M281)':                   S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.gpf_off),
      '0.9 Brabus Turbo':             S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.gpf_off),
      'EQ Electric Drive':            S(servicePresets.electric_diag, servicePresets.battery_calibr, servicePresets.diagECU, servicePresets.coding),
    },
    'W453 EQ (2019–н.в.)': {
      'EQ Electric Drive':            S(servicePresets.electric_diag, servicePresets.battery_calibr, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'forfour': {
    'W454 (2004–2006)': {
      '1.1 (M134)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '1.3 (M135)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '1.5 (M135)':                   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '1.5 CDI (OM639)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.5 Brabus':                   S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
    'W453 дорест (2014–2018)': {
      '0.9 Turbo (M281)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.gpf_off),
      '1.0 (M281)':                   S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.gpf_off),
      '0.9 Brabus Turbo':             S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.gpf_off),
    },
    'W453 FL (2018–2019)': {
      '0.9 Turbo (M281)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.gpf_off),
      '1.0 (M281)':                   S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.gpf_off),
      '0.9 Brabus Turbo':             S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.gpf_off),
      'EQ Electric Drive':            S(servicePresets.electric_diag, servicePresets.battery_calibr, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'roadster': {
    '452 (2003–2005)': {
      '0.7 Turbo (M160)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '0.7 Brabus':                   S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'roadster-coupe': {
    '452 (2003–2005)': {
      '0.7 Turbo (M160)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '0.7 Brabus':                   S(servicePresets.stage1_brabus, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'fortwo cabrio':    { 'см. Fortwo соответствующего поколения': S() },
  'forfour electric': { 'см. Forfour W453 Electric Drive': S() },
};
