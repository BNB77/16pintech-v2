
export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'Проверка АКПП / CVT / DSG', price: '2 500 ₽' }],
  stage1_na_low:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '11 000 ₽' }],
  stage1_na_mid:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '13 000 ₽' }],
  stage1_na_high: [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '15 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Оптимизация турбонаддува', price: '15 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Оптимизация турбонаддува', price: '18 000 ₽' }],
  stage1_perf:    [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '20 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Программное удаление клапана рециркуляции', price: '8 000 ₽' }],
  dpf_off_low:    [{ name: 'Удаление DPF', description: 'Удаление сажевого фильтра', price: '9 000 ₽' }],
  dpf_off_mid:    [{ name: 'Удаление DPF', description: 'Удаление сажевого фильтра', price: '10 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение экологии', price: '12 000 ₽' }],
  cvt_opt:        [{ name: 'Прошивка/оптимизация CVT', description: 'Калибровки и логика работы', price: '18 000 ₽' }],
  cvt_opt_plus:   [{ name: 'Прошивка/оптимизация CVT', description: 'Расширенные калибровки', price: '19 000 ₽' }],
  turbo_diag:     [{ name: 'Диагностика турбины', description: 'Проверка системы турбонаддува', price: '3 000 ₽' }],
  cat_exhaust:    [{ name: 'Выхлоп/катализаторы', description: 'Оптимизация выхлопной системы', price: '12 000 ₽' }],
  battery_bms:    [{ name: 'Диагностика BMS', description: 'Тяговая батарея: ошибки/ресурс', price: '5 000 ₽' }],
  battery_balance:[{ name: 'Баланс/калибровка батареи', description: 'Балансировка ячеек', price: '12 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'Инвертор/Генератор/МСУ', price: '3 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Обновления/сбросы адаптаций', price: '8 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const nissanData = {
  'x-trail': {
    'T30 дорест (2000–2003)': {
      '2.0 бензин (QR20DE)': S(servicePresets.diagECU, servicePresets.stage1_na_mid),
      '2.5 бензин (QR25DE)': S(servicePresets.stage1_na_high, servicePresets.diagECU),
    },
    'T30 рест (2003–2007)': {
      '2.0 бензин (QR20DE)': S(servicePresets.diagECU_plus, servicePresets.stage1_na_mid),
      '2.5 бензин (QR25DE)': S(servicePresets.stage1_na_high, servicePresets.diagECU_plus),
    },
    'T31 дорест (2007–2010)': {
      '2.0 бензин (MR20DE)': S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '2.5 бензин (QR25DE)': S(servicePresets.stage1_na_high, servicePresets.diagECU),
    },
    'T31 рест (2010–2013)': {
      '2.0 бензин (MR20DE)': S(servicePresets.stage1_na_high, servicePresets.diagECU_plus),
      '2.5 бензин (QR25DE)': S(servicePresets.stage1_na_high, servicePresets.diagECU_plus),
    },
    'T32 дорест (2013–2017)': {
      '1.6 дизель (R9M/K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_low),
      '2.0 дизель (M9R)':     S(servicePresets.stage1_turbo_hi, servicePresets.euro2, servicePresets.egr_off, servicePresets.dpf_off_mid, servicePresets.diagECU),
      '2.5 бензин CVT (QR25DE)': S(servicePresets.cvt_opt, servicePresets.diagTrans),
    },
    'T32 рест (2017–2022)': {
      '1.6 дизель (R9M/K9K)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
      '1.7 дизель (R9N)':     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      '2.0 дизель (M9R)':     S(servicePresets.stage1_turbo_hi, servicePresets.euro2, servicePresets.egr_off, servicePresets.dpf_off_mid),
      '2.5 бензин CVT (QR25DE)': S(servicePresets.cvt_opt_plus, servicePresets.diagTrans),
    },
    'T33 (2021–н.в.)': {
      '1.3 турбо (HR13DDT)': S(servicePresets.stage1_turbo_hi, servicePresets.diagECU_plus),
      '1.5 дизель (нов.)':   S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      '1.5 VC-Turbo (KR15)': S(servicePresets.stage1_perf, servicePresets.diagECU_plus),
      'e-Power (гибрид)':    S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'qashqai': {
    'J10 дорест (2006/2007–2010)': {
      '1.6 бензин (HR16DE)': S(servicePresets.diagECU, servicePresets.stage1_na_low),
      '2.0 бензин (MR20DE)': S(servicePresets.stage1_na_mid, servicePresets.diagTrans),
      '1.5 дизель (K9K)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off_low),
    },
    'J10 рест (2010–2013)': {
      '1.6 бензин (HR16DE)': S(servicePresets.stage1_na_low, servicePresets.egr_off),
      '1.5 дизель (K9K)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off_low),
      '2.0 бензин (MR20DE)': S(servicePresets.stage1_na_mid, servicePresets.diagECU_plus),
    },
    'J11 дорест (2013–2017)': {
      '1.2 турбо (HR12DDT)': S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 бензин (HR16DE)': S(servicePresets.stage1_na_mid, servicePresets.egr_off),
      '1.5 дизель (K9K)':    S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
    },
    'J11 рест (2017–2021)': {
      '1.3 турбо (HR13DDT)': S(servicePresets.stage1_turbo_hi, servicePresets.diagECU_plus),
      '1.5 дизель (K9K)':    S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      '2.0 бензин (MR20DE)': S(servicePresets.stage1_na_high, servicePresets.diagTrans),
    },
  },

  'juke': {
    'F15 дорест (2010–2014)': {
      '1.6 бензин (HR16DE)':    S(servicePresets.diagECU, servicePresets.stage1_na_low),
      '1.6 турбо (MR16DDT)':    S(servicePresets.stage1_turbo_hi, servicePresets.turbo_diag),
      '1.5 дизель (K9K)':       S(servicePresets.stage1_turbo, servicePresets.dpf_off_low),
    },
    'F15 рест (2014–2018)': {
      '1.2 турбо (HR12DDR)':    S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '1.6 бензин (HR16DE)':    S(servicePresets.stage1_na_low, servicePresets.egr_off),
      '1.6 турбо (MR16DDT)':    S(servicePresets.stage1_turbo_hi, servicePresets.turbo_diag),
      '1.5 дизель (K9K)':       S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
    },
  },

  'patrol': {
    'Y60/GQ (1987–1997)': {
      '4.2 бензин (TB42E/TB42S)': S(servicePresets.diagECU_plus, servicePresets.stage1_na_high),
      '4.2 дизель (TD42)':        S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'Y61/GU (1997–2013)': {
      '4.8 бензин (TB48DE)':      S(servicePresets.diagECU_plus, servicePresets.stage1_perf),
      '3.0 дизель (ZD30)':        S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      '2.8 дизель (RD28T)':       S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'Y62 (2010–н.в., РФ поставки/импорт)': {
      '5.6 бензин (VK56VD)':      S(servicePresets.stage1_perf, servicePresets.cat_exhaust),
    },
  },

  'leaf': {
    'ZE0 (2010–2017)': {
      'электромотор 80–110 кВт': S(servicePresets.battery_bms, servicePresets.battery_balance),
    },
    'ZE1 дорест (2017/2018–2019)': {
      'электромотор 110–160 кВт': S(servicePresets.battery_bms, servicePresets.battery_balance),
    },
    'ZE1 рест (2019–н.в.)': {
      'электромотор до 160 кВт (e+)': S(servicePresets.battery_bms, servicePresets.battery_balance),
    },
  },

  '370z': {
    'Z34 дорест (2009–2013)': {
      '3.7 бензин (VQ37VHR)': S(servicePresets.diagECU_plus, servicePresets.stage1_perf),
    },
    'Z34 рест (2013–н.в.)': {
      '3.7 бензин (VQ37VHR)': S(servicePresets.stage1_perf, servicePresets.cat_exhaust),
    },
  },

  'almera': {
    'N16 (2000–2006)': {
      '1.5 бензин (QG15DE)': S(servicePresets.diagECU, servicePresets.stage1_na_low),
      '1.8 бензин (QG18DE)': S(servicePresets.stage1_na_mid, servicePresets.diagECU),
    },
    'B10 Classic (2006–2012)': {
      '1.6 бензин (QG16DE)': S(servicePresets.stage1_na_low, servicePresets.diagECU),
    },
    'G15 (2013–2019, РФ)': {
      '1.6 бензин (HR16DE)': S(servicePresets.stage1_na_low, servicePresets.diagECU),
    },
  },

  'almera classic': {
    'B10 Classic (2006–2012)': {
      '1.6 бензин (QG16DE)': S(servicePresets.stage1_na_low, servicePresets.diagECU),
    },
  },

  'almera tino': {
    'V10 (2000–2006)': {
      '1.8 бензин (QG18DE)': S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '2.0 бензин (QR20DE)': S(servicePresets.stage1_na_mid, servicePresets.diagECU),
    },
  },

  'altima': {
    'L32 (2007–2012, ввоз)': {
      '2.5 бензин (QR25DE)': S(servicePresets.stage1_na_high, servicePresets.diagECU),
      '3.5 бензин (VQ35DE)': S(servicePresets.stage1_perf, servicePresets.cat_exhaust),
    },
    'L33 (2012–2018, ввоз)': {
      '2.5 бензин (QR25DE)': S(servicePresets.stage1_na_high, servicePresets.diagECU),
    },
  },

  'ariya': {
    'FE0 (2022–н.в.)': {
      'EV 160–290 кВт (FWD/AWD)': S(servicePresets.battery_bms, servicePresets.battery_balance),
    },
  },

  'armada': {
    'Y62 (2016–н.в., параллельный импорт)': {
      '5.6 бензин (VK56VD)': S(servicePresets.stage1_perf, servicePresets.cat_exhaust),
    },
  },

  'avenir': {
    'W10/W11 (1995–2005, JDM)': {
      '1.8 бензин (QG18DE)': S(servicePresets.stage1_na_mid, servicePresets.diagECU),
      '2.0 бензин (SR20DE/DET)': S(servicePresets.stage1_perf, servicePresets.turbo_diag),
    },
  },

  'bassara': {
    'JU30 (1999–2003, JDM)': {
      '2.5 бензин (VQ25DE)': S(servicePresets.stage1_na_high, servicePresets.diagECU),
      '3.0 бензин (VQ30DE)': S(servicePresets.stage1_perf, servicePresets.diagECU),
    },
  },

  'be-1': {
    'BK10 (1987–1988, JDM)': {
      '1.0 бензин (MA10S)': S(servicePresets.diagECU),
    },
  },

  'bluebird': {
    'U14 (1996–2001)': {
      '1.8 бензин (QG18DE)': S(servicePresets.stage1_na_mid),
      '2.0 бензин (SR20DE)': S(servicePresets.stage1_na_high),
    },
    'G10 Sylphy/Bluebird Sylphy (2000–2005)': {
      '1.5/1.8 (QG15/QG18)': S(servicePresets.stage1_na_low),
    },
  },

  'bluebird maxima': {
    'J30 (1988–1994)': {
      '3.0 бензин (VG30E)': S(servicePresets.stage1_na_mid),
    },
  },

  'cedric': {
    'Y34 (1999–2004)': {
      '2.5 бензин (VQ25DE)': S(servicePresets.stage1_na_high),
      '3.0 бензин (VQ30DET/DE)': S(servicePresets.stage1_perf),
    },
  },

  'gloria': {
    'Y34 (1999–2004)': {
      '2.5 бензин (VQ25DE)': S(servicePresets.stage1_na_high),
      '3.0 бензин (VQ30DET/DE)': S(servicePresets.stage1_perf),
    },
  },

  'cube': {
    'Z11 (2002–2008)': {
      '1.4/1.5 бензин (CR14/HR15)': S(servicePresets.stage1_na_low),
    },
    'Z12 (2008–2019)': {
      '1.5 бензин (HR15DE)': S(servicePresets.stage1_na_low),
    },
  },

  'datsun on-do': {
    'B10 (2014–2020, РФ)': {
      '1.6 бензин (VAZ-21129/11186)': S(servicePresets.stage1_na_low, servicePresets.diagECU),
    },
  },

  'datsun mi-do': {
    'B20 (2014–2020, РФ)': {
      '1.6 бензин (VAZ-21127/21129)': S(servicePresets.stage1_na_low, servicePresets.diagECU),
    },
  },

  'fairlady z': {
    'Z33 (2002–2008)': {
      '3.5 бензин (VQ35DE/HR)': S(servicePresets.stage1_perf, servicePresets.cat_exhaust),
    },
    'Z34 (см. 370Z)': {},
  },

  '350z': {
    'Z33 (2002–2008)': {
      '3.5 бензин (VQ35DE/HR)': S(servicePresets.stage1_perf, servicePresets.cat_exhaust),
    },
  },

  'gt-r': {
    'R35 (2007–н.в.)': {
      '3.8 битурбо (VR38DETT)': S(servicePresets.stage1_perf, servicePresets.turbo_diag, servicePresets.cat_exhaust),
    },
  },

  'kicks': {
    'P15 (2016–н.в., ввоз)': {
      '1.6 бензин (HR16DE)': S(servicePresets.stage1_na_low),
      'e-Power (JDM/ввоз)':  S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'livina': {
    'L10 (2007–2013)': {
      '1.6 бензин (HR16DE)': S(servicePresets.stage1_na_low),
    },
  },

  'maxima': {
    'A33 (2000–2006)': {
      '2.0 бензин (VQ20DE)': S(servicePresets.stage1_na_mid),
      '3.0 бензин (VQ30DE)': S(servicePresets.stage1_perf),
    },
    'A34/Teana J31 (см. teana)': {},
  },

  'micra': {
    'K11 (1992–2002)': {
      '1.0/1.3 бензин (CG)':   S(servicePresets.stage1_na_low),
    },
    'K12 (2002–2010)': {
      '1.2/1.4/1.6 (CR12/HR16)': S(servicePresets.stage1_na_low),
    },
    'K13 (2010–2016)': {
      '1.2 бензин (HR12DE)':      S(servicePresets.stage1_na_low),
      '1.2 DIG-S (HR12DDR)':      S(servicePresets.stage1_turbo),
    },
  },

  'march': {
    'K11/K12/K13 (JDM)': {
      '1.0–1.5 бензин': S(servicePresets.stage1_na_low),
    },
  },

  'murano': {
    'Z50 (2002–2007)': {
      '3.5 бензин (VQ35DE) + CVT': S(servicePresets.stage1_perf, servicePresets.cvt_opt, servicePresets.diagTrans),
    },
    'Z51 (2008–2015)': {
      '3.5 бензин (VQ35DE) + CVT': S(servicePresets.stage1_perf, servicePresets.cvt_opt_plus, servicePresets.diagTrans),
    },
    'Z52 (2015–н.в.)': {
      '3.5 бензин (VQ35DE) + CVT': S(servicePresets.stage1_perf, servicePresets.cvt_opt_plus, servicePresets.diagTrans),
    },
  },

  'navara': {
    'D40 (2005–2015)': {
      '2.5 дизель (YD25DDTi)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      '4.0 бензин (VQ40DE)':   S(servicePresets.stage1_perf),
    },
    'D23/NP300 (2014–н.в., ввоз)': {
      '2.3 дизель (YS23DDT/DDTT)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
    },
  },

  'terrano': {
    'R20 (1993–2006, ввоз)': {
      '2.7 дизель (TD27)':  S(servicePresets.stage1_turbo, servicePresets.dpf_off_low),
      '3.0 дизель (ZD30)':  S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
    },
    'D10 (2014–2020, на базе Duster)': {
      '1.6 бензин (H4M)':   S(servicePresets.stage1_na_low),
      '2.0 бензин (F4R)':   S(servicePresets.stage1_na_mid),
    },
  },

  'note': {
    'E11 (2005–2013)': {
      '1.4/1.6 бензин (HR14/HR16)': S(servicePresets.stage1_na_low),
      '1.5 дизель (K9K)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off_low),
    },
    'E12 дорест (2012–2016)': {
      '1.2 бензин (HR12DE)':            S(servicePresets.stage1_na_low),
      '1.2 компрессор (HR12DDR DIG-S)': S(servicePresets.stage1_turbo),
      'e-Power (JDM/ввоз)':             S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'E12 рест (2016–2020)': {
      '1.2 бензин (HR12DE)':            S(servicePresets.stage1_na_low),
      '1.2 компрессор (HR12DDR DIG-S)': S(servicePresets.stage1_turbo),
      'e-Power (JDM/ввоз)':             S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'pathfinder': {
    'R50 (1995–2004)': {
      '3.3/3.5 бензин (VG33E/VQ35DE)': S(servicePresets.stage1_na_mid),
      '2.5 дизель (YD25)':              S(servicePresets.stage1_turbo),
    },
    'R51 дорест (2005–2009)': {
      '2.5 дизель (YD25)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      '4.0 бензин (VQ40DE)': S(servicePresets.stage1_perf),
      '3.0 дизель (V9X)':    S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
    },
    'R51 рест (2010–2012)': {
      '2.5 дизель (YD25 обновл.)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      '4.0 бензин (VQ40DE)':       S(servicePresets.stage1_perf),
      '3.0 дизель (V9X)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
    },
    'R52 (2012–2020)': {
      '3.5 бензин (VQ35DE) + CVT': S(servicePresets.stage1_perf, servicePresets.cvt_opt),
      'гибрид 2.5 + электромотор': S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'R53 (2021–н.в., ввоз)': {
      '3.5 бензин (VQ35DD) 9AT':   S(servicePresets.stage1_perf),
    },
  },

  'primera': {
    'P11 дорест (1995–1999)': {
      '1.6/1.8/2.0 бензин (GA/SR)': S(servicePresets.stage1_na_low),
      '2.0 дизель (CD20)':          S(servicePresets.stage1_turbo),
    },
    'P11-144 рест (1999–2001)': {
      '1.6/1.8/2.0 бензин (GA/SR)': S(servicePresets.stage1_na_low),
      '2.0 дизель (CD20)':          S(servicePresets.stage1_turbo),
    },
    'P12 (2001–2007)': {
      '1.6/1.8/2.0 бензин (QG/SR/QR)': S(servicePresets.stage1_na_mid),
      '2.2 дизель (YD22)':              S(servicePresets.stage1_turbo),
    },
  },

  'skyline': {
    'V35/V36 (2001–2014, ввоз)': {
      '2.5/3.5 бензин (VQ25/VQ35)': S(servicePresets.stage1_perf),
      '3.7 бензин (VQ37)':          S(servicePresets.stage1_perf),
    },
  },

  'sentra': {
    'B17 (2014–2018, РФ)': {
      '1.6 бензин (HR16DE)': S(servicePresets.stage1_na_low, servicePresets.diagECU),
    },
  },

  'teana': {
    'J31 (2003–2008)': {
      '2.3/2.5/3.5 бензин (VQ-series)': S(servicePresets.stage1_perf),
    },
    'J32 (2008–2013)': {
      '2.5/3.5 бензин (VQ25/35) CVT': S(servicePresets.stage1_perf, servicePresets.cvt_opt),
    },
    'L33 (2014–2020, РФ)': {
      '2.5 бензин (QR25DE) CVT': S(servicePresets.stage1_na_high, servicePresets.cvt_opt_plus),
    },
  },

  'tiida': {
    'C11 (2004–2013)': {
      '1.6/1.8 бензин (HR/QG)': S(servicePresets.stage1_na_low),
    },
    'C13 (2015–2018, ввоз)': {
      '1.6 бензин (HR16DE)': S(servicePresets.stage1_na_low),
    },
  },

  'versa': {
    'N17 (2011–2019, ввоз)': {
      '1.6 бензин (HR16DE)': S(servicePresets.stage1_na_low),
    },
  },

  'wingroad': {
    'Y11 (1999–2005)': {
      '1.5/1.8 бензин (QG)': S(servicePresets.stage1_na_low),
    },
    'Y12 (2005–2018)': {
      '1.5/1.8 бензин (HR/QG)': S(servicePresets.stage1_na_low),
    },
  },

  'ad': {
    'Y11/Y12 (2006–н.в.)': {
      '1.3/1.5/1.6 бензин (HR/QG)': S(servicePresets.stage1_na_low),
      '1.5 дизель (K9K, редк.)':     S(servicePresets.stage1_turbo),
    },
  },
};  