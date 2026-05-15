export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'S-tronic/Tiptronic/DSG/ZF8/AL552', price: '3 000 ₽' }],
  stage1_na_low:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '12 000 ₽' }],
  stage1_na_mid:  [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '14 000 ₽' }],
  stage1_na_high: [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '16 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Оптимизация TFSI/TDI (турбо)', price: '18 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг турбо', price: '22 000 ₽' }],
  stage1_perf:    [{ name: 'Прошивка Stage 1', description: 'Тюнинг для S/RS/V8/V10', price: '28 000 ₽' }],
  tcu_s_tronic:   [{ name: 'Настройка TCU S‑tronic/DSG', description: 'Линии давления/лампы/логика', price: '15 000 ₽' }],
  tcu_zf8:        [{ name: 'Настройка TCU ZF8/Tiptronic', description: 'Shift map/Lock‑up/Launch', price: '15 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Программное удаление EGR', price: '9 000 ₽' }],
  dpf_off_low:    [{ name: 'Удаление DPF', description: 'Удаление сажевого фильтра', price: '10 000 ₽' }],
  dpf_off_mid:    [{ name: 'Удаление DPF', description: 'Удаление сажевого фильтра', price: '12 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых (трек)', price: '14 000 ₽' }],
  cat_exhaust:    [{ name: 'Выхлоп/катализаторы', description: 'Даунпайпы/катколлекторы/спорт', price: '18 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение экологии (трек)', price: '14 000 ₽' }],
  battery_bms:    [{ name: 'Диагностика HV/12V', description: 'Проверка HV батареи/активаций', price: '5 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'PHEV/HEV инвертор/МКС', price: '4 000 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '9 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничителя скорости', description: 'V-max off (250+ км/ч)', price: '8 000 ₽' }],
  burbles:        [{ name: 'Burbles/Pops&Bangs', description: 'Звуковые хлопки выхлопа', price: '12 000 ₽' }],
  coding:         [{ name: 'Кодирование ЭБУ', description: 'Активация скрытых функций', price: '5 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const audiData = {

  'a1': {
    '8X дорест (2010–2014)': {
      '1.2 TFSI (CBZA/CBZB)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.diagTrans),
      '1.4 TFSI (CAXA/CETA)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.diagTrans),
      '1.6 TDI (CAYB/CAYC)':  S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_low, servicePresets.diagECU, servicePresets.euro2, servicePresets.diagTrans),
    },
    '8X рест (2014–2018)': {
      '1.0 TFSI (CHYA)':      S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.diagTrans),
      '1.4 TFSI (CZEA/CZCA)': S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.diagTrans),
      '1.8 TFSI (CJSA)':      S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.diagTrans),
    },
    'GB (2018–н.в.)': {
      '1.0 TFSI (DKLA/DVLA)': S(servicePresets.stage1_turbo, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.diagTrans),
      '1.5 TFSI (DADA/DVPA)': S(servicePresets.stage1_turbo, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.diagTrans),
      '2.0 TFSI (DKZA)':      S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.diagTrans),
      'citycarver 1.0/1.5 TFSI': S(servicePresets.stage1_turbo, servicePresets.gpf_off, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.diagTrans),
    },
  },

  'a3': {
    '8P дорест (2003–2008)': {
      '1.6 MPI (BSE/BSF/BGU)': S(servicePresets.stage1_na_low),
      '1.4/1.8 TFSI (CAXA/BYU)': S(servicePresets.stage1_turbo),
      '2.0 TFSI (AXX/BWA/BPY)': S(servicePresets.stage1_turbo_hi),
      '2.0 TDI (BKD/BMM/BKP)': S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_low),
      'S3 2.0 TFSI (BHZ/BYJ)': S(servicePresets.stage1_perf),
    },
    '8P рест (2008–2012)': {
      '1.2/1.4 TFSI (CBZA/CAXA)': S(servicePresets.stage1_turbo),
      '1.8/2.0 TFSI (CDAA/CAWB/CCZA)': S(servicePresets.stage1_turbo_hi),
      '2.0 TDI (CBAA/CBBB/CFFB)': S(servicePresets.stage1_turbo, servicePresets.egr_off, servicePresets.dpf_off_low),
      'S3 2.0 TFSI (CDLA/CDLB)':  S(servicePresets.stage1_perf),
      'RS3 2.5 TFSI (CEPA)':      S(servicePresets.stage1_perf),
    },
    '8V дорест (2012–2016)': {
      '1.4/1.8 TFSI (CMBA/CPMA/CZEA)': S(servicePresets.stage1_turbo),
      '2.0 TFSI (CHHB/CNCD)':          S(servicePresets.stage1_turbo_hi),
      '2.0 TDI (CRLB/CUNA)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
      'S3 2.0 TFSI (CJXC/CJXG)':       S(servicePresets.stage1_perf),
    },
    '8V рест (2016–2020)': {
      '1.5 TFSI (DADA)':               S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '2.0 TFSI (DKZA/DKTB/DNWA)':     S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.0 TDI (DFGA/DLUB)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
      'S3 2.0 TFSI (DJHA)':            S(servicePresets.stage1_perf, servicePresets.gpf_off),
      'RS3 2.5 TFSI (DAZA/DNWA)':      S(servicePresets.stage1_perf, servicePresets.gpf_off),
    },
    '8Y (2020–н.в.)': {
      '1.0/1.5 TFSI (DKLA/DVLA/DADA)': S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '2.0 TFSI (DKTC/DVVA)':          S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.0 TDI (DFGA/DVPE)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
      'S3 2.0 TFSI (DNUE)':            S(servicePresets.stage1_perf, servicePresets.gpf_off),
      'RS3 2.5 TFSI (DNWA/DWNA)':      S(servicePresets.stage1_perf, servicePresets.gpf_off),
      'Sedan/Cabrio/Sportback':        S(), // кузова — общие услуги
    },
  },

  'a4': {
    'B6 (2000–2004)': {
      '1.8T (AVJ/BFB)':        S(servicePresets.stage1_turbo),
      '3.0 V6 (ASN/BBJ)':      S(servicePresets.stage1_na_mid),
      '1.9 TDI (AVF/AWX/BKE)': S(servicePresets.stage1_turbo, servicePresets.egr_off),
    },
    'B7 (2004–2008)': {
      '2.0T FSI (BGB/BWE/BWT)': S(servicePresets.stage1_turbo_hi),
      '3.2 FSI (BKH/BPJ)':      S(servicePresets.stage1_na_high),
      '2.0 TDI (BKP/BRE/BRD)':  S(servicePresets.stage1_turbo, servicePresets.dpf_off_low),
      'RS4 4.2 FSI (BNS)':      S(servicePresets.stage1_perf),
    },
    'B8 дорест (2008–2011)': {
      '1.8/2.0 TFSI (CDHB/CAEA/CAEB)': S(servicePresets.stage1_turbo_hi),
      '3.0 TDI (CCWA/CCWB)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S4 3.0 TFSI (CCBA)':            S(servicePresets.stage1_perf),
    },
    'B8 рест (2011–2015)': {
      '1.8/2.0 TFSI (CJSA/CNCD/CPMA)': S(servicePresets.stage1_turbo_hi),
      '3.0 TDI (CAMA/CJGA)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S4 3.0 TFSI (CREC)':            S(servicePresets.stage1_perf),
    },
    'B9 дорест (2015–2019)': {
      '1.4/2.0 TFSI (CZEA/DNVB/DNWA)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '3.0 TDI (DEUA/DETA)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S4 3.0 TFSI (CWGD)':            S(servicePresets.stage1_perf, servicePresets.tcu_zf8),
      'RS4 2.9 TFSI (DECA)':           S(servicePresets.stage1_perf, servicePresets.gpf_off),
      'Avant/Allroad кузова':          S(),
    },
    'B9 рест (2019–н.в.)': {
      '2.0 TFSI (DPVA/DVVA/DVKA)':     S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      'S4 3.0 TDI (DPAA/DPUA)':        S(servicePresets.stage1_perf, servicePresets.dpf_off_mid, servicePresets.tcu_zf8),
      'RS4 2.9 TFSI (DECA/DWNA)':      S(servicePresets.stage1_perf, servicePresets.gpf_off),
    },
    'a4 avant (B8/B9)': {
      'см. моторы A4 соответствующего поколения': S(),
    },
    'a4 allroad (B8/B9)': {
      '2.0/3.0 TDI/TFSI': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
    },
  },

  'a5': {
    '8T дорест (2007–2011)': {
      '1.8/2.0 TFSI (CDHB/CAEA)': S(servicePresets.stage1_turbo_hi),
      '3.0 TDI (CCWA)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S5 4.2 FSI (CAUA)':        S(servicePresets.stage1_perf),
      'Sportback/Cabrio/Coupe':   S(),
    },
    '8T рест (2011–2016)': {
      '1.8/2.0 TFSI (CJEB/CNCD)': S(servicePresets.stage1_turbo_hi),
      '3.0 TDI (CLAB/CNRB)':      S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S5 3.0 TFSI (CREC)':       S(servicePresets.stage1_perf),
      'RS5 4.2 FSI (CFSA)':       S(servicePresets.stage1_perf),
    },
    'F5 дорест (2016–2019)': {
      '2.0 TFSI (DAXB/DNVB)':     S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '3.0 TDI (DETA/DEUA)':      S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S5 3.0 TFSI (CWGD)':       S(servicePresets.stage1_perf, servicePresets.tcu_zf8),
      'RS5 2.9 TFSI (DECA)':      S(servicePresets.stage1_perf, servicePresets.gpf_off),
      'Sportback/Cabrio/Coupe':   S(),
    },
    'F5 рест (2019–н.в.)': {
      '2.0 TFSI (DPVA/DVVA)':     S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      'S5 3.0 TDI (DPCF)':        S(servicePresets.stage1_perf, servicePresets.dpf_off_mid),
      'RS5 2.9 TFSI (DECA/DWNA)': S(servicePresets.stage1_perf, servicePresets.gpf_off),
    },
  },

  'a6': {
    'C5 (1997–2004)': {
      '1.8T/2.7T (AEB/APB/AJK)': S(servicePresets.stage1_turbo_hi),
      '2.4/2.8/3.0 V6 (ALF/ACK/BBJ)': S(servicePresets.stage1_na_mid),
      '1.9/2.5 TDI (AFN/AYM/BDH)':    S(servicePresets.stage1_turbo, servicePresets.egr_off),
      'RS6 4.2T (BCY)':               S(servicePresets.stage1_perf),
    },
    'C6 (2004–2011)': {
      '2.0T/2.8/3.2 FSI (BGB/BDX/BKH)': S(servicePresets.stage1_turbo, servicePresets.stage1_na_mid),
      '2.7/3.0 TDI (BPP/BMK/ASB)':     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S6 5.2 V10 FSI (BXA/BRV)':      S(servicePresets.stage1_perf),
      'RS6 5.0 V10 TFSI (BUH/BTU)':    S(servicePresets.stage1_perf),
      'Avant/Allroad':                 S(),
    },
    'C7 дорест (2011–2014)': {
      '1.8/2.0 TFSI (CJSA/CMBA/CPMA)': S(servicePresets.stage1_turbo_hi),
      '2.0/3.0 TDI (CGLC/CJGD/CRTE)':  S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S6 4.0 TFSI (CGWB)':            S(servicePresets.stage1_perf),
      'RS6 4.0 TFSI (CTGE)':           S(servicePresets.stage1_perf),
      'Avant/Allroad':                 S(),
    },
    'C7 рест (2014–2018)': {
      '1.8/2.0 TFSI (CZE/CHHB/CNCD)':  S(servicePresets.stage1_turbo_hi),
      '3.0 TDI (CRTE/CKVC/CJGD)':      S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S6 4.0 TFSI (CWUC)':            S(servicePresets.stage1_perf),
      'RS6 4.0 TFSI Perf (CWUC/CXGC)': S(servicePresets.stage1_perf),
      'Avant/Allroad':                 S(),
    },
    'C8 (2018–н.в.)': {
      '2.0/3.0 TFSI (DAXB/DNWA/DWNA MHEV)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '3.0 TDI (DPCA/DPCG MHEV)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S6 3.0 TDI (EU DPAA/DPUA)':          S(servicePresets.stage1_perf, servicePresets.dpf_off_mid),
      'RS6 4.0 TFSI (DKMA/DKMB)':           S(servicePresets.stage1_perf, servicePresets.gpf_off),
      '55 TFSI e / 50 TDI e (PHEV)':        S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'Avant/Allroad':                       S(),
    },
    'a6 avant': {
      'см. моторы A6 соответствующего поколения': S(),
    },
    'a6 allroad': {
      'C6/C7/C8 3.0 TDI (+)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
    },
  },

  'a7': {
    'C7 (2010–2017)': {
      '2.8/3.0 TFSI (CGWB/CJWB)': S(servicePresets.stage1_turbo_hi),
      '3.0 TDI (CLAB/CNRB)':      S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S7 4.0 TFSI (CTGE)':       S(servicePresets.stage1_perf),
      'RS7 4.0 TFSI (CTGE/CWUC)': S(servicePresets.stage1_perf),
      'Sportback':                S(),
    },
    'C8 (2018–н.в.)': {
      '3.0 TFSI (DEUA/DNWA MHEV)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '3.0 TDI (DPCG/DPCA MHEV)':  S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S7 3.0 TDI (EU DPAA)':      S(servicePresets.stage1_perf, servicePresets.dpf_off_mid),
      'RS7 4.0 TFSI (DKMA/DKMB)':  S(servicePresets.stage1_perf, servicePresets.gpf_off),
      '55 TFSI e (PHEV)':          S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'a8': {
    'D3 (2002–2010)': {
      '3.2/4.2 FSI (BKH/BTU)': S(servicePresets.stage1_na_high),
      '3.0/4.2 TDI (ASB/BMK/BTR)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S8 5.2 V10 FSI (BXA)': S(servicePresets.stage1_perf),
      'W12 6.0 FSI (BAN/BRN)': S(servicePresets.stage1_perf),
    },
    'D4 дорест (2010–2013)': {
      '3.0 TFSI (CGWA/CREC)':   S(servicePresets.stage1_turbo_hi, servicePresets.tcu_zf8),
      '4.0 TFSI (CTGA)':        S(servicePresets.stage1_turbo_hi, servicePresets.tcu_zf8),
      '3.0/4.2 TDI (CDTA/CKUD)':S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'W12 6.3 FSI (CTNA)':     S(servicePresets.stage1_perf),
      'S8 4.0 TFSI (CTGA)':     S(servicePresets.stage1_perf),
    },
    'D4 рест (2013–2017)': {
      '3.0 TFSI (CZZA/CVVA)':   S(servicePresets.stage1_turbo_hi, servicePresets.tcu_zf8),
      '4.0 TFSI (CTGE/CWUC)':   S(servicePresets.stage1_turbo_hi, servicePresets.tcu_zf8),
      '3.0/4.2 TDI (CUAA/CKUD)':S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'S8 4.0 TFSI (CTGE/CWUC)':S(servicePresets.stage1_perf),
      'W12 6.3 FSI (CTNA)':     S(servicePresets.stage1_perf),
    },
    'D5 (2017–н.в.)': {
      '3.0/4.0 TFSI (DEUA/DNWA/DWNA MHEV)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off, servicePresets.tcu_zf8),
      '3.0 TDI (DPCG/DPCA MHEV)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid, servicePresets.tcu_zf8),
      '60 TFSI e (PHEV)':                   S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'S8 4.0 TFSI (DKMA)':                 S(servicePresets.stage1_perf, servicePresets.tcu_zf8),
    },
  },

  'a8l': {
    'D4 (2010–2017)': {
      '3.0 TFSI (CREC/CVVA)':   S(servicePresets.stage1_turbo_hi, servicePresets.tcu_zf8),
      '4.0 TFSI (CTGE/CWUC)':   S(servicePresets.stage1_turbo_hi, servicePresets.tcu_zf8),
      '4.2 TDI (CKUD)':         S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      '6.3 W12 FSI (CTNA)':     S(servicePresets.stage1_perf),
    },
    'D5 (2017–н.в.)': {
      '3.0 TFSI (DEUA/DNWA MHEV)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off, servicePresets.tcu_zf8),
      '4.0 TFSI (DKMA)':           S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off, servicePresets.tcu_zf8),
      '3.0 TDI (DPCA/DPCG MHEV)':  S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid, servicePresets.tcu_zf8),
      '60 TFSI e (PHEV)':          S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },


  'q2': {
    'GA (2016–н.в.)': {
      '1.0/1.4/1.5 TFSI (CHYA/CZEA/DADA)': S(servicePresets.stage1_turbo, servicePresets.gpf_off),
      '2.0 TFSI (DKZA)':                   S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.0 TDI (DFGA/DLUB)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
    },
  },

  'q3': {
    '8U дорест (2011–2014)': {
      '1.4/2.0 TFSI (CAXA/CAEA/CZEA)': S(servicePresets.stage1_turbo_hi),
      '2.0 TDI (CFFB/CFGB)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
      'RS Q3 2.5 TFSI (CZGB)':         S(servicePresets.stage1_perf),
    },
    '8U рест (2014–2018)': {
      '1.4/2.0 TFSI (CZEA/CUDA)': S(servicePresets.stage1_turbo_hi),
      '2.0 TDI (CRLB/CUNA)':      S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
      'RS Q3 2.5 TFSI (CZGB)':    S(servicePresets.stage1_perf),
    },
    'F3 (2018–н.в.)': {
      '1.5/2.0 TFSI (DADA/DNVB)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.0 TDI (DFGA/DVPE)':      S(servicePresets.stage1_turbo, servicePresets.dpf_off_mid),
      'RS Q3 2.5 TFSI (DNWA/DWNA)': S(servicePresets.stage1_perf, servicePresets.gpf_off),
      'Sportback':                S(),
    },
  },

  'q4 e-tron': {
    'FY (2021–н.в.)': {
      '35/40/50 quattro EV': S(servicePresets.battery_bms),
      'Sportback':           S(servicePresets.battery_bms),
    },
  },

  'q5': {
    '8R дорест (2008–2012)': {
      '2.0 TFSI (CAEA/CAEB)': S(servicePresets.stage1_turbo_hi),
      '3.2 FSI (CALB)':       S(servicePresets.stage1_na_high),
      '2.0/3.0 TDI (CGLC/CCWA)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
    },
    '8R рест (2012–2017)': {
      '2.0 TFSI (CNCD/CHHB)': S(servicePresets.stage1_turbo_hi),
      '3.0 TFSI (CREC)':      S(servicePresets.stage1_perf),
      '2.0/3.0 TDI (CRLB/CLAB)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'SQ5 3.0 TFSI (CREC)':  S(servicePresets.stage1_perf),
      'SQ5 3.0 TDI (CFCA)':   S(servicePresets.stage1_perf, servicePresets.dpf_off_mid),
    },
    'FY дорест (2017–2020)': {
      '2.0 TFSI (DAXB/DNVB)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.0/3.0 TDI (DFGA/DEUA)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'SQ5 3.0 TFSI (CWGD)':  S(servicePresets.stage1_perf, servicePresets.tcu_zf8),
      '55 TFSI e (PHEV)':     S(servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'FY рест (2020–н.в.)': {
      '2.0 TFSI (DPVA/DVVA)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.0/3.0 TDI (DPCG/DPCA)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'SQ5 3.0 TFSI (DPVA/DWNA)': S(servicePresets.stage1_perf, servicePresets.gpf_off, servicePresets.tcu_zf8),
      'Sportback/SQ5 Sportback': S(),
    },
  },

  'sq5': {
    '8R (2013–2017)': {
      '3.0 TFSI (CREC)': S(servicePresets.stage1_perf),
      '3.0 TDI (CFCA)':  S(servicePresets.stage1_perf, servicePresets.dpf_off_mid),
    },
    'FY (2017–н.в.)': {
      '3.0 TFSI (CWGD/DPVA)': S(servicePresets.stage1_perf, servicePresets.gpf_off, servicePresets.tcu_zf8),
      '3.0 TDI (DPCF)':       S(servicePresets.stage1_perf, servicePresets.dpf_off_mid),
    },
  },

  'q7': {
    '4L дорест (2005–2009)': {
      '3.6/4.2 FSI (BHK/BVJ)':   S(servicePresets.stage1_na_high),
      '3.0/4.2 TDI (ASB/BMK/BTR)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      '6.0 V12 TDI (CCGA)':      S(servicePresets.stage1_perf),
    },
    '4L рест (2009–2015)': {
      '3.0 TFSI (CZZA/CREC)':    S(servicePresets.stage1_turbo_hi),
      '3.0/4.2 TDI (CJGD/CKUD)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'SQ7 (нет для 4L)':        S(),
    },
    '4M дорест (2015–2019)': {
      '2.0/3.0 TFSI (CYRB/CWGD)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '3.0/4.0 TDI (CRTE/DEUA)':  S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'SQ7 4.0 TDI (CEUA)':       S(servicePresets.stage1_perf, servicePresets.tcu_zf8),
    },
    '4M рест (2019–н.в.)': {
      '3.0 TFSI (DNWA/DWNA)':     S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '3.0 TDI (DPCA/DPCG)':      S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'SQ7 4.0 TFSI (DKNA)':      S(servicePresets.stage1_perf, servicePresets.tcu_zf8),
    },
  },

  'q8': {
    '4MN (2018–н.в.)': {
      '3.0 TFSI (DNWA/DWNA MHEV)': S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '3.0/4.0 TDI (DPCG/DPTA)':   S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_mid),
      'SQ8 4.0 TDI (DPTA) / 4.0 TFSI (DKNA)': S(servicePresets.stage1_perf, servicePresets.tcu_zf8),
      'RS Q8 4.0 TFSI (DKMA/DKMB)': S(servicePresets.stage1_perf, servicePresets.gpf_off),
      'Q8 e-tron (см. ниже)': S(),
    },
  },

  'rs q8': {
    '4MN (2019–н.в.)': {
      '4.0 TFSI (DKMA/DKMB)': S(servicePresets.stage1_perf, servicePresets.gpf_off, servicePresets.tcu_zf8),
    },
  },

  'q8 e-tron': {
    'GE facelift (2022–н.в.)': {
      '50/55/S EV': S(servicePresets.battery_bms),
      'Sportback':  S(servicePresets.battery_bms),
    },
  },


  'tt': {
    '8N (1998–2006)': {
      '1.8T 150/180/225 (AJQ/AMU/BAM)': S(servicePresets.stage1_turbo_hi),
      '3.2 VR6 (BHE)':                  S(servicePresets.stage1_na_high),
      'Coupe/Roadster':                 S(),
    },
    '8J (2006–2014)': {
      '1.8/2.0 TFSI (BYT/CAWB/CJSA)': S(servicePresets.stage1_turbo_hi),
      'TTS 2.0 TFSI (CDL/CPMA)':      S(servicePresets.stage1_perf),
      'TTRS 2.5 TFSI (CEPA/CZGB)':    S(servicePresets.stage1_perf),
    },
    '8S (2014–н.в.)': {
      '1.8/2.0 TFSI (CJSB/DNVB)':     S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      'TTS 2.0 TFSI (DJHA)':          S(servicePresets.stage1_perf, servicePresets.gpf_off),
      'TTRS 2.5 TFSI (DAZA/DWNA)':    S(servicePresets.stage1_perf, servicePresets.gpf_off),
    },
  },

  'r8': {
    '42 (2006–2015)': {
      '4.2 FSI V8 (BYH/BNS)': S(servicePresets.stage1_perf),
      '5.2 FSI V10 (BUJ)':    S(servicePresets.stage1_perf),
      'S tronic/Manual':      S(),
    },
    '4S (2015–н.в.)': {
      '5.2 FSI/OPF (CNDA/CWUA)': S(servicePresets.stage1_perf, servicePresets.gpf_off),
    },
  },


  'e-tron': {
    'GE (2018–2022)': {
      '50/55/S quattro EV': S(servicePresets.battery_bms),
      'Sportback':          S(servicePresets.battery_bms),
    },
  },

  'e-tron gt': {
    'J1 (2021–н.в.)': {
      'quattro/RS EV': S(servicePresets.battery_bms),
    },
  },

  'q6 e-tron': {
    'PPE (2024–н.в.)': {
      '45/55/SQ6 EV': S(servicePresets.battery_bms),
    },
  },


  'a3 sedan':   { 'см. A3 соответствующего поколения': S() },
  'a3 cabrio':  { 'см. A3 соответствующего поколения': S() },
  'a5 sportback': { 'см. A5 соответствующего поколения': S() },
  'a5 cabrio':  { 'см. A5 соответствующего поколения': S() },
  'a4 avant':   { 'см. A4 соответствующего поколения': S() },
  'a6 avant':   { 'см. A6 соответствующего поколения': S() },
  'sq7': {
    '4M (2016–н.в.)': {
      '4.0 TDI (CEUA/DPTA)':  S(servicePresets.stage1_perf, servicePresets.dpf_off_mid, servicePresets.tcu_zf8),
      '4.0 TFSI (DKNA)':      S(servicePresets.stage1_perf, servicePresets.tcu_zf8),
    },
  },
  'sq8': {
    '4MN (2019–н.в.)': {
      '4.0 TDI (DPTA)':       S(servicePresets.stage1_perf, servicePresets.dpf_off_mid, servicePresets.tcu_zf8),
      '4.0 TFSI (DKNA)':      S(servicePresets.stage1_perf, servicePresets.tcu_zf8),
    },
  },
};