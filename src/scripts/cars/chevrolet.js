// === УСЛУГИ ДЛЯ CHEVROLET (адаптированы под GM: TBI/MPFI, Ecotec, Duramax, Voltec, BEV) ===
export const servicePresetsChevrolet = {
  // Euro 2 — базовая услуга (вынесена в начало)
  euro2: [
    { name: 'Прошивка на Евро 2', description: 'Отключение экологических систем (EGR/DPF/вторые O2) с корректировкой топливных карт под стандарт Euro-2', price: '12 000 ₽' },
  ],

  // Диагностика / кодирование
  diagECU:            [{ name: 'Диагностика ЭБУ GM', description: 'OBD-II + GDS2/Tech2, чтение ошибок', price: '2 000 ₽' }],
  diagECU_plus:       [{ name: 'Диагностика + логи', description: 'Расширенные логи, адаптации/сбросы', price: '3 000 ₽' }],
  coding:             [{ name: 'Кодирование/адаптации BCM', description: 'Опции комфорта/свет/DRL/чирк ремня', price: '5 000 ₽' }],
  speedo_corr:        [{ name: 'Коррекция спидометра', description: 'Размер колёс/главная пара', price: '4 000 ₽' }],
  start_stop_mem:     [{ name: 'Память Start/Stop', description: 'Запоминание последнего состояния', price: '3 000 ₽' }],

  // Stage 1
  stage1_atmo_basic:  [{ name: 'Stage 1 атмосферный', description: '1.4–2.0 MPI/рядные — базовая оптимизация', price: '10 000 ₽' }],
  stage1_atmo_plus:   [{ name: 'Stage 1 атмосферный+', description: 'Ecotec/Опель семейство под АИ-95/98', price: '12 000 ₽' }],
  stage1_turbo:       [{ name: 'Stage 1 Turbo', description: 'Ecotec A14NET/LTG/LFV/LYX и др.', price: '18 000 ₽' }],
  stage1_turbo_hi:    [{ name: 'Stage 1 Hi Turbo', description: 'LTG/LFY/высокий наддув', price: '22 000 ₽' }],
  stage1_v8:          [{ name: 'Stage 1 V8', description: 'LS/LT (5.3/6.2) — атмосферные', price: '28 000 ₽' }],

  // Трансмиссии (без вскрытия)
  trans_6t30:         [{ name: 'Настройка 6T30/6T40', description: 'Карты переключений/блок ГДТ', price: '10 000 ₽' }],
  trans_6l80:         [{ name: 'Настройка 6L45/6L80', description: 'Гидротрансформатор/давления', price: '12 000 ₽' }],
  trans_8l90:         [{ name: 'Настройка 8L90/10L80', description: 'Сглаживание тычков/кик-даун', price: '14 000 ₽' }],

  // Эко/системы
  egr_off:            [{ name: 'EGR OFF', description: 'Программное отключение EGR (дизель/часть бенз.)', price: '7 000 ₽' }],
  dpf_off:            [{ name: 'DPF OFF', description: 'Программное отключение DPF (дизель)', price: '9 000 ₽' }],
  dpf_adblue_off:     [{ name: 'DPF + AdBlue OFF', description: 'SCR/мочевина — программно', price: '11 000 ₽' }],
  gpf_off:            [{ name: 'GPF/OPF OFF', description: 'Фильтр бензиновых частиц — программно', price: '10 000 ₽' }],
  sai_off:            [{ name: 'SAI/PAIR OFF', description: 'Вторичный воздух — программно', price: '6 000 ₽' }],
  post_o2_off:        [{ name: 'Вторые O2 OFF', description: 'Отключение пост-кат датчиков', price: '4 000 ₽' }],
  afm_dod_off:        [{ name: 'Отключение AFM/DOD', description: 'Деактивация цилиндров V8 (LS/LT)', price: '8 000 ₽' }],
  vvt_off:            [{ name: 'Коррекция/откл. VVT', description: 'Настройка фаз/деактивация при тюнинге', price: '6 000 ₽' }],

  // Прочее
  vmax_off:           [{ name: 'Vmax OFF', description: 'Снятие ограничителя скорости', price: '6 000 ₽' }],
  rev_limit:          [{ name: 'Сдвиг отсечки', description: 'Коррекция RPM limit (безопасные рамки)', price: '3 000 ₽' }],
  idle_rpm:           [{ name: 'ХХ RPM', description: 'Настройка холостых оборотов', price: '3 000 ₽' }],
  burbles:            [{ name: 'Pops & Bangs', description: 'Аккуратные хлопки (турбо)', price: '8 000 ₽' }],
  dtc_off:            [{ name: 'DTC OFF', description: 'Селективное отключение кодов ошибок', price: '3 000 ₽' }],

  // HV/EV/PHEV
  battery_hv:         [{ name: 'Диагностика HV батареи', description: 'SoH/температуры/баланс — Bolt/Volt/Blazer EV', price: '5 000 ₽' }],
  ev_diag:            [{ name: 'Диагностика электро', description: 'Ошибки инвертора/зарядного/ВБУ, обновления', price: '4 000 ₽' }],
  hybrid_cal:         [{ name: 'Калибровка гибридной части', description: 'Volt (EREV/Voltec) — адаптации', price: '8 000 ₽' }],
};

