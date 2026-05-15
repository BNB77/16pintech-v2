// Пресеты услуг для Acura
export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/Вариатор/Робот', price: '2 500 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного двигателя', price: '12 000 ₽' }],
  stage1_vtec:    [{ name: 'Прошивка Stage 1', description: 'Тюнинг VTEC двигателя', price: '15 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '18 000 ₽' }],
  stage1_type_s:  [{ name: 'Прошивка Stage 1 Type-S', description: 'Производительный тюнинг', price: '22 000 ₽' }],
  stage1_nsx:     [{ name: 'Прошивка Stage 1 NSX', description: 'Настройка суперкара', price: '35 000 ₽' }],
  trans_5at:      [{ name: 'Настройка 5AT', description: 'Калибровка 5-ст автомата', price: '8 000 ₽' }],
  trans_6at:      [{ name: 'Настройка 6AT', description: 'Калибровка 6-ст автомата', price: '10 000 ₽' }],
  trans_10at:     [{ name: 'Настройка 10AT', description: 'Калибровка 10-ст автомата', price: '12 000 ₽' }],
  trans_cvt:      [{ name: 'Настройка CVT', description: 'Калибровка вариатора', price: '10 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '6 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр (дизель)', price: '9 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '6 000 ₽' }],
  vtec_tune:      [{ name: 'Настройка VTEC', description: 'Оптимизация фаз газораспределения', price: '8 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '4 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  sh_awd_diag:    [{ name: 'Диагностика SH-AWD', description: 'Super Handling AWD система', price: '4 000 ₽' }],
  sh_awd_cal:     [{ name: 'Калибровка SH-AWD', description: 'Настройка полного привода', price: '6 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Батарея/инвертор/контроллер', price: '5 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '8 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  a_spec:         [{ name: 'Активация A-Spec режимов', description: 'Раскодировка спортивных функций', price: '6 000 ₽' }],
  type_s_mode:    [{ name: 'Активация Type-S режимов', description: 'Раскодировка Type-S функций', price: '7 000 ₽' }],
  ads_setup:      [{ name: 'Настройка адаптивной подвески', description: 'Adaptive Damper System', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const acuraData = {
  'mdx': {
    'I поколение YD1 (2000–2003)': {
      '3.5 V6 (J35A3/J35A5)':         S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'I поколение FL (2003–2006)': {
      '3.5 V6 (J35A5)':               S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'II поколение YD2 дорест (2006–2009)': {
      '3.7 V6 (J37A1)':               S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'II поколение FL (2009–2013)': {
      '3.7 V6 (J37A1)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'III поколение YD3 дорест (2013–2016)': {
      '3.5 V6 (J35Y5)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'III поколение FL (2016–2020)': {
      '3.5 V6 (J35Y6)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.a_spec),
    },
    'IV поколение (2020–н.в.)': {
      '3.5 V6 (J35A)':                S(servicePresets.stage1_na, servicePresets.trans_10at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.a_spec),
      '3.0 V6 Turbo Hybrid Type S':  S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_10at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.type_s_mode, servicePresets.vmax_off),
    },
  },
  
  'rdx': {
    'I поколение TB1/TB2 дорест (2006–2009)': {
      '2.3 Turbo (K23A1)':            S(servicePresets.stage1_turbo, servicePresets.trans_5at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    'I поколение FL (2009–2012)': {
      '2.3 Turbo (K23A1)':            S(servicePresets.stage1_turbo, servicePresets.trans_5at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    'II поколение TB3/TB4 дорест (2012–2015)': {
      '3.5 V6 (J35Z2)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'II поколение FL (2015–2018)': {
      '3.5 V6 (J35Y4)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'III поколение дорест (2018–2021)': {
      '2.0 Turbo':                    S(servicePresets.stage1_turbo, servicePresets.trans_10at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    'III поколение FL (2021–н.в.)': {
      '2.0 Turbo':                    S(servicePresets.stage1_turbo, servicePresets.trans_10at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.a_spec, servicePresets.burbles),
    },
  },
  
  'tlx': {
    'I поколение UB дорест (2014–2017)': {
      '2.4 i-VTEC (K24W7)':           S(servicePresets.stage1_vtec, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vtec_tune, servicePresets.coding),
      '3.5 V6 (J35Y4)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'I поколение FL (2017–2020)': {
      '2.4 i-VTEC (K24W7)':           S(servicePresets.stage1_vtec, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vtec_tune, servicePresets.a_spec),
      '3.5 V6 (J35Y6)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.a_spec, servicePresets.vmax_off, servicePresets.burbles),
    },
    'II поколение (2020–н.в.)': {
      '2.0 Turbo':                    S(servicePresets.stage1_turbo, servicePresets.trans_10at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.a_spec, servicePresets.burbles),
      '3.0 V6 Turbo Type S':          S(servicePresets.stage1_type_s, servicePresets.trans_10at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.type_s_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },
  
  'ilx': {
    'I поколение DE1 дорест (2012–2015)': {
      '2.0 (K20Z3)':                  S(servicePresets.stage1_vtec, servicePresets.trans_5at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vtec_tune, servicePresets.coding),
      '2.4 (K24Z7)':                  S(servicePresets.stage1_vtec, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vtec_tune, servicePresets.coding),
      '1.5 Hybrid':                   S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.diagECU, servicePresets.coding),
    },
    'I поколение DE2 FL (2015–2018)': {
      '2.4 (K24V7)':                  S(servicePresets.stage1_vtec, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vtec_tune, servicePresets.a_spec),
    },
    'I поколение DE3 FL2 (2018–2022)': {
      '2.4 (K24V7)':                  S(servicePresets.stage1_vtec, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vtec_tune, servicePresets.a_spec),
    },
  },
  
  'integra': {
    'I поколение DA дорест (1986–1989)': {
      '1.6 (D16A1)':                  S(servicePresets.diagECU, servicePresets.trans_5at, servicePresets.coding),
    },
    'I поколение FL (1989–1993)': {
      '1.6/1.7/1.8 (D16/B17/B18)':    S(servicePresets.stage1_vtec, servicePresets.diagECU, servicePresets.coding),
    },
    'II поколение DC дорест (1993–1997)': {
      '1.6/1.8 VTEC (B16/B18)':       S(servicePresets.stage1_vtec, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      'Type-R (B18C)':                S(servicePresets.stage1_type_s, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.burbles),
    },
    'II поколение FL (1997–2001)': {
      '1.6/1.8 VTEC (B16/B18)':       S(servicePresets.stage1_vtec, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      'Type-R (B18C)':                S(servicePresets.stage1_type_s, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.type_s_mode, servicePresets.burbles),
    },
    'III поколение DC5 дорест (2001–2004)': {
      '2.0 i-VTEC (K20A)':            S(servicePresets.stage1_vtec, servicePresets.trans_5at, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      'Type-R (K20A)':                S(servicePresets.stage1_type_s, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.type_s_mode, servicePresets.burbles),
    },
    'III поколение FL (2004–2006)': {
      '2.0 i-VTEC (K20A)':            S(servicePresets.stage1_vtec, servicePresets.trans_5at, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      'Type-R (K20A)':                S(servicePresets.stage1_type_s, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.type_s_mode, servicePresets.burbles),
    },
    'IV поколение DE4 (2022–н.в.)': {
      '1.5 Turbo':                    S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.a_spec, servicePresets.burbles),
      '2.0 Turbo Type S':             S(servicePresets.stage1_type_s, servicePresets.diagECU, servicePresets.type_s_mode, servicePresets.burbles),
    },
  },
  
  'rsx': {
    'I поколение DC5 дорест (2002–2005)': {
      '2.0 i-VTEC (K20A3)':           S(servicePresets.stage1_vtec, servicePresets.trans_5at, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      'Type-S (K20A2)':               S(servicePresets.stage1_type_s, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.type_s_mode, servicePresets.burbles),
    },
    'I поколение FL (2005–2006)': {
      '2.0 i-VTEC (K20Z1)':           S(servicePresets.stage1_vtec, servicePresets.trans_5at, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      'Type-S (K20Z1)':               S(servicePresets.stage1_type_s, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.type_s_mode, servicePresets.burbles),
    },
  },
  
  'tsx': {
    'I поколение CL9 дорест (2003–2006)': {
      '2.4 i-VTEC (K24A2)':           S(servicePresets.stage1_vtec, servicePresets.trans_5at, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    'I поколение FL (2006–2008)': {
      '2.4 i-VTEC (K24A2)':           S(servicePresets.stage1_vtec, servicePresets.trans_5at, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
    },
    'II поколение CU2 дорест (2008–2011)': {
      '2.4 i-VTEC (K24Z3)':           S(servicePresets.stage1_vtec, servicePresets.trans_5at, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.5 V6 (J35Z6)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'II поколение FL (2011–2014)': {
      '2.4 i-VTEC (K24Z3)':           S(servicePresets.stage1_vtec, servicePresets.trans_5at, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles),
      '3.5 V6 (J35Z6)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },
  
  'nsx': {
    'I поколение NA1/NA2 дорест (1990–2001)': {
      '3.0 V6 VTEC (C30A)':           S(servicePresets.stage1_nsx, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение FL (2001–2005)': {
      '3.2 V6 VTEC (C32B)':           S(servicePresets.stage1_nsx, servicePresets.vtec_tune, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'II поколение NC1 дорест (2015–2018)': {
      '3.5 V6 Twin-Turbo Hybrid (JNC1)': S(servicePresets.stage1_nsx, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'II поколение FL (2018–2021)': {
      '3.5 V6 Twin-Turbo Hybrid (JNC1)': S(servicePresets.stage1_nsx, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
    'II поколение FL2 (2021–2022)': {
      '3.5 V6 Twin-Turbo Hybrid Type S': S(servicePresets.stage1_nsx, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.type_s_mode, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.vmax_off, servicePresets.burbles),
    },
  },
  
  'zdx': {
    'I поколение (2009–2013)': {
      '3.7 V6 (J37A1)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.ads_setup, servicePresets.coding, servicePresets.vmax_off),
    },
    'II поколение (2024–н.в.)': {
      'A-Spec (электро, 1 мотор)':    S(servicePresets.diagECU_plus, servicePresets.hybrid_diag, servicePresets.coding, servicePresets.a_spec),
      'Type S (электро, 2 мотора)':   S(servicePresets.diagECU_plus, servicePresets.hybrid_diag, servicePresets.sh_awd_diag, servicePresets.coding, servicePresets.type_s_mode),
    },
  },
  
  'rl': {
    'I поколение KA дорест (1996–1999)': {
      '3.5 V6 (C35A)':                S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'I поколение FL (1999–2004)': {
      '3.5 V6 (C35A)':                S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'II поколение KB1 дорест (2004–2008)': {
      '3.5 V6 (J35A8)':               S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'II поколение FL (2008–2012)': {
      '3.7 V6 (J37A4)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },
  
  'tl': {
    'I поколение UA1/UA2 дорест (1995–1998)': {
      '2.5 (G25A4)':                  S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'I поколение FL (1998–1999)': {
      '3.2 V6 (J32A1)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'II поколение UA4/UA5 дорест (1998–2001)': {
      '3.2 V6 (J32A1)':               S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'II поколение FL (2001–2003)': {
      '3.2 V6 (J32A1)':               S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      'Type-S (J32A2)':               S(servicePresets.stage1_type_s, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.type_s_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'III поколение UA6/UA7 дорест (2003–2006)': {
      '3.2 V6 (J32A3)':               S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'III поколение FL (2006–2008)': {
      '3.2 V6 (J32A3)':               S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '3.5 V6 Type-S (J35A8)':        S(servicePresets.stage1_type_s, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.type_s_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
    'IV поколение UA8/UA9 дорест (2008–2011)': {
      '3.5 V6 (J35Z6)':               S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '3.7 V6 SH-AWD (J37A4)':        S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
    'IV поколение FL (2011–2014)': {
      '3.5 V6 (J35Z6)':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '3.7 V6 SH-AWD (J37A5)':        S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.sh_awd_diag, servicePresets.sh_awd_cal, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },
  
  'cl': {
    'I поколение YA1 (1996–2000)': {
      '2.2/2.3/3.0 V6':               S(servicePresets.stage1_na, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    'II поколение YA4 (2001–2003)': {
      '3.2 V6 (J32A1)':               S(servicePresets.stage1_na, servicePresets.trans_5at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      'Type-S (J32A2)':               S(servicePresets.stage1_type_s, servicePresets.trans_6at, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.type_s_mode, servicePresets.vmax_off, servicePresets.burbles),
    },
  },
};

// Экспорт по умолчанию
export default acuraData;