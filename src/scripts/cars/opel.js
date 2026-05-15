export const servicePresets = {
  diagECU:           [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:      [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:         [{ name: 'Диагностика трансмиссии', description: 'AT/DCT/CVT/Powershift', price: '2 500 ₽' }],
  stage1_basic:      [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_comfort:    [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_turbo:      [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '15 000 ₽' }],
  stage1_turbo_hi:   [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг турбо', price: '18 000 ₽' }],
  stage1_opc:        [{ name: 'Прошивка Stage 1', description: 'OPC/VXR тюнинг', price: '25 000 ₽' }],
  stage1_performance:[{ name: 'Прошивка Stage 1', description: 'Performance V6/Turbo', price: '28 000 ₽' }],
  stage1_extreme:    [{ name: 'Прошивка Stage 1', description: 'High Performance V6/V8', price: '35 000 ₽' }],
  trans_at4:         [{ name: 'Настройка AT', description: 'Калибровка 4-ст автомата', price: '10 000 ₽' }],
  trans_at5:         [{ name: 'Настройка AT', description: 'Калибровка 5-ст автомата', price: '11 000 ₽' }],
  trans_at6:         [{ name: 'Настройка AT', description: 'Калибровка 6-ст автомата', price: '12 000 ₽' }],
  trans_at8:         [{ name: 'Настройка AT', description: 'Калибровка 8-ст автомата', price: '14 000 ₽' }],
  trans_dct:         [{ name: 'Настройка DCT', description: 'Настройка робота DCT', price: '15 000 ₽' }],
  trans_powershift:  [{ name: 'Настройка Powershift', description: 'Калибровка Powershift DCT', price: '15 000 ₽' }],
  egr_off:           [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:           [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '9 000 ₽' }],
  dpf_off_adblue:    [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '11 000 ₽' }],
  gpf_off:           [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  adblue_off:        [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '8 000 ₽' }],
  vmax_off:          [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '6 000 ₽' }],
  flaps_off:         [{ name: 'Отключение выхлопных клапанов', description: 'Flaps/заслонки', price: '5 000 ₽' }],
  maf_off:           [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '4 000 ₽' }],
  tva_off:           [{ name: 'Отключение TVA', description: 'Дроссельная заслонка', price: '4 000 ₽' }],
  evap_off:          [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
  sap_off:           [{ name: 'Отключение SAP', description: 'Вторичный воздух', price: '6 000 ₽' }],
  burbles:           [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '8 000 ₽' }],
  euro2:             [{ name: 'Прошивка на Евро 2', description: 'Отключение экологических систем', price: '12 000 ₽' }],
  dtc_off:           [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  disconnect_sens:   [{ name: 'Disconnect Sensors', description: 'Снятие разъемов отключаемых систем', price: '2 000 ₽' }],
  battery_hv:        [{ name: 'Диагностика HV батареи', description: 'Проверка высоковольтной батареи', price: '5 000 ₽' }],
  hybrid_diag:       [{ name: 'Диагностика гибридной системы', description: 'HEV/PHEV инвертор/контроллер', price: '4 000 ₽' }],
  hybrid_cal:        [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '8 000 ₽' }],
  airbag_clear:      [{ name: 'Удаление ошибок Airbag', description: 'Очистка crash data', price: '4 000 ₽' }],
  immo_off:          [{ name: 'Отключение иммобилайзера', description: 'Удаление привязки ключа', price: '6 000 ₽' }],
  coding:            [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  cluster_correct:   [{ name: 'Корректировка пробега', description: 'Коррекция одометра', price: '7 000 ₽' }],
  lpg_calib:         [{ name: 'Калибровка ГБО', description: 'Настройка газобаллонного оборудования', price: '6 000 ₽' }],
};

export const S = (...sets) => sets.flat();

export const opelData = {

  // ====== A/B-сегмент ======
  'corsa': {
    'B (1993–2000)': {
      '1.0 (X10XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (X12XE/C12NZ)':            S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 (C14SE/X14XE)':            S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 GSi (C16XE)':              S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.5 D/TD (X15DT)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'C (2000–2006)': {
      '1.0 (Z10XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (Z12XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 (Z14XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 GSi (Z18XE)':              S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.3 CDTi (Z13DT)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '1.7 Di/DTi (Y17DT)':           S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'D дорест (2006–2010)': {
      '1.0 (Z10XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (Z12XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 (Z14XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 Turbo (Z16LER)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '1.6 Turbo OPC (Z16LET)':       S(servicePresets.stage1_opc, servicePresets.gpf_off),
      '1.3 CDTi (Z13DTJ)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.7 CDTi (Z17DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'D рест (2010–2014)': {
      '1.0 (Z10XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (A12XER)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 (A14XER)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 Turbo (A14NET)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.6 Turbo OPC (A16LET)':       S(servicePresets.stage1_opc, servicePresets.gpf_off),
      '1.3 CDTi (A13DTE)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.7 CDTi (A17DTJ)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'E (2014–2019)': {
      '1.0 Turbo (B10XFT)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.2 (B12XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 (B14XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 Turbo (B14XFT)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.6 Turbo OPC (B16SHT)':       S(servicePresets.stage1_opc, servicePresets.gpf_off),
      '1.3 CDTi (B13DTE)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'F (2019–н.в.)': {
      '1.2 (EB2)':                    S(servicePresets.diagECU, servicePresets.stage1_basic, servicePresets.gpf_off),
      '1.2 Turbo (EB2DTS)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.5 Diesel (YH01)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Electric (электро)':           S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'astra': {
    'G дорест (1998–2004)': {
      '1.4 (Z14XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (Z16XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.8 (Z18XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (X20XEV)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.2 (Z22SE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.7 DTi (Y17DT)':              S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.0 DTi (Y20DTH)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.2 DTi (Y22DTR)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'G рест (2004–2009)': {
      '1.4 (Z14XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (Z16XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.8 (Z18XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo OPC (Z20LEH)':       S(servicePresets.stage1_opc, servicePresets.gpf_off),
      '1.3 CDTi (Z13DT)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.7 CDTi (Z17DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.9 CDTi (Z19DT)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'H дорест (2004–2007)': {
      '1.4 (Z14XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (Z16XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.8 (Z18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo (Z20LEH)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.0 Turbo OPC (Z20LEH)':       S(servicePresets.stage1_opc, servicePresets.gpf_off),
      '1.3 CDTi (Z13DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.7 CDTi (Z17DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.9 CDTi (Z19DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'H рест (2007–2014)': {
      '1.4 (A14XER)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (A16XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 Turbo (A16LET)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '1.8 (Z18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo OPC (Z20LEH)':       S(servicePresets.stage1_opc, servicePresets.gpf_off),
      '1.3 CDTi (A13DTE)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.7 CDTi (A17DTJ)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 CDTi (A20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'J дорест (2009–2012)': {
      '1.4 (A14XER)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 Turbo (A14NET)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.6 (A16XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 Turbo (A16XHT)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '1.8 (A18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo OPC (A20NFT)':       S(servicePresets.stage1_opc, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.3 CDTi (A13DTE)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.7 CDTi (A17DT)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 CDTi (A20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'J рест (2012–2015)': {
      '1.4 (A14XER)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 Turbo (A14NET/B14NET)':    S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.6 (A16XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 Turbo (A16XHT)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '1.6 SIDI Turbo (A16LET)':      S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.0 Turbo OPC (A20NFT)':       S(servicePresets.stage1_opc, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.6 CDTi (B16DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 CDTi (A20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'K (2015–2022)': {
      '1.0 Turbo (B10XFT)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.4 (B14XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 Turbo (B14XFT)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.6 Turbo (B16SHL)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '1.6 CDTi (B16DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 CDTi (B20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'L (2021–н.в.)': {
      '1.2 Turbo (EB2DTS)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.5 Diesel (YH01)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 Hybrid (EB2ADTS)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'insignia': {
    'A дорест (2008–2013)': {
      '1.6 (A16XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 Turbo (A16XHT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.8 (A18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo (A20NHT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
      '2.8 V6 Turbo OPC (A28NET)':    S(servicePresets.stage1_extreme, servicePresets.trans_at6, servicePresets.gpf_off),
      '2.0 CDTi (A20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 BiTurbo (A20DTR)':         S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'A рест (2013–2017)': {
      '1.4 Turbo (B14NET)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.6 (A16XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.6 Turbo (A16XHT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
      '2.0 Turbo (A20NHT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
      '2.8 V6 Turbo OPC (A28NET)':    S(servicePresets.stage1_extreme, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.6 CDTi (B16DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 CDTi (A20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 BiTurbo (A20DTR)':         S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B (2017–2022)': {
      '1.5 Turbo (D15DTH)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.6 Turbo (B16SHL)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      '2.0 Turbo (A20NFT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      '1.5 Diesel (D15DT)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 CDTi (B16DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 CDTi (B20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  // ====== D/E-сегмент ======
  'vectra': {
    'A (1988–1995)': {
      '1.4 (C14NZ)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (C16NZ)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (C18NZ)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (C20NE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.7 D (17D)':                  S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'B дорест (1995–1999)': {
      '1.6 (X16SZR/X16XEL)':          S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (X18XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (X20XEV)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.5 V6 (X25XE)':               S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.7 TD (X17DTL)':              S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.0 DTi (X20DTH)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'B рест (1999–2002)': {
      '1.6 (Z16XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (Z18XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (X20XEV)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.2 (Z22SE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.6 V6 (Y26SE)':               S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.2 V6 (Y32SE)':               S(servicePresets.stage1_performance, servicePresets.trans_at5),
      '2.0 DTi (Y20DTH)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.2 DTi (Y22DTR)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'C дорест (2002–2005)': {
      '1.6 (Z16XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (Z18XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo (Z20NET)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.2 (Z22SE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.8 V6 Turbo OPC (Z28NET)':    S(servicePresets.stage1_extreme, servicePresets.trans_at6, servicePresets.gpf_off),
      '3.2 V6 (Z32SE)':               S(servicePresets.stage1_performance, servicePresets.trans_at5),
      '1.9 CDTi (Z19DT)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 DTi (Y20DTH)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.2 DTi (Y22DTR)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '3.0 V6 CDTi (Y30DT)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'C рест (2005–2008)': {
      '1.6 (Z16XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (Z18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo (Z20NET)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.8 V6 Turbo OPC (Z28NET)':    S(servicePresets.stage1_extreme, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.9 CDTi (Z19DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 V6 CDTi (Y30DT)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'omega': {
    'B дорест (1994–1999)': {
      '2.0 (X20XEV)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.5 V6 (X25XE)':               S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.0 V6 (X30XE)':               S(servicePresets.stage1_performance, servicePresets.trans_at4),
      '2.0 DTi (X20DTL)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.5 DTi (X25DT)':              S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'B рест (1999–2003)': {
      '2.0 (X20XEV)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.2 (Y22XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.6 V6 (Y26SE)':               S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.0 V6 (X30XE)':               S(servicePresets.stage1_performance, servicePresets.trans_at4),
      '3.2 V6 (Y32SE)':               S(servicePresets.stage1_performance, servicePresets.trans_at5),
      '2.0 DTi (Y20DTH)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.5 DTi (Y25DT)':              S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
  },

  'senator': {
    'B (1987–1994)': {
      '2.5 (C25NE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.0 (C30NE/C30SE)':            S(servicePresets.stage1_performance, servicePresets.trans_at4),
      '2.5 TD (25DT)':                S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
  },

  // ====== Компакт MPV ======
  'meriva': {
    'A дорест (2003–2006)': {
      '1.4 (Z14XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (Z16SE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (Z18XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.3 CDTi (Z13DT)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '1.7 CDTi (Z17DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'A рест (2006–2010)': {
      '1.4 (Z14XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (Z16XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.8 (Z18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.3 CDTi (Z13DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.7 CDTi (Z17DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B дорест (2010–2014)': {
      '1.4 Twinport (A14XER)':        S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 Turbo (A14NEL/A14NET)':    S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.7 CDTi (A17DT)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B рест (2014–2017)': {
      '1.4 (A14XER)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 Turbo (B14NEL/B14NET)':    S(servicePresets.stage1_turbo, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.6 CDTi (B16DT)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'zafira': {
    'A дорест (1999–2003)': {
      '1.6 (Z16XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (Z18XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (X20XEV)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.2 (Z22SE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 DTi (Y20DTH)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.2 DTi (Y22DTR)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'A рест (2003–2005)': {
      '1.6 (Z16XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (Z18XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 (X20XEV)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo OPC (Z20LET)':       S(servicePresets.stage1_opc, servicePresets.gpf_off),
      '2.2 (Z22SE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 DTi (Y20DTH)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.2 DTi (Y22DTR)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'B дорест (2005–2008)': {
      '1.6 (Z16XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (Z18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo (Z20LEH)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.2 (Z22YH)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.9 CDTi (Z19DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B рест (2008–2014)': {
      '1.6 (A16XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.8 (Z18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo OPC (A20NFT)':       S(servicePresets.stage1_opc, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.7 CDTi (A17DTJ)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 CDTi (A20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'C Tourer (2011–2019)': {
      '1.4 Turbo (A14NET/B14NET)':    S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.6 (A16XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.8 (A18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo (A20NFT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.6 CDTi (B16DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 CDTi (A20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  // ====== Кроссоверы/SUV ======
  'mokka': {
    'A дорест (2012–2016)': {
      '1.4 Turbo (A14NET)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.6 (A16XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.8 (A18XER)':                 S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '1.7 CDTi (A17DT)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'A рест (2016–2020)': {
      '1.4 Turbo (B14NET)':           S(servicePresets.stage1_turbo, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.6 CDTi (B16DT)':             S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B (2020–н.в.)': {
      '1.2 Turbo (EB2DTS)':           S(servicePresets.stage1_turbo, servicePresets.trans_at8, servicePresets.gpf_off),
      '1.5 Diesel (YH01)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'Electric (электро)':           S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'crossland': {
    'дорест (2017–2020)': {
      '1.2 (EB2)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 Turbo (EB2DT)':            S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.5 Diesel (YH01)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 Diesel (DV6FD)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'рест (2020–2024)': {
      '1.2 (EB2)':                    S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 Turbo (EB2DTS)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.5 Diesel (YH01)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'grandland': {
    'дорест (2017–2021)': {
      '1.2 Turbo (EB2DTS)':           S(servicePresets.stage1_turbo, servicePresets.trans_at8, servicePresets.gpf_off),
      '1.6 Turbo (EP6FDT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      '1.5 Diesel (YH01)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 Diesel (DW10FD)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '1.6 Hybrid4 (EP6FADTX)':       S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'рест (2021–2024)': {
      '1.2 Turbo (EB2DTS)':           S(servicePresets.stage1_turbo, servicePresets.trans_at8, servicePresets.gpf_off),
      '1.6 Turbo (EP6FDT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at8, servicePresets.gpf_off),
      '1.5 Diesel (YH01)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '1.6 Hybrid4 (EP6FADTX)':       S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '2 поколение (2024–н.в.)': {
      '1.2 Hybrid (EB2ADTS)':         S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'Electric (электро)':           S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'antara': {
    'дорест (2006–2010)': {
      '2.4 (LE5)':                    S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at5),
      '3.2 V6 (LA3)':                 S(servicePresets.stage1_performance, servicePresets.trans_at5),
      '2.0 CDTi (Z20DMH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'рест (2010–2015)': {
      '2.4 (LE9)':                    S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at6),
      '2.2 CDTi (A22DM)':             S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'frontera': {
    'A (1991–1998)': {
      '2.0 (20SE/C20NE)':             S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.2 (X22XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.4 (C24NE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.3 TD (23DTR)':               S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'B дорест (1998–2001)': {
      '2.2 (X22SE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.2 V6 (6VD1)':                S(servicePresets.stage1_performance, servicePresets.trans_at4),
      '2.2 DTi (Y22DTH)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'B рест (2001–2004)': {
      '2.2 (Z22SE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '3.2 V6 (6VD1)':                S(servicePresets.stage1_performance, servicePresets.trans_at4),
      '2.2 DTi (Y22DTH)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
  },

  'monterey': {
    'A (1992–1998)': {
      '3.1 TD (4JG2)':                S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '3.2 V6 (6VD1)':                S(servicePresets.stage1_performance, servicePresets.trans_at4),
    },
    'B (1998–2004)': {
      '3.0 DTi (4JX1)':               S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '3.5 V6 (6VE1)':                S(servicePresets.stage1_performance, servicePresets.trans_at4),
    },
  },

  // ====== Спорт/купе ======
  'calibra': {
    '(1989–1997)': {
      '2.0 (C20NE/C20XE)':            S(servicePresets.diagECU, servicePresets.stage1_comfort),
      '2.0 Turbo (C20LET)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.5 V6 (C25XE)':               S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  'tigra': {
    'A (1994–2001)': {
      '1.4 (C14SE/X14XE)':            S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 (X16XEL)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
    'B TwinTop (2004–2009)': {
      '1.4 (Z14XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8 (Z18XE)':                  S(servicePresets.diagECU, servicePresets.stage1_comfort),
    },
  },

  'gt': {
    '(2007–2009)': {
      '2.0 Turbo (Z20LEH)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
    },
  },

  'cascada': {
    '(2013–2019)': {
      '1.4 Turbo (A14NET)':           S(servicePresets.stage1_turbo, servicePresets.trans_at6, servicePresets.gpf_off),
      '1.6 Turbo (A16XHT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_at6, servicePresets.gpf_off),
      '2.0 CDTi (A20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  // ====== LCV ======
  'combo': {
    'C (2001–2011)': {
      '1.4 (Z14XEP)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 CNG (Z16YNG)':             S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.3 CDTi (Z13DTJ)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.7 CDTi (Z17DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'D (2011–2018)': {
      '1.4 (A14XER)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.6 CNG (A16CNG)':             S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.3 CDTi (A13DTE)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 CDTi (B16DTH)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 CDTi (A20DTH)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'E (2018–н.в.)': {
      '1.2 Turbo (EB2DTS)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.5 Diesel (YH01)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'vivaro': {
    'A (2001–2014)': {
      '1.9 DTi (F9Q)':                S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.0 CDTi (M9R)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.5 CDTi (G9U)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B (2014–2019)': {
      '1.6 CDTi (R9M)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'C (2019–н.в.)': {
      '1.5 Diesel (YH01)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 Diesel (DW10)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'Electric (электро)':           S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  'movano': {
    'A (1998–2010)': {
      '2.2 DTi (G9T)':                S(servicePresets.stage1_turbo, servicePresets.egr_off),
      '2.5 CDTi (G9U)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 CDTi (ZD3)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B (2010–2021)': {
      '2.3 CDTi (M9T)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'C (2021–н.в.)': {
      '2.2 Diesel (F1CE3)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  // ====== EV ======
  'ampera': {
    '(2011–2015)': {
      '1.4 EREV (электро/бензин)':   S(servicePresets.battery_hv, servicePresets.hybrid_diag, servicePresets.diagECU_plus),
    },
  },

  'ampera-e': {
    '(2017–2020)': {
      'Electric (электро)':           S(servicePresets.battery_hv, servicePresets.diagECU_plus),
    },
  },

  // ====== Дополнительные модели ======
  'adam': {
    '(2013–2019)': {
      '1.0 Turbo (B10XFT)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.2 (B12XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 (A14XER)':                 S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 Turbo (A14NET)':           S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '1.0 Ecotec (B10XE)':           S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  'karl': {
    '(2015–2019)': {
      '1.0 (B10D)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (B12D)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
    },
  },

  'agila': {
    'A (2000–2007)': {
      '1.0 (Z10XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (Z12XE)':                  S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.3 CDTi (Z13DT)':             S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'B (2008–2014)': {
      '1.0 (K10B)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.2 (K12B)':                   S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.3 CDTi (D13A)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  // ====== Ссылки на семьи ======
  'karl / viva':        { 'см. младшая A-платформа': S(servicePresets.diagECU, servicePresets.stage1_basic) },
  'sintra':             { '(1996–1999) MPV на базе GM U-платформы': S(servicePresets.diagECU, servicePresets.stage1_comfort) },
  'signum':             { 'см. Vectra C платформа': S(servicePresets.diagECU, servicePresets.stage1_comfort, servicePresets.trans_at5) },
  'speedster / vx220': { '(2000–2005) на базе Lotus Elise': S(servicePresets.diagECU, servicePresets.stage1_performance) },
};

