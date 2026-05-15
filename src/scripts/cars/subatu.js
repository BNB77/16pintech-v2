export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '2 000 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '3 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'Lineartronic CVT/АКПП', price: '2 500 ₽' }],
  stage1_na_basic: [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '10 000 ₽' }],
  stage1_na:       [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного Boxer', price: '12 000 ₽' }],
  stage1_turbo:    [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо Boxer', price: '15 000 ₽' }],
  stage1_turbo_hi: [{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг турбо', price: '18 000 ₽' }],
  stage1_wrx:      [{ name: 'Прошивка Stage 1', description: 'WRX тюнинг (EJ20/EJ25)', price: '20 000 ₽' }],
  stage1_sti:      [{ name: 'Прошивка Stage 1', description: 'STI Performance тюнинг', price: '25 000 ₽' }],
  stage1_sti_spec: [{ name: 'Прошивка Stage 1', description: 'STI Spec C/S-серии тюнинг', price: '30 000 ₽' }],
  trans_cvt:       [{ name: 'Настройка Lineartronic CVT', description: 'Калибровка вариатора', price: '10 000 ₽' }],
  trans_cvt_sport: [{ name: 'Настройка CVT Sport', description: 'Спортивная калибровка CVT', price: '12 000 ₽' }],
  trans_5mt:       [{ name: 'Диагностика 5MT', description: '5-ступ механика', price: '2 000 ₽' }],
  trans_6mt:       [{ name: 'Диагностика 6MT', description: '6-ступ механика WRX/STI', price: '2 500 ₽' }],
  dccd_setup:      [{ name: 'Настройка DCCD', description: 'Активный центральный дифф', price: '5 000 ₽' }],
  egr_off:         [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '7 000 ₽' }],
  dpf_off:         [{ name: 'Удаление DPF', description: 'Сажевый фильтр (дизель)', price: '9 000 ₽' }],
  gpf_off:         [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '10 000 ₽' }],
  evap_off:        [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '5 000 ₽' }],
  sai_off:         [{ name: 'Отключение SAI', description: 'Вторичный воздух', price: '6 000 ₽' }],
  euro2:           [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '12 000 ₽' }],
  dtc_off:         [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '3 000 ₽' }],
  vmax_off:        [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '6 000 ₽' }],
  rev_limiter:     [{ name: 'Настройка Rev Limiter', description: 'Увеличение отсечки оборотов', price: '5 000 ₽' }],
  launch_control:  [{ name: 'Launch Control', description: 'Система контроля старта', price: '8 000 ₽' }],
  flat_foot_shift: [{ name: 'Flat Foot Shift', description: 'Переключение без сброса газа', price: '7 000 ₽' }],
  burbles:         [{ name: 'Pops & Bangs', description: 'Хлопки в выхлопе Boxer', price: '8 000 ₽' }],
  antilag:         [{ name: 'Anti-Lag система', description: 'Турбо без задержки', price: '12 000 ₽' }],  
  symmetrical_awd: [{ name: 'Диагностика Symmetrical AWD', description: 'Система полного привода', price: '3 000 ₽' }],
  xmode_coding:    [{ name: 'Настройка X-MODE', description: 'Внедорожный режим', price: '4 000 ₽' }],
  vdc_off:         [{ name: 'Отключение VDC', description: 'Контроль устойчивости', price: '4 000 ₽' }],
  eyesight_diag:   [{ name: 'Диагностика EyeSight', description: 'Система помощи водителю', price: '4 000 ₽' }],
  bilstein_setup:  [{ name: 'Настройка Bilstein', description: 'Спортивная подвеска', price: '5 000 ₽' }],
  coding:          [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '5 000 ₽' }],
  sti_mode:        [{ name: 'Активация STI режимов', description: 'Раскодировка STI функций', price: '7 000 ₽' }],
  si_drive:        [{ name: 'Настройка SI-DRIVE', description: 'Режимы работы двигателя', price: '5 000 ₽' }], 
  diesel_diag:     [{ name: 'Диагностика дизеля', description: 'EE20 диагностика', price: '3 000 ₽' }],
  dpf_off_diesel:  [{ name: 'Удаление DPF дизель', description: 'Сажевый фильтр EE20', price: '11 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const subaruData = {

  'impreza': {
    'GC/GF дорест (1992–1996)': {
      '1.5 NA (EJ15)':                S(servicePresets.stage1_na_basic, servicePresets.diagECU),
      '1.6 NA (EJ16)':                S(servicePresets.stage1_na_basic, servicePresets.diagECU),
      '1.8 NA (EJ18)':                S(servicePresets.stage1_na_basic, servicePresets.diagECU),
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '2.2 NA (EJ22)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      'WRX 2.0 Turbo (EJ20G/K)':      S(servicePresets.stage1_wrx, servicePresets.trans_5mt, servicePresets.egr_off),
    },
    'GC/GF FL (1996–2000)': {
      '1.5/1.6/1.8 NA (EJ15/16/18)':  S(servicePresets.stage1_na_basic, servicePresets.diagECU),
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      'WRX 2.0 Turbo (EJ20G/K)':      S(servicePresets.stage1_wrx, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles),
      'WRX STI 2.0 Turbo (EJ20K)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control),
      'WRX STI 22B (EJ22)':           S(servicePresets.stage1_sti_spec, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.burbles, servicePresets.antilag),
    },
    'GD/GG дорест (2000–2002)': {
      '1.5 NA (EJ15)':                S(servicePresets.stage1_na_basic, servicePresets.diagECU),
      '1.6 NA (EJ16)':                S(servicePresets.stage1_na_basic, servicePresets.diagECU),
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      'WRX 2.0 Turbo (EJ205)':        S(servicePresets.stage1_wrx, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles),
      'WRX STI 2.0 Turbo (EJ207)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control, servicePresets.antilag),
    },
    'GD/GG FL (2002–2007)': {
      '1.5 NA (EJ15/EL15)':           S(servicePresets.stage1_na_basic, servicePresets.diagECU),
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      'WRX 2.0 Turbo (EJ205)':        S(servicePresets.stage1_wrx, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles),
      'WRX 2.5 Turbo (EJ255)':        S(servicePresets.stage1_wrx, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles),
      'WRX STI 2.0 Turbo (EJ207)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control, servicePresets.antilag),
      'WRX STI 2.5 Turbo (EJ257)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control, servicePresets.antilag),
    },
    'GE/GH/GR/GV дорест (2007–2010)': {
      '1.5 NA (EL15)':                S(servicePresets.stage1_na_basic, servicePresets.trans_cvt),
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      'WRX 2.5 Turbo (EJ255)':        S(servicePresets.stage1_wrx, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.gpf_off),
      'WRX STI 2.0 Turbo (EJ207)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control, servicePresets.antilag),
      'WRX STI 2.5 Turbo (EJ257)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control, servicePresets.antilag),
    },
    'GE/GH/GR/GV FL (2010–2014)': {
      '1.5 NA (EL15)':                S(servicePresets.stage1_na_basic, servicePresets.trans_cvt),
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      'WRX 2.5 Turbo (EJ255)':        S(servicePresets.stage1_wrx, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.gpf_off),
      'WRX STI 2.0 Turbo (EJ207)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control, servicePresets.antilag),
      'WRX STI 2.5 Turbo (EJ257)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control, servicePresets.antilag),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off),
    },
    'GP/GJ дорест (2011–2014)': {
      '1.6 NA (FB16)':                S(servicePresets.stage1_na_basic, servicePresets.trans_cvt),
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive),
    },
    'GP/GJ FL (2014–2016)': {
      '1.6 NA (FB16)':                S(servicePresets.stage1_na_basic, servicePresets.trans_cvt),
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.eyesight_diag),
    },
    'GT дорест (2016–2019)': {
      '1.6 NA (FB16)':                S(servicePresets.stage1_na_basic, servicePresets.trans_cvt),
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.eyesight_diag),
    },
    'GT FL (2019–2023)': {
      '1.6 NA (FB16)':                S(servicePresets.stage1_na_basic, servicePresets.trans_cvt),
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.eyesight_diag),
    },
    'G6 (2023–н.в.)': {
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.eyesight_diag, servicePresets.gpf_off),
    },
  },

  'wrx': {
    'VA дорест (2014–2017)': {
      'WRX 2.0 Turbo (FA20)':         S(servicePresets.stage1_wrx, servicePresets.trans_6mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.gpf_off, servicePresets.flat_foot_shift),
      'WRX 2.5 Turbo (EJ255)':        S(servicePresets.stage1_wrx, servicePresets.trans_6mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.gpf_off),
      'WRX STI 2.5 Turbo (EJ257)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control, servicePresets.antilag, servicePresets.sti_mode),
    },
    'VA FL (2017–2021)': {
      'WRX 2.0 Turbo (FA20)':         S(servicePresets.stage1_wrx, servicePresets.trans_6mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.gpf_off, servicePresets.flat_foot_shift),
      'WRX STI 2.5 Turbo (EJ257)':    S(servicePresets.stage1_sti, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.egr_off, servicePresets.launch_control, servicePresets.antilag, servicePresets.sti_mode),
      'WRX STI S207/S208 (EJ20)':     S(servicePresets.stage1_sti_spec, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.bilstein_setup, servicePresets.launch_control, servicePresets.antilag),
      'WRX STI EJ20 Final Edition':   S(servicePresets.stage1_sti_spec, servicePresets.trans_6mt, servicePresets.dccd_setup, servicePresets.launch_control, servicePresets.antilag),
    },
    'VB (2021–н.в.)': {
      'WRX 2.4 Turbo (FA24)':         S(servicePresets.stage1_wrx, servicePresets.trans_6mt, servicePresets.trans_cvt_sport, servicePresets.egr_off, servicePresets.burbles, servicePresets.gpf_off, servicePresets.eyesight_diag),
    },
  },

  'legacy': {
    'BD/BG дорест (1989–1993)': {
      '1.8 NA (EJ18)':                S(servicePresets.stage1_na_basic, servicePresets.diagECU),
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '2.2 NA (EJ22)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '2.0 Turbo (EJ20G)':            S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off),
      '2.2 Turbo (EJ22T)':            S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off),
    },
    'BD/BG FL (1993–1998)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '2.2 NA (EJ22)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '2.0 Turbo (EJ20G/K)':          S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off),
    },
    'BE/BH дорест (1998–2001)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '3.0 H6 (EZ30)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      'GT 2.0 Twin Turbo (EJ20TT)':   S(servicePresets.stage1_turbo_hi, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles),
    },
    'BE/BH FL (2001–2003)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '3.0 H6 (EZ30)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      'GT 2.0 Turbo (EJ20)':          S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles),
      'GT 2.5 Turbo (EJ25)':          S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles),
    },
    'BL/BP дорест (2003–2006)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt),
      '3.0 H6 (EZ30)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      'GT 2.0 Turbo (EJ20)':          S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive),
      'GT 2.5 Turbo (EJ25)':          S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off),
    },
    'BL/BP FL (2006–2009)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive),
      '3.0 H6 (EZ30R)':               S(servicePresets.stage1_na, servicePresets.trans_5mt),
      'GT 2.5 Turbo (EJ25)':          S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off),
    },
    'BM/BR дорест (2009–2012)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive),
      '3.6 H6 (EZ36)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      'GT 2.5 Turbo (EJ25)':          S(servicePresets.stage1_turbo, servicePresets.trans_6mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive, servicePresets.gpf_off),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off),
    },
    'BM/BR FL (2012–2014)': {
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive),
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive),
      '3.6 H6 (EZ36)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      'GT 2.5 Turbo (EJ25)':          S(servicePresets.stage1_turbo, servicePresets.trans_6mt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive, servicePresets.gpf_off),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off),
    },
    'BN/BS дорест (2014–2017)': {
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.eyesight_diag),
      '3.6 H6 (EZ36)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
    },
    'BN/BS FL (2017–2020)': {
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.eyesight_diag),
      '3.6 H6 (EZ36)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
    },
    'BN дорест (2020–2024)': {
      '1.8 Turbo (CB18)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.eyesight_diag, servicePresets.gpf_off),
      '2.4 Turbo (FA24)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.eyesight_diag, servicePresets.gpf_off),
    },
  },

  'outback': {
    'BG дорест (1995–1998)': {
      '2.2 NA (EJ22)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
    },
    'BH дорест (1998–2003)': {
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      '3.0 H6 (EZ30)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
    },
    'BH FL (2003–2003)': {
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding),
      '3.0 H6 (EZ30)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
    },
    'BP дорест (2003–2006)': {
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding),
      '3.0 H6 (EZ30)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      '2.5 Turbo (EJ25)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off, servicePresets.xmode_coding),
    },
    'BP FL (2006–2009)': {
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.xmode_coding),
      '3.0 H6 (EZ30R)':               S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      '2.5 Turbo (EJ25)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.si_drive, servicePresets.xmode_coding),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off, servicePresets.xmode_coding),
    },
    'BR дорест (2009–2012)': {
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.xmode_coding),
      '3.6 H6 (EZ36)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off, servicePresets.xmode_coding),
    },
    'BR FL (2012–2014)': {
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.xmode_coding),
      '3.6 H6 (EZ36)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off, servicePresets.xmode_coding),
    },
    'BS дорест (2014–2017)': {
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.xmode_coding, servicePresets.eyesight_diag),
      '3.6 H6 (EZ36)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding, servicePresets.eyesight_diag),
    },
    'BS FL (2017–2021)': {
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.xmode_coding, servicePresets.eyesight_diag),
      '3.6 H6 (EZ36)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding, servicePresets.eyesight_diag),
    },
    'BT дорест (2019–2024)': {
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.xmode_coding, servicePresets.eyesight_diag),
      '2.4 Turbo (FA24)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.xmode_coding, servicePresets.eyesight_diag, servicePresets.gpf_off),
    },
    'BT FL (2024–н.в.)': {
      '1.8 Turbo (CB18)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.xmode_coding, servicePresets.eyesight_diag, servicePresets.gpf_off),
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.si_drive, servicePresets.xmode_coding, servicePresets.eyesight_diag),
    },
  },

  'forester': {
    'SF дорест (1997–2000)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      '2.0 Turbo (EJ20)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding),
    },
    'SF FL (2000–2002)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      '2.0 Turbo (EJ20)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles),
    },
    'SG дорест (2002–2005)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_5mt, servicePresets.xmode_coding),
      '2.0 Turbo (EJ20)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles),
      '2.5 Turbo (EJ25)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles),
    },
    'SG FL (2005–2008)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding),
      '2.0 Turbo (EJ20)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles),
      '2.5 Turbo (EJ25)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles),
    },
    'SH дорест (2007–2010)': {
      '2.0 NA (EJ20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding),
      '2.5 NA (EJ25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding),
      '2.0 Turbo (EJ20)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles, servicePresets.si_drive),
      '2.5 Turbo (EJ25)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles, servicePresets.si_drive),
    },
    'SH FL (2010–2012)': {
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive),
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive),
      '2.0 Turbo (EJ20)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles, servicePresets.si_drive),
      '2.5 Turbo (EJ25)':             S(servicePresets.stage1_turbo, servicePresets.trans_5mt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles, servicePresets.si_drive),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off, servicePresets.xmode_coding),
    },
    'SJ дорест (2012–2015)': {
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive),
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive),
      '2.0 Turbo XT (FA20)':          S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles, servicePresets.si_drive, servicePresets.gpf_off),
      'Diesel 2.0 (EE20)':            S(servicePresets.diesel_diag, servicePresets.dpf_off_diesel, servicePresets.egr_off, servicePresets.xmode_coding),
    },
    'SJ FL (2015–2018)': {
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
      '2.0 Turbo XT (FA20)':          S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles, servicePresets.si_drive, servicePresets.gpf_off),
    },
    'SK дорест (2018–2021)': {
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
      '1.8 Turbo Sport (CB18)':       S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles, servicePresets.si_drive, servicePresets.gpf_off),
    },
    'SK FL (2021–2024)': {
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
      '1.8 Turbo Sport (CB18)':       S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.burbles, servicePresets.si_drive, servicePresets.gpf_off),
    },
    'S6 (2024–н.в.)': {
      '2.5 NA (FB25)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
    },
  },

  'xv/crosstrek': {
    'GP дорест (2011–2015)': {
      '1.6 NA (FB16)':                S(servicePresets.stage1_na_basic, servicePresets.trans_cvt, servicePresets.xmode_coding),
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive),
    },
    'GP FL (2015–2017)': {
      '1.6 NA (FB16)':                S(servicePresets.stage1_na_basic, servicePresets.trans_cvt, servicePresets.xmode_coding),
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
    },
    'GT дорест (2017–2020)': {
      '1.6 NA (FB16)':                S(servicePresets.stage1_na_basic, servicePresets.trans_cvt, servicePresets.xmode_coding),
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
    },
    'GT FL (2020–2023)': {
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag),
    },
    'GU (2023–н.в.)': {
      '2.0 NA (FB20)':                S(servicePresets.stage1_na, servicePresets.trans_cvt, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag, servicePresets.gpf_off),
    },
  },

  'levorg': {
    'VM дорест (2014–2017)': {
      '1.6 Turbo (FB16)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive),
      '2.0 Turbo (FA20)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive, servicePresets.gpf_off),
    },
    'VM FL (2017–2020)': {
      '1.6 Turbo (FB16)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive, servicePresets.eyesight_diag),
      '2.0 Turbo (FA20)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive, servicePresets.eyesight_diag, servicePresets.gpf_off),
      'STI Sport 2.0 Turbo (FA20)':   S(servicePresets.stage1_sti, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.burbles, servicePresets.sti_mode, servicePresets.bilstein_setup),
    },
    'VN (2020–н.в.)': {
      '1.8 Turbo (CB18)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.burbles, servicePresets.si_drive, servicePresets.eyesight_diag, servicePresets.gpf_off),
      'STI Sport 1.8 Turbo (CB18)':   S(servicePresets.stage1_sti, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.burbles, servicePresets.sti_mode, servicePresets.eyesight_diag),
    },
  },

  'brz': {
    'ZC дорест (2012–2016)': {
      '2.0 NA (FA20)':                S(servicePresets.stage1_na, servicePresets.trans_6mt, servicePresets.burbles, servicePresets.vmax_off, servicePresets.rev_limiter),
    },
    'ZC FL (2016–2021)': {
      '2.0 NA (FA20)':                S(servicePresets.stage1_na, servicePresets.trans_6mt, servicePresets.burbles, servicePresets.vmax_off, servicePresets.rev_limiter),
    },
    'ZD (2021–н.в.)': {
      '2.4 NA (FA24)':                S(servicePresets.stage1_na, servicePresets.trans_6mt, servicePresets.burbles, servicePresets.vmax_off, servicePresets.rev_limiter, servicePresets.gpf_off),
    },
  },

  'tribeca': {
    'B9 (2005–2007)': {
      '3.0 H6 (EZ30)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
    },
    'B9 FL (2007–2014)': {
      '3.6 H6 (EZ36)':                S(servicePresets.stage1_na, servicePresets.trans_5mt),
    },
  },

  'ascent': {
    '(2018–2023)': {
      '2.4 Turbo (FA24)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag, servicePresets.gpf_off),
    },
    'FL (2023–н.в.)': {
      '2.4 Turbo (FA24)':             S(servicePresets.stage1_turbo, servicePresets.trans_cvt, servicePresets.egr_off, servicePresets.xmode_coding, servicePresets.si_drive, servicePresets.eyesight_diag, servicePresets.gpf_off),
    },
  },

  'wrx sti': { 'см. WRX соответствующего поколения': S() },
  'impreza wrx': { 'см. Impreza соответствующего поколения': S() },
  'impreza wrx sti': { 'см. Impreza соответствующего поколения': S() },
  'legacy outback': { 'см. Outback соответствующего поколения': S() },
};