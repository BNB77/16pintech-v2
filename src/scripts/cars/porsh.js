export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'PDK/Tiptronic/Manual', price: '3 000 ₽' }],
  stage1_na_low:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_na_mid:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '14 000 ₽' }],
  stage1_na_high: [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '16 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Оптимизация турбо двигателя', price: '18 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг турбо', price: '22 000 ₽' }],
  stage1_perf:    [{ name: 'Прошивка Stage 1', description: 'Тюнинг для Turbo/GT/S/GTS', price: '28 000 ₽' }],
  stage1_extreme: [{ name: 'Прошивка Stage 1', description: 'GT2/GT3/Turbo S/918', price: '35 000 ₽' }],
  tcu_pdk:        [{ name: 'Настройка PDK', description: 'Launch/Shift map/Pressure', price: '18 000 ₽' }],
  tcu_tiptronic:  [{ name: 'Настройка Tiptronic', description: 'Shift map/Lock-up', price: '15 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Программное удаление EGR', price: '9 000 ₽' }],
  dpf_off_low:    [{ name: 'Удаление DPF', description: 'Удаление сажевого фильтра', price: '10 000 ₽' }],
  dpf_off_mid:    [{ name: 'Удаление DPF', description: 'Удаление сажевого фильтра', price: '12 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '14 000 ₽' }],
  cat_exhaust:    [{ name: 'Выхлоп/катализаторы', description: 'Даунпайпы/Sport exhaust tune', price: '20 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение экологии (трек)', price: '14 000 ₽' }],
  battery_bms:    [{ name: 'Диагностика HV/12V', description: 'Проверка HV батареи/активаций', price: '5 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'E-Hybrid инвертор/МКС', price: '4 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '9 000 ₽' }],
  pasm_setup:     [{ name: 'Настройка PASM/PDCC', description: 'Подвеска/стабилизация', price: '6 000 ₽' }],
  sport_chrono:   [{ name: 'Активация Sport Chrono', description: 'Раскодировка функций', price: '8 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const porscheData = {

  '911': {
    '996 дорест (1997–2001)': {
      '3.4 Carrera (M96/01)':         S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '3.6 Carrera 4/4S (M96/03)':    S(servicePresets.stage1_na_high, servicePresets.diagECU),
      '3.6 Turbo (M96/70)':           S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic),
      'GT3 3.6 (M96/76)':             S(servicePresets.stage1_extreme),
      'GT2 3.6 (M96/70S)':            S(servicePresets.stage1_extreme),
    },
    '996 рест (2001–2005)': {
      '3.6 Carrera/Carrera S (M96/05)': S(servicePresets.stage1_na_high, servicePresets.diagECU),
      '3.6 Turbo/Turbo S (M96/70S)':  S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic),
      'GT3 3.6 (M96/76/77)':          S(servicePresets.stage1_extreme),
      'GT2 3.6 (M96/70S)':            S(servicePresets.stage1_extreme),
      'Targa/Cabriolet':              S(),
    },
    '997 Gen1 (2004–2008)': {
      '3.6 Carrera/S (M97/01)':       S(servicePresets.stage1_na_high, servicePresets.diagECU),
      '3.8 Carrera S (M97/01)':       S(servicePresets.stage1_na_high, servicePresets.diagECU),
      '3.6 Turbo (M97/70)':           S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic),
      'GT3 3.6/3.8 (M97/76)':         S(servicePresets.stage1_extreme),
      'GT2 3.6 (M97/70)':             S(servicePresets.stage1_extreme),
    },
    '997 Gen2 (2008–2012)': {
      '3.6/3.8 Carrera/S (MA1/02)':   S(servicePresets.stage1_na_high, servicePresets.tcu_pdk),
      '3.8 Turbo/Turbo S (MA1/70)':   S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'GT3/GT3 RS 3.8 (MA1/76)':      S(servicePresets.stage1_extreme),
      'GT2 RS 3.6 (MA1/70)':          S(servicePresets.stage1_extreme),
      'GTS 3.8 (MA1/02)':             S(servicePresets.stage1_perf),
    },
    '991 Gen1 (2011–2015)': {
      '3.4/3.8 Carrera/S (MA1/02)':   S(servicePresets.stage1_na_high, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '3.8 Turbo/Turbo S (MA1/70)':   S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'GT3 3.8 (MA1/76)':             S(servicePresets.stage1_extreme),
      'GT3 RS 4.0 (MA1/76)':          S(servicePresets.stage1_extreme),
      'GTS 3.8 (MA1/02)':             S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
    },
    '991 Gen2 (2015–2019)': {
      '3.0 Carrera/S Turbo (MA2/02)': S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '3.8 Turbo/Turbo S (MA2/70)':   S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'GT3 4.0 (MA2/76)':             S(servicePresets.stage1_extreme),
      'GT3 RS 4.0 (MA2/76)':          S(servicePresets.stage1_extreme),
      'GT2 RS 3.8 (MA2/70)':          S(servicePresets.stage1_extreme),
      'GTS 3.0 Turbo (MA2/02)':       S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
    },
    '992 (2019–н.в.)': {
      '3.0 Carrera/S Turbo (MA2/03)': S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '3.7/3.8 Turbo/Turbo S (MA2/70)': S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'GT3 4.0 (MA2/76)':             S(servicePresets.stage1_extreme),
      'GT3 RS 4.0 (MA2/76)':          S(servicePresets.stage1_extreme),
      'GTS 3.0 Turbo (MA2/03)':       S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'Targa/Cabriolet':              S(),
    },
  },

  'cayenne': {
    '955 Gen1 (2002–2006)': {
      '3.2 V6 (M02/20)':              S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '4.5 V8 (M48/00)':              S(servicePresets.stage1_na_high, servicePresets.diagECU),
      'Turbo 4.5 (M48/50)':           S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic),
      'Turbo S 4.5 (M48/51)':         S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic),
    },
    '957 Gen2 (2007–2010)': {
      '3.6 V6 (M55/01)':              S(servicePresets.stage1_na_high, servicePresets.diagECU),
      '4.8 V8 (M48/01)':              S(servicePresets.stage1_na_high, servicePresets.diagECU),
      '4.8 Turbo/Turbo S (M48/51)':   S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic),
      '3.0 TDI V6 (MCR/CC)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid, servicePresets.egr_off),
      'GTS 4.8 (M48/01)':             S(servicePresets.stage1_perf),
    },
    '92A Gen2FL (2010–2017)': {
      '3.0 TDI (MCR/CRCA)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid, servicePresets.egr_off),
      '3.6 V6 (MCG/EA)':              S(servicePresets.stage1_turbo, servicePresets.tcu_tiptronic),
      '4.8 V8 (M48/02)':              S(servicePresets.stage1_na_high, servicePresets.tcu_tiptronic),
      '4.8 Turbo/Turbo S (M48/52)':   S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic),
      'S 4.8 (M48/02)':               S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic),
      'GTS 4.8 (M48/02)':             S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic),
      'S Hybrid 3.0 (MCG/HE)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '9YA Gen3 дорест (2017–2020)': {
      '3.0 Turbo V6 (MCZ/EA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      '2.9 V6 Turbo (MCY/EA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      '4.0 V8 Turbo (MCU/DA)':        S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      'Turbo 4.0 V8 (MCU/DA)':        S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      'S 2.9 V6 Turbo (MCY/FA)':      S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      'GTS 4.0 V8 (MCU/DA)':          S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      'E-Hybrid 3.0 (MCZ/HA)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '9YA Gen3 рест (2020–н.в.)': {
      '3.0 Turbo V6 (MCZ/EA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      '2.9 V6 Turbo (MCY/EA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      '4.0 V8 Turbo (MCU/DA)':        S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      'Turbo GT 4.0 V8 (MCU/DC)':     S(servicePresets.stage1_extreme, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      'S 2.9 V6 Turbo (MCY/FA)':      S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      'GTS 4.0 V8 (MCU/DA)':          S(servicePresets.stage1_perf, servicePresets.tcu_tiptronic, servicePresets.gpf_off),
      'E-Hybrid 3.0 (MCZ/HA)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'Turbo S E-Hybrid (MCZ/HA)':    S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.stage1_perf),
      'Coupe':                        S(),
    },
  },

  'panamera': {
    '970 Gen1 дорест (2009–2013)': {
      '3.6 V6 (M55/01)':              S(servicePresets.stage1_na_high, servicePresets.tcu_pdk),
      '4.8 V8 (M48/02)':              S(servicePresets.stage1_na_high, servicePresets.tcu_pdk),
      'S 4.8 V8 (M48/02)':            S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'Turbo 4.8 V8 (M48/52)':        S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'Turbo S 4.8 V8 (M48/52)':      S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      '3.0 TDI V6 (MCR/CC)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid, servicePresets.egr_off),
      'S Hybrid 3.0 (MCG/HE)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '970 Gen1 рест (2013–2016)': {
      '3.0 V6 Turbo (MCZ/BA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk),
      '3.6 V6 Turbo (MCG/BA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk),
      '4.8 V8 (M48/02)':              S(servicePresets.stage1_na_high, servicePresets.tcu_pdk),
      'S 3.0 V6 Turbo (MCY/BA)':      S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'Turbo 4.8 V8 (M48/52)':        S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'Turbo S 4.8 V8 (M48/52)':      S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      '3.0 TDI V6 (MCR/CE)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid, servicePresets.egr_off),
      'GTS 4.8 V8 (M48/02)':          S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'E-Hybrid 3.0 (MCZ/HA)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'G2 971 (2016–н.в.)': {
      '3.0 V6 Turbo (MCZ/EA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '2.9 V6 Turbo (MCY/FA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '4.0 V8 Turbo (MCU/DA)':        S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'S 2.9 V6 Turbo (MCY/FA)':      S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'GTS 4.0 V8 Turbo (MCU/DA)':    S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'Turbo 4.0 V8 (MCU/DA)':        S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'Turbo S 4.0 V8 (MCU/DA)':      S(servicePresets.stage1_extreme, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '4 E-Hybrid 2.9 (MCY/HA)':      S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'Turbo S E-Hybrid (MCY/HA)':    S(servicePresets.hybrid_diag, servicePresets.hybrid_cal, servicePresets.stage1_perf),
      'Sport Turismo/Executive':      S(),
    },
  },

  'macan': {
    '95B Gen1 дорест (2014–2018)': {
      '2.0 Turbo (CNC/EA)':           S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk),
      '3.0 V6 Turbo (MCZ/BA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk),
      'S 3.0 V6 Turbo (MCY/BA)':      S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'GTS 3.0 V6 Turbo (MCY/BB)':    S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'Turbo 3.6 V6 (MCT/CA)':        S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      '3.0 TDI (MCR/CC)':             S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid, servicePresets.egr_off),
    },
    '95B Gen1 рест (2018–2021)': {
      '2.0 Turbo (CNC/EA)':           S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '3.0 V6 Turbo (MCZ/EA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'S 3.0 V6 Turbo (MCY/EA)':      S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'GTS 2.9 V6 Turbo (MCY/FA)':    S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'Turbo 2.9 V6 (MCY/FA)':        S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
    },
    '95B Gen2 (2021–н.в.)': {
      '2.0 Turbo (CNC/EA)':           S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '3.0 V6 Turbo (MCZ/EA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'S 2.9 V6 Turbo (MCY/FA)':      S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'GTS 2.9 V6 Turbo (MCY/FA)':    S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'Turbo 2.9 V6 (MCY/FA)':        S(servicePresets.stage1_perf, servicePresets.tcu_pdk, servicePresets.gpf_off),
    },
  },

  'boxster': {
    '986 (1996–2004)': {
      '2.5/2.7 (M96/20/22)':          S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '3.2 S (M96/21)':               S(servicePresets.stage1_na_high, servicePresets.diagECU),
    },
    '987 Gen1 (2004–2008)': {
      '2.7 (M97/20)':                 S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '3.2/3.4 S (M97/21)':           S(servicePresets.stage1_na_high, servicePresets.diagECU),
    },
    '987 Gen2 (2008–2012)': {
      '2.9 (MA1/20)':                 S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '3.4 S (MA1/21)':               S(servicePresets.stage1_na_high, servicePresets.diagECU),
      'Spyder 3.4 (MA1/21)':          S(servicePresets.stage1_na_high, servicePresets.diagECU),
    },
    '981 (2012–2016)': {
      '2.7 (MA1/22)':                 S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '3.4 S (MA1/23)':               S(servicePresets.stage1_na_high, servicePresets.tcu_pdk),
      'GTS 3.4 (MA1/23)':             S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'Spyder 3.8 (MA1/23)':          S(servicePresets.stage1_perf),
    },
    '718 982 (2016–н.в.)': {
      '2.0 Turbo (MA2/20)':           S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '2.5 Turbo S (MA2/21)':         S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'GTS 4.0 (MA2/22)':             S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'Spyder 4.0 (MA2/22)':          S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
    },
  },

  'cayman': {
    '987C (2005–2012)': {
      '2.7 (M97/20)':                 S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '2.9 (MA1/20)':                 S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '3.4 S (M97/21/MA1/21)':        S(servicePresets.stage1_na_high, servicePresets.diagECU),
      'R 3.4 (MA1/21)':               S(servicePresets.stage1_perf),
    },
    '981C (2012–2016)': {
      '2.7 (MA1/22)':                 S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '3.4 S (MA1/23)':               S(servicePresets.stage1_na_high, servicePresets.tcu_pdk),
      'GTS 3.4 (MA1/23)':             S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'GT4 3.8 (MA1/75)':             S(servicePresets.stage1_extreme),
    },
    '718 982C (2016–н.в.)': {
      '2.0 Turbo (MA2/20)':           S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      '2.5 Turbo S (MA2/21)':         S(servicePresets.stage1_turbo_hi, servicePresets.tcu_pdk, servicePresets.gpf_off),
      'GTS 4.0 (MA2/22)':             S(servicePresets.stage1_perf, servicePresets.tcu_pdk),
      'GT4 4.0 (MA2/75)':             S(servicePresets.stage1_extreme),
      'GT4 RS 4.0 (MA2/75)':          S(servicePresets.stage1_extreme),
    },
  },

  'taycan': {
    'J1 (2019–н.в.)': {
      'Taycan/4S RWD/AWD':            S(servicePresets.battery_bms, servicePresets.diagECU_plus),
      'Turbo/Turbo S':                S(servicePresets.battery_bms, servicePresets.diagECU_plus),
      'GTS/GTS Sport Turismo':        S(servicePresets.battery_bms, servicePresets.diagECU_plus),
      'Cross Turismo':                S(servicePresets.battery_bms, servicePresets.diagECU_plus),
      'Sport Turismo':                S(servicePresets.battery_bms, servicePresets.diagECU_plus),
    },
  },

  'macan electric': {
    '(2024–н.в.)': {
      'Macan 4/Turbo EV':             S(servicePresets.battery_bms, servicePresets.diagECU_plus),
    },
  },

  '918 spyder': {
    '(2013–2015)': {
      '4.6 V8 Hybrid (MA1/80)':       S(servicePresets.stage1_extreme, servicePresets.hybrid_diag),
    },
  },

  'carrera gt': {
    '(2003–2006)': {
      '5.7 V10 (M80/01)':             S(servicePresets.stage1_extreme),
    },
  },

  // Дополнительные секции для кузовов
  '911 carrera':    { 'см. 911 соответствующего поколения': S() },
  '911 turbo':      { 'см. 911 соответствующего поколения': S() },
  '911 gt3':        { 'см. 911 соответствующего поколения': S() },
  '911 targa':      { 'см. 911 соответствующего поколения': S() },
  'cayenne coupe':  { 'см. Cayenne соответствующего поколения': S() },
  'panamera sport turismo': { 'см. Panamera соответствующего поколения': S() },
};