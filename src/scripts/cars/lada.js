export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Компьютерная диагностика двигателя', price: '1 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ расширенная', description: 'Диагностика с логами и адаптациями', price: '1 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'AMT/АТ/Вариатор', price: '1 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация ДВС', price: '5 000 ₽' }],
  stage1_8v:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация 8-кл двигателя', price: '6 000 ₽' }],
  stage1_16v:     [{ name: 'Прошивка Stage 1', description: 'Оптимизация 16-кл двигателя', price: '7 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '8 000 ₽' }],
  stage1_18:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация 1.8 л двигателя', price: '8 000 ₽' }],
  trans_amt:      [{ name: 'Настройка АМТ', description: 'Калибровка робота', price: '5 000 ₽' }],
  trans_at:       [{ name: 'Настройка АТ', description: 'Калибровка автомата', price: '6 000 ₽' }],
  trans_cvt:      [{ name: 'Настройка CVT', description: 'Калибровка вариатора', price: '7 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '4 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '5 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue', description: 'Система мочевины', price: '5 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка скорости', price: '3 000 ₽' }],
  flaps_off:      [{ name: 'Отключение заслонок', description: 'Вихревые заслонки впуска', price: '3 000 ₽' }],
  maf_off:        [{ name: 'Отключение ДМРВ', description: 'Датчик массового расхода воздуха', price: '3 000 ₽' }],
  evap_off:       [{ name: 'Отключение адсорбера', description: 'Система улавливания паров', price: '3 000 ₽' }],
  cat_off:        [{ name: 'Отключение катализатора', description: 'Удаление катализатора', price: '4 000 ₽' }],
  lambda_off:     [{ name: 'Отключение лямбда-зонда', description: 'Датчики кислорода', price: '3 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки в выхлопе', price: '5 000 ₽' }],
  euro2:          [{ name: 'Прошивка Евро 2', description: 'Отключение экологии', price: '6 000 ₽' }],
  dtc_off:        [{ name: 'Удаление ошибок DTC', description: 'Отключение кодов ошибок', price: '2 000 ₽' }],
  immo_off:       [{ name: 'Отключение иммобилайзера', description: 'Удаление иммо', price: '3 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Активация опций', price: '2 500 ₽' }],
  tb_replace:     [{ name: 'Адаптация после замены ГРМ', description: 'Сброс адаптаций ГРМ', price: '1 500 ₽' }],
};

const S = (...sets) => sets.flat();

export const ladaData = {

  'granta': {
    'дорестайлинг (2011–2018)': {
      '1.6 8v (82/87 л.с.)':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.tb_replace, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (98/106 л.с.)':        S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.trans_amt, servicePresets.diagTrans, servicePresets.immo_off, servicePresets.tb_replace, servicePresets.lambda_off),
      '1.6 16v АТ (98 л.с.)':         S(servicePresets.stage1_16v, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.immo_off, servicePresets.lambda_off),
    },
    'рестайлинг (2018–н.в.)': {
      '1.6 8v (87/90 л.с.)':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.tb_replace, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (98/106 л.с.)':        S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.trans_amt, servicePresets.diagTrans, servicePresets.immo_off, servicePresets.coding, servicePresets.lambda_off),
      '1.6 16v АТ (98/106 л.с.)':     S(servicePresets.stage1_16v, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.immo_off, servicePresets.coding, servicePresets.lambda_off),
    },
  },

  'vesta': {
    'дорестайлинг (2015–2022)': {
      '1.6 16v (106 л.с.) МТ':        S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off, servicePresets.burbles),
      '1.6 16v (113 л.с.) CVT':       S(servicePresets.stage1_16v, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off),
      '1.8 16v (122 л.с.)':           S(servicePresets.stage1_18, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off, servicePresets.burbles, servicePresets.vmax_off),
      '1.8 16v Sport (145 л.с.)':     S(servicePresets.stage1_18, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.vmax_off, servicePresets.burbles),
    },
    'рестайлинг NG (2022–н.в.)': {
      '1.6 8v (90 л.с.)':             S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (106 л.с.)':           S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off, servicePresets.burbles),
      '1.8 16v (122 л.с.)':           S(servicePresets.stage1_18, servicePresets.diagECU, servicePresets.trans_amt, servicePresets.diagTrans, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off, servicePresets.burbles),
    },
  },

  'kalina': {
    'I поколение дорестайлинг (2004–2008)': {
      '1.4 16v (89 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 8v (81/87 л.с.)':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.tb_replace, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (98 л.с.)':            S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.tb_replace, servicePresets.lambda_off),
    },
    'I поколение FL (2008–2013)': {
      '1.4 16v (89 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 8v (87 л.с.)':             S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.tb_replace, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (98/106 л.с.)':        S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.tb_replace, servicePresets.lambda_off),
    },
    'II поколение (2013–2018)': {
      '1.6 8v (87 л.с.)':             S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (106/107 л.с.)':       S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.lambda_off, servicePresets.burbles),
    },
  },

  'priora': {
    'дорестайлинг (2007–2013)': {
      '1.6 8v (81/87 л.с.)':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.tb_replace, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (98/106 л.с.)':        S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.tb_replace, servicePresets.lambda_off, servicePresets.burbles),
    },
    'рестайлинг (2013–2018)': {
      '1.6 8v (87/90 л.с.)':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (106 л.с.)':           S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.lambda_off, servicePresets.burbles),
      '1.8 16v (123 л.с.)':           S(servicePresets.stage1_18, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.lambda_off, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  'xray': {
    'дорестайлинг (2016–2019)': {
      '1.6 16v ВАЗ (106 л.с.) МТ':    S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off),
      '1.6 16v ВАЗ (106 л.с.) АМТ':   S(servicePresets.stage1_16v, servicePresets.trans_amt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off),
      '1.6 16v Renault (110 л.с.)':   S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.coding, servicePresets.lambda_off),
      '1.8 16v (122 л.с.)':           S(servicePresets.stage1_18, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off, servicePresets.burbles),
    },
    'Cross (2019–н.в.)': {
      '1.6 16v ВАЗ (106 л.с.) МТ':    S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off),
      '1.6 16v ВАЗ (106 л.с.) АМТ':   S(servicePresets.stage1_16v, servicePresets.trans_amt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off),
      '1.6 16v Renault (110 л.с.)':   S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.coding, servicePresets.lambda_off),
      '1.8 16v (122 л.с.)':           S(servicePresets.stage1_18, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off, servicePresets.burbles),
    },
  },

  'largus': {
    'I поколение (2012–2019)': {
      '1.6 8v (84/87 л.с.)':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (102/105 л.с.)':       S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.lambda_off),
    },
    'FL дорестайлинг (2019–2021)': {
      '1.6 8v (87/90 л.с.)':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (102/106 л.с.)':       S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off),
    },
    'FL рестайлинг (2021–н.в.)': {
      '1.6 8v (90 л.с.)':             S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (106 л.с.)':           S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off),
    },
  },

  'niva-legend': {
    '21213/21214 (1993–2020)': {
      '1.7 8v карб (81 л.с.)':        S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.immo_off, servicePresets.maf_off),
      '1.7 8v инж (81 л.с.)':         S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
    },
    '4x4 Urban (2014–2020)': {
      '1.7 8v (83 л.с.)':             S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.maf_off, servicePresets.lambda_off),
    },
    'Legend (2021–н.в.)': {
      '1.7 8v (83 л.с.)':             S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.maf_off, servicePresets.lambda_off),
    },
  },

  'niva-travel': {
    'Chevrolet Niva (2002–2020)': {
      '1.7 8v (80 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
    },
    'Travel дорестайлинг (2020–2021)': {
      '1.7 8v (80/83 л.с.)':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.maf_off, servicePresets.lambda_off),
    },
    'Travel FL (2021–н.в.)': {
      '1.7 8v (83 л.с.)':             S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.maf_off, servicePresets.lambda_off),
    },
  },

  'iskra': {
    'I поколение (2024–н.в.)': {
      '1.6 8v (90 л.с.) МТ':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v (106 л.с.) МТ':        S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.coding, servicePresets.lambda_off, servicePresets.burbles),
      '1.6 16v (106 л.с.) АТ':        S(servicePresets.stage1_16v, servicePresets.trans_at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.immo_off, servicePresets.coding, servicePresets.lambda_off),
    },
  },

  'aura': {
    'I поколение (2024–н.в.)': {
      '1.8 16v (122 л.с.) CVT':       S(servicePresets.stage1_18, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.immo_off, servicePresets.lambda_off, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  '2101-2107': {
    'Классика (1970–2012)': {
      '1.2/1.3/1.5/1.6 карбюратор':   S(servicePresets.diagECU, servicePresets.immo_off),
      '1.5/1.6 инжектор':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
    },
  },

  '2108-2115': {
    'Самара/Спутник (1984–2013)': {
      '1.3/1.5/1.6 карбюратор':       S(servicePresets.diagECU, servicePresets.immo_off),
      '1.5/1.6 8v инжектор':          S(servicePresets.stage1_8v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.maf_off, servicePresets.lambda_off),
      '1.6 16v инжектор':             S(servicePresets.stage1_16v, servicePresets.diagECU, servicePresets.immo_off, servicePresets.lambda_off),
    },
  },

  'vesta-sw': {
    'см. Vesta соответствующего поколения': S(),
  },

  'vesta-sw-cross': {
    'см. Vesta соответствующего поколения': S(),
  },

  'granta-cross': {
    'см. Granta соответствующего поколения': S(),
  },

  'largus-cross': {
    'см. Largus соответствующего поколения': S(),
  },
};
