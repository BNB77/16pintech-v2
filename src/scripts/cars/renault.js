export const servicePresets = {
  diagECU: [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus: [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans: [{ name: 'Диагностика трансмиссии', description: 'EDC/CVT/DP0-DP2/AL4', price: '2 500 ₽' }],
  
  stage1_basic: [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '8 000 ₽' }],
  stage1_na: [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo: [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо бензин/дизель', price: '13 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг TCe/dCi', price: '16 000 ₽' }],
  stage1_rs: [{ name: 'Прошивка Stage 1', description: 'Renault Sport тюнинг', price: '22 000 ₽' }],
  stage1_rs_trophy:[{ name: 'Прошивка Stage 1', description: 'RS Trophy/Megane RS тюнинг', price: '28 000 ₽' }],
  
  trans_dp: [{ name: 'Настройка DP0/DP2', description: 'Калибровка 4-ст автомата', price: '8 000 ₽' }],
  trans_al4: [{ name: 'Настройка AL4', description: 'Калибровка 4-ст автомата', price: '8 000 ₽' }],
  trans_edc: [{ name: 'Настройка EDC', description: 'Калибровка робота 6/7-ст', price: '10 000 ₽' }],
  trans_cvt: [{ name: 'Настройка CVT', description: 'Калибровка вариатора', price: '9 000 ₽' }],
  
  egr_off: [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off: [{ name: 'Удаление DPF/FAP', description: 'Сажевый фильтр дизеля', price: '9 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '11 000 ₽' }],
  gpf_off: [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  adblue_off: [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '8 000 ₽' }],
  
  vmax_off: [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '6 000 ₽' }],
  flaps_off: [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '5 000 ₽' }],
  evap_off: [{ name: 'Отключение EVAP', description: 'EVAP - адсорбер топливных паров', price: '5 000 ₽' }],
  
  burbles: [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2: [{ name: 'Прошивка на Евро 2', description: 'Euro2 - отключение всей экологии', price: '12 000 ₽' }],
  dtc_off: [{ name: 'Отключение DTC', description: 'DTC - удаление кодов ошибок', price: '3 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '2 000 ₽' }],
  
  hybrid_diag: [{ name: 'Диагностика гибридной системы', description: 'E-Tech Hybrid инвертор/контроллер', price: '4 000 ₽' }],
  hybrid_cal: [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '8 000 ₽' }],
  battery_hv: [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '5 000 ₽' }],
  battery_ev: [{ name: 'Диагностика EV батареи', description: 'Проверка электромобиля Zoe/Kangoo ZE', price: '6 000 ₽' }],
  
  coding: [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  rlink_update: [{ name: 'Обновление R-Link', description: 'Мультимедиа/навигация', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const renaultData = {
  'logan': {
    '1 поколение дорест (2004–2009)': {
      '1.4 8v (K7J)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 8v (K7M)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение FL (2009–2015)': {
      '1.4 8v (K7J)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 8v (K7M)': S(servicePresets.stage1_basic, servicePresets.trans_dp),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_dp),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение дорест (2014–2018)': {
      '0.9 TCe (H4B)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 8v (K7M)': S(servicePresets.stage1_basic, servicePresets.trans_dp),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение FL (2018–н.в.)': {
      '1.6 8v (K7M)': S(servicePresets.stage1_basic, servicePresets.trans_al4),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
    },
  },

  'sandero': {
    '1 поколение дорест (2009–2013)': {
      '1.4 8v (K7J)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 8v (K7M)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение FL (2013–2018)': {
      '0.9 TCe (H4B)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 8v (K7M)': S(servicePresets.stage1_basic, servicePresets.trans_dp),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Sandero RS (2.0 16v)': S(servicePresets.stage1_rs, servicePresets.diagECU),
    },
    '2 поколение дорест (2014–2018)': {
      '0.9 TCe (H4B)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 8v (K7M)': S(servicePresets.stage1_basic, servicePresets.trans_al4),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение FL (2018–н.в.)': {
      '1.0 SCe (B4D)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
    },
  },

  'duster': {
    '1 поколение дорест (2010–2015)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.5 dCi 90/110 л.с. (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение FL (2015–2021)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.5 dCi 90/110 л.с. (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение (2021–н.в.)': {
      '1.3 TCe 150 л.с. (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_cvt, servicePresets.gpf_off),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi 109 л.с. (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение (2024–н.в.)': {
      '1.2 TCe Hybrid (H5H+ЭД)': S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.gpf_off),
      '1.6 HEV (HR16)': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'kangoo': {
    '1 поколение (1997–2008)': {
      '1.4 8v (K7J)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 8v/16v (K7M/K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.9 dTi/dCi (F8Q/F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение дорест (2008–2013)': {
      '1.6 8v/16v (K7M/K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Kangoo Z.E. (Electric)': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
    },
    '2 поколение FL (2013–2021)': {
      '1.2 TCe (H5F)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Kangoo Z.E. (Electric)': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
    },
    '3 поколение (2021–н.в.)': {
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.gpf_off),
      '1.5 Blue dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Kangoo E-Tech (Electric)': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
    },
  },

  'kaptur': {
    '1 поколение дорест (2016–2020)': {
      '1.6 16v (H4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
    },
    '1 поколение FL (2020–н.в.)': {
      '1.3 TCe 150 л.с. (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_cvt, servicePresets.gpf_off),
      '1.6 16v (H4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
    },
  },

  'arkana': {
    '1 поколение (2019–н.в.)': {
      '1.3 TCe 150 л.с. (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_cvt, servicePresets.gpf_off),
      '1.6 16v (H4M)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
    },
  },

  'scenic': {
    '2 поколение дорест (2003–2006)': {
      '1.4 16v (K4J)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 16v (F4R/M4R)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.9 dCi (F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение FL (2006–2009)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '1.9 dCi (F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение дорест (2009–2013)': {
      '1.4 TCe (H4J)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '1.6 dCi (R9M)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение FL (2013–2016)': {
      '1.2 TCe (H5F)': S(servicePresets.stage1_turbo, servicePresets.trans_edc),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_edc),
      '1.6 dCi (R9M)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '4 поколение (2016–н.в.)': {
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_edc),
      '1.7 Blue dCi (R9N)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Scenic E-Tech Hybrid': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'megane': {
    '2 поколение дорест (2002–2006)': {
      '1.4 16v (K4J)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.9 dCi (F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Megane RS (2.0 Turbo F4R)': S(servicePresets.stage1_rs, servicePresets.diagECU),
    },
    '2 поколение FL (2006–2009)': {
      '1.4 16v (K4J)': S(servicePresets.stage1_basic, servicePresets.trans_al4),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 Turbo (F4R)': S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '1.9 dCi (F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Megane RS (2.0 Turbo 230 л.с.)': S(servicePresets.stage1_rs_trophy, servicePresets.diagECU),
    },
    '3 поколение дорест (2008–2012)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.2 TCe (H5F)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.4 TCe (H4J)': S(servicePresets.stage1_turbo, servicePresets.trans_edc),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Megane RS (2.0 Turbo 250/265 л.с.)': S(servicePresets.stage1_rs_trophy, servicePresets.diagECU),
    },
    '3 поколение FL (2012–2016)': {
      '1.2 TCe (H5F)': S(servicePresets.stage1_turbo, servicePresets.trans_edc),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_edc),
      '1.6 dCi (R9M)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Megane RS Trophy 275/Trophy-R': S(servicePresets.stage1_rs_trophy, servicePresets.diagECU, servicePresets.burbles),
    },
    '4 поколение дорест (2016–2020)': {
      '1.2 TCe (H5F)': S(servicePresets.stage1_turbo, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.6 TCe (M5M)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_edc),
      '1.5 Blue dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '1.6 dCi (R9M)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Megane RS 280/300 (1.8 TCe)': S(servicePresets.stage1_rs_trophy, servicePresets.trans_edc, servicePresets.gpf_off, servicePresets.burbles),
    },
    '4 поколение FL (2020–н.в.)': {
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.5 Blue dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Megane E-Tech Plug-in': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
  },

  'clio': {
    '2 поколение (1998–2005)': {
      '1.2 8v (D7F)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 8v/16v (K7J/K4J)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Clio RS (2.0 16v 172/182 л.с.)': S(servicePresets.stage1_rs, servicePresets.diagECU),
    },
    '3 поколение дорест (2005–2009)': {
      '1.2 16v (D4F)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 16v (K4J)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Clio RS (2.0 16v 197/203 л.с.)': S(servicePresets.stage1_rs, servicePresets.diagECU),
    },
    '3 поколение FL (2009–2012)': {
      '1.2 16v (D4F)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.2 TCe (D4F)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Clio RS (2.0 16v 200/203 л.с.)': S(servicePresets.stage1_rs, servicePresets.diagECU),
    },
    '4 поколение дорест (2012–2016)': {
      '0.9 TCe (H4B)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.2 16v (D4F)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Clio RS (1.6 Turbo 200/220 л.с.)': S(servicePresets.stage1_rs, servicePresets.trans_edc),
    },
    '4 поколение FL (2016–2019)': {
      '0.9 TCe (H4B)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off),
      '1.2 TCe (H5F)': S(servicePresets.stage1_turbo, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Clio RS (1.6 Turbo 220 л.с.)': S(servicePresets.stage1_rs, servicePresets.trans_edc, servicePresets.gpf_off),
    },
    '5 поколение (2019–н.в.)': {
      '1.0 SCe/TCe (B4D/H4D)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off),
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.5 Blue dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Clio E-Tech Hybrid': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'fluence': {
    '1 поколение дорест (2009–2012)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '1 поколение FL (2012–2016)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_edc),
      'Fluence GT (2.0 TCe 180 л.с.)': S(servicePresets.stage1_rs, servicePresets.diagECU),
    },
  },

  'laguna': {
    '2 поколение дорест (2001–2005)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.8 16v (F4P)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.0 V6 (L7X)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.9 dCi (F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 dCi (G9T)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение FL (2005–2007)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 Turbo (F4R)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_al4),
      '3.0 V6 (L7X)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.9 dCi (F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.2 dCi (G9T)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение дорест (2007–2010)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 Turbo (F4R)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_al4),
      '3.0 V6 (L7X)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение FL (2010–2015)': {
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.0 Turbo (F4R)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_al4),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'espace': {
    '4 поколение дорест (2002–2006)': {
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 Turbo (F4R)': S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '3.5 V6 (L7X)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.9 dCi (F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 dCi (G9T)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '4 поколение FL (2006–2014)': {
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 Turbo (F4R)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_al4),
      '3.5 V6 (L7X)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.9 dCi (F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.2 dCi (G9T)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '5 поколение (2014–2022)': {
      '1.6 TCe (M5M)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc),
      '1.6 dCi (R9M)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_edc),
      '1.8 TCe (M5P)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc),
      '2.0 Blue dCi (R9N)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '6 поколение (2023–н.в.)': {
      '1.2 TCe Hybrid (H5H+ЭД)': S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.gpf_off),
      'Espace E-Tech Hybrid 200': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'kadjar': {
    '1 поколение дорест (2015–2018)': {
      '1.2 TCe (H5F)': S(servicePresets.stage1_turbo, servicePresets.trans_edc),
      '1.6 TCe (M5M)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '1.6 dCi (R9M)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '1 поколение FL (2018–2022)': {
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '1.7 Blue dCi (R9N)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'captur': {
    '1 поколение дорест (2013–2017)': {
      '0.9 TCe (H4B)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.2 TCe (H5F)': S(servicePresets.stage1_turbo, servicePresets.trans_edc),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '1 поколение FL (2017–2019)': {
      '0.9 TCe (H4B)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off),
      '1.2 TCe (H5F)': S(servicePresets.stage1_turbo, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение (2019–н.в.)': {
      '1.0 TCe (H4D)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off),
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.5 Blue dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Captur E-Tech Plug-in': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
  },

  'talisman': {
    '1 поколение (2015–н.в.)': {
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.6 TCe (M5M)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.8 TCe (M5P)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_edc, servicePresets.gpf_off),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_edc),
      '1.6 dCi (R9M)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_edc),
      '2.0 Blue dCi (R9N)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'koleos': {
    '1 поколение дорест (2008–2011)': {
      '2.5 16v (2TR)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение FL (2011–2016)': {
      '2.0 16v (MR20)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.5 16v (QR25)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение (2016–н.в.)': {
      '2.0 16v (MR20)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.5 16v (QR25)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '1.6 dCi (R9M)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 dCi (R9M)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'master': {
    '2 поколение (1997–2010)': {
      '2.5 dCi (G9U)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 dCi (ZD3)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '3 поколение дорест (2010–2014)': {
      '2.3 dCi (M9T)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение FL (2014–2019)': {
      '2.3 dCi (M9T)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение FL2 (2019–н.в.)': {
      '2.3 dCi (M9T)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Master Z.E. (Electric)': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
    },
  },

  'trafic': {
    '2 поколение (2001–2014)': {
      '1.9 dCi (F9Q)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.5 dCi (G9U)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение дорест (2014–2019)': {
      '1.6 dCi (R9M)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение FL (2019–н.в.)': {
      '2.0 Blue dCi (R9N)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Trafic E-Tech (Electric)': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
    },
  },

  'twingo': {
    '2 поколение (2007–2014)': {
      '1.2 8v/16v (D7F/D4F)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Twingo RS (1.6 16v 133 л.с.)': S(servicePresets.stage1_rs, servicePresets.diagECU),
    },
    '3 поколение дорест (2014–2019)': {
      '0.9 TCe (H4B)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.0 SCe (B4D)': S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    '3 поколение FL (2019–н.в.)': {
      '1.0 SCe/TCe (B4D/H4D)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.gpf_off),
      'Twingo E-Tech (Electric)': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
    },
  },

  'zoe': {
    '1 поколение дорест (2012–2019)': {
      'Zoe Z.E. 22 kWh': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
      'Zoe Z.E. 40 kWh': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
      'Zoe Z.E. 50 kWh': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
    },
    '1 поколение FL (2019–н.в.)': {
      'Zoe Z.E. 50 kWh': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
      'Zoe Z.E. 52 kWh': S(servicePresets.battery_ev, servicePresets.diagECU_plus),
    },
  },

  'dokker': {
    '1 поколение (2012–н.в.)': {
      '1.6 8v/16v (K7M/K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'lodgy': {
    '1 поколение (2012–н.в.)': {
      '1.6 8v/16v (K7M/K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'vel satis': {
    '1 поколение (2002–2009)': {
      '2.0 16v (F4R)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 Turbo (F4R)': S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '3.0 V6 (L7X)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '3.5 V6 (L7X)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 dCi (G9T)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 dCi (P9X)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'austral': {
    '1 поколение (2022–н.в.)': {
      '1.2 TCe Mild Hybrid (H5H)': S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.trans_cvt, servicePresets.gpf_off),
      '1.3 TCe (H5H)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_cvt, servicePresets.gpf_off),
      'Austral E-Tech Hybrid 200': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'rafale': {
    '1 поколение (2024–н.в.)': {
      'Rafale E-Tech Hybrid 200': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'Rafale E-Tech 4x4 300': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'symbol': {
    '1 поколение (2008–2012)': {
      '1.4 8v (K7J)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 8v (K7M)': S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение (2012–2021)': {
      '1.6 8v (K7M)': S(servicePresets.stage1_basic, servicePresets.trans_al4),
      '1.6 16v (K4M)': S(servicePresets.stage1_na, servicePresets.trans_al4),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'latitude': {
    '1 поколение (2010–2017)': {
      '2.0 16v (M4R)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.5 16v (QR25)': S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '1.5 dCi (K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 dCi (M9R)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },
};