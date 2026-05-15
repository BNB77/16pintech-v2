// === УСЛУГИ ДЛЯ ŠKODA (адаптированы под VAG: TSI/TDI, DSG, OPF/GPF, AdBlue, Haldex и т.д.) ===
export const servicePresetsSkoda = {
  diagECU:            [{ name: 'Диагностика ЭБУ VAG', description: 'Полная компьютерная диагностика OBD-II + скан VAG', price: '2 000 ₽' }],
  diagECU_plus:       [{ name: 'Диагностика ЭБУ+логи', description: 'Расширенные логи (VCDS/ODIS), адаптации, тест-драйв', price: '3 000 ₽' }],

  stage1_atmo_basic:  [{ name: 'Stage 1 атмосферный', description: 'EA111/EA211 MPI — базовая оптимизация', price: '10 000 ₽' }],
  stage1_atmo_plus:   [{ name: 'Stage 1 атмосферный', description: 'EA111/EA211 — комфортная настройка под 95-98', price: '12 000 ₽' }],
  stage1_tsi:         [{ name: 'Stage 1 TSI/TFSI', description: 'EA888/EA211 TSI — тюнинг турбо', price: '18 000 ₽' }],
  stage1_tsi_hi:      [{ name: 'Stage 1 Hi TSI', description: 'EA888 Gen3/Gen4 — производительный тюнинг', price: '22 000 ₽' }],
  stage1_tdi:         [{ name: 'Stage 1 TDI', description: '1.6/2.0 TDI — увеличение тяги, оптимизация впрыска', price: '16 000 ₽' }],

  dsg_dq200:          [{ name: 'Настройка DSG DQ200', description: '7-ступ. сухая — точки переключений/ламелы/ползучесть', price: '12 000 ₽' }],
  dsg_dq250:          [{ name: 'Настройка DSG DQ250', description: '6-ступ. мокрая — давления/крутящий/LC', price: '14 000 ₽' }],
  dsg_dq381:          [{ name: 'Настройка DSG DQ381/DQ500', description: '7-ступ. мокрая — AWD/Performance', price: '16 000 ₽' }],
  at_aisin6:          [{ name: 'Калибровка AT Aisin 6AT', description: 'Коррекция карт переключений/блокировки ГДТ', price: '12 000 ₽' }],
  at_aisin8:          [{ name: 'Калибровка AT Aisin 8AT', description: 'Адаптация под Stage 1/2, сглаживание кик-дауна', price: '14 000 ₽' }],

  egr_off:            [{ name: 'Отключение EGR', description: 'Дизельные TDI — программное', price: '7 000 ₽' }],
  dpf_off:            [{ name: 'Удаление DPF', description: 'TDI — программное отключение', price: '9 000 ₽' }],
  dpf_adblue_off:     [{ name: 'DPF + AdBlue OFF', description: 'SCR/мочевина — программное отключение', price: '11 000 ₽' }],
  gpf_off:            [{ name: 'OPF/GPF OFF', description: 'Бензиновый фильтр частиц — программно', price: '10 000 ₽' }],
  adblue_off:         [{ name: 'AdBlue (SCR) OFF', description: 'Удаление системы мочевины программно', price: '8 000 ₽' }],
  vmax_off:           [{ name: 'Vmax OFF', description: 'Снятие ограничителя скорости', price: '6 000 ₽' }],

  burbles_ea888:      [{ name: 'Pops & Bangs', description: 'EA888/TSI — аккуратные хлопки в спорт-режиме', price: '8 000 ₽' }],
  start_stop_mem:     [{ name: 'Память Start/Stop', description: 'Запоминание последнего состояния', price: '3 000 ₽' }],
  launch_control:     [{ name: 'Активация Launch Control', description: 'Для DSG (где поддерживается)', price: '4 000 ₽' }],
  eco_coding:         [{ name: 'VAG-кодировки', description: 'Лонг-кодинг/адаптации: комфорт, свет, ассистенты', price: '5 000 ₽' }],
  dtc_off:            [{ name: 'Отключение DTC', description: 'Селективное отключение кодов ошибок', price: '3 000 ₽' }],

  battery_hv:         [{ name: 'Диагностика HV батареи', description: 'ENYAQ iV — SoH/баланс/температуры', price: '5 000 ₽' }],
  ev_diag:            [{ name: 'Диагностика электро', description: 'ENYAQ iV/электромодификации — ошибки, обновления', price: '4 000 ₽' }],
};

