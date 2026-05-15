export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП Aisin/GM', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '18 000 ₽' }],
  stage1_aero:    [{ name: 'Прошивка Stage 1', description: 'Aero Performance тюнинг', price: '22 000 ₽' }],
  trans_auto:     [{ name: 'Настройка АКПП', description: 'Калибровка автомата', price: '10 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '9 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '11 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка скорости', price: '6 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Во впускном коллекторе', price: '5 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '4 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Вторичный воздух', price: '6 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  immo_off:       [{ name: 'Отключение иммобилайзера', description: 'Программное отключение', price: '6 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  saab_sound:     [{ name: 'Активация Saab Sound', description: 'Характерный звук турбины', price: '7 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const saabData = {

  '900': {
    '1 поколение дорест (1978–1986)': {
      '2.0 8v (B201)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 Turbo (B201)':                S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0 Turbo 16S (B202)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
    },
    '1 поколение FL (1986–1994)': {
      '2.0 8v (B201)':                   S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 Turbo (B202)':                S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0 Turbo 16S (B202)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.1 16v (B212)':                  S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.3 Turbo (B234)':                S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
    },
    '2 поколение (1994–1998)': {
      '2.0 (B204)':                      S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.0 Turbo (B204L)':               S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.3 (B234I)':                     S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.3 Turbo (B234R)':               S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.5 V6 (B258I)':                  S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  '9000': {
    '1 поколение дорест (1985–1992)': {
      '2.0 (B202)':                      S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 Turbo (B202)':                S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0 Turbo 16 (B202)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.3 Turbo (B234)':                S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '3.0 V6 (B308I)':                  S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
    },
    '1 поколение FL (1992–1998)': {
      '2.0 (B204)':                      S(servicePresets.stage1_basic, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.0 Turbo (B204L)':               S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.3 (B234I)':                     S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.3 Turbo (B234R/B234L)':         S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.3 Turbo Aero (B234R)':          S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '3.0 V6 (B308I)':                  S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '2.2 TiD (D223L)':                 S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  '9-3': {
    '1 поколение дорест (1998–2002)': {
      '2.0 (B204)':                      S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 Turbo (B204L)':               S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0 Turbo SE (B204R)':            S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.3 (B234I)':                     S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding),
      '2.3 Turbo (B235R)':               S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.3 Viggen (B235R)':              S(servicePresets.stage1_aero, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.2 TiD (D223L)':                 S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    '2 поколение дорест (2002–2007)': {
      '1.8t (B207L)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0t (B207R)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0 Turbo Aero (B207R)':          S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.8 V6 Turbo (B284R)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '1.9 TiD (Z19DTH)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.2 TiD (D223L)':                 S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    '2 поколение FL1 (2007–2011)': {
      '1.8t (B207L)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0t (B207R)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0 Turbo Aero (B207R)':          S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.8 V6 Turbo (B284R)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.8 V6 Turbo X (B284L)':          S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '1.9 TiD (Z19DTH)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '1.9 TTiD (Z19DTR)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    '2 поколение FL2 (2011–2014)': {
      '1.4t (A14NET)':                   S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '1.8t (B207L)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0t (B207R)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0 Turbo Aero (B207R)':          S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.8 V6 Turbo (B284R)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '1.9 TTiD (Z19DTR)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '2.0 TTiD (A20DTH)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  '9-5': {
    '1 поколение дорест (1997–2001)': {
      '2.0t (B205R)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.3t (B235R)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.3 Turbo Aero (B235R)':          S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '3.0 V6 Turbo (B308E)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.2 TiD (D223L)':                 S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    '1 поколение FL1 (2001–2005)': {
      '2.0t (B205E)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.3t (B235E)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.3 Turbo Aero (B235R)':          S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '3.0 V6 Turbo (B308E)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.2 TiD (D223L)':                 S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '3.0 TiD (D308L)':                 S(servicePresets.stage1_turbo_hi, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    '1 поколение FL2 (2005–2010)': {
      '2.0t (B205E)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.3t (B235E)':                    S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.3 Turbo Aero (B235R)':          S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.8 V6 Turbo (B284L)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '1.9 TiD (Z19DTH)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
      '3.0 TiD (D308L)':                 S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
    '2 поколение (2010–2012)': {
      '1.6t (A16XHT)':                   S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0t (A20NHT)':                   S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.saab_sound),
      '2.0 Turbo Aero (A20NHT)':         S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.8 V6 Turbo (B284L)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.saab_sound),
      '2.0 TTiD (A20DTH)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2),
    },
  },

  '9-7x': {
    '1 поколение (2005–2009)': {
      '4.2 I6 (LL8)':                    S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '5.3 V8 (LH8)':                    S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
      '6.0 V8 Aero (LS2)':               S(servicePresets.stage1_aero, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  '9-4x': {
    '1 поколение (2011)': {
      '2.8 V6 Turbo (LAU)':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
      '3.0 V6 (LF1)':                    S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  '9-2x': {
    '1 поколение (2005–2006)': {
      '2.5 (EJ25)':                      S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.5 Turbo Aero (EJ25)':           S(servicePresets.stage1_aero, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

};
