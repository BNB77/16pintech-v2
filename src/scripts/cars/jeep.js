export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'ZF 8HP/545RFE/NAG1', price: '2 500 ₽' }],  
  stage1_v6_na:    [{ name: 'Прошивка Stage 1', description: 'Оптимизация V6 атмо', price: '12 000 ₽' }],
  stage1_v6_turbo: [{ name: 'Прошивка Stage 1', description: 'Тюнинг Pentastar 3.6L', price: '15 000 ₽' }],
  stage1_i4_turbo: [{ name: 'Прошивка Stage 1', description: 'Тюнинг 2.0T Hurricane', price: '18 000 ₽' }],
  stage1_v8_hemi:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг HEMI 5.7L', price: '20 000 ₽' }],
  stage1_v8_hemi_hi:[{ name: 'Прошивка Stage 1', description: 'HEMI 6.4L Performance', price: '25 000 ₽' }],
  stage1_srt:      [{ name: 'Прошивка Stage 1', description: 'SRT 6.4L тюнинг', price: '28 000 ₽' }],
  stage1_trackhawk:[{ name: 'Прошивка Stage 1', description: 'Trackhawk 6.2L Supercharged', price: '35 000 ₽' }],  
  stage1_diesel:   [{ name: 'Прошивка Stage 1', description: 'Оптимизация дизеля', price: '18 000 ₽' }],
  stage1_ecodiesel:[{ name: 'Прошивка Stage 1', description: 'EcoDiesel 3.0L тюнинг', price: '20 000 ₽' }],
  trans_zf8:       [{ name: 'Настройка ZF 8HP', description: 'Калибровка 8-ст автомата', price: '12 000 ₽' }],
  trans_zf9:       [{ name: 'Настройка ZF 9HP', description: 'Калибровка 9-ст автомата', price: '13 000 ₽' }],
  trans_nag1:      [{ name: 'Настройка NAG1', description: '5-ст автомат (W5A580)', price: '10 000 ₽' }],
  trans_545rfe:    [{ name: 'Настройка 545RFE', description: '5-ст автомат Chrysler', price: '10 000 ₽' }],
  trans_nsg370:    [{ name: 'Диагностика NSG370', description: '6-ст механика', price: '2 500 ₽' }],
  egr_off:         [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:         [{ name: 'Удаление DPF', description: 'Сажевый фильтр дизель', price: '9 000 ₽' }],
  dpf_off_ecodiesel:[{ name: 'Удаление DPF EcoDiesel', description: 'Сажевый фильтр 3.0L', price: '11 000 ₽' }],
  gpf_off:         [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  scr_off:         [{ name: 'Отключение SCR', description: 'Система селективного катализа', price: '8 000 ₽' }],
  evap_off:        [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
  euro2:           [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:         [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  vmax_off:        [{ name: 'Снятие ограничения Vmax', description: 'Speed Limiter - разблокировка', price: '6 000 ₽' }],
  mds_off:         [{ name: 'Отключение MDS', description: 'Multi-Displacement System', price: '5 000 ₽' }],
  cylinder_deact:  [{ name: 'Отключение деактивации цилиндров', description: 'Fuel Saver Mode', price: '5 000 ₽' }],
  burbles:         [{ name: 'Pops & Bangs', description: 'Хлопки в выхлопе', price: '8 000 ₽' }],
  start_stop_off:  [{ name: 'Отключение Start-Stop', description: 'ESS система', price: '4 000 ₽' }],
  quadra_trac:     [{ name: 'Диагностика Quadra-Trac', description: 'Система 4WD', price: '3 000 ₽' }],
  quadra_drive:    [{ name: 'Диагностика Quadra-Drive', description: 'Полный привод с E-LSD', price: '3 500 ₽' }],
  selec_terrain:   [{ name: 'Настройка Selec-Terrain', description: 'Режимы езды', price: '4 000 ₽' }],
  selec_speed:     [{ name: 'Настройка Selec-Speed', description: 'Круиз-контроль бездорожья', price: '4 000 ₽' }],
  rock_trac:       [{ name: 'Диагностика Rock-Trac', description: 'Раздатка 4:1', price: '3 500 ₽' }],
  command_trac:    [{ name: 'Диагностика Command-Trac', description: 'Part-time 4WD', price: '3 000 ₽' }],
  sway_bar_disc:   [{ name: 'Диагностика Sway Bar Disconnect', description: 'Отключение стабилизатора', price: '3 500 ₽' }],
  tru_lok:         [{ name: 'Диагностика Tru-Lok', description: 'Электронная блокировка', price: '3 500 ₽' }],
  elocker:         [{ name: 'Диагностика E-Locker', description: 'Электроблокировка заднего моста', price: '3 500 ₽' }],
  quadra_lift:     [{ name: 'Диагностика Quadra-Lift', description: 'Пневмоподвеска', price: '4 000 ₽' }],
  quadra_lift_cal: [{ name: 'Калибровка Quadra-Lift', description: 'Настройка пневмо', price: '6 000 ₽' }],
  hybrid_4xe:      [{ name: 'Диагностика 4xe Hybrid', description: 'PHEV система', price: '5 000 ₽' }],
  hybrid_cal:      [{ name: 'Калибровка 4xe', description: 'Настройка гибрида', price: '8 000 ₽' }],
  battery_hv:      [{ name: 'Диагностика HV батареи', description: 'Высоковольтная батарея', price: '5 000 ₽' }],
  coding:          [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  uconnect:        [{ name: 'Настройка Uconnect', description: 'Мультимедиа система', price: '4 000 ₽' }],
  srt_mode:        [{ name: 'Активация SRT режимов', description: 'Раскодировка SRT функций', price: '7 000 ₽' }],
  off_road_pages:  [{ name: 'Активация Off-Road Pages', description: 'Внедорожная телеметрия', price: '5 000 ₽' }],
  forward_collision:[{ name: 'Настройка Forward Collision', description: 'Предупреждение столкновения', price: '3 000 ₽' }],
  blind_spot:      [{ name: 'Настройка Blind Spot', description: 'Контроль слепых зон', price: '3 000 ₽' }],
  adaptive_cruise: [{ name: 'Настройка Adaptive Cruise', description: 'Адаптивный круиз', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const jeepData = {

  'wrangler': {
    'TJ дорест (1996–2002)': {
      '2.5 I4 (AMC 150)':             S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.command_trac),
      '4.0 I6 (AMC 242)':             S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.command_trac),
    },
    'TJ FL (2002–2006)': {
      '2.4 I4 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.command_trac),
      '4.0 I6 (AMC 242)':             S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.command_trac),
    },
    'JK дорест (2006–2010)': {
      '3.8 V6 (EGH)':                 S(servicePresets.stage1_v6_na, servicePresets.trans_nsg370, servicePresets.command_trac, servicePresets.rock_trac),
    },
    'JK FL (2010–2018)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_nsg370, servicePresets.egr_off, servicePresets.command_trac, servicePresets.rock_trac, servicePresets.burbles),
    },
    'JL дорест (2017–2021)': {
      '2.0 I4 Turbo':                 S(servicePresets.stage1_i4_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.start_stop_off, servicePresets.selec_terrain),
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.selec_terrain, servicePresets.burbles),
      '3.0 V6 EcoDiesel':             S(servicePresets.stage1_ecodiesel, servicePresets.trans_zf8, servicePresets.dpf_off_ecodiesel, servicePresets.egr_off, servicePresets.scr_off),
    },
    'JL FL (2021–н.в.)': {
      '2.0 I4 Turbo':                 S(servicePresets.stage1_i4_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.start_stop_off, servicePresets.selec_terrain, servicePresets.off_road_pages),
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.selec_terrain, servicePresets.burbles, servicePresets.off_road_pages),
      '3.0 V6 EcoDiesel':             S(servicePresets.stage1_ecodiesel, servicePresets.trans_zf8, servicePresets.dpf_off_ecodiesel, servicePresets.egr_off, servicePresets.scr_off),
      '4xe Hybrid 2.0T + Electric':   S(servicePresets.stage1_i4_turbo, servicePresets.hybrid_4xe, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.selec_terrain),
      'Rubicon 392 6.4L HEMI V8':     S(servicePresets.stage1_v8_hemi_hi, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.mds_off),
    },
  },

  'grand cherokee': {
    'ZJ дорест (1992–1995)': {
      '4.0 I6 (AMC 242)':             S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.quadra_trac),
      '5.2 V8 (Magnum)':              S(servicePresets.stage1_v8_hemi, servicePresets.diagECU, servicePresets.quadra_trac),
    },
    'ZJ FL (1995–1998)': {
      '4.0 I6 (AMC 242)':             S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.quadra_trac),
      '5.2 V8 (Magnum)':              S(servicePresets.stage1_v8_hemi, servicePresets.diagECU, servicePresets.quadra_trac),
      '5.9 V8 Limited':               S(servicePresets.stage1_v8_hemi, servicePresets.diagECU, servicePresets.quadra_trac),
    },
    'WJ дорест (1998–2002)': {
      '4.0 I6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe, servicePresets.quadra_trac),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.quadra_trac, servicePresets.quadra_drive),
    },
    'WJ FL (2002–2004)': {
      '4.0 I6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe, servicePresets.quadra_trac),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.quadra_trac, servicePresets.quadra_drive),
      '4.7 V8 HO':                    S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.quadra_drive),
    },
    'WK дорест (2004–2007)': {
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe, servicePresets.quadra_trac),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.quadra_trac, servicePresets.quadra_drive),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_nag1, servicePresets.egr_off, servicePresets.quadra_drive, servicePresets.burbles),
      '6.1 V8 SRT8':                  S(servicePresets.stage1_srt, servicePresets.trans_nag1, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off),
      '3.0 V6 CRD Diesel (Mercedes)': S(servicePresets.stage1_diesel, servicePresets.trans_nag1, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'WK FL (2007–2010)': {
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe, servicePresets.quadra_trac),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.quadra_drive),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_nag1, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
      '6.1 V8 SRT8':                  S(servicePresets.stage1_srt, servicePresets.trans_nag1, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off),
      '3.0 V6 CRD Diesel (Mercedes)': S(servicePresets.stage1_diesel, servicePresets.trans_nag1, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'WK2 дорест (2010–2013)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.quadra_trac, servicePresets.selec_terrain),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_nag1, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.selec_terrain),
      '6.4 V8 SRT8':                  S(servicePresets.stage1_srt, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode),
      '3.0 V6 EcoDiesel':             S(servicePresets.stage1_ecodiesel, servicePresets.trans_zf8, servicePresets.dpf_off_ecodiesel, servicePresets.egr_off, servicePresets.scr_off),
    },
    'WK2 FL (2013–2017)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.quadra_trac, servicePresets.selec_terrain, servicePresets.quadra_lift),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.selec_terrain),
      '6.4 V8 SRT':                   S(servicePresets.stage1_srt, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode, servicePresets.adaptive_cruise),
      '3.0 V6 EcoDiesel':             S(servicePresets.stage1_ecodiesel, servicePresets.trans_zf8, servicePresets.dpf_off_ecodiesel, servicePresets.egr_off, servicePresets.scr_off),
    },
    'WK2 FL2 (2017–2021)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.selec_terrain, servicePresets.quadra_lift),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
      '6.4 V8 SRT':                   S(servicePresets.stage1_srt, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode),
      '6.2 V8 Trackhawk Supercharged':S(servicePresets.stage1_trackhawk, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode),
      '3.0 V6 EcoDiesel':             S(servicePresets.stage1_ecodiesel, servicePresets.trans_zf8, servicePresets.dpf_off_ecodiesel, servicePresets.egr_off, servicePresets.scr_off),
    },
    'WL (2021–н.в.)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.selec_terrain, servicePresets.quadra_lift_cal),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
      '4xe Hybrid 2.0T + Electric':   S(servicePresets.stage1_i4_turbo, servicePresets.hybrid_4xe, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.selec_terrain, servicePresets.quadra_lift),
    },
  },

  'cherokee': {
    'XJ дорест (1984–1996)': {
      '2.5 I4 (AMC 150)':             S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.command_trac),
      '4.0 I6 (AMC 242)':             S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.command_trac),
    },
    'XJ FL (1997–2001)': {
      '2.5 I4 (AMC 150)':             S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.command_trac),
      '4.0 I6 (AMC 242)':             S(servicePresets.stage1_v6_na, servicePresets.diagECU, servicePresets.command_trac),
    },
    'KJ дорест (2001–2004)': {
      '2.4 I4 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '2.5 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.trans_nag1, servicePresets.dpf_off, servicePresets.egr_off),
      '2.8 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.trans_nag1, servicePresets.dpf_off, servicePresets.egr_off),
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
    },
    'KJ FL (2004–2008)': {
      '2.4 I4 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '2.8 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.trans_nag1, servicePresets.dpf_off, servicePresets.egr_off),
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
    },
    'KK (2007–2014)': {
      '2.0 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.trans_nag1, servicePresets.dpf_off, servicePresets.egr_off),
      '2.4 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '2.8 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.trans_nag1, servicePresets.dpf_off, servicePresets.egr_off),
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
    },
    'KL дорест (2013–2018)': {
      '2.0 I4 Tigershark':            S(servicePresets.stage1_v6_na, servicePresets.trans_zf9),
      '2.4 I4 Tigershark':            S(servicePresets.stage1_v6_na, servicePresets.trans_zf9),
      '3.2 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf9, servicePresets.egr_off),
      '2.0 Multijet II Diesel':       S(servicePresets.stage1_diesel, servicePresets.trans_zf9, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'KL FL (2018–2023)': {
      '2.0 I4 Tigershark':            S(servicePresets.stage1_v6_na, servicePresets.trans_zf9, servicePresets.selec_terrain),
      '2.4 I4 Tigershark':            S(servicePresets.stage1_v6_na, servicePresets.trans_zf9, servicePresets.selec_terrain),
      '3.2 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf9, servicePresets.egr_off, servicePresets.selec_terrain),
      '2.0 I4 Turbo':                 S(servicePresets.stage1_i4_turbo, servicePresets.trans_zf9, servicePresets.egr_off, servicePresets.gpf_off),
    },
  },

  'compass': {
    'MK дорест (2006–2011)': {
      '2.0 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.4 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.0 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'MK FL (2011–2017)': {
      '2.0 I4 (Tigershark)':          S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.4 I4 (Tigershark)':          S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.2 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'MP дорест (2016–2020)': {
      '1.4 I4 Multiair Turbo':        S(servicePresets.stage1_i4_turbo, servicePresets.trans_zf9, servicePresets.egr_off),
      '2.0 I4 Tigershark':            S(servicePresets.stage1_v6_na, servicePresets.trans_zf9),
      '2.4 I4 Tigershark':            S(servicePresets.stage1_v6_na, servicePresets.trans_zf9, servicePresets.selec_terrain),
      '1.6 Multijet II Diesel':       S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 Multijet II Diesel':       S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'MP FL (2020–н.в.)': {
      '1.3 I4 Turbo':                 S(servicePresets.stage1_i4_turbo, servicePresets.trans_zf9, servicePresets.egr_off, servicePresets.gpf_off),
      '2.0 I4 Tigershark':            S(servicePresets.stage1_v6_na, servicePresets.trans_zf9, servicePresets.selec_terrain),
      '1.6 Multijet II Diesel':       S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '4xe Hybrid 1.3T + Electric':   S(servicePresets.stage1_i4_turbo, servicePresets.hybrid_4xe, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
  },

  'renegade': {
    'BU дорест (2014–2018)': {
      '1.4 I4 Multiair Turbo':        S(servicePresets.stage1_i4_turbo, servicePresets.trans_zf9, servicePresets.egr_off),
      '1.6 I4 E.torQ':                S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.4 I4 Tigershark':            S(servicePresets.stage1_v6_na, servicePresets.trans_zf9),
      '1.6 Multijet II Diesel':       S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.0 Multijet II Diesel':       S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'BU FL (2018–н.в.)': {
      '1.3 I4 Turbo':                 S(servicePresets.stage1_i4_turbo, servicePresets.trans_zf9, servicePresets.egr_off, servicePresets.gpf_off),
      '1.0 I3 Turbo':                 S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.4 I4 Tigershark':            S(servicePresets.stage1_v6_na, servicePresets.trans_zf9, servicePresets.selec_terrain),
      '1.6 Multijet II Diesel':       S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '4xe Hybrid 1.3T + Electric':   S(servicePresets.stage1_i4_turbo, servicePresets.hybrid_4xe, servicePresets.hybrid_cal, servicePresets.battery_hv),
    },
  },

  'gladiator': {
    'JT (2019–н.в.)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.selec_terrain, servicePresets.burbles),
      '3.0 V6 EcoDiesel':             S(servicePresets.stage1_ecodiesel, servicePresets.trans_zf8, servicePresets.dpf_off_ecodiesel, servicePresets.egr_off, servicePresets.scr_off),
    },
  },

  'commander': {
    'XK дорест (2005–2009)': {
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe, servicePresets.quadra_trac),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.quadra_drive),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_nag1, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
      '3.0 V6 CRD Diesel (Mercedes)': S(servicePresets.stage1_diesel, servicePresets.trans_nag1, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'XK FL (2009–2010)': {
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe, servicePresets.quadra_trac),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.quadra_drive),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_nag1, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
    },
  },

  'patriot': {
    'MK дорест (2006–2013)': {
      '2.0 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.4 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.0 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
      '2.2 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
    'MK FL (2013–2017)': {
      '2.0 I4 (Tigershark)':          S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.4 I4 (Tigershark)':          S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.2 CRD Diesel':               S(servicePresets.stage1_diesel, servicePresets.dpf_off, servicePresets.egr_off),
    },
  },

  'grand wagoneer': {
    'WS (2021–н.в.)': {
      '3.0 I6 Hurricane Turbo':       S(servicePresets.stage1_i4_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.quadra_lift_cal, servicePresets.selec_terrain),
      '6.4 V8 HEMI':                  S(servicePresets.stage1_v8_hemi_hi, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.quadra_lift_cal),
    },
  },

  'wagoneer': {
    'WS (2021–н.в.)': {
      '3.0 I6 Hurricane Turbo':       S(servicePresets.stage1_i4_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.quadra_lift, servicePresets.selec_terrain),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.quadra_lift),
    },
  },

  'grand cherokee l': {
    'WL (2021–н.в.)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.gpf_off, servicePresets.selec_terrain),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_zf8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
      '4xe Hybrid 2.0T + Electric':   S(servicePresets.stage1_i4_turbo, servicePresets.hybrid_4xe, servicePresets.hybrid_cal, servicePresets.battery_hv, servicePresets.selec_terrain),
    },
  },

  'liberty': { 'см. Cherokee соответствующего поколения': S() },
};