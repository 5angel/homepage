export const translations = {
  en: {
    'greeting': 'Hi, this is Vlad',
    'logo': 'KOZULIA',
    'blog.label': 'personal blog (ru)',
    'blog.title': 'HOW TO BE CTO',
    'pitch': [
      'For 20 years I\'ve worked at the intersection of&nbsp;management and technology.',
      'Now I work as a CTO consultant, saving others years of pain, money, and frustration.',
      'Stuck and need a clear, external perspective? Let\'s jump on a 15-minute call — free of charge.',
      'If useful, then we can talk about the money.'
    ],
    'bookCall': 'Book a call'
  },
  ru: {
    'greeting': 'Привет, это Влад',
    'logo': 'КОЗУЛЯ',
    'blog.label': 'личный блог',
    'blog.title': 'КАК СТАТЬ СТО',
    'pitch': [
      '20 лет я работаю на стыке технологий и&nbsp;управления.',
      'Теперь я CTO-консультант и экономлю другим годы боли, денег и нервов.',
      'Буксуете и нужен здравый внешний взгляд? Давайте созвонимся на 15 минут, бесплатно.',
      'Будет польза — обсудим работу уже за&nbsp;деньги.'
    ],
    'bookCall': 'Записаться'
  }
}

export function t(lang, key) {
  return translations[lang]?.[key]
}
