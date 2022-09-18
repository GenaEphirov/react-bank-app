
// Module exports object that contains languages that will be inserted into the site
const translation = {
  russian: {
    header: {
      main: 'Главная',
      support: 'Поддержка',
      officies: 'Офисы',
    }
  }
}

const getLanguage = lang => {
  return translation[lang];
}

export default getLanguage