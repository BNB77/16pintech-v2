export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_basic:  [{ name: 'Диагностика ЭБУ', description: 'Базовая компьютерная диагностика', price: '1 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация ДВС', price: '8 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '5 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '7 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка скорости', price: '5 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '3 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '4 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '2 500 ₽' }],
  immo_off:       [{ name: 'Отключение иммобилайзера', description: 'Удаление иммо', price: '5 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '3 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение экологии', price: '10 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const daihatsuData = {

  'terios': {
    'J100 (1997–2000)': {
      '1.3 (HC-E)':                   S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
      '1.5 (K3-VE)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
    },
    'J100 FL (2000–2005)': {
      '1.3 (HC-EJ)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off),
      '1.5 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off),
    },
    'J200 дорест (2006–2009)': {
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 (3SZ-VE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off),
    },
    'J200 FL (2009–2012)': {
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 (3SZ-VE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off),
    },
    'J210 (2012–2018)': {
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off, servicePresets.dtc_off),
      '1.5 (3SZ-VE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'yrv': {
    'M200 дорест (2000–2003)': {
      '1.0 (EJ-VE)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding),
      '1.3 Turbo (JB-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
    },
    'M200 FL (2003–2005)': {
      '1.0 (EJ-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.3 Turbo (JB-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'sirion': {
    'M100 (1998–2000)': {
      '1.0 (EJ-DE)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
      '1.3 (HC-E)':                   S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
    },
    'M100 FL (2000–2004)': {
      '1.0 (EJ-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding),
    },
    'M300 дорест (2004–2007)': {
      '1.0 (1KR-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 (3SZ-VE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off),
    },
    'M300 FL (2007–2010)': {
      '1.0 (1KR-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 (3SZ-VE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'boon': {
    'M300 дорест (2004–2007)': {
      '1.0 (1KR-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
    },
    'M300 FL (2007–2010)': {
      '1.0 (1KR-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
    },
    'M600 дорест (2010–2014)': {
      '1.0 (1KR-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.dtc_off),
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.dtc_off),
    },
    'M600 FL (2014–2016)': {
      '1.0 (1KR-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.dtc_off),
      '1.0 Turbo (1KR-VET)':          S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.dtc_off),
    },
    'M700 (2016–н.в.)': {
      '1.0 (1KR-VET)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'mira': {
    'L500 (1994–1998)': {
      '0.7 (EF-VE/EF-EL)':            S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
      '0.7 Turbo (EF-DET)':           S(servicePresets.diagECU_basic, servicePresets.stage1_turbo),
    },
    'L700 (1998–2002)': {
      '0.7 (EF-VE/EF-SE)':            S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
      '0.7 Turbo (EF-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding),
    },
    'L250 (2002–2006)': {
      '0.7 (EF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '0.7 Turbo (EF-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
    },
    'L275 (2006–2013)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '0.7 Turbo (KF-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
    },
    'L285 (2013–2018)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.dtc_off),
      '0.7 Turbo (KF-VET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'move': {
    'L600 (1995–1998)': {
      '0.7 (EF-VE)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
      '0.7 Turbo (EF-DET)':           S(servicePresets.diagECU_basic, servicePresets.stage1_turbo),
    },
    'L900 (1998–2002)': {
      '0.7 (EF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
      '0.7 Turbo (EF-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding),
    },
    'L150 (2002–2006)': {
      '0.7 (EF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '0.7 Turbo (EF-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
    },
    'L175 (2006–2010)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '0.7 Turbo (KF-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
    },
    'LA100 (2010–2014)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.dtc_off),
      '0.7 Turbo (KF-VET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
    'LA150 (2014–2017)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.dtc_off),
      '0.7 Turbo (KF-VET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'coo': {
    'M400 (2006–2013)': {
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 (3SZ-VE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'materia': {
    'M400 (2006–2013)': {
      '1.3 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 (3SZ-VE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'altis': {
    'XV30 (2001–2005)': {
      '2.0 (1AZ-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding),
      '2.4 (2AZ-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off),
    },
    'XV40 (2006–2012)': {
      '2.0 (1AZ-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '2.4 (2AZ-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'pyzar': {
    'G300 (1996–2002)': {
      '1.3 (HC-E)':                   S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
      '1.5 (K3-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding),
    },
  },

  'rocky': {
    'F300 (1989–1998)': {
      '2.0 (HE-EG)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
      '2.8 Diesel (3L)':              S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
    },
    'A200 (2019–н.в.)': {
      '1.0 Turbo (1KR-VET)':          S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
      '1.2 Turbo (8NR-FTS)':          S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'applause': {
    'A100 (1989–1997)': {
      '1.6 (HD-E)':                   S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
    },
    'A100 FL (1997–2000)': {
      '1.6 (HD-EP)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
    },
  },

  'charade': {
    'G100 (1987–1993)': {
      '1.0 (CB-20)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
      '1.3 (HC)':                     S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
    },
    'G200 (1993–2000)': {
      '1.3 (HC-E)':                   S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
      '1.5 (HE-EG)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
    },
  },

  'cuore': {
    'L500 (1994–1998)': {
      '0.8 (ED-20)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
    },
    'L700 (1998–2003)': {
      '0.8 (EF-EL)':                  S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
      '1.0 (EJ-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding),
    },
    'L250 (2003–2007)': {
      '1.0 (EJ-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
    },
    'L275 (2007–2011)': {
      '1.0 (1KR-FE)':                 S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
    },
  },

  'tanto': {
    'L350 (2003–2007)': {
      '0.7 (EF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '0.7 Turbo (EF-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
    },
    'L375 (2007–2013)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '0.7 Turbo (KF-DET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off),
    },
    'LA600 (2013–2019)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.dtc_off),
      '0.7 Turbo (KF-VET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
    'LA650 (2019–н.в.)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.dtc_off),
      '0.7 Turbo (KF-VET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'cast': {
    'LA250 (2015–2020)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.dtc_off),
      '0.7 Turbo (KF-VET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'wake': {
    'LA700 (2014–2022)': {
      '0.7 (KF-VE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.dtc_off),
      '0.7 Turbo (KF-VET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },

  'thor': {
    'M900 (2016–н.в.)': {
      '1.0 (1KR-VET)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.vmax_off),
    },
  },

  'taft': {
    'LA900 (2020–н.в.)': {
      '0.7 Turbo (KF-VET)':           S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.vmax_off, servicePresets.dtc_off),
    },
  },
};