export const S = (...sets) => sets.flat();

// === ДАННЫЕ ŠKODA ПО МОДЕЛЯМ И ПОКОЛЕНИЯМ (дорест/рест) ===
export const skodaData = {
  // ====== A/B/C класс ======
  'fabia': {
    'Mk1 / 6Y дорест/рест (1999–2007)': {
      '1.2/1.4/1.6 MPI (EA111 — AUA/BBY/BUD и пр.)': S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_basic),
      '1.4 TDI PD (AMF/BMS)':                         S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.egr_off),
    },
    'Mk2 / 5J дорест (2007–2010)': {
      '1.4/1.6 MPI (BSE/BSF/CCSA)':                   S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_plus),
      '1.2 TSI (EA111 — CBZA/CBZB)':                   S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq200),
      '1.6 TDI (CLNA/CLHB)':                           S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    'Mk2 / 5J рест (2010–2014)': {
      '1.2 TSI (EA111 — CBZA/CBZB)':                   S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq200),
      '1.6/1.2 TDI (CLNA/CLHB/CFWA)':                  S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    'Mk3 / NJ дорест/рест (2014–2021)': {
      '1.0/1.2 TSI (EA211 — CHZB/CHZC)':              S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.gpf_off), // CHZB/CHZC: Fabia NJ. citeturn3search8turn3search4
      '1.4 TDI (EA288 — CUSA/CUSB)':                  S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    'Mk4 / PJ (2021–н.в.)': {
      '1.0 TSI (EA211 evo — DLAA/DLAC)':              S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.gpf_off), // DLAA на PJ. citeturn3search2turn3search10
      '1.5 TSI (EA211 evo2)':                          S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.gpf_off, servicePresetsSkoda.dsg_dq200),
    },
  },

  'rapid': {
    'NH дорест (2012–2017)': {
      '1.6 MPI (EA211 — CWVA/CWVB)':                   S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_plus, servicePresetsSkoda.at_aisin6), // CWVA/CWVB. citeturn6search0turn6search1turn6search2
      '1.4 TSI (EA211 — CXSA/CZEA)':                    S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq200),
      '1.6 TDI (CLNA/CLHB)':                            S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    'NH рест (2017–2020)': {
      '1.6 MPI (CWVA/CWVB)':                             S(servicePresetsSkoda.diagECU_plus, servicePresetsSkoda.stage1_atmo_plus, servicePresetsSkoda.at_aisin6), // CWVA: карточки Rapid. citeturn0search12turn0search10
      '1.4 TSI DSG (CZEA)':                              S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq200),
    },
    '2 поколение (РФ) лифтбек (2019–2023)': {
      '1.6 MPI 90/110 (CWVB/CWVA)':                      S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_plus, servicePresetsSkoda.at_aisin6), // CWVA в Rapid-2. citeturn0search6turn6search0
      '1.4 TSI DSG (DJKA/CZEA)':                         S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq200, servicePresetsSkoda.start_stop_mem),
    },
  },

  // ====== C/D класс ======
  'octavia': {
    'A4 / Typ 1U дорест/рест (1996–2010)': {
      '1.6 MPI (AVU/BFQ/BGU/BSE/BSF)':                   S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_basic), // коды 1U/A5. citeturn8search6turn8search0
      '1.8T (AGU/AUM/AUQ)':                               S(servicePresetsSkoda.stage1_tsi),
      '1.9 TDI (AGR/ALH/ASV/BJB/BKC/BXE)':                S(servicePresetsSkoda.stage1_tdi), // 1.9 TDI коды. citeturn8search8
    },
    'A5 / 1Z дорест (2004–2008)': {
      '1.6 MPI (BGU/BSE/BSF/BLF)':                        S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_plus), // BLF/BSE. citeturn8search1
      '1.6 FSI (BAD/BLF)':                                 S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_plus),
      '1.9 TDI (BJB/BKC/BLS/BXE)':                         S(servicePresetsSkoda.stage1_tdi),
      '2.0 TFSI (BWA)':                                    S(servicePresetsSkoda.stage1_tsi), // RS A5 дорест. citeturn7search14
    },
    'A5 / 1Z рест (2008–2013)': {
      '1.8 TSI (CDAB/CDAA/CJSA)':                          S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq250), // CDAB на Yeti/Superb/Octavia. citeturn7search7
      '2.0 TSI RS (CAWB/CCZA)':                            S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq250), // RS коды. citeturn7search6
      '1.6/2.0 TDI (CAYC/BKD/BMM и др.)':                  S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    'A7 / 5E дорест (2012–2017)': {
      '1.6 MPI (CWVA)':                                    S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_plus), // CWVA A7. citeturn1search1
      '1.4 TSI (CHPA/CZDA)':                               S(servicePresetsSkoda.stage1_tsi), // CHPA/CZDA. citeturn1search3turn1search9
      '1.8 TSI (CJSA/CJSC)':                               S(servicePresetsSkoda.stage1_tsi), // CJSA. citeturn1search11
      '2.0 TDI (CRLB и др.)':                              S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    'A7 / 5E рест (2017–2020)': {
      '1.6 MPI (CWVA)':                                    S(servicePresetsSkoda.diagECU_plus, servicePresetsSkoda.stage1_atmo_plus), // CWVA 2017–2019. citeturn1search13
      '1.4 TSI (CHPA/CZDA)':                               S(servicePresetsSkoda.stage1_tsi), // CZDA 2017–2020. citeturn1search0
      '1.8 TSI (CJSA/CJSB)':                               S(servicePresetsSkoda.stage1_tsi), // CJSB 4x4. citeturn1search14
      '2.0 TSI RS (CHHB/CHHA)':                            S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.dsg_dq250), // RS 220/230. citeturn7search8turn7search12
      '1.6/2.0 TDI (EA288)':                                S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    'A8 / NX дорест (2019–2023)': {
      '1.4 TSI (DJKA/DLA — рынки)':                        S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.dsg_dq381, servicePresetsSkoda.gpf_off), // DJK упомин. citeturn4search13
      '1.5 TSI mHEV (DPCA/DPBC)':                          S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.gpf_off), // DPCA/DPBC. citeturn4search0turn4search2
      '2.0 TSI RS (DNPA)':                                  S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.dsg_dq381, servicePresetsSkoda.gpf_off), // RS DNPA. citeturn7search0
      '2.0 TDI (DFBA/DSTB, EA288 evo)':                    S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_adblue_off), // EA288 evo. citeturn4search3turn4search10turn4search8
      '1.4 e-TEC iV (PHEV)':                                S(servicePresetsSkoda.ev_diag, servicePresetsSkoda.battery_hv),
    },
    'A8 / NX рест (2024–н.в.)': {
      '1.5 TSI evo2 (DPBC/DVYB)':                          S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.dsg_dq381, servicePresetsSkoda.gpf_off), // DPBC 2024. citeturn4search2
      '2.0 TDI (EA288 evo)':                                S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_adblue_off),
    },
  },

  'superb': {
    'B5 / 3U (2001–2008)': {
      '1.8T (AWT/AWT\/BFB) / 2.8 V6 (AMX) / 1.9 TDI (AVF)': S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.stage1_tdi),
    },
    'B6 / 3T дорест (2008–2013)': {
      '1.8/2.0 TSI (CDAB/CCZA)':                           S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq250), // 2.0 TSI CCZA. citeturn0search11
      '2.0 TDI (CBBB/CFHC)':                               S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
      '3.6 FSI V6 (CDVA)':                                  S(servicePresetsSkoda.diagECU),
    },
    'B6 / 3T рест (2013–2015)': {
      '1.8/2.0 TSI (CJSA/CHHB)':                            S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq250),
      '2.0 TDI (SCR на поздних)':                           S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_adblue_off),
    },
    'B8 / 3V дорест (2015–2019)': {
      '1.4/2.0 TSI (CZDA/CHHB)':                            S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.dsg_dq250), // CHHB B8 подтвержд. citeturn0search7
      '1.6/2.0 TDI (EA288)':                                S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    'B8 / 3V рест (2019–2023)': {
      '2.0 TSI 190 (CZPB)':                                 S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.gpf_off, servicePresetsSkoda.dsg_dq381), // CZPB. citeturn0search5turn0search1
      '2.0 TDI (SCR)':                                       S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_adblue_off),
      '1.4 iV PHEV':                                         S(servicePresetsSkoda.ev_diag, servicePresetsSkoda.battery_hv),
    },
    'B9 / 4 поколение (2023–н.в.)': {
      '1.5 TSI evo2 / 2.0 TSI':                              S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.dsg_dq381, servicePresetsSkoda.gpf_off),
      '2.0 TDI (SCR)':                                       S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_adblue_off),
    },
  },

  // ====== Кроссоверы / SUV ======
  'kodiaq': {
    '1 поколение дорест (2016–2021)': {
      '1.4 TSI (CZCA/CZDA/CZEA)':                           S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq250), // CZCA/CZDA. citeturn2search0turn2search5
      '2.0 TDI (DFGA/DBGA/DBGC)':                            S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off), // DFGA. citeturn2search3turn2search12turn2search27
      'RS 2.0 BiTDI (CUAA)':                                 S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_adblue_off), // RS дизель. citeturn2search21
    },
    '1 поколение рест (2021–2025)': {
      '1.4/1.5 TSI (CZCA/CZDA/— 1.5)':                      S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.gpf_off, servicePresetsSkoda.dsg_dq381), // CZDA 2021–2023. citeturn2search8turn2search20
      '2.0 TDI (DTUA/DFGA)':                                 S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_adblue_off), // DTUA. citeturn2search6turn2search15
    },
    '2 поколение (2023–н.в.)': {
      '1.5 TSI e-TEC / 2.0 TSI':                             S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.dsg_dq381, servicePresetsSkoda.gpf_off),
      '2.0 TDI (EA288 evo)':                                  S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_adblue_off), // EA288 evo. citeturn2search9
    },
  },

  'karoq': {
    '1 поколение дорест (2017–2021)': {
      '1.4/1.5 TSI (CZEA/DJKA)':                             S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.gpf_off, servicePresetsSkoda.dsg_dq200), // CZEA/DJKA. citeturn2search2turn2search4
      '2.0 TDI (DFGA/DLBA)':                                  S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    '1 поколение рест (2021–н.в.)': {
      '1.4/1.5 TSI (CZEA/DJKA)':                              S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.gpf_off, servicePresetsSkoda.dsg_dq381), // DJKA карты. citeturn2search7turn2search16
      '2.0 TDI (EA288)':                                      S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_adblue_off),
    },
  },

  'kamiq': {
    'EU дорест/рест (2019–н.в.)': {
      '1.0/1.5 TSI (DKLA/DLAC/—1.5)':                        S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.gpf_off, servicePresetsSkoda.dsg_dq200), // DKLA/DLAC. citeturn3search17
      '1.6 TDI (EA288 на отдельных рынках)':                 S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    'CN (Китай) (2018–н.в.)': {
      '1.5 MPI (EA211)':                                      S(servicePresetsSkoda.stage1_atmo_plus, servicePresetsSkoda.at_aisin6),
    },
  },

  'yeti': {
    '1 поколение дорест (2009–2013)': {
      '1.4 TSI (CAXA)':                                       S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq250),
      '1.8 TSI (CDAB)':                                       S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq250), // CDAB. citeturn7search1
      '2.0 TDI (CFHC/BKD)':                                   S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
    '1 поколение рест (2013–2017)': {
      '1.6 MPI (CWVA)':                                       S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_plus), // CWVA Yeti. citeturn7search3
      '1.4/1.8 TSI (CAXA/CDAB)':                               S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.dsg_dq250), // CDAB подтвержден. citeturn7search5
      '2.0 TDI (EA189/EA288)':                                S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
  },

  // ====== Хэтч/лифтбек C+ ======
  'scala': {
    '1 поколение (2019–н.в.)': {
      '1.0/1.5 TSI (DKLA/DLAC/—1.5)':                        S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.gpf_off, servicePresetsSkoda.dsg_dq200), // базовая 1.0TSI. citeturn5search2
      '1.6 TDI (некоторые рынки)':                             S(servicePresetsSkoda.stage1_tdi, servicePresetsSkoda.dpf_off),
    },
  },

  // ====== MPV/компакт ======
  'roomster': {
    '1 поколение дорест/рест (2006–2015)': {
      '1.4/1.6 MPI (BSE/BSF)':                               S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_plus),
      '1.2 TSI (CBZA/CBZB) / 1.9-1.6 TDI (BLS/CLNA)':        S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.stage1_tdi),
    },
  },

  'citigo': {
    '1 поколение дорест/рест (2011–2020)': {
      '1.0 MPI (CHYA/CHYB)':                                 S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_basic),
      'e iV (электро, 2019–2020)':                           S(servicePresetsSkoda.ev_diag, servicePresetsSkoda.battery_hv),
    },
  },

  // ====== EV ======
  'enyaq iV': {
    '1 поколение (2020–н.в.)': {
      'iV 50/60/80 RWD/AWD':                                  S(servicePresetsSkoda.battery_hv, servicePresetsSkoda.ev_diag, servicePresetsSkoda.eco_coding),
      'vRS AWD':                                               S(servicePresetsSkoda.battery_hv, servicePresetsSkoda.ev_diag, servicePresetsSkoda.eco_coding),
    },
  },

  // ====== Исторические ======
  'felicia': {
    'Typ 6U дорест/рест (1994–2001)': {
      '1.3/1.6 MPI (AEE/AEE; AEE/AEX)':                       S(servicePresetsSkoda.diagECU, servicePresetsSkoda.stage1_atmo_basic),
      '1.9 D (AEF)':                                          S(servicePresetsSkoda.stage1_tdi),
    },
  },

  'favorit / forman': {
    'Typ 781/785 (1987–1995)': {
      '1.3 MPI (135/136)':                                    S(servicePresetsSkoda.diagECU),
    },
  },

  // ====== Ссылки на семьи ======
  'octavia tour': { 'см. Octavia A4 (Typ 1U)': S() },
  'rapid spaceback': { 'см. Rapid NH (евро-версия)': S() },
  
  // ====== EV (новые) ======
  'elroq': {
    '1 поколение (2024–н.в.)': {
      'RWD/AWD (MEB)':                                S(servicePresetsSkoda.battery_hv, servicePresetsSkoda.ev_diag, servicePresetsSkoda.eco_coding),
    },
  },
  'enyaq iV coupe': {
    '1 поколение (2022–н.в.)': {
      'iV 60/80/RS AWD':                               S(servicePresetsSkoda.battery_hv, servicePresetsSkoda.ev_diag, servicePresetsSkoda.eco_coding),
    },
  },

  // ====== Китайский рынок ======
  'kodiaq gt': {
    'CN (2018–2021)': {
      '2.0 TSI (EA888)':                                S(servicePresetsSkoda.stage1_tsi_hi, servicePresetsSkoda.gpf_off),
      '1.4 TSI (EA211, если встречается)':              S(servicePresetsSkoda.stage1_tsi, servicePresetsSkoda.gpf_off),
    },
  },
};
