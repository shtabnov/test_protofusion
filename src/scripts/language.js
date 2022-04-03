const language = new CustomSelect('#language', {
    name: 'language', // значение атрибута name у кнопки
    targetValue: 'eng', // значение по умолчанию
    options: [
      ['rus', 'Russian'],
      ['txt', 'text'],
      ['eng', 'English'],
      ['txt', 'text'],
      ['ua', 'Ukrainian'],
      ['txt', 'text'],
      ['bu', 'Belorussian'],
      ['txt', 'text'],
      ['txt', 'text'],
      ['txt', 'text'],
      ['txt', 'text'],
      ['txt', 'text']
    ], // опции
  });