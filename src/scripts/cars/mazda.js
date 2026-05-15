export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 800 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 800 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/МКПП Skyactiv', price: '2 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '9 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '11 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '13 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг турбо', price: '16 000 ₽' }],
  stage1_skyactiv:[{ name: 'Прошивка Stage 1', description: 'Skyactiv оптимизация', price: '14 000 ₽' }],
  stage1_rotary:  [{ name: 'Прошивка Stage 1', description: 'Роторный двигатель', price: '20 000 ₽' }],
  stage1_mps:     [{ name: 'Прошивка Stage 1', description: 'Mazda MPS тюнинг', price: '18 000 ₽' }],
  trans_auto:     [{ name: 'Настройка АКПП', description: 'Калибровка автомата', price: '9 000 ₽' }],
  trans_skyactiv: [{ name: 'Настройка Skyactiv-Drive', description: 'Калибровка Skyactiv АКПП', price: '11 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '6 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '8 000 ₽' }],
  dpf_off_full:   [{ name: 'Удаление DPF полное', description: 'DPF + все датчики', price: '10 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '9 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '5 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '4 500 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '3 500 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '4 500 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '7 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '11 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '2 500 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '1 800 ₽' }],
  rotary_tuning:  [{ name: 'Специальный тюнинг', description: 'Роторный двигатель Renesis', price: '22 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const mazdaData = {
  'mazda3': {
    'BK дорест (2003–2006)': {
      '1.6 (Z6)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 MPS (L3-VDT)':             S(servicePresets.stage1_mps, servicePresets.trans_auto, servicePresets.vmax_off, servicePresets.burbles),
    },
    'BK FL (2006–2009)': {
      '1.6 (Z6)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 MPS (L3-VDT)':             S(servicePresets.stage1_mps, servicePresets.trans_auto, servicePresets.vmax_off, servicePresets.burbles),
    },
    'BL дорест (2009–2011)': {
      '1.6 (Z6)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.5 (L5)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 MPS (L3-VDT)':             S(servicePresets.stage1_mps, servicePresets.trans_auto, servicePresets.vmax_off, servicePresets.burbles),
    },
    'BL FL (2011–2013)': {
      '1.6 (Z6)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (PE)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.5 (L5)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'BM дорест (2013–2016)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
    'BM FL (2016–2019)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
    'BP (2019–н.в.)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.0 Skyactiv-X (PE-VPH)':      S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Skyactiv-G (PY-VPTS)':     S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Turbo (PY-VPTS)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.gpf_off, servicePresets.burbles),
    },
  },

  'mazda6': {
    'GG дорест (2002–2005)': {
      '1.8 (L8)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.0 CD (RF)':                  S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off),
    },
    'GG FL (2005–2008)': {
      '1.8 (L8)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.0 CD (RF)':                  S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 MZR-CD (RF7J)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'GH дорест (2007–2010)': {
      '1.8 (L8)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.5 (L5)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.0 MZR-CD (RF)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 MZR-CD (R2)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'GH FL (2010–2012)': {
      '1.8 (L8)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.5 (L5)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.0 MZR-CD (RF)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 MZR-CD (R2)':              S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'GJ дорест (2012–2015)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
    'GJ FL (2015–2018)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
    'GJ 2-й FL (2018–2022)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Turbo (PY-VPTS)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.gpf_off, servicePresets.burbles),
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
  },

  'cx-5': {
    'KE дорест (2011–2015)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.5 Skyactiv (PY)':            S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
    'KE FL (2015–2017)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.5 Skyactiv (PY)':            S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
    'KF дорест (2016–2021)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Turbo (PY-VPTS)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
    'KF FL (2021–н.в.)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Turbo (PY-VPTS)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.gpf_off, servicePresets.burbles),
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
  },

  'cx-7': {
    'ER дорест (2006–2009)': {
      '2.3 Turbo (L3-VDT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.vmax_off),
      '2.5 (L5)':                     S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
    'ER FL (2009–2012)': {
      '2.3 Turbo (L3-VDT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto, servicePresets.vmax_off),
      '2.5 (L5)':                     S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
  },

  'cx-9': {
    'TB дорест (2007–2010)': {
      '3.5 V6 (CA)':                  S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.7 V6 (CA)':                  S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
    'TB FL (2010–2016)': {
      '3.7 V6 (CA)':                  S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.vmax_off),
    },
    'TC (2016–н.в.)': {
      '2.5 Turbo (PY-VPTS)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.gpf_off, servicePresets.vmax_off),
    },
  },

  'cx-30': {
    'DM (2019–н.в.)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.0 Skyactiv-X (PE-VPH)':      S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Skyactiv (PY-VPTS)':       S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '1.8 Skyactiv-D (S8-DPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
  },

  'cx-3': {
    'DK (2015–н.в.)': {
      '1.5 Skyactiv-D (S5-DPTS)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
    },
  },

  'mx-5': {
    'NA (1989–1998)': {
      '1.6 (B6-ZE)':                  S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 (BP-ZE)':                  S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'NB (1998–2005)': {
      '1.6 (B6-ZE)':                  S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 (BP-4W/BP-VE)':            S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'NC (2005–2015)': {
      '1.8 (L8)':                     S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'ND дорест (2015–2018)': {
      '1.5 Skyactiv (P5-VP)':         S(servicePresets.stage1_skyactiv, servicePresets.diagECU),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'ND FL (2018–н.в.)': {
      '1.5 Skyactiv (P5-VPR)':        S(servicePresets.stage1_skyactiv, servicePresets.diagECU, servicePresets.gpf_off),
      '2.0 Skyactiv (PE-VPR)':        S(servicePresets.stage1_skyactiv, servicePresets.diagECU, servicePresets.vmax_off, servicePresets.gpf_off),
    },
  },

  'rx-7': {
    'FC дорест (1985–1989)': {
      '1.3 Turbo (13B-T)':            S(servicePresets.stage1_rotary, servicePresets.diagECU_plus),
    },
    'FC FL (1989–1991)': {
      '1.3 Turbo (13B-T)':            S(servicePresets.stage1_rotary, servicePresets.diagECU_plus),
    },
    'FD дорест (1992–1998)': {
      '1.3 Twin Turbo (13B-REW)':     S(servicePresets.rotary_tuning, servicePresets.diagECU_plus, servicePresets.vmax_off, servicePresets.burbles),
    },
    'FD FL (1999–2002)': {
      '1.3 Twin Turbo (13B-REW)':     S(servicePresets.rotary_tuning, servicePresets.diagECU_plus, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'rx-8': {
    'SE дорест (2003–2008)': {
      '1.3 Renesis (13B-MSP)':        S(servicePresets.rotary_tuning, servicePresets.diagECU_plus, servicePresets.vmax_off),
    },
    'SE FL (2008–2012)': {
      '1.3 Renesis (13B-MSP)':        S(servicePresets.rotary_tuning, servicePresets.diagECU_plus, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'cx-60': {
    'KH (2022–н.в.)': {
      '2.5 Skyactiv (PY-VPTS)':       S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '3.3 Skyactiv-D (S3-DPTR)':     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_full, servicePresets.egr_off, servicePresets.trans_skyactiv),
      '3.3 e-Skyactiv-D PHEV':        S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
  },

  'cx-8': {
    'KG (2017–н.в.)': {
      '2.2 Skyactiv-D (SH-VPTR)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off, servicePresets.trans_skyactiv),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Turbo (PY-VPTS)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.gpf_off),
    },
  },

  'cx-50': {
    'NB (2022–н.в.)': {
      '2.5 Skyactiv (PY-VPTS)':       S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Turbo (PY-VPTS)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.gpf_off, servicePresets.burbles),
    },
  },

  '2': {
    'DY дорест (2002–2005)': {
      '1.4 (FXJA)':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (FYJA)':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DY FL (2005–2007)': {
      '1.4 (FXJA)':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.6 (FYJA)':                   S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DE дорест (2007–2010)': {
      '1.3 (ZJ)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DE FL (2010–2014)': {
      '1.3 (ZJ)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1. 5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DJ дорест (2014–2018)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '1.5 Skyactiv-D (S5-DPTS)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'DJ FL (2018–н.в.)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '1.5 Skyactiv-D (S5-DPTS)':     S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'mpv': {
    'LW дорест (1999–2002)': {
      '2.5 V6 (GY)':                  S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.0 V6 (AJ)':                  S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
    'LW FL (2002–2006)': {
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.trans_auto),
      '3.0 V6 (AJ)':                  S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
  },

  'premacy': {
    'CP дорест (1999–2001)': {
      '1.8 (FP)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (FS)':                     S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'CP FL (2001–2005)': {
      '1.8 (FP)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (FS)':                     S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'CR дорест (2005–2007)': {
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'CR FL (2007–2010)': {
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'CW дорест (2010–2013)': {
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'CW FL (2013–2018)': {
      '2.0 (PE)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
    },
  },

  'tribute': {
    'EP дорест (2000–2004)': {
      '2.0 (YF)':                     S(servicePresets.stage1_na, servicePresets.diagECU),
      '3.0 V6 (AJ)':                  S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
    'EP FL (2004–2008)': {
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '3.0 V6 (AJ)':                  S(servicePresets.stage1_na, servicePresets.trans_auto),
    },
  },

  '5': {
    'CR дорест (2005–2008)': {
      '1.8 (L8)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'CR FL (2008–2010)': {
      '1.8 (L8)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'CW дорест (2010–2013)': {
      '1.8 (L8)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'CW FL (2013–2018)': {
      '2.0 (PE)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.5 Skyactiv (PY)':            S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
    },
  },

  'cx-90': {
    'KX (2023–н.в.)': {
      '3.3 Turbo (S3-DPTR)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.dpf_off_full),
      '3.3 e-Skyactiv-D PHEV':        S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
  },

  'cx-70': {
    'KX (2024–н.в.)': {
      '3.3 Turbo (S3-DPTR)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.dpf_off_full),
      '3.3 e-Skyactiv-D PHEV':        S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
  },

  'biante': {
    'CC дорест (2008–2013)': {
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'CC FL (2013–2018)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
    },
  },

  'atenza': {
    'GG дорест (2002–2005)': {
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'GG FL (2005–2008)': {
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 Turbo (L3-VDT)':           S(servicePresets.stage1_turbo_hi, servicePresets.trans_auto),
    },
    'GH дорест (2007–2010)': {
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.5 (L5)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'GH FL (2010–2012)': {
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.5 (L5)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'GJ дорест (2012–2015)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
    },
    'GJ FL (2015–н.в.)': {
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Skyactiv (PY-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.5 Turbo (PY-VPTS)':          S(servicePresets.stage1_turbo_hi, servicePresets.trans_skyactiv, servicePresets.gpf_off, servicePresets.burbles),
    },
  },

  'axela': {
    'BK дорест (2003–2006)': {
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'BK FL (2006–2009)': {
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.3 (L3)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
    },
    'BL дорест (2009–2013)': {
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagTrans),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
    },
    'BL FL (2013–2019)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
    },
    'BM дорест (2013–2016)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
    },
    'BM FL (2016–2019)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
    },
    'BP (2019–н.в.)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
      '2.0 Skyactiv-X (PE-VPH)':      S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
    },
  },

  'demio': {
    'DW дорест (1996–2000)': {
      '1.3 (B3)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 (B5)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DW FL (2000–2002)': {
      '1.3 (B3)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 (B5)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DY дорест (2002–2005)': {
      '1.3 (ZJ)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DY FL (2005–2007)': {
      '1.3 (ZJ)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DE дорест (2007–2011)': {
      '1.3 (ZJ)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DE FL (2011–2014)': {
      '1.3 (ZJ)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DJ дорест (2014–2019)': {
      '1.3 Skyactiv (P3-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv),
    },
    'DJ FL (2019–н.в.)': {
      '1.5 Skyactiv (P5-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.trans_skyactiv, servicePresets.gpf_off),
    },
  },

  'verisa': {
    'DC дорест (2004–2007)': {
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
    'DC FL (2007–2012)': {
      '1.5 (ZY)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
    },
  },

  'bongo-friendee': {
    'SG дорест (1995–1999)': {
      '2.0 (FE)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.5 V6 (J5)':                  S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'SG FL (1999–2005)': {
      '2.0 (FE)':                     S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.5 V6 (J5)':                  S(servicePresets.stage1_na, servicePresets.diagECU),
    },
  },

  'carol': {
    'HB дорест (1989–1995)': {
      '0.7 (F6A)':                    S(servicePresets.diagECU),
    },
    'HB FL (1995–1998)': {
      '0.7 (F6A)':                    S(servicePresets.diagECU),
    },
    'AC (1998–2004)': {
      '0.7 (K6A)':                    S(servicePresets.diagECU),
    },
    'HB (2004–2009)': {
      '0.7 (K6A)':                    S(servicePresets.diagECU),
    },
    'HB (2009–2014)': {
      '0.7 (R06A)':                   S(servicePresets.diagECU),
    },
    'HB (2014–н.в.)': {
      '0.7 (R06A)':                   S(servicePresets.diagECU),
    },
  },

  'bt-50': {
    'UN дорест (2006–2008)': {
      '2.5 TD (WL-AT)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 TD (WEAT)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'UN FL (2008–2011)': {
      '2.5 TD (WL-AT)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '3.0 TD (WEAT)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'TF дорест (2020–2023)': {
      '1.9 TD (RU9M)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
      '3.0 TD (S3-TC)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
    'TF FL (2023–н.в.)': {
      '1.9 TD (RU9M)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off_full, servicePresets.egr_off),
      '3.0 TD (S3-TC)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_full, servicePresets.egr_off),
    },
  },

  'roadster': {
    'NA (1989–1998)': {
      '1.6 (B6-ZE)':                  S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 (BP-ZE)':                  S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'NB дорест (1998–2000)': {
      '1.6 (B6-ZE)':                  S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 (BP-4W/BP-VE)':            S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'NB FL (2000–2005)': {
      '1.6 (B6-ZE)':                  S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 (BP-4W/BP-VE)':            S(servicePresets.stage1_na, servicePresets.diagECU),
    },
    'NC дорест (2005–2008)': {
      '1.8 (L8)':                     S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'NC FL (2008–2015)': {
      '1.8 (L8)':                     S(servicePresets.stage1_na, servicePresets.diagECU),
      '2.0 (LF)':                     S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'ND дорест (2015–2018)': {
      '1.5 Skyactiv (P5-VP)':         S(servicePresets.stage1_skyactiv, servicePresets.diagECU),
      '2.0 Skyactiv (PE-VPS)':        S(servicePresets.stage1_skyactiv, servicePresets.diagECU, servicePresets.vmax_off),
    },
    'ND FL (2018–н.в.)': {
      '1.5 Skyactiv (P5-VPR)':        S(servicePresets.stage1_skyactiv, servicePresets.diagECU, servicePresets.gpf_off),
      '2.0 Skyactiv (PE-VPR)':        S(servicePresets.stage1_skyactiv, servicePresets.diagECU, servicePresets.vmax_off, servicePresets.gpf_off),
    },
  },
};