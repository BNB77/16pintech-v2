export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 500 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 500 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/Роботизированная КПП', price: '2 000 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация атмо ДВС', price: '8 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '10 000 ₽' }],
  stage1_turbo:   [{ name: 'Прошивка Stage 1', description: 'Тюнинг турбо двигателя', price: '12 000 ₽' }],
  stage1_turbo_hi:[{ name: 'Прошивка Stage 1', description: 'Производительный тюнинг', price: '15 000 ₽' }],
  stage1_multiair:[{ name: 'Прошивка Stage 1', description: 'Оптимизация MultiAir', price: '13 000 ₽' }],
  stage1_tjet:    [{ name: 'Прошивка Stage 1', description: 'T-Jet спортивный тюнинг', price: '16 000 ₽' }],
  trans_aisin:    [{ name: 'Настройка АКПП Aisin', description: 'Калибровка автомата Aisin', price: '8 000 ₽' }],
  trans_mta:      [{ name: 'Настройка MTA', description: 'Роботизированная КПП', price: '7 000 ₽' }],
  trans_dualogic: [{ name: 'Настройка Dualogic', description: 'Система Dualogic', price: '7 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '6 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '8 000 ₽' }],
  dpf_off_adblue: [{ name: 'Удаление DPF + AdBlue', description: 'DPF + мочевина SCR', price: '10 000 ₽' }],
  gpf_off:        [{ name: 'Удаление GPF/OPF', description: 'Фильтр частиц бензиновых', price: '9 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '7 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Limiter - разблокировка скорости', price: '5 000 ₽' }],
  flaps_off:      [{ name: 'Отключение вихревых заслонок', description: 'Flaps - во впускном коллекторе', price: '4 500 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Maf - расходомер воздуха', price: '3 500 ₽' }],
  tva_off:        [{ name: 'Отключение TVA', description: 'Tva - дросельная заслонка', price: '3 500 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Evap - адсорбер топливных паров', price: '4 500 ₽' }],
  sap_off:        [{ name: 'Отключение SAP', description: 'Sap - вторичный воздух', price: '5 000 ₽' }],
  burbles:        [{ name: 'Pops & Bangs', description: 'Хлопки и выстрелы в выхлопе', price: '7 000 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Euro - отключение всей экологии', price: '10 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Dtc - удаление кодов ошибок', price: '2 500 ₽' }],
  disconnect_sens:[{ name: 'Disconnect Sensors', description: 'Снять разъемы с отключаемых систем', price: '1 500 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Раскодировка опций', price: '4 000 ₽' }],
  start_stop:     [{ name: 'Отключение Start/Stop', description: 'Система старт-стоп', price: '3 000 ₽' }],
  lambda_off:     [{ name: 'Отключение лямбда-зондов', description: 'Lambda - кислородные датчики', price: '5 000 ₽' }],
  immo_off:       [{ name: 'Отключение иммобилайзера', description: 'Immo - противоугонная система', price: '6 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const lanciaData = {

  'delta': {
    'III поколение дорест (2008–2011)': {
      '1.4 T-Jet 16V (120 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.start_stop),
      '1.4 T-Jet 16V (150 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.gpf_off),
      '1.8 T-Jet 16V (200 л.с.)':     S(servicePresets.stage1_tjet, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.gpf_off),
      '1.6 MultiJet 16V (105 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.6 MultiJet 16V (120 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.9 MultiJet 16V (190 л.с.)':  S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      '2.0 MultiJet 16V (165 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
    },
    'III поколение рестайлинг (2011–2014)': {
      '1.4 T-Jet 16V (120 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.gpf_off),
      '1.4 MultiAir 16V (140 л.с.)':  S(servicePresets.stage1_multiair, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.gpf_off),
      '1.4 T-Jet 16V (150 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.gpf_off),
      '1.8 T-Jet 16V (200 л.с.)':     S(servicePresets.stage1_tjet, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.vmax_off, servicePresets.gpf_off),
      '1.6 MultiJet 16V (105 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.6 MultiJet II 16V (120 л.с.)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.0 MultiJet II 16V (165 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
    },
  },

  'ypsilon': {
    'II поколение Type 843 дорест (2003–2006)': {
      '1.2 8V (60 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.2 16V (80 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.4 16V (95 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '1.3 MultiJet 16V (70 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.3 MultiJet 16V (90 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'II поколение Type 843 FL (2006–2011)': {
      '1.2 8V (60 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.2 16V (69 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.4 16V (95 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '1.4 16V Sport (100 л.с.)':     S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      '1.3 MultiJet 16V (75 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.3 MultiJet 16V (90 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.3 MultiJet 16V (105 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'III поколение Type 846 дорест (2011–2015)': {
      '0.9 TwinAir Turbo (85 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles),
      '1.2 8V (69 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.2 LPG (69 л.с.)':            S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.3 MultiJet II 16V (95 л.с.)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'III поколение Type 846 FL (2015–2024)': {
      '0.9 TwinAir Turbo (85 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.burbles, servicePresets.gpf_off),
      '1.0 FireFly Turbo (70 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.gpf_off),
      '1.2 8V (69 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding, servicePresets.gpf_off),
      '1.3 MultiJet II 16V (95 л.с.)': S(servicePresets.stage1_turbo, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'thema': {
    'I поколение Type 834 дорест (1984–1988)': {
      '2.0 i.e. Turbo (165 л.с.)':    S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.0 i.e. 16V (150 л.с.)':      S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.0 Turbo 16V (185 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.5 V6 (150 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.8 V6 (150 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.5 TD (100 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
      '8.32 V8 Ferrari (215 л.с.)':   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.vmax_off, servicePresets.burbles),
    },
    'I поколение Type 834 FL (1988–1994)': {
      '2.0 i.e. 8V (113 л.с.)':       S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '2.0 i.e. 16V (150 л.с.)':      S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.0 Turbo 16V (185 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.0 Turbo 16V (205 л.с.)':     S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '3.0 V6 (181 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.5 TD (115 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
      '8.32 V8 Ferrari (215 л.с.)':   S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.vmax_off, servicePresets.burbles),
    },
    'II поколение (2011–2014)': {
      '3.0 V6 MultiJet II (190 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_aisin, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      '3.0 V6 MultiJet II (239 л.с.)': S(servicePresets.stage1_turbo_hi, servicePresets.trans_aisin, servicePresets.dpf_off_adblue, servicePresets.egr_off, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.euro2, servicePresets.vmax_off),
      '3.6 V6 Pentastar (286 л.с.)':  S(servicePresets.stage1_turbo_hi, servicePresets.trans_aisin, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
    },
  },

  'musa': {
    'I поколение дорест (2004–2007)': {
      '1.4 16V (95 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '1.6 16V (103 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '1.3 MultiJet 16V (70 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.3 MultiJet 16V (90 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.9 MultiJet 8V (100 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.9 MultiJet 16V (120 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'I поколение FL (2007–2012)': {
      '1.4 16V (95 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '1.4 16V LPG (78 л.с.)':        S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.6 16V (103 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '1.3 MultiJet 16V (85 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.3 MultiJet 16V (95 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.6 MultiJet 16V (116 л.с.)':  S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.9 MultiJet 8V (100 л.с.)':   S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'thesis': {
    'I поколение (2001–2009)': {
      '2.0 Turbo 20V (185 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.4 JTD 20V (150 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.4 JTD 20V (175 л.с.)':       S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
      '3.0 V6 24V (215 л.с.)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '3.2 V6 24V (230 л.с.)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'lybra': {
    'I поколение Type 839 дорест (1999–2002)': {
      '1.6 16V (103 л.с.)':           S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.8 16V (131 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.0 20V (154 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '1.9 JTD (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.9 JTD (115 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.4 JTD (136 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'I поколение Type 839 FL (2002–2005)': {
      '1.6 16V (103 л.с.)':           S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.coding),
      '1.8 16V (131 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.0 20V (150 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '1.9 JTD (115 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '1.9 MultiJet (120 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.4 JTD (140 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.4 JTD (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'phedra': {
    'I поколение дорест (2002–2005)': {
      '2.0 16V (136 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '3.0 V6 24V (204 л.с.)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.0 JTD (109 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.0 JTD (120 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.2 JTD (128 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.2 JTD (170 л.с.)':           S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
    },
    'I поколение FL (2005–2010)': {
      '2.0 16V (140 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '3.0 V6 24V (207 л.с.)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.0 MultiJet (120 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.0 MultiJet (136 л.с.)':      S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '2.2 MultiJet (170 л.с.)':      S(servicePresets.stage1_turbo_hi, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2, servicePresets.vmax_off),
    },
  },

  'kappa': {
    'I поколение Type 838 дорест (1994–1998)': {
      '2.0 20V (150 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.0 Turbo 20V (205 л.с.)':     S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.4 20V (175 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '3.0 V6 24V (204 л.с.)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.4 TD (124 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
      '2.4 JTD (136 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
    },
    'I поколение Type 838 FL (1998–2001)': {
      '2.0 20V (150 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.0 Turbo 20V (220 л.с.)':     S(servicePresets.stage1_turbo_hi, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off, servicePresets.burbles),
      '2.4 20V (175 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '3.0 V6 24V (204 л.с.)':        S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '2.4 JTD (136 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
      '2.4 JTD (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
    },
  },

  'voyager': {
    'II поколение (1988–1995)': {
      '2.5 i (118 л.с.)':             S(servicePresets.stage1_basic, servicePresets.diagECU),
      '3.0 V6 (141 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '3.3 V6 (150 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.5 TD (116 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
    },
    'III поколение (1995–2001)': {
      '2.4 (151 л.с.)':               S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '3.3 V6 (158 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.5 TD (116 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU),
    },
    'IV поколение (2001–2008)': {
      '2.4 (143 л.с.)':               S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.8 CRD (150 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.dpf_off, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
      '3.3 V6 (174 л.с.)':            S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
    },
  },

  'dedra': {
    'I поколение Type 835 (1989–1999)': {
      '1.6 i.e. (90 л.с.)':           S(servicePresets.stage1_basic, servicePresets.diagECU),
      '1.8 i.e. (103 л.с.)':          S(servicePresets.stage1_basic, servicePresets.diagECU),
      '2.0 i.e. (113 л.с.)':          S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.0 Turbo (177 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.vmax_off),
      '1.9 TD (90 л.с.)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
      '1.9 TDS (105 л.с.)':           S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
    },
  },

  'zeta': {
    'I поколение (1994–2002)': {
      '2.0 16V (147 л.с.)':           S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.coding),
      '2.0 Turbo (204 л.с.)':         S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.coding, servicePresets.vmax_off),
      '1.9 TD (90 л.с.)':             S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
      '2.1 TD (109 л.с.)':            S(servicePresets.stage1_turbo, servicePresets.diagECU, servicePresets.egr_off),
    },
  },

};
