export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'ZF 8HP/TorqueFlite', price: '2 500 ₽' }],  
  stage1_v6_na:    [{ name: 'Прошивка Stage 1', description: 'Оптимизация V6 атмо', price: '12 000 ₽' }],
  stage1_v6_turbo: [{ name: 'Прошивка Stage 1', description: 'Тюнинг Pentastar 3.6L', price: '15 000 ₽' }],
  stage1_i4_turbo: [{ name: 'Прошивка Stage 1', description: 'Тюнинг 2.0T/2.4T', price: '18 000 ₽' }],
  stage1_v8_hemi:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг HEMI 5.7L', price: '20 000 ₽' }],
  stage1_v8_392:   [{ name: 'Прошивка Stage 1', description: 'HEMI 392 (6.4L) тюнинг', price: '25 000 ₽' }],
  stage1_scat:     [{ name: 'Прошивка Stage 1', description: 'Scat Pack 392 тюнинг', price: '28 000 ₽' }],
  stage1_srt:      [{ name: 'Прошивка Stage 1', description: 'SRT 392/6.4L тюнинг', price: '30 000 ₽' }],
  stage1_hellcat:  [{ name: 'Прошивка Stage 1', description: 'Hellcat 6.2L Supercharged', price: '35 000 ₽' }],
  stage1_redeye:   [{ name: 'Прошивка Stage 1', description: 'Redeye 6.2L тюнинг', price: '40 000 ₽' }],
  stage1_demon:    [{ name: 'Прошивка Stage 1', description: 'Demon 6.2L экстрим', price: '50 000 ₽' }],  
  trans_zf8:       [{ name: 'Настройка ZF 8HP', description: 'Калибровка 8-ст автомата', price: '12 000 ₽' }],
  trans_torque8:   [{ name: 'Настройка TorqueFlite 8', description: '8-ст автомат Chrysler', price: '12 000 ₽' }],
  trans_545rfe:    [{ name: 'Настройка 545RFE', description: '5-ст автомат старого типа', price: '10 000 ₽' }],
  trans_tremec:    [{ name: 'Диагностика Tremec TR-6060', description: '6-ст механика', price: '2 500 ₽' }],  
  egr_off:         [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  gpf_off:         [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  evap_off:        [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
  euro2:           [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:         [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],  
  vmax_off:        [{ name: 'Снятие ограничения Vmax', description: 'Speed Limiter - разблокировка', price: '6 000 ₽' }],
  mds_off:         [{ name: 'Отключение MDS', description: 'Multi-Displacement System', price: '5 000 ₽' }],
  cylinder_deact:  [{ name: 'Отключение деактивации цилиндров', description: 'Fuel Saver Mode', price: '5 000 ₽' }],
  burbles:         [{ name: 'Pops & Bangs', description: 'Хлопки в выхлопе HEMI', price: '8 000 ₽' }],
  start_stop_off:  [{ name: 'Отключение Start-Stop', description: 'ESS система', price: '4 000 ₽' }],  
  torque_reserve:  [{ name: 'Настройка Torque Reserve', description: 'Преднагрев турбо для старта', price: '7 000 ₽' }],
  launch_control:  [{ name: 'Launch Control', description: 'Система контроля старта', price: '8 000 ₽' }],
  line_lock:       [{ name: 'Line Lock', description: 'Прогрев задних шин', price: '6 000 ₽' }],
  transbrake:      [{ name: 'TransBrake', description: 'Система драг-старта', price: '10 000 ₽' }],
  power_chiller:   [{ name: 'Настройка Power Chiller', description: 'Охлаждение интеркулера', price: '5 000 ₽' }],
  race_cooldown:   [{ name: 'Race Cooldown', description: 'Охлаждение после гонки', price: '4 000 ₽' }],  
  supercharger:    [{ name: 'Диагностика Supercharger', description: 'Механический нагнетатель', price: '4 000 ₽' }],
  supercharger_cal:[{ name: 'Калибровка Supercharger', description: 'Настройка наддува', price: '8 000 ₽' }],
  boost_increase:  [{ name: 'Увеличение Boost', description: 'Повышение давления наддува', price: '12 000 ₽' }],
  awd_system:      [{ name: 'Диагностика AWD', description: 'Полный привод', price: '3 000 ₽' }],
  coding:          [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  uconnect:        [{ name: 'Настройка Uconnect', description: 'Мультимедиа система', price: '4 000 ₽' }],
  srt_mode:        [{ name: 'Активация SRT режимов', description: 'Раскодировка SRT функций', price: '7 000 ₽' }],
  srt_pages:       [{ name: 'Активация SRT Performance Pages', description: 'Телеметрия производительности', price: '6 000 ₽' }],
  drag_mode:       [{ name: 'Активация Drag Mode', description: 'Драг-рейсинг режим', price: '6 000 ₽' }],
  adaptive_dampers:[{ name: 'Диагностика Adaptive Dampers', description: 'Адаптивная подвеска', price: '4 000 ₽' }],
  bilstein_setup:  [{ name: 'Настройка Bilstein', description: 'Спортивная подвеска SRT', price: '5 000 ₽' }],
  forward_collision:[{ name: 'Настройка Forward Collision', description: 'Предупреждение столкновения', price: '3 000 ₽' }],
  blind_spot:      [{ name: 'Настройка Blind Spot', description: 'Контроль слепых зон', price: '3 000 ₽' }],
  adaptive_cruise: [{ name: 'Настройка Adaptive Cruise', description: 'Адаптивный круиз', price: '4 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const dodgeData = {

  'challenger': {
    'LC дорест (2008–2010)': {
      '3.5 V6 (EGG)':                 S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe, servicePresets.diagECU),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
      '6.1 V8 SRT8':                  S(servicePresets.stage1_srt, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off),
    },
    'LC FL (2010–2014)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_545rfe, servicePresets.egr_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
      '6.4 V8 SRT8 (392)':            S(servicePresets.stage1_srt, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode),
    },
    'LA дорест (2014–2018)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.gpf_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
      '6.4 V8 Scat Pack (392)':       S(servicePresets.stage1_scat, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.line_lock),
      '6.4 V8 SRT (392)':             S(servicePresets.stage1_srt, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode, servicePresets.adaptive_dampers),
      '6.2 V8 Hellcat Supercharged':  S(servicePresets.stage1_hellcat, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.launch_control, servicePresets.line_lock),
    },
    'LA FL (2018–2023)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.gpf_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
      '6.4 V8 Scat Pack (392)':       S(servicePresets.stage1_scat, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.line_lock, servicePresets.srt_pages),
      '6.4 V8 SRT (392)':             S(servicePresets.stage1_srt, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode, servicePresets.adaptive_dampers, servicePresets.srt_pages),
      '6.2 V8 Hellcat Supercharged':  S(servicePresets.stage1_hellcat, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.supercharger_cal, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.launch_control, servicePresets.line_lock, servicePresets.power_chiller),
      '6.2 V8 Hellcat Redeye':        S(servicePresets.stage1_redeye, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.boost_increase, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.launch_control, servicePresets.transbrake, servicePresets.power_chiller, servicePresets.race_cooldown, servicePresets.srt_pages),
      '6.2 V8 Super Stock':           S(servicePresets.stage1_redeye, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.boost_increase, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.transbrake, servicePresets.power_chiller, servicePresets.drag_mode),
      '6.2 V8 Demon (2018)':          S(servicePresets.stage1_demon, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.boost_increase, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.transbrake, servicePresets.torque_reserve, servicePresets.power_chiller, servicePresets.drag_mode),
      '6.2 V8 Demon 170 (2023)':      S(servicePresets.stage1_demon, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.boost_increase, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.transbrake, servicePresets.torque_reserve, servicePresets.power_chiller, servicePresets.drag_mode),
    },
  },

  'charger': {
    'LX дорест (2005–2010)': {
      '2.7 V6':                       S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe, servicePresets.diagECU),
      '3.5 V6 (EGG)':                 S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe, servicePresets.diagECU),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
      '6.1 V8 SRT8':                  S(servicePresets.stage1_srt, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off),
    },
    'LX FL (2010–2014)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_545rfe, servicePresets.egr_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
      '6.4 V8 SRT8 (392)':            S(servicePresets.stage1_srt, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode),
    },
    'LD дорест (2014–2019)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.gpf_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
      '6.4 V8 Scat Pack (392)':       S(servicePresets.stage1_scat, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.line_lock),
      '6.4 V8 SRT (392)':             S(servicePresets.stage1_srt, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode, servicePresets.adaptive_dampers),
      '6.2 V8 Hellcat Supercharged':  S(servicePresets.stage1_hellcat, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.launch_control, servicePresets.line_lock),
    },
    'LD FL (2019–2023)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.gpf_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
      '6.4 V8 Scat Pack (392)':       S(servicePresets.stage1_scat, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.line_lock, servicePresets.srt_pages),
      '6.4 V8 SRT (392)':             S(servicePresets.stage1_srt, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode, servicePresets.adaptive_dampers, servicePresets.srt_pages),
      '6.2 V8 Hellcat Supercharged':  S(servicePresets.stage1_hellcat, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.supercharger_cal, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.launch_control, servicePresets.line_lock, servicePresets.power_chiller),
      '6.2 V8 Hellcat Redeye':        S(servicePresets.stage1_redeye, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.boost_increase, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.launch_control, servicePresets.transbrake, servicePresets.power_chiller, servicePresets.race_cooldown, servicePresets.srt_pages),
    },
    'LDII Daytona EV (2024–н.в.)': {
      'Electric Daytona':             S(servicePresets.diagECU_plus, servicePresets.coding),
    },
  },

  'durango': {
    'DN дорест (1997–2000)': {
      '3.9 V6 (Magnum)':              S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '5.2 V8 (Magnum)':              S(servicePresets.stage1_v8_hemi, servicePresets.diagTrans),
      '5.9 V8 (Magnum)':              S(servicePresets.stage1_v8_hemi, servicePresets.diagTrans),
    },
    'DN FL (2000–2003)': {
      '3.9 V6 (Magnum)':              S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe),
      '5.9 V8 (Magnum)':              S(servicePresets.stage1_v8_hemi, servicePresets.diagTrans),
    },
    'HB дорест (2003–2006)': {
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.burbles),
    },
    'HB FL (2006–2009)': {
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
    },
    'WD дорест (2010–2013)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
    },
    'WD FL (2013–2020)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.gpf_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
    },
    'WD FL2 (2020–н.в.)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.gpf_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
      '6.4 V8 SRT (392)':             S(servicePresets.stage1_srt, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode),
      '6.2 V8 Hellcat Supercharged':  S(servicePresets.stage1_hellcat, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.launch_control),
    },
  },

  'ram': {
    '1500 DS/DJ дорест (2008–2012)': {
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '4.7 V8 (PowerTech)':           S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
    },
    '1500 DS/DJ FL (2012–2018)': {
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
    },
    '1500 DT дорест (2018–2022)': {
      '3.6 V6 Pentastar eTorque':     S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.gpf_off),
      '5.7 V8 HEMI eTorque':          S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
    },
    '1500 DT FL (2022–н.в.)': {
      '3.6 V6 Pentastar eTorque':     S(servicePresets.stage1_v6_turbo, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.gpf_off),
      '5.7 V8 HEMI eTorque':          S(servicePresets.stage1_v8_hemi, servicePresets.trans_torque8, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles, servicePresets.gpf_off),
    },
    '1500 TRX (2020–н.в.)': {
      '6.2 V8 Supercharged':          S(servicePresets.stage1_hellcat, servicePresets.trans_torque8, servicePresets.supercharger, servicePresets.supercharger_cal, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off, servicePresets.launch_control),
    },
  },

  'journey': {
    'JC дорест (2008–2010)': {
      '2.4 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.7 V6':                       S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '3.5 V6 (EGG)':                 S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
    },
    'JC FL (2010–2020)': {
      '2.4 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.diagTrans, servicePresets.egr_off),
    },
  },

  'dart': {
    'PF дорест (2012–2016)': {
      '1.4 I4 Turbo (MultiAir)':      S(servicePresets.stage1_i4_turbo, servicePresets.diagTrans, servicePresets.egr_off),
      '2.0 I4 (Tigershark)':          S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.4 I4 (Tigershark)':          S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
    },
  },

  'avenger': {
    'JS дорест (2007–2010)': {
      '2.4 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.7 V6':                       S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '3.5 V6':                       S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
    },
    'JS FL (2010–2014)': {
      '2.4 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '3.6 V6 Pentastar':             S(servicePresets.stage1_v6_turbo, servicePresets.diagTrans),
    },
  },

  'caliber': {
    'PM (2006–2012)': {
      '1.8 I4':                       S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.0 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.4 I4 (WorldEngine)':         S(servicePresets.stage1_v6_na, servicePresets.diagTrans),
      '2.0 CRD Diesel':               S(servicePresets.stage1_v6_na, servicePresets.diagTrans, servicePresets.egr_off),
    },
  },

  'nitro': {
    'KA дорест (2006–2009)': {
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '4.0 V6':                       S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
    },
    'KA FL (2009–2011)': {
      '3.7 V6 (PowerTech)':           S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '4.0 V6':                       S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
    },
  },

  'magnum': {
    'LX (2004–2008)': {
      '2.7 V6':                       S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '3.5 V6':                       S(servicePresets.stage1_v6_na, servicePresets.trans_545rfe),
      '5.7 V8 HEMI':                  S(servicePresets.stage1_v8_hemi, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.mds_off, servicePresets.burbles),
      '6.1 V8 SRT8':                  S(servicePresets.stage1_srt, servicePresets.trans_545rfe, servicePresets.egr_off, servicePresets.burbles, servicePresets.vmax_off),
    },
  },

  'viper': {
    'SR I (1991–1995)': {
      '8.0 V10':                      S(servicePresets.stage1_srt, servicePresets.diagTrans, servicePresets.burbles),
    },
    'SR II (1996–2002)': {
      '8.0 V10':                      S(servicePresets.stage1_srt, servicePresets.diagTrans, servicePresets.burbles, servicePresets.vmax_off),
    },
    'ZB (2003–2010)': {
      '8.3 V10':                      S(servicePresets.stage1_srt, servicePresets.diagTrans, servicePresets.burbles, servicePresets.vmax_off),
    },
    'VX (2013–2017)': {
      '8.4 V10':                      S(servicePresets.stage1_srt, servicePresets.diagTrans, servicePresets.burbles, servicePresets.vmax_off, servicePresets.srt_mode),
    },
  },
};