export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'DSG/Tiptronic/Manual', price: '2 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация TSI/FSI', price: '8 000 ₽' }],
  stage1_mid:     [{ name: 'Прошивка Stage 1', description: 'Оптимизация TSI/TDI', price: '10 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '15 000 ₽' }],
  stage1_gti:     [{ name: 'Прошивка Stage 1', description: 'Тюнинг для GTI/GTD/GTE', price: '18 000 ₽' }],
  stage1_r:       [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг R-версий', price: '22 000 ₽' }],
  dsg_6:          [{ name: 'Настройка DSG-6', description: 'Launch/Shift map/Pressure', price: '12 000 ₽' }],
  dsg_7:          [{ name: 'Настройка DSG-7', description: 'Launch/Shift map/Pressure', price: '14 000 ₽' }],
  tiptronic:      [{ name: 'Настройка Tiptronic', description: 'Shift map/Lock-up', price: '10 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Программное удаление EGR', price: '6 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Удаление сажевого фильтра', price: '8 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина', price: '10 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '9 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue', description: 'Удаление системы SCR', price: '7 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка макс. скорости', price: '5 000 ₽' }],
  start_stop_off: [{ name: 'Отключение Start-Stop', description: 'Деактивация системы', price: '3 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение экологии', price: '10 000 ₽' }],
  battery_bms:    [{ name: 'Диагностика HV/12V', description: 'Проверка батареи/активаций', price: '4 000 ₽' }],
  hybrid_diag:    [{ name: 'Диагностика гибридной системы', description: 'GTE инвертор/контроллер', price: '3 500 ₽' }],
  hybrid_cal:     [{ name: 'Калибровка гибридной части', description: 'Адаптации/обновления', price: '7 000 ₽' }],
  dcc_setup:      [{ name: 'Настройка DCC', description: 'Адаптивная подвеска', price: '5 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const vwData = {

  'golf': {
    'Golf 4 (1997–2003)': {
      '1.4/1.6 (AXP/AKL/AEH)':        S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.8T (AGU/AUM)':               S(servicePresets.stage1_mid, servicePresets.diagECU),
      '2.0 (APK/AZJ)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.9 TDI (ALH/AHF/ASZ)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'GTI 1.8T (AGU)':               S(servicePresets.stage1_gti, servicePresets.diagECU),
      'R32 3.2 VR6 (BFH)':            S(servicePresets.stage1_r, servicePresets.diagECU),
    },
    'Golf 5 дорест (2003–2006)': {
      '1.4/1.6 FSI (BLN/BLP)':        S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 FSI (BLR/BVY)':            S(servicePresets.stage1_mid, servicePresets.diagECU),
      '2.0 TSI (BWA)':                S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '1.9/2.0 TDI (BKC/BXE)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'GTI 2.0 TSI (BWA/AXX)':        S(servicePresets.stage1_gti, servicePresets.dsg_6),
    },
    'Golf 5 рест (2006–2008)': {
      '1.4 TSI (BMY/CAXA)':           S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 FSI (BVY/BVZ)':            S(servicePresets.stage1_mid, servicePresets.diagECU),
      '2.0 TDI (BMM/BMN)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'GTI 2.0 TSI (BWA/AXX)':        S(servicePresets.stage1_gti, servicePresets.dsg_6),
      'R32 3.2 VR6 (BUB)':            S(servicePresets.stage1_r, servicePresets.dsg_6),
    },
    'Golf 6 дорест (2008–2012)': {
      '1.2 TSI (CBZB)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.4 TSI (CAXA/CTHD)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '1.6 TDI (CAYC/CLHA)':          S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (CBDB/CFHC)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.dsg_6),
      'GTI 2.0 TSI (CCZB/CCTA)':      S(servicePresets.stage1_gti, servicePresets.dsg_6),
      'GTD 2.0 TDI (CFGB)':           S(servicePresets.stage1_gti, servicePresets.dpf_off, servicePresets.dsg_6),
      'R 2.0 TSI (CDLF)':             S(servicePresets.stage1_r, servicePresets.dsg_6),
    },
    'Golf 7 дорест (2012–2016)': {
      '1.2/1.4 TSI (CJZA/CZCA)':      S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.6 TDI (CLHA/DGDB)':          S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (CRLB/DFGA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.dsg_6),
      'GTI 2.0 TSI (CHHB/CJXC)':      S(servicePresets.stage1_gti, servicePresets.dsg_6),
      'GTD 2.0 TDI (CUNA)':           S(servicePresets.stage1_gti, servicePresets.dpf_off_adblue, servicePresets.dsg_6),
      'R 2.0 TSI (CJXC)':             S(servicePresets.stage1_r, servicePresets.dsg_6),
    },
    'Golf 7 FL (2016–2019)': {
      '1.0 TSI (CHZJ)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.5 TSI (DADA/DPCA)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '1.6 TDI (DGDB)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 TDI (DFGA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.dsg_7),
      'GTI 2.0 TSI (CHHA/DNUE)':      S(servicePresets.stage1_gti, servicePresets.dsg_7, servicePresets.gpf_off),
      'GTD 2.0 TDI (CUNA)':           S(servicePresets.stage1_gti, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
      'GTE 1.4 TSI Hybrid (CUKB)':    S(servicePresets.stage1_gti, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'R 2.0 TSI (DNUE)':             S(servicePresets.stage1_r, servicePresets.dsg_7, servicePresets.gpf_off),
    },
    'Golf 8 дорест (2019–2023)': {
      '1.0 TSI (DKRF)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.5 TSI (DPCA/DADA)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TDI (DTUA/DFGA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
      'GTI 2.0 TSI (DNUE)':           S(servicePresets.stage1_gti, servicePresets.dsg_7, servicePresets.gpf_off),
      'GTD 2.0 TDI (DTUA)':           S(servicePresets.stage1_gti, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
      'GTE 1.4 TSI Hybrid (DKZA)':    S(servicePresets.stage1_gti, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'R 2.0 TSI (DNUF)':             S(servicePresets.stage1_r, servicePresets.dsg_7, servicePresets.gpf_off),
    },
    'Golf 8 FL (2023–н.в.)': {
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TDI (DTUA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
      'GTI 2.0 TSI (DNUF)':           S(servicePresets.stage1_gti, servicePresets.dsg_7, servicePresets.gpf_off),
      'R 2.0 TSI (DNUF)':             S(servicePresets.stage1_r, servicePresets.dsg_7, servicePresets.gpf_off),
    },
  },

  'passat': {
    'B5/B5.5 (1996–2005)': {
      '1.8T (AEB/AWM/AWT)':           S(servicePresets.stage1_mid, servicePresets.diagECU),
      '2.0 (ALT/AZM)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.8 V6 (ACK/BBG)':             S(servicePresets.stage1_mid, servicePresets.diagECU),
      '1.9 TDI (AFN/AVB/AWX)':        S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.5 TDI V6 (AKN/BDG)':         S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'B6 дорест (2005–2008)': {
      '1.6 FSI (BLF)':                S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 FSI (BLR)':                S(servicePresets.stage1_mid, servicePresets.diagECU),
      '2.0 TSI (BWA)':                S(servicePresets.stage1_turbo, servicePresets.dsg_6),
      '3.2 V6 FSI (AXZ)':             S(servicePresets.stage1_mid, servicePresets.dsg_6),
      '1.9 TDI (BKC/BXE)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (BMP/BMR)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.dsg_6),
    },
    'B6 рест (2008–2010)': {
      '1.8 TSI (BZB)':                S(servicePresets.stage1_turbo, servicePresets.dsg_6),
      '2.0 TSI (BWA/CCTA)':           S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '1.9 TDI (BLS)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (BVD/CBAB)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.dsg_6),
    },
    'B7 дорест (2010–2014)': {
      '1.4 TSI (CAXA/CTHA)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '1.8 TSI (CDAA/CDHB)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (CCTA/CCZB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '3.6 V6 FSI (CDVA)':            S(servicePresets.stage1_mid, servicePresets.dsg_6),
      '1.6 TDI (CAYC)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (CFGB/CFFB/CLJA)':     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.dsg_6),
    },
    'B8 дорест (2014–2018)': {
      '1.4 TSI (CZCA/CZDA)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '1.8 TSI (CJSA/CJSB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7),
      '2.0 TSI (CHHB/CHHA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '1.6 TDI (DCXA/DDYA)':          S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 TDI (DFLA/CFFB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.dsg_6),
      '2.0 TDI BiTurbo (CUAA)':       S(servicePresets.stage1_r, servicePresets.dpf_off_adblue, servicePresets.dsg_6),
    },
    'B8 FL (2018–2019)': {
      '1.4 TSI (CZDA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TSI (CHHA/DNUE)':          S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TDI (DFLA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
      'GTE 1.4 TSI Hybrid (CUKB)':    S(servicePresets.stage1_gti, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    'B9 (2019–н.в.)': {
      '1.5 TSI (DPCA/DADA)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TSI (DNUE)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TDI (DTSA/DTUA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
      'GTE 1.4 TSI Hybrid (DKZA)':    S(servicePresets.stage1_gti, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'tiguan': {
    '5N дорест (2007–2011)': {
      '1.4 TSI (CAVA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (CAWA/CAWB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '2.0 TDI (CBAB/CFFD)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.dsg_6),
    },
    '5N FL (2011–2016)': {
      '1.4 TSI (CTHA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (CCZC)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '2.0 TDI (CFFB/CFGB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.dsg_6),
    },
    '5NA дорест (2016–2020)': {
      '1.4 TSI (CZCA/CZDA)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (CHHB/DKZA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7),
      '2.0 TDI (DFGA/DGDB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
      '2.0 TDI BiTurbo (CUAA)':       S(servicePresets.stage1_r, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
    },
    '5NA FL (2020–2024)': {
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TSI (DNUE)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TDI (DTUA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
      'R 2.0 TSI (DNUF)':             S(servicePresets.stage1_r, servicePresets.dsg_7, servicePresets.gpf_off),
      'eHybrid 1.4 TSI (DKZA)':       S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  'touareg': {
    '7L (2002–2010)': {
      '3.2 V6 (AZZ/BAA)':             S(servicePresets.stage1_mid, servicePresets.diagECU),
      '4.2 V8 (AXQ/BAR)':             S(servicePresets.stage1_mid, servicePresets.diagECU),
      '3.0 TDI V6 (BKS/CASA)':        S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '5.0 V10 TDI (AYH)':            S(servicePresets.stage1_r, servicePresets.dpf_off, servicePresets.egr_off),
      'R50 5.0 V10 TDI (AYH)':        S(servicePresets.stage1_r, servicePresets.dpf_off),
    },
    '7P дорест (2010–2014)': {
      '3.0 TSI V6 (CGRA)':            S(servicePresets.stage1_turbo_hi, servicePresets.tiptronic),
      '4.2 TDI V8 (CKDA)':            S(servicePresets.stage1_r, servicePresets.dpf_off_adblue, servicePresets.tiptronic),
      '3.0 TDI V6 (CASA/CRCA)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.tiptronic),
      'Hybrid 3.0 TSI (CGEA)':        S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
    '7P FL (2014–2018)': {
      '3.0 TSI V6 (CTUC)':            S(servicePresets.stage1_turbo_hi, servicePresets.tiptronic),
      '3.0 TDI V6 (CRCA/CVWA)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.tiptronic),
      '4.2 TDI V8 (CKDA)':            S(servicePresets.stage1_r, servicePresets.dpf_off_adblue, servicePresets.tiptronic),
    },
    'CR (2018–н.в.)': {
      '3.0 TSI V6 (DLZA)':            S(servicePresets.stage1_turbo_hi, servicePresets.tiptronic, servicePresets.gpf_off),
      '3.0 TDI V6 (DCPC/DDTA)':       S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.tiptronic),
      '4.0 TDI V8 (DDUA)':            S(servicePresets.stage1_r, servicePresets.dpf_off_adblue, servicePresets.tiptronic),
      'eHybrid 3.0 TSI (DMZA)':       S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
      'R 3.0 TSI V6 (DMZA)':          S(servicePresets.stage1_r, servicePresets.tiptronic, servicePresets.gpf_off),
    },
  },

  'polo': {
    '9N/9N3 (2001–2009)': {
      '1.2/1.4 (AZQ/BBY/BUD)':        S(servicePresets.diagECU, servicePresets.stage1_basic),
      '1.4 TDI (AMF/BNM)':            S(servicePresets.stage1_mid, servicePresets.dpf_off, servicePresets.egr_off),
      '1.9 TDI (ASZ)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    '6R дорест (2009–2014)': {
      '1.2 TSI (CBZB)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.4 TSI (CAVE)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '1.6 TDI (CAYC)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'GTI 1.4 TSI (CAVE)':           S(servicePresets.stage1_gti, servicePresets.dsg_7),
    },
    '6R FL (2014–2017)': {
      '1.0 TSI (CHZJ)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.2 TSI (CJZD)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.4 TDI (CUSB)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      'GTI 1.8 TSI (DAJB)':           S(servicePresets.stage1_gti, servicePresets.dsg_7),
    },
    'AW дорест (2017–2021)': {
      '1.0 TSI (CHZJ/DKRF)':          S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '1.6 TDI (DGDB)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'GTI 2.0 TSI (DAJB)':           S(servicePresets.stage1_gti, servicePresets.dsg_7),
    },
    'AW FL (2021–н.в.)': {
      '1.0 TSI (DKRF)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      'GTI 2.0 TSI (DNUF)':           S(servicePresets.stage1_gti, servicePresets.dsg_7, servicePresets.gpf_off),
    },
  },

  'jetta': {
    '5 (2005–2010)': {
      '1.4 TSI (CAXA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '1.6 FSI (BLF/CCSA)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 TSI (BWA/CCTA)':           S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '1.9 TDI (BKC)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (BKD/CBDB)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.dsg_6),
    },
    '6 дорест (2010–2014)': {
      '1.2 TSI (CBZB)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.4 TSI (CAXA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '1.6 TDI (CAYC)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (CFHC/CLCB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_6),
      'GLI 2.0 TSI (CCTA)':           S(servicePresets.stage1_gti, servicePresets.dsg_6),
    },
    '6 FL (2014–2018)': {
      '1.4 TSI (CZCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '1.8 TSI (CDAA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7),
      '2.0 TDI (CLCB)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_6),
    },
    '7 дорест (2018–2021)': {
      '1.4 TSI (CZDA/CZEA)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TSI (DKZA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7, servicePresets.gpf_off),
      'GLI 2.0 TSI (DKZA)':           S(servicePresets.stage1_gti, servicePresets.dsg_7, servicePresets.gpf_off),
    },
    '7 FL (2021–н.в.)': {
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TSI (DNUE)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7, servicePresets.gpf_off),
      'GLI 2.0 TSI (DNUF)':           S(servicePresets.stage1_gti, servicePresets.dsg_7, servicePresets.gpf_off),
    },
  },

  'arteon': {
    '3H дорест (2017–2020)': {
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (DKZA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7),
      '2.0 TDI (DFGA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
    },
    '3H FL (2020–н.в.)': {
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TSI (DNUE)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TDI (DTUA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
      'R 2.0 TSI (DNUF)':             S(servicePresets.stage1_r, servicePresets.dsg_7, servicePresets.gpf_off),
      'eHybrid 1.4 TSI (DKZA)':       S(servicePresets.stage1_turbo_hi, servicePresets.hybrid_diag, servicePresets.hybrid_cal),
    },
  },

  't-roc': {
    'A1 дорест (2017–2021)': {
      '1.0 TSI (DKRF)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.5 TSI (DPCA/DADA)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (DKZA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7),
      '2.0 TDI (DTUA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
    },
    'A1 FL (2021–н.в.)': {
      '1.0 TSI (DKRF)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TSI (DNUE)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7, servicePresets.gpf_off),
      'R 2.0 TSI (DAJB)':             S(servicePresets.stage1_r, servicePresets.dsg_7, servicePresets.gpf_off),
    },
  },

  'touran': {
    '1T (2003–2015)': {
      '1.4 TSI (CAVC/BMY)':           S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 FSI (BLR/BVY)':            S(servicePresets.stage1_mid, servicePresets.diagECU),
      '1.9 TDI (BKC/BXE)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (BKD/BMM)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.dsg_6),
    },
    '5T дорест (2015–2020)': {
      '1.2 TSI (CJZC)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.4 TSI (CZDA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TDI (DFGA/DGDB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
    },
    '5T FL (2020–н.в.)': {
      '1.5 TSI (DPCA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7, servicePresets.gpf_off),
      '2.0 TDI (DTUA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_7),
    },
  },

  'sharan': {
    '7N (2010–2022)': {
      '1.4 TSI (CAVA/CTHA)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (CCZB)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '2.0 TDI (CFGB/CFFB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_6),
    },
  },

  'caddy': {
    '2K (2003–2015)': {
      '1.9 TDI (BLS)':                S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (CFHC)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '1.6 TDI (CAYC)':               S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'SA (2015–2020)': {
      '1.4 TSI (CZCA)':               S(servicePresets.stage1_turbo, servicePresets.diagECU),
      '2.0 TDI (DFSA/DGDB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'SK (2020–н.в.)': {
      '2.0 TDI (DTSA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      'eTGI 1.5 CNG (DFYA)':          S(servicePresets.stage1_turbo, servicePresets.diagECU),
    },
  },

  'transporter': {
    'T5 (2003–2015)': {
      '1.9 TDI (BRS/BRR)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 TDI (CAAA/CCHA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '2.5 TDI (BNZ/AXD)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'T6 дорест (2015–2019)': {
      '2.0 TDI (CAAC/CFCA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 TSI (CJKA)':               S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '2.0 TDI BiTurbo (CXHA)':       S(servicePresets.stage1_r, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
    'T6.1 (2019–н.в.)': {
      '2.0 TDI (DLAA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 TSI (DNJA)':               S(servicePresets.stage1_turbo_hi, servicePresets.gpf_off),
      '2.0 TDI BiTurbo (DMSA)':       S(servicePresets.stage1_r, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'multivan': {
    'T5 (2003–2015)': {
      '2.0 TDI (CAAA/CFCA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
      '2.5 TDI (AXD/BNZ)':            S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'T6/T6.1 (2015–н.в.)': {
      '2.0 TDI (CAAC/CFCA/DLAA)':     S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off),
      '2.0 TSI (CJKA/DNJA)':          S(servicePresets.stage1_turbo_hi, servicePresets.diagECU),
      '2.0 TDI BiTurbo (CXHA/DMSA)':  S(servicePresets.stage1_r, servicePresets.dpf_off_adblue, servicePresets.egr_off),
    },
  },

  'id.3': {
    '(2019–н.в.)': {
      'ID.3 Pro/Pro S (45/58/77 kWh)': S(servicePresets.battery_bms, servicePresets.diagECU_plus),
      'ID.3 GTX (77 kWh)':            S(servicePresets.battery_bms, servicePresets.diagECU_plus),
    },
  },

  'id.4': {
    '(2020–н.в.)': {
      'ID.4 Pro/Pro Performance':     S(servicePresets.battery_bms, servicePresets.diagECU_plus),
      'ID.4 GTX (77 kWh)':            S(servicePresets.battery_bms, servicePresets.diagECU_plus),
    },
  },

  'id.5': {
    '(2023–н.в.)': {
      'ID.5 Pro/Pro Performance':     S(servicePresets.battery_bms, servicePresets.diagECU_plus),
      'ID.5 GTX (77 kWh)':            S(servicePresets.battery_bms, servicePresets.diagECU_plus),
    },
  },

  'id.7': {
    '(2024–н.в.)': {
      'ID.7 Pro/Pro S':               S(servicePresets.battery_bms, servicePresets.diagECU_plus),
      'ID.7 GTX':                     S(servicePresets.battery_bms, servicePresets.diagECU_plus),
    },
  },

  'id.buzz': {
    '(2022–н.в.)': {
      'ID.Buzz Pro/Pro L (77 kWh)':   S(servicePresets.battery_bms, servicePresets.diagECU_plus),
      'ID.Buzz GTX':                  S(servicePresets.battery_bms, servicePresets.diagECU_plus),
    },
  },

  'scirocco': {
    '13 дорест (2008–2014)': {
      '1.4 TSI (CAXA/CAVD)':          S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (CCZB/CCZA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '2.0 TDI (CBBB)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.dsg_6),
      'R 2.0 TSI (CDLF)':             S(servicePresets.stage1_r, servicePresets.dsg_6),
    },
    '13 FL (2014–2017)': {
      '1.4 TSI (CAVD)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (CCZB)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      'R 2.0 TSI (CDLF)':             S(servicePresets.stage1_r, servicePresets.dsg_6),
    },
  },

  'eos': {
    '1F (2006–2015)': {
      '1.4 TSI (CAXA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (CCTA/BWA)':           S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '2.0 TDI (CBAB)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.dsg_6),
    },
  },

  'beetle': {
    '5C (2011–2019)': {
      '1.2 TSI (CBZB)':               S(servicePresets.stage1_mid, servicePresets.dsg_7),
      '1.4 TSI (CAVD)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '2.0 TSI (CCZA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '2.0 TDI (CFHC)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.dsg_6),
    },
  },

  'cc': {
    '35 дорест (2008–2012)': {
      '1.4 TSI (CAVA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '1.8 TSI (CDAA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7),
      '2.0 TSI (CCZB/CCTA)':          S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '2.0 TDI (CBBB/CFGB)':          S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_6),
      '3.6 V6 FSI (CDVA)':            S(servicePresets.stage1_mid, servicePresets.dsg_6),
    },
    '35 FL (2012–2016)': {
      '1.4 TSI (CAVA)':               S(servicePresets.stage1_turbo, servicePresets.dsg_7),
      '1.8 TSI (CDAA)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_7),
      '2.0 TSI (CCZB)':               S(servicePresets.stage1_turbo_hi, servicePresets.dsg_6),
      '2.0 TDI (CFGB)':               S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.dsg_6),
    },
  },

  'golf gti':       { 'см. Golf соответствующего поколения': S() },
  'golf r':         { 'см. Golf соответствующего поколения': S() },
  'passat variant': { 'см. Passat соответствующего поколения': S() },
  'tiguan allspace': { 'см. Tiguan соответствующего поколения': S() },
};