export const S = (...sets) => sets.flat();

// === ДАННЫЕ CHEVROLET (Россия приоритет) + популярные США (без разбиения) ===
export const chevroletData = {
  // ====== РФ / СНГ ======
  'aveo': {
    'T200/T250 дорест/рест (2003–2012)': {
      '1.2 (F12S3/F12D3)':         S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
      '1.4 (F14D3)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
      '1.6 (F16D3)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
    'T300 дорест/рест (2011–2016)': {
      '1.6 (F16D4)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '1.4 Turbo (A14NET)':        S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.gpf_off, servicePresetsChevrolet.euro2),
    },
  },

  'lacetti / optra (j200)': {
    'дорест/рест (2003–2013)': {
      '1.4 (F14D3)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
      '1.6 (F16D3)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '1.8 (F18D3)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
  },

  'cruze (j300)': {
    'дорест (2009–2012)': {
      '1.6 (F16D3)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '1.8 (F18D4/Z18XER)':        S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '2.0 VCDi (Z20D1/A20DTH)':   S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.dpf_off, servicePresetsChevrolet.egr_off),
    },
    'рест (2012–2016)': {
      '1.6 (F16D4)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '1.4 Turbo (A14NET)':        S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.gpf_off, servicePresetsChevrolet.euro2),
      '1.8 (Z18XER)':              S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
  },

  'epica (v250)': {
    'дорест/рест (2006–2012)': {
      '2.0 R6 (X20D1)':            S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '2.5 R6 (X25D1)':            S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
  },

  'spark': {
    'M200/M250 (2005–2010)': {
      '0.8 (F8CV)':                S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
      '1.0 (B10D1)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
    },
    'M300 дорест/рест (2010–2018)': {
      '1.0 (B10D1)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
      '1.2 (B12D1)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
    },
    'M400 (2018–н.в., выборочно)': {
      '1.0 (LV7)':                 S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
    },
  },

  'cobalt (gsv/uz)': {
    'дорест/рест (2012–н.в.)': {
      '1.5 (B15D2/B15D4)':         S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
    },
  },

  'orlando (j309)': {
    'дорест/рест (2010–2018)': {
      '1.8 (F18D4)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '1.4 Turbo (A14NET)':        S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.gpf_off, servicePresetsChevrolet.euro2),
      '2.0 VCDi (Z20D1)':          S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.dpf_off, servicePresetsChevrolet.egr_off),
    },
  },

  'captiva': {
    'C100 дорест (2006–2011)': {
      '2.4 (LE5/A24XE)':           S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '3.2 V6 (LLW)':              S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '2.0/2.2 VCDi (Z20S/Z22D1)': S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.dpf_off, servicePresetsChevrolet.egr_off),
    },
    'C140 рест (2011–2018)': {
      '2.4 (LE9/A24XE)':           S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '3.0 V6 (LF1)':              S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '2.2 VCDi (A22DMH)':         S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.dpf_off, servicePresetsChevrolet.egr_off),
    },
  },

  'trailblazer (tfr/ppv, 2012–н.в.)': {
    'дорест/рест': {
      '2.8 Duramax (LWN)':          S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.dpf_adblue_off, servicePresetsChevrolet.egr_off),
      '3.6 V6 (LLT/LFX)':           S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
  },

  'niva (2123)': {
    'дорест/рест (2002–2020)': {
      '1.7 MPI (ВАЗ-2123/21214)':   S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
    },
  },

  'tahoe (официальные поставки РФ)': {
    'GMT900 (2006–2014)': {
      '5.3 V8 (LMG/LC9)':           S(servicePresetsChevrolet.stage1_v8),
      '6.2 V8 (LSA)':                S(servicePresetsChevrolet.stage1_v8),
    },
    'K2XX (2015–2020)': {
      '5.3 V8 (L83)':               S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
      '6.2 V8 (L86)':               S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
    },
    'T1XX (2021–н.в.)': {
      '5.3 V8 (L84)':               S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
      '6.2 V8 (L87)':               S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
    },
  },

  'silverado 1500 (официальные поставки РФ)': {
    'GMT900 (2007–2014)': {
      '5.3 V8 (LMG/LC9)':           S(servicePresetsChevrolet.stage1_v8),
      '6.2 V8 (LSA)':                S(servicePresetsChevrolet.stage1_v8),
    },
    'K2XX (2015–2020)': {
      '5.3 V8 (L83)':               S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
      '6.2 V8 (L86)':               S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
    },
    'T1XX (2020–н.в.)': {
      '5.3 V8 (L84)':               S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
      '6.2 V8 (L87)':               S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
    },
  },

  // ====== EV / PHEV ======
  'volt': {
    '1 поколение (2010–2015)': {
      'EREV Voltec (LUK/LHN)':      S(servicePresetsChevrolet.ev_diag, servicePresetsChevrolet.battery_hv, servicePresetsChevrolet.hybrid_cal),
    },
    '2 поколение (2016–2019)': {
      'EREV Voltec (L1A/LGD)':      S(servicePresetsChevrolet.ev_diag, servicePresetsChevrolet.battery_hv, servicePresetsChevrolet.hybrid_cal),
    },
  },
  'bolt ev': {
    'BEV (2016–н.в.)': {
      'BEV 60–66 кВт·ч (LG Chem)':  S(servicePresetsChevrolet.battery_hv, servicePresetsChevrolet.ev_diag),
    },
  },

  // ====== США (популярные, без разбиения) ======
  'malibu (US)': {
    'популярные двигатели': {
      '1.5 Turbo (LFV)':            S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.gpf_off, servicePresetsChevrolet.euro2),
      '2.0 Turbo (LTG)':            S(servicePresetsChevrolet.stage1_turbo_hi, servicePresetsChevrolet.gpf_off, servicePresetsChevrolet.euro2),
    },
  },
  'equinox (US)': {
    'популярные двигатели': {
      '1.5 Turbo (LYX)':            S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.gpf_off, servicePresetsChevrolet.euro2),
      '2.0 Turbo (LTG)':            S(servicePresetsChevrolet.stage1_turbo_hi, servicePresetsChevrolet.gpf_off, servicePresetsChevrolet.euro2),
      '1.6 Diesel (LH7)':           S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.dpf_off, servicePresetsChevrolet.egr_off),
    },
  },
  'silverado 1500 (US)': {
    'популярные двигатели': {
      '5.3 V8 (L83/L84)':           S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
      '6.2 V8 (L86/L87)':           S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
      '3.0 Duramax (LM2/LZ0)':      S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.dpf_adblue_off, servicePresetsChevrolet.egr_off),
    },
  },
  'camaro (US)': {
    'популярные двигатели': {
      '2.0 Turbo (LTG)':            S(servicePresetsChevrolet.stage1_turbo_hi, servicePresetsChevrolet.gpf_off, servicePresetsChevrolet.euro2),
      '3.6 V6 (LGX)':               S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '6.2 V8 (LT1/LT4)':           S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
    },
  },
  'corvette (US)': {
    'популярные двигатели': {
      '6.2 V8 (LT1/LT2)':           S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
      '5.5 V8 NA (LT6)':            S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
    },
  },
  'blazer ev (US)': {
    'BEV Ultium': {
      'RWD/AWD (Ultium)':           S(servicePresetsChevrolet.battery_hv, servicePresetsChevrolet.ev_diag),
    },
  },
  'silverado ev (US)': {
    'BEV Ultium': {
      'WT/RST (Ultium)':            S(servicePresetsChevrolet.battery_hv, servicePresetsChevrolet.ev_diag),
    },
  },
  
  // ====== ДОБАВЛЕНО: РОССИЙСКИЕ МОДЕЛИ (расширение) ======
  'lanos / chance (t100/t150)': {
    'дорест/рест (2002–2015)': {
      '1.5 (A15SMS/A15DMS)':      S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
      '1.4 (A14SMS)':             S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
    },
  },

  'rezzo / tacuma (u100)': {
    'дорест/рест (2000–2011)': {
      '1.6 (B16DMS)':             S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_basic, servicePresetsChevrolet.euro2),
      '1.8 (T18SED/F18D3)':       S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '2.0 (T20SED)':             S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
  },

  'evanda (v200)': {
    'дорест/рест (2004–2006)': {
      '2.0 (T20SED)':             S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '2.5 (X25XED)':             S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
  },

  'viva (astra g)': {
    '2004–2008': {
      '1.8 (Z18XE)':              S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
  },

  // Ранний TrailBlazer (импорт)
  'trailblazer gmt360': {
    '2001–2009': {
      '4.2 R6 (LL8)':             S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '5.3 V8 (LM4/LL8 swap)':    S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
    },
  },

  // Коммерческие поставки
  'express van': {
    '2003–н.в. (выборочно)': {
      '4.3 V6 (LU3/LGZ)':         S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
      '5.3 V8 (LM7/LMF)':         S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.euro2, servicePresetsChevrolet.vmax_off),
      '6.0 V8 (LY6/L96)':         S(servicePresetsChevrolet.stage1_v8, servicePresetsChevrolet.vmax_off, servicePresetsChevrolet.afm_dod_off),
      '2.8 Duramax (LWN)':        S(servicePresetsChevrolet.stage1_turbo, servicePresetsChevrolet.dpf_adblue_off, servicePresetsChevrolet.egr_off),
    },
  },

  // Глобальные кроссоверы (серые поставки)
  'traverse (global)': {
    'популярные двигатели': {
      '3.6 V6 (LLT/LFX/LGZ)':     S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
  },
  'blazer (global 2019+)': {
    'популярные двигатели': {
      '2.0 Turbo (LTG)':          S(servicePresetsChevrolet.stage1_turbo_hi, servicePresetsChevrolet.gpf_off, servicePresetsChevrolet.euro2),
      '3.6 V6 (LGX)':             S(servicePresetsChevrolet.diagECU, servicePresetsChevrolet.stage1_atmo_plus, servicePresetsChevrolet.euro2),
    },
  },

  // EV дополнение
  'bolt euv': {
    'BEV (2021–н.в.)': {
      'BEV 65 кВт·ч (LG)':        S(servicePresetsChevrolet.battery_hv, servicePresetsChevrolet.ev_diag),
    },
  },

};
