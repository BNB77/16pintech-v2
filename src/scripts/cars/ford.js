export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'Powershift/АКПП 6F35/8F35', price: '2 500 ₽' }],
  
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '9 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '11 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя EcoBoost', price: '14 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '17 000 ₽' }],
  stage1_st:      [{ name: 'Прошивка Stage 1', description: 'Ford ST тюнинг', price: '20 000 ₽' }],
  stage1_rs:      [{ name: 'Прошивка Stage 1', description: 'Ford RS/Raptor тюнинг', price: '25 000 ₽' }],
  stage1_mustang: [{ name: 'Прошивка Stage 1', description: 'Mustang V8 тюнинг', price: '30 000 ₽' }],
  
  trans_6speed:   [{ name: 'Настройка 6AT', description: 'Калибровка 6-ст автомата', price: '9 000 ₽' }],
  trans_8speed:   [{ name: 'Настройка 8AT', description: 'Калибровка 8-ст автомата', price: '11 000 ₽' }],
  trans_10speed:  [{ name: 'Настройка 10AT', description: 'Калибровка 10-ст автомата', price: '13 000 ₽' }],
  trans_powershift:[{ name: 'Настройка Powershift', description: 'Калибровка робота DCT', price: '10 000 ₽' }],
  
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '9 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '11 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '8 000 ₽' }],
  
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '6 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '5 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'MAF - расходомер воздуха', price: '4 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'EVAP - адсорбер топливных паров', price: '5 000 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'SAP - вторичный воздух', price: '6 000 ₽' }],
  
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro2 - отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'DTC - удаление кодов ошибок', price: '3 000 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '2 000 ₽' }],
  
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Hybrid/PHEV инвертор/контроллер', price: '4 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '8 000 ₽' }],
  battery_hv:     [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '5 000 ₽' }],
  
  awd_diag:       [{ name: 'Диагностика AWD', description: 'Полный привод Haldex/PTU', price: '3 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  sync_update:    [{ name: 'Обновление SYNC', description: 'Мультимедиа/навигация', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const fordData = {

  'focus': {
    '1 поколение (1998–2004)': {
      '1.4/1.6 Zetec':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8/2.0 Zetec':                S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.8 TDCi/TDDi':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Focus ST170 (2.0 Zetec)':      S(servicePresets.stage1_st, servicePresets.diagECU),
    },
    '2 поколение дорест (2004–2008)': {
      '1.4/1.6 Duratec':              S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8/2.0 Duratec':              S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.6 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.8/2.0 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Focus ST (2.5 Turbo)':         S(servicePresets.stage1_st, servicePresets.trans_6speed),
    },
    '2 поколение FL (2008–2011)': {
      '1.4/1.6 Duratec Ti-VCT':       S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8/2.0 Duratec':              S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.6 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.8/2.0 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Focus ST (2.5 Turbo)':         S(servicePresets.stage1_st, servicePresets.trans_6speed),
      'Focus RS (2.5 Turbo)':         S(servicePresets.stage1_rs, servicePresets.trans_6speed, servicePresets.awd_diag),
    },
    '3 поколение дорест (2011–2014)': {
      '1.6 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.trans_powershift),
      '1.6 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_powershift),
      '2.0 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '1.6 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Focus ST (2.0 EcoBoost)':      S(servicePresets.stage1_st, servicePresets.trans_6speed),
    },
    '3 поколение FL (2014–2018)': {
      '1.0/1.5 EcoBoost':             S(servicePresets.stage1_turbo, servicePresets.trans_powershift),
      '1.6 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.trans_powershift),
      '2.0 Duratec GDI':              S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '1.5/1.6 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Focus ST (2.0 EcoBoost)':      S(servicePresets.stage1_st, servicePresets.trans_6speed, servicePresets.gpf_off),
      'Focus RS (2.3 EcoBoost AWD)':  S(servicePresets.stage1_rs, servicePresets.trans_6speed, servicePresets.awd_diag, servicePresets.gpf_off),
    },
    '4 поколение дорест (2018–2021)': {
      '1.0/1.5 EcoBoost':             S(servicePresets.stage1_turbo, servicePresets.trans_8speed, servicePresets.gpf_off),
      '1.5 EcoBlue':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Focus ST (2.3 EcoBoost)':      S(servicePresets.stage1_st, servicePresets.trans_6speed, servicePresets.gpf_off),
    },
    '4 поколение FL (2021–н.в.)': {
      '1.0/1.5 EcoBoost':             S(servicePresets.stage1_turbo, servicePresets.trans_8speed, servicePresets.gpf_off),
      '1.5 EcoBlue':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Focus ST (2.3 EcoBoost)':      S(servicePresets.stage1_st, servicePresets.trans_6speed, servicePresets.gpf_off),
    },
  },

  'mondeo': {
    '1 поколение (1993–1996)': {
      '1.6/1.8 Zetec':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 Zetec':                    S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 V6 Duratec':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.8 TD Endura-D':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение FL (1996–2000)': {
      '1.6/1.8 Zetec':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 Zetec':                    S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 V6 Duratec':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.8 TD':                       S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'ST200 (2.5 V6)':               S(servicePresets.stage1_st, servicePresets.diagECU),
    },
    '2 поколение (2000–2003)': {
      '1.8/2.0 Duratec':              S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 V6 Duratec':               S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 TDCi/TDDi':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение FL (2003–2007)': {
      '1.8/2.0 Duratec':              S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5/3.0 V6 Duratec':           S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0/2.2 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'ST220 (3.0 V6)':               S(servicePresets.stage1_st, servicePresets.diagECU),
    },
    '4 поколение дорест (2007–2010)': {
      '1.6 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0/2.3 Duratec':              S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '2.5 Turbo (Volvo)':            S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.2 TDCi':                     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '4 поколение FL (2010–2014)': {
      '1.6 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_powershift),
      '2.0/2.3 Duratec':              S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.2 TDCi':                     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '5 поколение дорест (2014–2019)': {
      '1.5 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '2.5 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '1.5/2.0 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Mondeo Hybrid (2.0 HEV)':      S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '5 поколение FL (2019–2022)': {
      '1.5/2.0 EcoBoost':             S(servicePresets.stage1_turbo_hi, servicePresets.trans_8speed, servicePresets.gpf_off),
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_8speed),
      'Mondeo Hybrid (2.0 HEV)':      S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'kuga': {
    '1 поколение дорест (2008–2010)': {
      '2.0 Duratec':                  S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 Turbo':                    S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed, servicePresets.awd_diag),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение FL (2010–2012)': {
      '2.0 Duratec':                  S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.5 Turbo':                    S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed, servicePresets.awd_diag),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение дорест (2012–2016)': {
      '1.6 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_powershift),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed, servicePresets.awd_diag),
      '1.6/2.0 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение FL (2016–2019)': {
      '1.5 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_powershift),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed, servicePresets.awd_diag),
      '1.5/2.0 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение (2019–н.в.)': {
      '1.5 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_8speed, servicePresets.gpf_off),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_8speed, servicePresets.awd_diag, servicePresets.gpf_off),
      '1.5/2.0 EcoBlue':              S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Kuga PHEV (2.5 Plug-in)':      S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
  },

  'escape': {
    '1 поколение (2000–2004)': {
      '2.0 Zetec':                    S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.0 V6 Duratec':               S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.awd_diag),
    },
    '1 поколение FL (2004–2007)': {
      '2.3 Duratec':                  S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.0 V6 Duratec':               S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.awd_diag),
      'Escape Hybrid':                S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '2 поколение (2007–2012)': {
      '2.5 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '3.0 V6 Duratec':               S(servicePresets.stage1_na, servicePresets.trans_6speed, servicePresets.awd_diag),
      'Escape Hybrid':                S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '3 поколение (см. Kuga 2 поколения)': S(),
    '4 поколение (см. Kuga 3 поколения)': S(),
  },

  'fiesta': {
    '5 поколение (2001–2008)': {
      '1.25/1.4/1.6 Duratec':         S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4/1.6 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Fiesta ST (2.0 Duratec)':      S(servicePresets.stage1_st, servicePresets.diagECU),
    },
    '6 поколение дорест (2008–2012)': {
      '1.25/1.4/1.6 Duratec':         S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4/1.6 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '6 поколение FL (2012–2017)': {
      '1.0 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.5/1.6 Ti-VCT':               S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5/1.6 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Fiesta ST (1.6 EcoBoost)':     S(servicePresets.stage1_st, servicePresets.trans_6speed),
    },
    '7 поколение дорест (2017–2020)': {
      '1.0 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed, servicePresets.gpf_off),
      '1.1 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Fiesta ST (1.5 EcoBoost)':     S(servicePresets.stage1_st, servicePresets.trans_6speed, servicePresets.gpf_off),
    },
    '7 поколение FL (2020–2023)': {
      '1.0 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed, servicePresets.gpf_off),
      '1.1 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
      'Fiesta ST (1.5 EcoBoost)':     S(servicePresets.stage1_st, servicePresets.trans_6speed, servicePresets.gpf_off),
    },
  },

  'ecosport': {
    '1 поколение (2012–2017)': {
      '1.5 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.0 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.5 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
    },
    '1 поколение FL (2017–2022)': {
      '1.0 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed, servicePresets.gpf_off),
      '1.5 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.trans_6speed),
      '1.5 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
    },
  },

  'explorer': {
    '3 поколение (2001–2005)': {
      '4.0 V6 SOHC':                  S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.6 V8':                       S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    '4 поколение дорест (2006–2010)': {
      '4.0 V6 SOHC':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '4.6 V8':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
    },
    '4 поколение FL (2010–2011)': {
      '3.5 V6 Ti-VCT':                S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '4.0 V6':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
    },
    '5 поколение дорест (2011–2015)': {
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '3.5 V6 Ti-VCT':                S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
    },
    '5 поколение FL (2015–2019)': {
      '2.3 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '3.5 V6 Ti-VCT':                S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed),
      'Explorer Sport (3.5 EcoBoost)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
    },
    '6 поколение (2019–н.в.)': {
      '2.3 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
      '3.0 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
      '3.3 V6 Hybrid':                S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_10speed),
      'Explorer ST (3.0 EcoBoost)':   S(servicePresets.stage1_st, servicePresets.trans_10speed, servicePresets.gpf_off),
    },
  },

  'edge': {
    '1 поколение (2006–2014)': {
      '3.5 V6 Duratec':               S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '3.7 V6 Ti-VCT':                S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
    },
    '2 поколение дорест (2014–2018)': {
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '2.7 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '3.5 V6 Ti-VCT':                S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Edge Sport (2.7 EcoBoost)':    S(servicePresets.stage1_st, servicePresets.trans_6speed),
    },
    '2 поколение FL (2018–2023)': {
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_8speed, servicePresets.gpf_off),
      '2.7 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_8speed, servicePresets.gpf_off),
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Edge ST (2.7 EcoBoost)':       S(servicePresets.stage1_st, servicePresets.trans_8speed, servicePresets.gpf_off),
    },
  },

  'f-150': {
    '11 поколение (1997–2003)': {
      '4.2 V6':                       S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.6 V8':                       S(servicePresets.stage1_na, servicePresets.diagECU),
      '5.4 V8':                       S(servicePresets.stage1_na, servicePresets.diagECU),
      'F-150 SVT Lightning (5.4 SC)': S(servicePresets.stage1_st, servicePresets.diagECU),
    },
    '12 поколение дорест (2004–2008)': {
      '4.2 V6':                       S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.6 V8':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '5.4 V8':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
    },
    '12 поколение FL (2009–2014)': {
      '3.7 V6':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '4.6 V8':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '5.0 V8':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '5.4 V8':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '6.2 V8':                       S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      'F-150 SVT Raptor (6.2 V8)':    S(servicePresets.stage1_rs, servicePresets.trans_6speed),
    },
    '13 поколение дорест (2015–2017)': {
      '2.7 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '3.5 V6 Ti-VCT':                S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '5.0 V8':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      'F-150 Raptor (3.5 EcoBoost)':  S(servicePresets.stage1_rs, servicePresets.trans_10speed),
    },
    '13 поколение FL (2018–2020)': {
      '2.7 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed),
      '3.0 Power Stroke V6':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '3.3 V6 Ti-VCT':                S(servicePresets.stage1_na, servicePresets.trans_10speed),
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed),
      '5.0 V8':                       S(servicePresets.stage1_na, servicePresets.trans_10speed),
      'F-150 Raptor (3.5 EcoBoost)':  S(servicePresets.stage1_rs, servicePresets.trans_10speed),
      'F-150 Limited (3.5 HO)':       S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed),
    },
    '14 поколение (2021–н.в.)': {
      '2.7 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
      '3.3 V6':                       S(servicePresets.stage1_na, servicePresets.trans_10speed),
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
      '3.5 PowerBoost Hybrid':        S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.trans_10speed),
      '5.0 V8':                       S(servicePresets.stage1_na, servicePresets.trans_10speed, servicePresets.gpf_off),
      'F-150 Raptor (3.5 EcoBoost)':  S(servicePresets.stage1_rs, servicePresets.trans_10speed, servicePresets.gpf_off),
      'F-150 Lightning (Electric)':   S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'ranger': {
    '2 поколение (1998–2006)': {
      '2.5 TD':                       S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 V6':                       S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    '3 поколение (2006–2011)': {
      '2.5 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 TDCi':                     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '4 поколение дорест (2011–2015)': {
      '2.2 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '3.2 TDCi':                     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '4 поколение FL (2015–2022)': {
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.2 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '3.2 TDCi':                     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Ranger Raptor (2.0 Bi-Turbo)': S(servicePresets.stage1_rs, servicePresets.trans_10speed, servicePresets.dpf_off_adblue),
    },
    '5 поколение (2022–н.в.)': {
      '2.0 EcoBlue Single Turbo':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_10speed),
      '2.0 EcoBlue Bi-Turbo':         S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_10speed),
      '3.0 V6 Turbo Diesel':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_10speed),
      'Ranger Raptor (3.0 EcoBoost)': S(servicePresets.stage1_rs, servicePresets.trans_10speed, servicePresets.gpf_off),
    },
  },

  'mustang': {
    '4 поколение SN-95 (1994–1998)': {
      '3.8 V6':                       S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.6 V8 2V':                    S(servicePresets.stage1_na, servicePresets.diagECU),
      'GT (4.6 V8)':                  S(servicePresets.stage1_mustang, servicePresets.diagECU),
      'SVT Cobra (4.6 DOHC)':         S(servicePresets.stage1_rs, servicePresets.diagECU),
    },
    '4 поколение FL (1999–2004)': {
      '3.8 V6':                       S(servicePresets.stage1_na, servicePresets.diagECU),
      '4.6 V8 2V':                    S(servicePresets.stage1_na, servicePresets.diagECU),
      'GT (4.6 V8)':                  S(servicePresets.stage1_mustang, servicePresets.diagECU),
      'SVT Cobra (4.6 DOHC SC)':      S(servicePresets.stage1_rs, servicePresets.diagECU),
      'Mach 1 (4.6 DOHC)':            S(servicePresets.stage1_mustang, servicePresets.diagECU),
    },
    '5 поколение S197 дорест (2005–2009)': {
      '4.0 V6':                       S(servicePresets.stage1_na, servicePresets.diagECU),
      'GT (4.6 V8 3V)':               S(servicePresets.stage1_mustang, servicePresets.trans_6speed),
      'Shelby GT500 (5.4 SC)':        S(servicePresets.stage1_rs, servicePresets.trans_6speed),
      'Bullitt (4.6 V8)':             S(servicePresets.stage1_mustang, servicePresets.trans_6speed),
    },
    '5 поколение FL (2010–2014)': {
      '3.7 V6':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      'GT (5.0 V8 Coyote)':           S(servicePresets.stage1_mustang, servicePresets.trans_6speed),
      'Boss 302 (5.0 V8)':            S(servicePresets.stage1_rs, servicePresets.trans_6speed),
      'Shelby GT500 (5.8 SC)':        S(servicePresets.stage1_rs, servicePresets.trans_6speed),
    },
    '6 поколение S550 дорест (2015–2017)': {
      '2.3 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '3.7 V6':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      'GT (5.0 V8 Coyote)':           S(servicePresets.stage1_mustang, servicePresets.trans_10speed),
      'Shelby GT350 (5.2 Voodoo)':    S(servicePresets.stage1_rs, servicePresets.trans_6speed),
    },
    '6 поколение FL (2018–2023)': {
      '2.3 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
      'GT (5.0 V8 Coyote Gen3)':      S(servicePresets.stage1_mustang, servicePresets.trans_10speed, servicePresets.gpf_off),
      'Shelby GT350 (5.2 Voodoo)':    S(servicePresets.stage1_rs, servicePresets.trans_6speed, servicePresets.gpf_off),
      'Shelby GT500 (5.2 SC)':        S(servicePresets.stage1_rs, servicePresets.trans_7speed, servicePresets.gpf_off),
      'Mach 1 (5.0 V8)':              S(servicePresets.stage1_mustang, servicePresets.trans_10speed, servicePresets.gpf_off),
    },
    '7 поколение S650 (2023–н.в.)': {
      '2.3 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
      'GT (5.0 V8 Coyote Gen4)':      S(servicePresets.stage1_mustang, servicePresets.trans_10speed, servicePresets.gpf_off),
      'Dark Horse (5.0 V8)':          S(servicePresets.stage1_mustang, servicePresets.trans_6speed, servicePresets.gpf_off),
    },
  },

  'fusion': {
    '1 поколение Европа (2002–2012)': {
      '1.4/1.6 Duratec':              S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.4 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение USA (2006–2009)': {
      '2.3 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '3.0 V6 Duratec':               S(servicePresets.stage1_na, servicePresets.trans_6speed),
    },
    '1 поколение FL USA (2010–2012)': {
      '2.5 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '3.0 V6':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '3.5 V6':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      'Fusion Hybrid':                S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '2 поколение дорест USA (2012–2016)': {
      '1.5 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed),
      '1.6 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '2.5 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
      'Fusion Hybrid':                S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'Fusion Energi PHEV':           S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
    '2 поколение FL USA (2017–2020)': {
      '1.5 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed, servicePresets.gpf_off),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed, servicePresets.gpf_off),
      '2.5 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '2.7 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed, servicePresets.gpf_off),
      'Fusion Hybrid':                S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'Fusion Energi PHEV':           S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
  },

  'transit': {
    'Transit Custom (2012–2017)': {
      '2.0/2.2 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'Transit Custom FL (2018–н.в.)': {
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'Transit (2013–2019)': {
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.2 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'Transit FL (2019–н.в.)': {
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.trans_10speed),
    },
  },

  'galaxy': {
    '2 поколение (2006–2015)': {
      '1.6 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_powershift),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение (2015–н.в.)': {
      '1.5 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed, servicePresets.gpf_off),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed, servicePresets.gpf_off),
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  's-max': {
    '1 поколение (2006–2015)': {
      '1.6 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_powershift),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '2.5 Turbo':                    S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.2 TDCi':                     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение (2015–н.в.)': {
      '1.5 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed, servicePresets.gpf_off),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed, servicePresets.gpf_off),
      '2.0 EcoBlue':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'c-max': {
    '1 поколение (2003–2010)': {
      '1.6/1.8/2.0 Duratec':          S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.6/2.0 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '2 поколение дорест (2010–2015)': {
      '1.0/1.6 EcoBoost':             S(servicePresets.stage1_turbo, servicePresets.trans_powershift),
      '1.6 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.trans_powershift),
      '2.0 Duratec':                  S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '1.6/2.0 TDCi':                 S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'C-Max Hybrid':                 S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'C-Max Energi PHEV':            S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
    '2 поколение FL (2015–2019)': {
      '1.0/1.5 EcoBoost':             S(servicePresets.stage1_turbo, servicePresets.trans_6speed, servicePresets.gpf_off),
      '1.5 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 TDCi':                     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'puma': {
    '1 поколение (2019–н.в.)': {
      '1.0 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_7speed, servicePresets.gpf_off),
      '1.5 EcoBoost Hybrid':          S(servicePresets.stage1_turbo, servicePresets.hybrid_diag, servicePresets.trans_7speed, servicePresets.gpf_off),
    },
  },

  'bronco': {
    '6 поколение (2021–н.в.)': {
      '2.3 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
      '2.7 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
      'Bronco Raptor (3.0 EcoBoost)': S(servicePresets.stage1_rs, servicePresets.trans_10speed, servicePresets.gpf_off),
    },
  },

  'bronco sport': {
    '1 поколение (2020–н.в.)': {
      '1.5 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_8speed, servicePresets.gpf_off),
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_8speed, servicePresets.gpf_off),
    },
  },

  'maverick': {
    '1 поколение (2021–н.в.)': {
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_8speed, servicePresets.gpf_off),
      '2.5 Hybrid':                   S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'transit connect / tourneo connect': {
    '1 поколение дорест (2002–2006)': {
      '1.8 Duratec':                  S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.8 TDCi 75/90 л.с.':          S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение FL (2006–2009)': {
      '1.8 Duratec':                  S(servicePresets.stage1_na, servicePresets.diagECU),
      '1.8 TDCi 90/110 л.с.':         S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '1 поколение FL2 (2009–2013)': {
      '1.6 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 TDCi 75/95/115 л.с.':      S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение дорест (2013–2018)': {
      '1.0 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.trans_6speed),
      '1.6 TDCi 75/95/115 л.с.':      S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '2 поколение FL (2018–2022)': {
      '1.0/1.5 EcoBoost':             S(servicePresets.stage1_turbo, servicePresets.trans_6speed, servicePresets.gpf_off),
      '1.5 EcoBlue 75/100/120 л.с.':  S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    '3 поколение (2022–н.в.) - на базе VW Caddy': {
      '1.5 TSI':                      S(servicePresets.stage1_turbo, servicePresets.trans_7speed, servicePresets.gpf_off),
      '2.0 TDI':                      S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'courier': {
    '1 поколение (2014–н.в.)': {
      '1.0 EcoBoost':                 S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.5 TDCi':                     S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '1.6 Ti-VCT':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'expedition': {
    '3 поколение (2003–2006)': {
      '4.6 V8':                       S(servicePresets.stage1_na, servicePresets.diagECU),
      '5.4 V8':                       S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    '3 поколение FL (2007–2014)': {
      '5.4 V8':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
    },
    '4 поколение (2015–2017)': {
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
    },
    '4 поколение FL (2018–2024)': {
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
    },
    '5 поколение (2025–н.в.)': {
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_10speed, servicePresets.gpf_off),
    },
  },

  'flex': {
    '1 поколение (2008–2019)': {
      '3.5 V6':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
    },
  },

  'taurus': {
    '5 поколение (2007–2009)': {
      '3.5 V6':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
    },
    '6 поколение (2010–2019)': {
      '2.0 EcoBoost':                 S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      '3.5 V6':                       S(servicePresets.stage1_na, servicePresets.trans_6speed),
      '3.5 EcoBoost V6':              S(servicePresets.stage1_turbo_hi, servicePresets.trans_6speed),
      'Taurus SHO (3.5 EcoBoost)':    S(servicePresets.stage1_st, servicePresets.trans_6speed),
    },
  },

};