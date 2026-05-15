// Пресеты услуг для Aston Martin
export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '3 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '5 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'МКПП/АКПП/Автомат', price: '3 500 ₽' }],
  stage1_v8:      [{ name: 'Прошивка Stage 1 V8', description: 'Оптимизация V8 двигателя', price: '25 000 ₽' }],
  stage1_v12:     [{ name: 'Прошивка Stage 1 V12', description: 'Оптимизация V12 двигателя', price: '30 000 ₽' }],
  stage1_amg_v8:  [{ name: 'Прошивка Stage 1 AMG V8', description: 'Тюнинг Mercedes-AMG V8', price: '28 000 ₽' }],
  stage1_amg_v12: [{ name: 'Прошивка Stage 1 AMG V12', description: 'Тюнинг Mercedes-AMG V12', price: '35 000 ₽' }],
  stage1_vantage: [{ name: 'Прошивка Stage 1 Vantage', description: 'Тюнинг Vantage', price: '32 000 ₽' }],
  stage1_dbs:     [{ name: 'Прошивка Stage 1 DBS', description: 'Тюнинг DBS суперкара', price: '40 000 ₽' }],
  stage1_one77:   [{ name: 'Прошивка Stage 1 One-77', description: 'Тюнинг гиперкара', price: '60 000 ₽' }],
  stage1_vulcan:  [{ name: 'Прошивка Stage 1 Vulcan', description: 'Тюнинг трекового гиперкара', price: '80 000 ₽' }],
  trans_6mt:      [{ name: 'Настройка 6MT', description: 'Калибровка 6-ст механики', price: '12 000 ₽' }],
  trans_6at:      [{ name: 'Настройка 6AT', description: 'Калибровка 6-ст автомата (ZF)', price: '15 000 ₽' }],
  trans_7at:      [{ name: 'Настройка 7AT', description: 'Калибровка 7-ст автомата', price: '15 000 ₽' }],
  trans_8at:      [{ name: 'Настройка 8AT', description: 'Калибровка 8-ст автомата (ZF)', price: '18 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '8 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '12 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '5 000 ₽' }],
  ads_setup:      [{ name: 'Настройка адаптивной подвески', description: 'Adaptive Damping System', price: '8 000 ₽' }],
  carbon_ceramic: [{ name: 'Диагностика CCB', description: 'Carbon Ceramic Brakes', price: '5 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '8 000 ₽' }],
  sport_modes:    [{ name: 'Настройка режимов Sport/Track', description: 'GT/Sport/Sport Plus/Track', price: '6 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const astonData = {
  'db5': {
    'I поколение (1963–1965)': {
      '4.0 I6 (Straight-6)':          S(servicePresets.diagECU, servicePresets.trans_6mt, servicePresets.coding),
    },
  },

  'db6': {
    'I поколение (1965–1971)': {
      '4.0 I6 (Straight-6)':          S(servicePresets.diagECU, servicePresets.trans_6mt, servicePresets.coding),
    },
  },

  'db7': {
    'I поколение дорест (1994–1999)': {
      '3.2 I6 Supercharged':          S(servicePresets.stage1_v8, servicePresets.trans_6mt, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.2 I6':                       S(servicePresets.stage1_v8, servicePresets.trans_6mt, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'I поколение FL (1999–2004)': {
      '6.0 V12':                      S(servicePresets.stage1_v12, servicePresets.trans_6mt, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'db9': {
    'I поколение дорест (2004–2008)': {
      '5.9 V12 (450 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_6mt, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2008–2012)': {
      '5.9 V12 (477 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_6mt, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL2 (2012–2016)': {
      '5.9 V12 (510 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.vmax_off, servicePresets.burbles),
      '5.9 V12 GT (540 л.с.)':        S(servicePresets.stage1_dbs, servicePresets.trans_6at, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'db11': {
    'I поколение (2016–2022)': {
      '4.0 V8 Twin-Turbo AMG (510 л.с.)': S(servicePresets.stage1_amg_v8, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.burbles),
      '5.2 V12 Twin-Turbo (608 л.с.)': S(servicePresets.stage1_v12, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'db12': {
    'I поколение (2023–н.в.)': {
      '4.0 V8 Twin-Turbo AMG (680 л.с.)': S(servicePresets.stage1_amg_v8, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.burbles),
    },
  },

  'dbs': {
    'I поколение (2007–2012)': {
      '5.9 V12 (517 л.с.)':           S(servicePresets.stage1_dbs, servicePresets.trans_6mt, servicePresets.trans_6at, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.vmax_off, servicePresets.burbles),
    },
    'II поколение Superleggera (2018–н.в.)': {
      '5.2 V12 Twin-Turbo (725 л.с.)': S(servicePresets.stage1_dbs, servicePresets.trans_8at, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'dbx': {
    'I поколение дорест (2020–2023)': {
      '4.0 V8 Twin-Turbo AMG (550 л.с.)': S(servicePresets.stage1_amg_v8, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.burbles),
    },
    'I поколение FL (2023–н.в.)': {
      '4.0 V8 Twin-Turbo AMG (550 л.с.)': S(servicePresets.stage1_amg_v8, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.burbles),
      '4.0 V8 Twin-Turbo AMG (707 л.с.) DBX707': S(servicePresets.stage1_dbs, servicePresets.trans_8at, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'vantage': {
    'I поколение (1977–1989)': {
      '5.3/5.7 V8':                   S(servicePresets.stage1_v8, servicePresets.trans_6mt, servicePresets.diagECU, servicePresets.coding),
    },
    'II поколение (1993–2000)': {
      '5.3/6.0 V8':                   S(servicePresets.stage1_v8, servicePresets.trans_6mt, servicePresets.diagECU, servicePresets.coding),
    },
    'III поколение дорест (2005–2009)': {
      '4.3 V8 (380 л.с.)':            S(servicePresets.stage1_vantage, servicePresets.trans_6mt, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
      '4.7 V8 (420 л.с.)':            S(servicePresets.stage1_vantage, servicePresets.trans_6mt, servicePresets.trans_7at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
    },
    'III поколение FL (2009–2017)': {
      '4.7 V8 (420 л.с.)':            S(servicePresets.stage1_vantage, servicePresets.trans_6mt, servicePresets.trans_7at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.burbles),
      '4.7 V8 S (430 л.с.)':          S(servicePresets.stage1_vantage, servicePresets.trans_7at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.burbles),
      '6.0 V12 (510-573 л.с.)':       S(servicePresets.stage1_dbs, servicePresets.trans_6mt, servicePresets.trans_7at, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.vmax_off, servicePresets.burbles),
    },
    'IV поколение дорест (2017–2024)': {
      '4.0 V8 Twin-Turbo AMG (510 л.с.)': S(servicePresets.stage1_amg_v8, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.burbles),
    },
    'IV поколение FL (2024–н.в.)': {
      '4.0 V8 Twin-Turbo AMG (665 л.с.)': S(servicePresets.stage1_amg_v8, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'vanquish': {
    'I поколение (2001–2007)': {
      '5.9 V12 (460 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_6mt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'II поколение (2012–2018)': {
      '5.9 V12 (573 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_8at, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.vmax_off, servicePresets.burbles),
    },
    'III поколение (2022–н.в.)': {
      '5.2 V12 Twin-Turbo (835 л.с.)': S(servicePresets.stage1_dbs, servicePresets.trans_8at, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.sport_modes, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'virage': {
    'I поколение (1989–2000)': {
      '5.3/6.3 V8':                   S(servicePresets.stage1_v8, servicePresets.trans_6mt, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'II поколение (2011–2012)': {
      '5.9 V12 (490 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'rapide': {
    'I поколение дорест (2010–2013)': {
      '5.9 V12 (477 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2013–2018)': {
      '5.9 V12 S (558 л.с.)':         S(servicePresets.stage1_v12, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение E (2019–2020)': {
      '5.9 V12 + Electric':           S(servicePresets.stage1_v12, servicePresets.diagECU, servicePresets.coding),
    },
  },

  'lagonda': {
    'I поколение (1976–1989)': {
      '5.3 V8':                       S(servicePresets.stage1_v8, servicePresets.trans_6mt, servicePresets.diagECU, servicePresets.coding),
    },
    'Taraf (2014–2016)': {
      '5.9 V12 (540 л.с.)':           S(servicePresets.stage1_v12, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'cygnet': {
    'I поколение (2011–2013)': {
      '1.3 (Toyota iQ)':              S(servicePresets.diagECU, servicePresets.coding),
    },
  },

  'one-77': {
    'Единственное поколение (2009–2012)': {
      '7.3 V12 (760 л.с.)':           S(servicePresets.stage1_one77, servicePresets.trans_6mt, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'vulcan': {
    'Единственное поколение (2015–2016)': {
      '7.0 V12 (820 л.с.)':           S(servicePresets.stage1_vulcan, servicePresets.trans_6mt, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
    },
  },

  'valkyrie': {
    'Единственное поколение (2021–н.в.)': {
      '6.5 V12 Cosworth + Hybrid (1160 л.с.)': S(servicePresets.stage1_one77, servicePresets.diagECU_plus, servicePresets.diagTrans, servicePresets.carbon_ceramic, servicePresets.sport_modes),
    },
  },

  'zagato': {
    'V12 Zagato (2011–2013)': {
      '5.9 V12 (517 л.с.)':           S(servicePresets.stage1_dbs, servicePresets.trans_6at, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'V8 Vantage Zagato (2012)': {
      '4.7 V8 (420 л.с.)':            S(servicePresets.stage1_vantage, servicePresets.trans_7at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
    },
    'Vanquish Zagato (2016–2017)': {
      '5.9 V12 (595 л.с.)':           S(servicePresets.stage1_dbs, servicePresets.trans_8at, servicePresets.carbon_ceramic, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'ar1': {
    'Единственное поколение (2003–2004)': {
      '6.0 V12':                      S(servicePresets.stage1_v12, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'tickford capri': {
    'Единственное поколение (1983–1985)': {
      '2.8 V6':                       S(servicePresets.stage1_v8, servicePresets.trans_6mt, servicePresets.diagECU, servicePresets.coding),
    },
  },
};

// Экспорт по умолчанию
export default astonData;