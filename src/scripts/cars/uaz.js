export const servicePresets = {
  diagECU:        [{ name: 'Диагностика ЭБУ', description: 'Полная компьютерная диагностика', price: '1 200 ₽' }],
  diagECU_plus:   [{ name: 'Диагностика ЭБУ', description: 'Расширенная диагностика с логами', price: '2 000 ₽' }],
  diagTrans:      [{ name: 'Диагностика трансмиссии', description: 'АКПП/раздатка', price: '1 500 ₽' }],
  stage1_basic:   [{ name: 'Прошивка Stage 1', description: 'Базовая оптимизация ДВС', price: '7 000 ₽' }],
  stage1_na:      [{ name: 'Прошивка Stage 1', description: 'Оптимизация атмосферного ДВС', price: '8 000 ₽' }],
  stage1_diesel:  [{ name: 'Прошивка Stage 1', description: 'Тюнинг дизельного двигателя', price: '10 000 ₽' }],
  trans_auto:     [{ name: 'Настройка АКПП', description: 'Калибровка автомата', price: '7 000 ₽' }],
  egr_off:        [{ name: 'Отключение EGR', description: 'Клапан рециркуляции', price: '4 000 ₽' }],
  dpf_off:        [{ name: 'Удаление DPF', description: 'Сажевый фильтр', price: '6 000 ₽' }],
  adblue_off:     [{ name: 'Отключение AdBlue (SCR)', description: 'Удаление системы мочевины', price: '7 000 ₽' }],
  vmax_off:       [{ name: 'Снятие ограничения Vmax', description: 'Разблокировка скорости', price: '4 000 ₽' }],
  maf_off:        [{ name: 'Отключение MAF', description: 'Расходомер воздуха', price: '3 000 ₽' }],
  evap_off:       [{ name: 'Отключение EVAP', description: 'Адсорбер топливных паров', price: '3 500 ₽' }],
  euro2:          [{ name: 'Прошивка на Евро 2', description: 'Отключение всей экологии', price: '8 000 ₽' }],
  dtc_off:        [{ name: 'Отключение DTC', description: 'Удаление кодов ошибок', price: '2 000 ₽' }],
  immo_off:       [{ name: 'Отключение иммобилайзера', description: 'Программное отключение', price: '5 000 ₽' }],
  lambda_off:     [{ name: 'Отключение лямбда-зондов', description: 'O2 sensor off', price: '3 500 ₽' }],
  cat_off:        [{ name: 'Удаление катализатора', description: 'Cat off программно', price: '5 000 ₽' }],
  coding:         [{ name: 'Кодирование функций', description: 'Настройка параметров', price: '3 000 ₽' }],
};

const S = (...sets) => sets.flat();

