// === УСЛУГИ ДЛЯ HONDA (адаптированы под PGM‑FI / i‑VTEC / VTEC Turbo / i‑DTEC / CVT HCF2 / 10AT) ===
export const servicePresetsHonda = {
  // Диагностика / базовые
  diagECU:         [{ name: 'Диагностика ЭБУ Honda', description: 'Полная компьютерная диагностика (HDS/OBD‑II)', price: '2 000 ₽' }],
  diagECU_plus:    [{ name: 'Диагностика ЭБУ + логи', description: 'Расширенные логи, адаптации, road‑test', price: '3 000 ₽' }],
  diagTrans:       [{ name: 'Диагностика трансмиссии', description: '5AT/6AT/10AT, CVT HCF2/i‑MMD drive unit', price: '2 500 ₽' }],
  coding:          [{ name: 'Кодирование/адаптации', description: 'VSA/ABS/TPMS, комфорт/свет, шумки дверей', price: '5 000 ₽' }],

  // Stage 1 (атмо/турбо)
  stage1_basic:    [{ name: 'Stage 1 атмосферный', description: 'Базовая оптимизация i‑VTEC/MPI', price: '10 000 ₽' }],
  stage1_na:       [{ name: 'Stage 1 атмосферный+', description: 'Точная калибровка i‑VTEC под АИ‑95/98', price: '12 000 ₽' }],
  stage1_turbo:    [{ name: 'Stage 1 Turbo', description: 'VTEC Turbo (L15B7/L15BA/1.5T), K20C4', price: '15 000 ₽' }],
  stage1_turbo_hi: [{ name: 'Stage 1 Turbo Hi', description: 'K20C1 Type R, 2.0T — производительный тюнинг', price: '18 000 ₽' }],

  // Коробки (калибровки без вскрытия)
  trans_5at:       [{ name: 'Настройка 5AT/6AT', description: 'Карты переключений/блок ГДТ/кик‑даун', price: '10 000 ₽' }],
  trans_9at:       [{ name: 'Настройка 9AT', description: 'ZF 9HP (Pilot/Passport/Acura): логика, отклик', price: '12 000 ₽' }],
  trans_10at:      [{ name: 'Настройка 10AT', description: 'Сглаживание тычков, логика up/down', price: '12 000 ₽' }],
  trans_cvt:       [{ name: 'Настройка CVT HCF2', description: 'Логика старт/ползучесть/эмуляция ступеней', price: '12 000 ₽' }],

  // Экология
  egr_off:         [{ name: 'Отключение EGR', description: 'Клапан рециркуляции (i‑DTEC/часть бенз.)', price: '7 000 ₽' }],
  dpf_off:         [{ name: 'Удаление DPF', description: 'Сажевый фильтр (i‑DTEC)', price: '9 000 ₽' }],
  dpf_off_adblue:  [{ name: 'Удаление DPF + AdBlue', description: 'SCR мочевина (евро‑версии дизель)', price: '11 000 ₽' }],
  gpf_off:         [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновый (современные 1.5T/2.0T)', price: '10 000 ₽' }],
  euro2:           [{ name: 'Прошивка на Евро 2', description: 'Даунгрейд норм, отключение экологии', price: '12 000 ₽' }],
  adblue_off:      [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины (дизель)', price: '8 000 ₽' }],

  // Прочее
  vmax_off:        [{ name: 'Снятие Vmax', description: 'Разблокировка ограничителя скорости', price: '6 000 ₽' }],
  flaps_off:       [{ name: 'Отключение IMRC', description: 'Вихревые заслонки впуска — IMRC/IAB', price: '5 000 ₽' }],
  maf_off:         [{ name: 'MAF/MAP OFF', description: 'Работа по α‑N/SD (где допустимо)', price: '4 000 ₽' }],
  tva_off:         [{ name: 'Отключение TVA', description: 'Электронная дроссельная заслонка', price: '4 000 ₽' }],
  evap_off:        [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
  sap_off:         [{ name: 'Отключение SAP', description: 'Система вторичного воздуха', price: '6 000 ₽' }],
  burbles:         [{ name: 'Pops & Bangs', description: 'Хлопки/выстрелы (аккуратно для турбо)', price: '8 000 ₽' }],
  dtc_off:         [{ name: 'Отключение DTC', description: 'Селективное удаление кодов ошибок', price: '3 000 ₽' }],
  disconnect_sens: [{ name: 'Disconnect Sensors', description: 'Снятие разъёмов отключаемых систем', price: '2 000 ₽' }],

  // HV/HEV/PHEV/BEV
  battery_hv:      [{ name: 'Диагностика HV батареи', description: 'SoH/баланс/температуры (IMA/e:HEV/e:HEV‑PHEV)', price: '5 000 ₽' }],
  hybrid_diag:     [{ name: 'Диагностика гибридной части', description: 'IMA/e:HEV: инвертор/генераторный модуль', price: '4 000 ₽' }],
  hybrid_cal:      [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления/ремап заряд‑профиля', price: '8 000 ₽' }],
};

export const S = (...sets) => sets.flat();

// === ДАННЫЕ HONDA ПО МОДЕЛЯМ И ПОКОЛЕНИЯМ (дорест/рест), основываясь на Drom ===
export const hondaData = {
  // ====== B/C класс ======
  'fit / jazz': {
    'GD (2001–2008)': {
      '1.3 i-DSI (L13A)': S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_basic, servicePresetsHonda.euro2),
      '1.5 VTEC (L15A)':  S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na,    servicePresetsHonda.euro2),
    },
    'GE/GP дорест/рест (2007–2013)': {
      '1.3 IMA Hybrid (L13A/IMA)': S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
      '1.3/1.5 VTEC (L13A/L15A)':  S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'GK/GP5 (2013–2019)': {
      '1.5 VTEC (L15B)':           S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '1.5 e:HEV (LEB-H1)':        S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
    'GR/GS (2020–н.в.)': {
      '1.5 e:HEV (e:HEV i‑MMD)':   S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
  },

  'civic': {
    'EK (1995–2000)': {
      '1.5 VTEC (D15B)':           S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '1.6 VTEC (B16A/B16B)':      S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'ES/EP (2000–2005)': {
      '1.6 i‑VTEC (D16V1/K20A3)':  S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.0 Type R (K20A)':         S(servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
    'FD/FA (2005–2011)': {
      '1.8 i‑VTEC (R18A)':         S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.0 i‑VTEC (R20A/K20Z)':    S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      'Type R (K20A/K20Z4)':       S(servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
    'FB/FG (2011–2015)': {
      '1.8 i‑VTEC (R18Z)':         S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.4 i‑VTEC (K24Z)':         S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'FC/FK (2015–2021)': {
      '1.5 VTEC Turbo (L15B7)':    S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.gpf_off, servicePresetsHonda.euro2),
      '2.0 i‑VTEC (K20C2)':        S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na,    servicePresetsHonda.euro2),
      'Type R (K20C1)':            S(servicePresetsHonda.stage1_turbo_hi, servicePresetsHonda.vmax_off),
    },
    'FL (2021–н.в.)': {
      '1.5 VTEC Turbo (L15BA)':    S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.gpf_off, servicePresetsHonda.euro2),
      '2.0 e:HEV':                 S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
      'Type R (K20C1)':            S(servicePresetsHonda.stage1_turbo_hi, servicePresetsHonda.vmax_off),
    },
  },

  // ====== D/E класс ======
  'accord': {
    'CF/CL (1997–2002)': {
      '1.8/2.0 VTEC (F18B/F20B)':  S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.3 VTEC (F23A)':           S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.0/2.2 Type R (H22A)':     S(servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
    'CL7/CL9 (2002–2008)': {
      '2.0 i‑VTEC (K20A)':         S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.4 i‑VTEC (K24A3/K24A)':   S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.2 i‑CTDi (N22A)':         S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.dpf_off, servicePresetsHonda.egr_off),
    },
    'CU/CW (2008–2013)': {
      '2.0/2.4 i‑VTEC (R20A/K24Z)': S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.2 i‑DTEC (N22B)':          S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.dpf_off, servicePresetsHonda.egr_off),
    },
    'CR/9 gen (2013–2017)': {
      '2.0/2.4 i‑VTEC (R20A/K24W)': S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '3.5 V6 (J35Y)':              S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
    'CV/10 gen (2017–2022)': {
      '1.5 VTEC Turbo (L15B7)':    S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.gpf_off, servicePresetsHonda.euro2, servicePresetsHonda.trans_cvt),
      '2.0 VTEC Turbo (K20C4)':    S(servicePresetsHonda.stage1_turbo_hi, servicePresetsHonda.trans_10at, servicePresetsHonda.gpf_off),
      '2.0 e:HEV':                 S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
    '11 gen (2022–н.в.)': {
      '1.5 VTEC Turbo (L15BA)':    S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.gpf_off, servicePresetsHonda.euro2, servicePresetsHonda.trans_cvt),
      '2.0 e:HEV':                 S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
  },

  // ====== Кроссоверы / SUV ======
  'cr-v': {
    'RD1/RD3 (1995–2001)': {
      '2.0 (B20B/B20Z)':           S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'RD4/RD7 (2001–2006)': {
      '2.0/2.4 (K20A/K24A)':       S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.2 i‑CTDi (N22A)':         S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.dpf_off, servicePresetsHonda.egr_off),
    },
    'RE (2006–2011)': {
      '2.0/2.4 (R20A/K24Z)':       S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.2 i‑DTEC (N22B)':         S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.dpf_off, servicePresetsHonda.egr_off),
    },
    'RM (2011–2016)': {
      '2.0/2.4 (R20A/K24W)':       S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.2 i‑DTEC (N22B)':         S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.dpf_off, servicePresetsHonda.egr_off),
    },
    'RW/RT (2016–2022)': {
      '1.5 VTEC Turbo (L15B7)':    S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.trans_cvt, servicePresetsHonda.gpf_off, servicePresetsHonda.euro2),
      '2.4 i‑VTEC (K24W)':         S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      '2.0 e:HEV (i‑MMD)':         S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
    'RS/6 gen (2022–н.в.)': {
      '1.5 VTEC Turbo (L15BA)':    S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.trans_cvt, servicePresetsHonda.gpf_off, servicePresetsHonda.euro2),
      '2.0 e:HEV (i‑MMD)':         S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
  },

  'hr-v / vezel': {
    'GH (1998–2006)': {
      '1.6 (D16A)':                S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'RU/2 gen (2013–2021)': {
      '1.5 (L15B) / 1.5 Hybrid':   S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'RV/3 gen (2021–н.в.)': {
      '1.5 e:HEV (i‑MMD)':         S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
  },

  'pilot': {
    'YF1 (2002–2008)': {
      '3.5 V6 (J35A4)':            S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
    'YF3 (2009–2015)': {
      '3.5 V6 (J35Z4)':            S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
    'YF6 (2016–н.в.)': {
      '3.5 V6 (J35Y6)':            S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.trans_9at, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
  },

  'odyssey (jp/us)': {
    'RA6/7 (1999–2003)': {
      '2.3 (F23A)':                S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'RB (2003–2008)': {
      '2.4 (K24A)':                S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'RC (2013–2020)': {
      '2.4 (K24W)':                S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
      'e:HEV (i‑MMD)':             S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
  },

  // ====== MPV / минивэны ======
  'stepwgn': {
    'RF (1996–2001)': {
      '2.0 (B20B)':                S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'RG/RK (2005–2015)': {
      '2.0/2.4 (R20A/K24A)':       S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'RP (2015–2022)': {
      '1.5 VTEC Turbo (L15B)':     S(servicePresetsHonda.stage1_turbo, servicePresetsHonda.gpf_off, servicePresetsHonda.euro2),
      'e:HEV (i‑MMD)':             S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
    'RP6 (2022–н.в.)': {
      'e:HEV (i‑MMD)':             S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
  },

  'stream': {
    'RN (2000–2006)': {
      '1.7 (D17A) / 2.0 (K20A)':   S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
    'RN facelift (2006–2014)': {
      '1.8 (R18A) / 2.0 (R20A)':   S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
  },

  // ====== Купе/спорт ======
  'integra / rsx': {
    'DC5 (2001–2006)': {
      '2.0 i‑VTEC (K20A/K20Z)':    S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
  },
  'prelude': {
    'BB (1996–2001)': {
      '2.0/2.2 VTEC (F20B/H22A)':  S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
  },
  's2000': {
    'AP1/AP2 (1999–2009)': {
      '2.0/2.2 VTEC (F20C/F22C)':  S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
  },
  'element': {
    'YH (2003–2011)': {
      '2.4 (K24A/K24Z)':           S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.euro2),
    },
  },

  // ====== Премиум ======
  'legend': {
    'KB1/KB2 (2004–2012)': {
      '3.5 V6 (J35A/J35Z)':        S(servicePresetsHonda.diagECU, servicePresetsHonda.stage1_na, servicePresetsHonda.vmax_off, servicePresetsHonda.euro2),
    },
    'KC2 (2015–2021)': {
      '3.5 Hybrid SH‑AWD (JNC)':   S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
  },

  // ====== Гибриды/электро ======
  'insight': {
    'ZE2 (2009–2014)': {
      '1.3 IMA (LDA‑MF6)':         S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
    'ZE4 (2018–2022)': {
      '1.5 e:HEV (i‑MMD)':         S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
  },
  'cr-z': {
    'ZF1 (2010–2016)': {
      '1.5 IMA (LEA)':             S(servicePresetsHonda.hybrid_diag, servicePresetsHonda.battery_hv, servicePresetsHonda.hybrid_cal),
    },
  },

  // ====== Ссылки на семьи ======
  'vezel':        { 'см. HR‑V соответствующего поколения': S() },
  'civic type r': { 'см. Civic FC/FL Type R (K20C1)':       S() },
};
