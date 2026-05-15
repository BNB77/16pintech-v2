
export const servicePresets = {
  // Диагностика
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика, Uconnect/модули', price: '2 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'A604/41TE, 42LE, 62TE, 845RE/8HP, 9HP', price: '2 500 ₽' }],

  // Stage / моторы
  stage1_na:      [{ name: 'Stage 1 (атмо)', description: 'Оптимизация атмосферного (2.4 GEMA/Tigershark, 3.6 Pentastar)', price: '12 000 ₽' }],
  stage1_hemi:    [{ name: 'Stage 1 (HEMI)', description: 'Тюнинг HEMI 5.7/6.1/6.4 (MDS учтён)', price: '18 000 ₽' }],
  stage1_turbo:   [{ name: 'Stage 1 Turbo', description: 'Тюнинг турбо (PT 2.4T и др.)', price: '15 000 ₽' }],

  // АКПП
  trans_41te:     [{ name: 'Настройка 41TE/A604', description: 'Адаптации, давления, соленоид‑пакет', price: '8 000 ₽' }],
  trans_42le:     [{ name: 'Настройка 42LE', description: 'Адаптации, обновления TCM', price: '8 000 ₽' }],
  trans_62te:     [{ name: 'Настройка 62TE', description: 'Minivan/200/Avenger — адаптации', price: '10 000 ₽' }],
  trans_8hp:      [{ name: 'Настройка 845RE/8HP', description: 'Chrysler 300/300C 3.6/5.7 — ZF8', price: '12 000 ₽' }],
  trans_9hp:      [{ name: 'Настройка 9HP (ZF9)', description: '200/Пасифика — адаптации/обновления', price: '12 000 ₽' }],

  // Экология и лимиты
  egr_off:        [{ name: 'Отключение EGR', description: 'Для дизелей (VM Motori) и части бензиновых', price: '7 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Для дизелей (Grand Voyager EU)', price: '9 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Если установлен', price: '10 000 ₽' }],
  vmax_off:       [{ name: 'Снятие Vmax', description: 'Разблокировка ограничителя скорости', price: '6 000 ₽' }],
  mds_off:        [{ name: 'Отключение MDS', description: 'Деактивация цилиндров на HEMI', price: '6 000 ₽' }],

  // Электрика/функции
  uconnect_code:  [{ name: 'Кодирование Uconnect', description: 'Разблокировка функций/CarPlay/камера', price: '5 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок (по запросу)', price: '3 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const chryslerData = {
  '300 / 300C (LX/LD)': {
    'LX дорест (2004–2011)': {
      '2.7 V6 (EER)':           S(servicePresets.stage1_na, servicePresets.trans_42le, servicePresets.diagECU),
      '3.5 V6 (EGG/EGE)':       S(servicePresets.stage1_na, servicePresets.trans_42le, servicePresets.diagECU),
      '5.7 HEMI (EZB)':         S(servicePresets.stage1_hemi, servicePresets.mds_off, servicePresets.diagECU),
      '6.1 SRT8 HEMI':          S(servicePresets.stage1_hemi, servicePresets.vmax_off),
      '3.0 CRD (OM642 EU)':     S(servicePresets.stage1_na, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'LD дорест (2011–2014)': {
      '3.6 Pentastar':          S(servicePresets.stage1_na, servicePresets.trans_8hp, servicePresets.uconnect_code),
      '5.7 HEMI MDS':           S(servicePresets.stage1_hemi, servicePresets.mds_off, servicePresets.trans_8hp),
      '3.0 CRD (OM642 EU)':     S(servicePresets.stage1_na, servicePresets.dpf_off, servicePresets.trans_8hp),
    },
    'LD FL (2015–н.в.)': {
      '3.6 Pentastar (845RE/8HP)': S(servicePresets.stage1_na, servicePresets.trans_8hp, servicePresets.uconnect_code),
      '5.7 HEMI MDS (8HP70)':      S(servicePresets.stage1_hemi, servicePresets.mds_off, servicePresets.trans_8hp),
      'SRT 6.4 HEMI (EU/ME)':      S(servicePresets.stage1_hemi, servicePresets.vmax_off, servicePresets.trans_8hp),
    },
  },

  '200 (JS → UF)': {
    'JS (2010–2014) рестайл': {
      '2.4 World I4 (ED3)':     S(servicePresets.stage1_na, servicePresets.trans_62te),
      '3.6 Pentastar (EDV)':    S(servicePresets.stage1_na, servicePresets.trans_62te),
    },
    'UF (2014–2017)': {
      '2.4 Tigershark MultiAir':S(servicePresets.stage1_na, servicePresets.trans_9hp, servicePresets.uconnect_code),
      '3.6 Pentastar (9HP/62TE)':S(servicePresets.stage1_na, servicePresets.trans_9hp),
    },
  },

  'sebring (JR → JS)': {
    'JR (2000–2006)': {
      '2.4 (EDZ)':              S(servicePresets.stage1_na, servicePresets.trans_41te),
      '2.7 V6 (EER)':           S(servicePresets.stage1_na, servicePresets.trans_41te),
      '3.0 V6 (6G72)':          S(servicePresets.stage1_na, servicePresets.trans_41te),
    },
    'JS (2007–2010)': {
      '2.0/2.4 World I4':       S(servicePresets.stage1_na, servicePresets.trans_41te),
      '2.7/3.5 V6':             S(servicePresets.stage1_na, servicePresets.trans_62te),
    },
  },

  'pt cruiser (PT)': {
    'дорест (2000–2005)': {
      '2.0/2.4 NA':             S(servicePresets.stage1_na, servicePresets.trans_41te),
      '2.4 Turbo (GT/SRT‑4 base)': S(servicePresets.stage1_turbo, servicePresets.trans_41te),
      '2.2 CRD (VM Motori)':     S(servicePresets.stage1_na, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'FL (2006–2010)': {
      '2.4 NA / 2.4 Turbo':      S(servicePresets.stage1_na, servicePresets.stage1_turbo, servicePresets.trans_41te),
    },
  },

  'concorde / lhs / 300M (LH)': {
    'LH дорест (1998–2001)': {
      '2.7/3.2/3.5 V6':         S(servicePresets.stage1_na, servicePresets.trans_42le),
    },
    'LH FL (2002–2004)': {
      '2.7/3.5 V6':             S(servicePresets.stage1_na, servicePresets.trans_42le),
      '300M Special 3.5 HO':    S(servicePresets.stage1_na, servicePresets.trans_42le, servicePresets.vmax_off),
    },
  },

  'new yorker / fifth avenue': {
    'Y‑platform (1989–1993)': {
      '3.3/3.8 V6 (EGA/EGH)':   S(servicePresets.stage1_na, servicePresets.trans_41te),
    },
  },

  'pacifica': {
    'CS (2004–2008)': {
      '3.5/4.0 V6':             S(servicePresets.stage1_na, servicePresets.trans_62te),
    },
    'RU (2017–н.в.)': {
      '3.6 Pentastar + 9HP':    S(servicePresets.stage1_na, servicePresets.trans_9hp, servicePresets.uconnect_code),
      '3.6 PHEV eHybrid':       S(servicePresets.stage1_na, servicePresets.trans_9hp, servicePresets.uconnect_code),
    },
  },

  'aspen (DN, 2007–2009)': {
    'одно поколение': {
      '4.7/5.7 HEMI (MDS)':     S(servicePresets.stage1_hemi, servicePresets.mds_off),
    },
  },

  'voyager / grand voyager / town & country': {
    'RS (2001–2007)': {
      '2.4/3.3/3.8 V6':         S(servicePresets.stage1_na, servicePresets.trans_41te),
      '2.8 CRD (EU)':           S(servicePresets.stage1_na, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'RT (2008–2016)': {
      '3.3/3.8/4.0 V6':         S(servicePresets.stage1_na, servicePresets.trans_62te),
      '3.6 Pentastar':          S(servicePresets.stage1_na, servicePresets.trans_62te),
      '2.8 CRD (EU)':           S(servicePresets.stage1_na, servicePresets.dpf_off),
    },
    'RU (2016–н.в.) Pacifica‑base': {
      'см. Pacifica RU':        S(),
    },
  },

  'crossfire (ZB)': {
    '2003–2008': {
      '3.2 V6 (M112)':          S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.2 SRT‑6 Supercharged': S(servicePresets.stage1_turbo, servicePresets.vmax_off),
    },
  },

  'neon (EU)': { 'см. Dodge/Chrysler Neon для ряда рынков (PL)': S() },
  'intrepid': { 'см. LH‑платформу (Concorde/300M)': S() },
  'stratus':  { 'см. Sebring JS (евро‑рынок)': S() },
};
