// Пресеты услуг для Citroen
export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'МКПП/АКПП/Робот', price: '2 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '8 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо бензинового', price: '12 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг turbo', price: '15 000 ₽' }],
  stage1_diesel:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг дизельного ДВС', price: '13 000 ₽' }],
  stage1_diesel_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг diesel', price: '16 000 ₽' }],
  trans_manual:   [{ name: 'Диагностика МКПП', description: 'Механическая коробка передач', price: '3 000 ₽' }],
  trans_auto:     [{ name: 'Настройка АКПП', description: 'Калибровка автоматической КПП', price: '10 000 ₽' }],
  trans_robot:    [{ name: 'Настройка робота', description: 'Калибровка роботизированной КПП', price: '9 000 ₽' }],
  trans_egs:      [{ name: 'Адаптация EGS', description: 'Электронная система управления КПП', price: '8 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '6 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF/FAP', description: 'Сажевый фильтр', price: '8 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '10 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '9 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '7 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '5 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '4 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '4 000 ₽' }],
  lambda_off:     [{ name: 'Отключение лямбда-зондов', description: 'O2 sensors - датчики кислорода', price: '5 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '5 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '11 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '3 000 ₽' }],
  immo_off:       [{ name: 'Отключение иммобилайзера', description: 'Immo off - удаление защиты', price: '4 000 ₽' }],
  start_stop_off: [{ name: 'Отключение Start-Stop', description: 'Система старт-стоп', price: '3 000 ₽' }],
  hydropneum_diag:[{ name: 'Диагностика гидропневматики', description: 'Hydractive подвеска', price: '4 000 ₽' }],
  hydropneum_cal: [{ name: 'Калибровка гидропневматики', description: 'Настройка Hydractive', price: '8 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  bsi_repair:     [{ name: 'Ремонт BSI/BSM', description: 'Блок коммутации и управления', price: '7 000 ₽' }],
  lexia_diag:     [{ name: 'Диагностика Lexia/DiagBox', description: 'Заводская диагностика', price: '3 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const citroenData = {

  'c3': {
    'FC дорест (2002–2005)': {
      '1.1 (TU1)':                    S(servicePresets.stage1_basic, servicePresets.trans_manual, servicePresets.diagECU),
      '1.4 (TU3/ET3)':                S(servicePresets.stage1_basic, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 (TU5)':                    S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.4 HDi (DV4)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'FC рестайлинг (2005–2010)': {
      '1.1 (TU1)':                    S(servicePresets.stage1_basic, servicePresets.trans_manual),
      '1.4 (TU3/ET3)':                S(servicePresets.stage1_basic, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 (TU5/EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.4 HDi (DV4)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'A51 дорест (2009–2013)': {
      '1.0 VTi (EB0)':                S(servicePresets.stage1_basic, servicePresets.trans_manual),
      '1.4 VTi (EP3)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_robot),
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.4 HDi (DV4)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'A51 рестайлинг (2013–2016)': {
      '1.0 VTi (EB0)':                S(servicePresets.stage1_basic, servicePresets.trans_manual),
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.gpf_off),
      '1.4 VTi (EP3)':                S(servicePresets.stage1_na, servicePresets.trans_manual),
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_auto),
      '1.4 HDi (DV4)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'C3 III (2016–н.в.)': {
      '1.0 PureTech (EB0)':           S(servicePresets.stage1_basic, servicePresets.trans_manual),
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.5 BlueHDi (DV5)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'c4': {
    'LC дорест (2004–2008)': {
      '1.4 (ET3)':                    S(servicePresets.stage1_basic, servicePresets.trans_manual),
      '1.6 (TU5/EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '2.0 (EW10)':                   S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'LC рестайлинг (2008–2010)': {
      '1.4 (EP3)':                    S(servicePresets.stage1_basic, servicePresets.trans_manual),
      '1.6 (EP6)':                    S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.0 (EW10)':                   S(servicePresets.stage1_na, servicePresets.trans_auto),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B7 дорест (2010–2015)': {
      '1.4 VTi (EP3)':                S(servicePresets.stage1_na, servicePresets.trans_manual),
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_manual, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B7 рестайлинг (2015–2018)': {
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.gpf_off),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 BlueHDi (DW10)':           S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'C4 III (2020–н.в.)': {
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.5 BlueHDi (DV5)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'c5': {
    'DC/DE дорест (2001–2004)': {
      '1.8 (EW7)':                    S(servicePresets.stage1_na, servicePresets.trans_manual),
      '2.0 (EW10)':                   S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '3.0 V6 (ES9)':                 S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.hydropneum_diag),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 HDi (DW12)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'DC/DE рестайлинг (2004–2008)': {
      '1.8 (EW7)':                    S(servicePresets.stage1_na, servicePresets.trans_manual),
      '2.0 (EW10)':                   S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '3.0 V6 (ES9)':                 S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.hydropneum_cal),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 HDi (DW12)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '2.7 V6 HDi (DT17)':            S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'X7 дорест (2008–2012)': {
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.trans_auto),
      '2.0 (EW10)':                   S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.0 V6 (ES9)':                 S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.hydropneum_cal),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 HDi (DW12)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 V6 HDi (DT20)':            S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'X7 рестайлинг (2012–2017)': {
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.0 (EW10)':                   S(servicePresets.stage1_na, servicePresets.trans_auto),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.2 HDi (DW12)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'C5 III (2021–н.в.)': {
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.6 PureTech (EP6DT)':         S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.gpf_off),
    },
  },

  'c4 picasso': {
    'UD дорест (2006–2010)': {
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_robot),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.trans_robot),
      '2.0 (EW10)':                   S(servicePresets.stage1_na, servicePresets.trans_auto),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'UD рестайлинг (2010–2013)': {
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_robot),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B78 (2013–2018)': {
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.gpf_off),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.6 BlueHDi (DV6)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 BlueHDi (DW10)':           S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'grand c4 picasso': {
    'UA дорест (2006–2010)': {
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_robot),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.trans_robot),
      '2.0 (EW10)':                   S(servicePresets.stage1_na, servicePresets.trans_auto),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'UA рестайлинг (2010–2013)': {
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_robot),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B78 (2013–2018)': {
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.gpf_off),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.6 BlueHDi (DV6)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 BlueHDi (DW10)':           S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'c3 picasso': {
    'SH (2009–2017)': {
      '1.4 VTi (EP3)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_robot),
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_robot),
      '1.4 HDi (DV4)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'berlingo': {
    'M59 дорест (1996–2002)': {
      '1.4 (TU3)':                    S(servicePresets.stage1_basic, servicePresets.trans_manual, servicePresets.diagECU),
      '1.8 (XU7)':                    S(servicePresets.stage1_na, servicePresets.trans_manual),
      '1.9 D (D9B)':                  S(servicePresets.stage1_diesel, servicePresets.egr_off),
    },
    'M59 рестайлинг (2002–2008)': {
      '1.4 (TU3)':                    S(servicePresets.stage1_basic, servicePresets.trans_manual),
      '1.6 (TU5)':                    S(servicePresets.stage1_na, servicePresets.trans_manual),
      '1.9 D (DW8)':                  S(servicePresets.stage1_diesel, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B9 дорест (2008–2012)': {
      '1.4 (EP3)':                    S(servicePresets.stage1_na, servicePresets.trans_manual),
      '1.6 (EP6)':                    S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_robot),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B9 рестайлинг (2012–2018)': {
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.gpf_off),
      '1.6 (EP6)':                    S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 BlueHDi (DV6)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'K9 (2018–н.в.)': {
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.5 BlueHDi (DV5)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'jumpy': {
    'I (1995–2007)': {
      '1.8 (XU7)':                    S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.diagECU),
      '2.0 (XU10)':                   S(servicePresets.stage1_na, servicePresets.trans_manual),
      '1.9 D/TD (D9B)':               S(servicePresets.stage1_diesel, servicePresets.egr_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'II дорест (2007–2012)': {
      '1.6 (EP6)':                    S(servicePresets.stage1_na, servicePresets.trans_manual),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'II рестайлинг (2012–2016)': {
      '1.6 (EP6)':                    S(servicePresets.stage1_na, servicePresets.trans_manual),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 BlueHDi (DW10)':           S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'III (2016–н.в.)': {
      '1.6 BlueHDi (DV6)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 BlueHDi (DW10)':           S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'jumper': {
    'I (1994–2006)': {
      '2.0 (XU10)':                   S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.diagECU),
      '1.9 D/TD (D9B)':               S(servicePresets.stage1_diesel, servicePresets.egr_off),
      '2.5 D/TD (DJ5)':               S(servicePresets.stage1_diesel, servicePresets.egr_off),
      '2.8 HDi (8140)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'II дорест (2006–2011)': {
      '2.2 HDi (DW12)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 HDi (F1CE)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'II рестайлинг (2011–2014)': {
      '2.2 HDi (DW12)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 HDi (F1CE)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'II 2-й рестайлинг (2014–н.в.)': {
      '2.0 BlueHDi (DW10)':           S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.2 BlueHDi (DW12)':           S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'ds3': {
    'DS3 (2009–2016)': {
      '1.2 VTi (EB2)':                S(servicePresets.stage1_basic, servicePresets.trans_manual),
      '1.4 VTi (EP3)':                S(servicePresets.stage1_na, servicePresets.trans_manual),
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_manual, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.4 HDi (DV4)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'ds4': {
    'DS4 дорест (2011–2015)': {
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_manual, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'DS4 рестайлинг (2015–2020)': {
      '1.2 PureTech (EB2)':           S(servicePresets.stage1_turbo, servicePresets.trans_manual, servicePresets.gpf_off),
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.gpf_off),
      '1.6 BlueHDi (DV6)':            S(servicePresets.stage1_diesel, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 BlueHDi (DW10)':           S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'ds5': {
    'DS5 (2011–2018)': {
      '1.6 THP (EP6CDT)':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.gpf_off),
      '2.0 HDi (DW10)':               S(servicePresets.stage1_diesel_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'c-crosser': {
    'EP (2007–2013)': {
      '2.2 HDi (DW12)':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.4 (4B12)':                   S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
    },
  },

  'c-elysee': {
    'DD (2012–н.в.)': {
      '1.2 VTi (EB2)':                S(servicePresets.stage1_basic, servicePresets.trans_manual),
      '1.6 VTi (EP6)':                S(servicePresets.stage1_na, servicePresets.trans_manual, servicePresets.trans_auto),
      '1.6 HDi (DV6)':                S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  // Ссылочные модели
  'spacetourer':      { 'см. Jumpy соответствующего поколения': S() },
  'c4 cactus':        { 'см. C4 соответствующего поколения (кроссовер-версия)': S() },
  'c3 aircross':      { 'см. C3 соответствующего поколения (кроссовер-версия)': S() },
  'c5 aircross':      { 'см. C5 соответствующего поколения (кроссовер-версия)': S() },
  'ds7 crossback':    { 'премиум кроссовер DS Automobiles': S() },
  'ds9':              { 'премиум седан DS Automobiles': S() },
};