export const uazData = {

  'patriot': {
    '3163 дорест (2005–2012)': {
      'ЗМЗ-409 2.7 (128 л.с.)':       S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.immo_off),
      'ЗМЗ-40906 2.7 (135 л.с.)':     S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.euro2),
      'ЗМЗ-51432 2.2 Турбодизель':    S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.diagECU, servicePresets.euro2),
    },
    '3163 FL1 (2012–2014)': {
      'ЗМЗ-40905 2.7 (128 л.с.)':     S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-40906 2.7 (135 л.с.)':     S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-51432 2.2 Турбодизель':    S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.diagECU, servicePresets.euro2),
    },
    '3163 FL2 (2014–2016)': {
      'ЗМЗ-40905 2.7 Евро-4':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-51432 2.2 Турбодизель':    S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.diagECU, servicePresets.euro2),
      'ЗМЗ-51432CRS 2.2 Турбодизель': S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.diagECU, servicePresets.euro2),
    },
    '3163 FL3 (2016–2019)': {
      'ЗМЗ-40905 2.7 Евро-5 (150 л.с.)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-51432CRS 2.2 Турбодизель': S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.diagECU, servicePresets.euro2),
    },
    '3163 FL4 (2019–2023)': {
      'ЗМЗ-40905 2.7 Евро-5 (150 л.с.)': S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-51432CRS 2.2 Турбодизель': S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.adblue_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'Рестайлинг (2023–н.в.)': {
      'ЗМЗ-40905 2.7 Евро-5 (150 л.с.)': S(servicePresets.stage1_na, servicePresets.trans_auto, servicePresets.diagECU, servicePresets.diagTrans, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-51432CRS 2.2 Турбодизель': S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.adblue_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'hunter': {
    '315195 дорест (2003–2010)': {
      'ЗМЗ-409 2.7':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.immo_off),
      'УМЗ-4178 2.9':                 S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.immo_off),
    },
    '315195 FL (2010–2016)': {
      'ЗМЗ-409 2.7 Евро-3/4':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-40905 2.7':                S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.euro2, servicePresets.coding),
    },
    '315195 FL2 (2016–2023)': {
      'ЗМЗ-40905 2.7 Евро-5':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
    'Рестайлинг (2023–н.в.)': {
      'ЗМЗ-40905 2.7 Евро-5 (150 л.с.)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
  },

  'pickup': {
    '2363 дорест (2008–2014)': {
      'ЗМЗ-409 2.7':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.euro2),
      'ЗМЗ-40905 2.7':                S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.euro2),
    },
    '2363 FL (2014–2017)': {
      'ЗМЗ-40905 2.7 Евро-4':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
    '2363 FL2 (2017–2023)': {
      'ЗМЗ-40905 2.7 Евро-5':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
    'Рестайлинг (2023–н.в.)': {
      'ЗМЗ-40905 2.7 Евро-5 (150 л.с.)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
  },

  'буханка': {
    '452/2206 классика (1965–2011)': {
      'УМЗ-417 2.4':                  S(servicePresets.stage1_basic, servicePresets.diagECU),
      'УМЗ-4178 2.9':                 S(servicePresets.stage1_basic, servicePresets.diagECU),
      'ЗМЗ-409 2.7':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off),
    },
    '452/2206 обновление (2011–2016)': {
      'ЗМЗ-409 2.7 Евро-3/4':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.euro2),
      'ЗМЗ-40905 2.7':                S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.euro2),
    },
    '452/2206/3303/3909 (2016–2023)': {
      'ЗМЗ-40905 2.7 Евро-5':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
    'Рестайлинг (2023–н.в.)': {
      'ЗМЗ-40905 2.7 Евро-5 (150 л.с.)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
  },

  'профи': {
    '236021 (2017–2019)': {
      'ЗМЗ-40905 2.7 Евро-5':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
    '236021 FL (2019–2021)': {
      'ЗМЗ-40905 2.7 Евро-5':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-51432CRS 2.2 Турбодизель': S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.adblue_off, servicePresets.diagECU, servicePresets.euro2),
    },
    '236021 FL2 (2021–2023)': {
      'ЗМЗ-40905 2.7 Евро-5 (150 л.с.)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-51432CRS 2.2 Турбодизель': S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.adblue_off, servicePresets.diagECU, servicePresets.euro2),
    },
    'Рестайлинг (2023–н.в.)': {
      'ЗМЗ-40905 2.7 Евро-5 (150 л.с.)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
      'ЗМЗ-51432CRS 2.2 Турбодизель': S(servicePresets.stage1_diesel, servicePresets.egr_off, servicePresets.dpf_off, servicePresets.adblue_off, servicePresets.diagECU, servicePresets.euro2),
    },
  },

  'cargo': {
    '3303 (1985–2023)': {
      'УМЗ-4178 2.9':                 S(servicePresets.stage1_basic, servicePresets.diagECU),
      'ЗМЗ-409 2.7':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off),
      'ЗМЗ-40905 2.7 Евро-5':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
    'Рестайлинг (2023–н.в.)': {
      'ЗМЗ-40905 2.7 Евро-5 (150 л.с.)': S(servicePresets.stage1_na, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
  },

  '469': {
    'см. Hunter соответствующего года': S(),
  },

  'baks': {
    '3909 (1985–2023)': {
      'УМЗ-4178 2.9':                 S(servicePresets.stage1_basic, servicePresets.diagECU),
      'ЗМЗ-409 2.7':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off),
      'ЗМЗ-40905 2.7 Евро-5':         S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off, servicePresets.cat_off, servicePresets.euro2, servicePresets.coding),
    },
  },

  'simba': {
    '3162 (2000–2005)': {
      'ЗМЗ-409 2.7':                  S(servicePresets.stage1_basic, servicePresets.diagECU, servicePresets.lambda_off),
    },
  },
};
