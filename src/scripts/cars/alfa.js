// Пресеты услуг для Alfa Romeo
export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'МКПП/АКПП/Селеспид', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_jts:     [{ name: 'Прошивка Stage 1 JTS', description: 'Оптимизация JTS двигателей', price: '12 000 ₽' }],
  stage1_tbi:     [{ name: 'Прошивка Stage 1 TBi', description: 'Тюнинг турбо бензиновых', price: '15 000 ₽' }],
  stage1_multiair:[{ name: 'Прошивка Stage 1 MultiAir', description: 'Тюнинг MultiAir двигателей', price: '16 000 ₽' }],
  stage1_qv:      [{ name: 'Прошивка Stage 1 QV', description: 'Quadrifoglio Verde тюнинг', price: '22 000 ₽' }],
  stage1_4c:      [{ name: 'Прошивка Stage 1 4C', description: 'Тюнинг суперкара 4C', price: '28 000 ₽' }],
  stage1_8c:      [{ name: 'Прошивка Stage 1 8C', description: 'Тюнинг суперкара 8C', price: '35 000 ₽' }],
  trans_selespeed:[{ name: 'Настройка Selespeed', description: 'Калибровка роботизированной КПП', price: '10 000 ₽' }],
  trans_tct:      [{ name: 'Настройка TCT', description: 'Twin Clutch Transmission', price: '12 000 ₽' }],
  trans_6at:      [{ name: 'Настройка 6AT', description: 'Калибровка 6-ст автомата', price: '10 000 ₽' }],
  trans_8at:      [{ name: 'Настройка 8AT', description: 'Калибровка 8-ст автомата', price: '12 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '6 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр (дизель)', price: '9 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '11 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '6 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  q2_setup:       [{ name: 'Настройка Q2', description: 'Electronic Q2 дифференциал', price: '5 000 ₽' }],
  dna_setup:      [{ name: 'Настройка D.N.A.', description: 'Dynamic/Natural/All Weather', price: '4 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  ads_setup:      [{ name: 'Настройка адаптивной подвески', description: 'Adaptive suspension', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const alfaData = {
  '33': {
    'I поколение 905/907 дорест (1983–1986)': {
      '1.3/1.5 (AR30301/AR30546)':    S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
    },
    'I поколение FL (1986–1990)': {
      '1.5/1.7 (AR30546/AR30549)':    S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.7 16V Quadrifoglio Verde':  S(servicePresets.stage1_qv, servicePresets.diagECU, servicePresets.burbles),
    },
    'II поколение FL2 (1990–1994)': {
      '1.5/1.7 (AR30546/AR30549)':    S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.7 16V Quadrifoglio Verde':  S(servicePresets.stage1_qv, servicePresets.diagECU, servicePresets.burbles),
    },
  },

  '33 stradale': {
    'Единственное поколение (1967–1969)': {
      '2.0 V8 (Tipo 33)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  '145': {
    'I поколение 930 (1994–1997)': {
      '1.4/1.6/1.8/2.0 Twin Spark':  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.9 TD (AR67501)':             S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU),
    },
    'I поколение FL (1997–2000)': {
      '1.4/1.6/1.8/2.0 Twin Spark':  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.9 JTD (AR37101)':            S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU),
    },
  },

  '146': {
    'I поколение 930 (1994–1997)': {
      '1.4/1.6/1.8/2.0 Twin Spark':  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.9 TD (AR67501)':             S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU),
    },
    'I поколение FL (1997–2000)': {
      '1.4/1.6/1.8/2.0 Twin Spark':  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.9 JTD (AR37101)':            S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU),
    },
  },

  '147': {
    'I поколение 937 дорест (2000–2004)': {
      '1.6/2.0 Twin Spark (AR32104/AR32310)': S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.9 JTD (937A2/937A5)':        S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '3.2 V6 GTA (932A0)':           S(servicePresets.stage1_qv, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2004–2010)': {
      '1.6/2.0 Twin Spark (AR32104/AR32310)': S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '1.9 JTD (937A2/937A5)':        S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '3.2 V6 GTA (932A0)':           S(servicePresets.stage1_qv, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  '155': {
    'I поколение 167 дорест (1992–1995)': {
      '1.6/1.8/2.0 Twin Spark':      S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.5 V6 (AR67204)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'I поколение FL (1995–1997)': {
      '1.6/1.8/2.0 Twin Spark':      S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.5 V6 (AR67204)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off),
    },
  },

  '156': {
    'I поколение 932 дорест (1997–2002)': {
      '1.6/1.8/2.0 Twin Spark':      S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.5 V6 (AR32401)':             S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off),
      '1.9 JTD (AR32302/AR37101)':    S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '3.2 V6 GTA (932A0)':           S(servicePresets.stage1_qv, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2002–2003)': {
      '1.6/1.8/2.0 Twin Spark':      S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.5 V6 (AR32401)':             S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off),
      '1.9 JTD (AR32302/AR37101)':    S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '3.2 V6 GTA (932A0)':           S(servicePresets.stage1_qv, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL2 (2003–2005)': {
      '1.6/1.8/2.0 Twin Spark':      S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.5 V6 (AR32401)':             S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off),
      '1.9 JTD/2.4 JTD (AR32302/AR32501)': S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '3.2 V6 GTA (932A0)':           S(servicePresets.stage1_qv, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  '159': {
    'I поколение 939 дорест (2005–2008)': {
      '1.8/2.2 JTS (939A4/939A5)':    S(servicePresets.stage1_jts, servicePresets.trans_6at, servicePresets.trans_selespeed, servicePresets.q2_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.2 V6 JTS (939A0)':           S(servicePresets.stage1_jts, servicePresets.trans_6at, servicePresets.q2_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
      '1.9/2.4 JTDm (939A2/939A3)':   S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    'I поколение FL (2008–2011)': {
      '1.75 TBi (939B1)':             S(servicePresets.stage1_tbi, servicePresets.trans_6at, servicePresets.q2_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
      '1.8/2.2 JTS (939A4/939A5)':    S(servicePresets.stage1_jts, servicePresets.trans_6at, servicePresets.trans_selespeed, servicePresets.q2_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.2 V6 JTS (939A0)':           S(servicePresets.stage1_jts, servicePresets.trans_6at, servicePresets.q2_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
      '1.9/2.0/2.4 JTDm (939A2/939B4/939A3)': S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  '164': {
    'I поколение 164 дорест (1987–1992)': {
      '2.0 Twin Spark (AR64102)':     S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '3.0 V6 (AR64301)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'I поколение FL (1992–1997)': {
      '2.0 Twin Spark (AR64102)':     S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '3.0 V6 (AR64301)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off),
    },
  },

  '166': {
    'I поколение 936 дорест (1998–2003)': {
      '2.0 Twin Spark (AR36201)':     S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.5/3.0/3.2 V6 (AR36301/AR36302)': S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off),
      '2.4 JTD (AR36401)':            S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'I поколение FL (2003–2007)': {
      '2.0 Twin Spark (AR36201)':     S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.5/3.0/3.2 V6 (AR36301/AR36302)': S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off),
      '2.4 JTD (AR36401)':            S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'brera': {
    'I поколение 939 (2005–2010)': {
      '2.2 JTS (939A5)':              S(servicePresets.stage1_jts, servicePresets.trans_6at, servicePresets.trans_selespeed, servicePresets.q2_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
      '3.2 V6 JTS (939A0)':           S(servicePresets.stage1_jts, servicePresets.trans_6at, servicePresets.q2_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
      '2.4 JTDm (939A3)':             S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  'gt': {
    'I поколение 937 (2003–2010)': {
      '1.8/2.0 Twin Spark (937A1/937A2)': S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '3.2 V6 (932A0)':               S(servicePresets.stage1_basic, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
      '1.9 JTD (937A5)':              S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'gtv': {
    'I поколение 916 дорест (1995–1998)': {
      '2.0 Twin Spark (AR16201)':     S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '3.0 V6 (AR16102)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'I поколение FL (1998–2005)': {
      '2.0 Twin Spark (AR16201)':     S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '3.0/3.2 V6 (AR16102/AR16105)': S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'giulia': {
    'I поколение 952 дорест (2016–2019)': {
      '2.0 Turbo (955A3)':            S(servicePresets.stage1_multiair, servicePresets.trans_8at, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
      '2.2 JTDm (952B1)':             S(servicePresets.stage1_basic, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.9 V6 Bi-Turbo Quadrifoglio (952A0)': S(servicePresets.stage1_qv, servicePresets.trans_8at, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.ads_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2019–2022)': {
      '2.0 Turbo (955A3)':            S(servicePresets.stage1_multiair, servicePresets.trans_8at, servicePresets.gpf_off, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
      '2.2 JTDm (952B1)':             S(servicePresets.stage1_basic, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.9 V6 Bi-Turbo Quadrifoglio (952A0)': S(servicePresets.stage1_qv, servicePresets.trans_8at, servicePresets.gpf_off, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.ads_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL2 (2022–н.в.)': {
      '2.0 Turbo Mild Hybrid':        S(servicePresets.stage1_multiair, servicePresets.trans_8at, servicePresets.gpf_off, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
      '2.2 JTDm':                     S(servicePresets.stage1_basic, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.9 V6 Bi-Turbo Quadrifoglio': S(servicePresets.stage1_qv, servicePresets.trans_8at, servicePresets.gpf_off, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.ads_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'giulietta': {
    'I поколение 940 дорест (2010–2013)': {
      '1.4 MultiAir (940A1/940B4)':   S(servicePresets.stage1_multiair, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.coding),
      '1.75 TBi (940C0)':             S(servicePresets.stage1_tbi, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.burbles),
      '1.6/2.0 JTDm (940A3/940C2)':   S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '1.75 TBi Quadrifoglio Verde':  S(servicePresets.stage1_qv, servicePresets.trans_tct, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2013–2016)': {
      '1.4 MultiAir (940A1/940B4)':   S(servicePresets.stage1_multiair, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.coding),
      '1.75 TBi (940C0)':             S(servicePresets.stage1_tbi, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.burbles),
      '1.6/2.0 JTDm (940A3/940C2)':   S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '1.75 TBi Quadrifoglio Verde':  S(servicePresets.stage1_qv, servicePresets.trans_tct, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL2 (2016–2020)': {
      '1.4 MultiAir (940A1/940B4)':   S(servicePresets.stage1_multiair, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.coding),
      '1.75 TBi Veloce (940C0)':      S(servicePresets.stage1_qv, servicePresets.trans_tct, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
      '1.6/2.0 JTDm (940A3/940C2)':   S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  'mito': {
    'I поколение 955 дорест (2008–2013)': {
      '0.9/1.4 TwinAir/MultiAir':     S(servicePresets.stage1_multiair, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.coding),
      '1.3/1.6 JTDm':                 S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'I поколение FL (2013–2016)': {
      '0.9/1.4 TwinAir/MultiAir':     S(servicePresets.stage1_multiair, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.coding),
      '1.3/1.6 JTDm':                 S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'I поколение FL2 (2016–2018)': {
      '0.9/1.4 TwinAir/MultiAir':     S(servicePresets.stage1_multiair, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.coding),
      '1.3/1.6 JTDm':                 S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'spider': {
    'I поколение 916 дорест (1995–1998)': {
      '2.0 Twin Spark (AR16201)':     S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '3.0 V6 (AR16102)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (1998–2005)': {
      '2.0 Twin Spark (AR16201)':     S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '3.0/3.2 V6 (AR16102/AR16105)': S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off, servicePresets.burbles),
    },
    'II поколение 939 (2006–2010)': {
      '2.2 JTS (939A5)':              S(servicePresets.stage1_jts, servicePresets.trans_6at, servicePresets.trans_selespeed, servicePresets.q2_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
      '3.2 V6 JTS (939A0)':           S(servicePresets.stage1_jts, servicePresets.trans_6at, servicePresets.q2_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
      '2.4 JTDm (939A3)':             S(servicePresets.stage1_basic, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  'stelvio': {
    'I поколение 949 дорест (2017–2020)': {
      '2.0 Turbo (952A4)':            S(servicePresets.stage1_multiair, servicePresets.trans_8at, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
      '2.2 JTDm (952B2)':             S(servicePresets.stage1_basic, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.9 V6 Bi-Turbo Quadrifoglio (952A1)': S(servicePresets.stage1_qv, servicePresets.trans_8at, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.ads_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2020–н.в.)': {
      '2.0 Turbo (952A4)':            S(servicePresets.stage1_multiair, servicePresets.trans_8at, servicePresets.gpf_off, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.burbles),
      '2.2 JTDm (952B2)':             S(servicePresets.stage1_basic, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_8at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.9 V6 Bi-Turbo Quadrifoglio': S(servicePresets.stage1_qv, servicePresets.trans_8at, servicePresets.gpf_off, servicePresets.q2_setup, servicePresets.dna_setup, servicePresets.ads_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'tonale': {
    'I поколение (2022–н.в.)': {
      '1.5 Hybrid (160 л.с.)':        S(servicePresets.stage1_multiair, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.coding),
      '1.5 Hybrid (275 л.с.) PHEV':   S(servicePresets.stage1_multiair, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.q2_setup),
      '1.6 Diesel (130 л.с.)':        S(servicePresets.stage1_basic, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'junior': {
    'I поколение (2024–н.в.)': {
      '1.2 Hybrid (136 л.с.)':        S(servicePresets.stage1_multiair, servicePresets.trans_tct, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.dna_setup, servicePresets.coding),
      'Elettrica (156 л.с.)':         S(servicePresets.diagECU_plus, servicePresets.coding, servicePresets.dna_setup),
      'Veloce Elettrica (240 л.с.)':  S(servicePresets.diagECU_plus, servicePresets.coding, servicePresets.dna_setup),
    },
  },

  'milano': {
    'см. Junior': S(),
  },

  '4c': {
    'I поколение 960 дорест (2013–2016)': {
      '1.75 TBi (960A1)':             S(servicePresets.stage1_4c, servicePresets.trans_tct, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2016–2020)': {
      '1.75 TBi (960A1)':             S(servicePresets.stage1_4c, servicePresets.trans_tct, servicePresets.dna_setup, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  '8c': {
    'I поколение (2007–2010)': {
      '4.7 V8 (Maserati)':            S(servicePresets.stage1_8c, servicePresets.trans_selespeed, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  '75': {
    'I поколение 162B дорест (1985–1988)': {
      '1.6/1.8/2.0 (AR06202/AR06208)': S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.5/3.0 V6 (AR06468/AR06403)': S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'I поколение FL (1988–1992)': {
      '1.6/1.8/2.0 (AR06202/AR06208)': S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.5/3.0 V6 (AR06468/AR06403)': S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.vmax_off),
    },
  },
};

// Экспорт по умолчанию
export default alfaData;