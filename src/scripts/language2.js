const language = new CustomSelect('#language', {
    name: 'language', // значение атрибута name у кнопки
    targetValue: 'eng', // значение по умолчанию
    options: [['rus', 'Russian'], ['eng', 'English'], ['ua', 'Ukrainian'], ['bu', 'Belorussian']], // опции
  });