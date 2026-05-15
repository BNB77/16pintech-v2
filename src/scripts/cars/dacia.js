export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_basic:  [{ name: 'Диагностика ЭБУ', description: 'Базовая компьютерная диагностика', price: '1 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация ДВС', price: '8 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '15 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '5 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '7 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '10 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '6 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка скорости', price: '5 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '3 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '4 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '2 500 ₽' }],
  immo_off:       [{ name: 'Отключение иммобилайзера', description: 'Удаление иммо', price: '5 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '3 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение экологии', price: '10 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Заслонки во впускном коллекторе', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const daciaData = {

  'logan': {
    'I дорест (2004–2008)': {
      '1.4 (K7J)':                    S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
      '1.6 (K7M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.immo_off, servicePresets.euro2),
    },
    'I FL (2008–2013)': {
      '1.4 (K7J)':                    S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.6 (K7M/K4M)':                S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.immo_off, servicePresets.euro2),
    },
    'II дорест (2013–2016)': {
      '0.9 TCe (H4B)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off),
      '1.6 (K7M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'II FL (2016–2021)': {
      '0.9 TCe (H4B)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.evap_off),
      '1.0 SCe (B4D)':                S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.6 (K7M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'III (2021–н.в.)': {
      '1.0 TCe (H4D)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.vmax_off),
      '1.0 SCe (B4D)':                S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
    },
  },

  'sandero': {
    'I дорест (2008–2011)': {
      '1.4 (K7J)':                    S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.6 (K7M/K4M)':                S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.immo_off, servicePresets.euro2),
    },
    'I FL (2011–2013)': {
      '1.4 (K7J)':                    S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.6 (K7M/K4M)':                S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.immo_off, servicePresets.euro2),
    },
    'II дорест (2013–2016)': {
      '0.9 TCe (H4B)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off),
      '1.6 (K7M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'II FL (2016–2021)': {
      '0.9 TCe (H4B)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.evap_off),
      '1.0 SCe (B4D)':                S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
      '1.6 (K7M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'III (2021–н.в.)': {
      '1.0 TCe (H4D)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.vmax_off),
      '1.0 SCe (B4D)':                S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.coding, servicePresets.evap_off),
    },
  },

  'sandero stepway': {
    'I дорест (2009–2011)': {
      '1.6 (K4M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.immo_off, servicePresets.euro2),
    },
    'I FL (2011–2013)': {
      '1.6 (K4M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.immo_off, servicePresets.euro2),
    },
    'II дорест (2013–2016)': {
      '0.9 TCe (H4B)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off),
      '1.6 (K7M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'II FL (2016–2021)': {
      '0.9 TCe (H4B)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.evap_off),
      '1.6 (K7M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'III (2021–н.в.)': {
      '1.0 TCe (H4D)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.vmax_off),
    },
  },

  'duster': {
    'I дорест (2010–2015)': {
      '1.6 (K4M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off, servicePresets.evap_off),
      '2.0 (F4R)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.immo_off, servicePresets.euro2),
    },
    'I FL (2015–2018)': {
      '1.6 (K4M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.immo_off, servicePresets.evap_off),
      '2.0 (F4R)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.immo_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'II дорест (2018–2021)': {
      '1.3 TCe (H5H)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.evap_off),
      '1.6 (K4M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '2.0 (F4R)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.vmax_off, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'II FL (2021–н.в.)': {
      '1.0 TCe (H5F)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.evap_off),
      '1.3 TCe (H5H)':                S(servicePresets.diagECU, servicePresets.stage1_turbo_hi, servicePresets.coding, servicePresets.dtc_off, servicePresets.vmax_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
  },

  'lodgy': {
    'I дорест (2012–2017)': {
      '1.6 (K7M/K4M)':                S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'I FL (2017–2022)': {
      '1.6 (K4M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
  },

  'dokker': {
    'I дорест (2012–2017)': {
      '1.6 (K7M/K4M)':                S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
    'I FL (2017–2022)': {
      '1.6 (K4M)':                    S(servicePresets.diagECU, servicePresets.stage1_na, servicePresets.coding, servicePresets.evap_off),
      '1.5 dCi (K9K)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.euro2, servicePresets.dtc_off),
    },
  },

  'jogger': {
    'I (2021–н.в.)': {
      '1.0 TCe (H5F)':                S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off, servicePresets.evap_off),
      '1.3 TCe (H5H)':                S(servicePresets.diagECU, servicePresets.stage1_turbo_hi, servicePresets.coding, servicePresets.dtc_off, servicePresets.vmax_off),
    },
  },

  'bigster': {
    'I (2025–н.в.)': {
      '1.2 TCe Hybrid':               S(servicePresets.diagECU, servicePresets.stage1_turbo, servicePresets.coding, servicePresets.dtc_off),
    },
  },

  'spring': {
    'I (2021–н.в.)': {
      'Electric':                     S(servicePresets.diagECU, servicePresets.coding, servicePresets.dtc_off),
    },
  },

  'solenza': {
    'I (2003–2005)': {
      '1.4 (E7J)':                    S(servicePresets.diagECU_basic, servicePresets.stage1_basic, servicePresets.coding),
      '1.9 Diesel (F8Q)':             S(servicePresets.diagECU_basic, servicePresets.stage1_basic),
    },
  },
};
