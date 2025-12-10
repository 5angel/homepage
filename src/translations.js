export const translations = {
  en: {
    'greeting': 'Hi, this is Vlad',
    'logo': 'KOZULIA',
    'blog.label': 'personal blog (ru)',
    'blog.title': 'HOW TO BE CTO',
    'pitch': [
      'For 20 years I\'ve worked at the intersection of&nbsp;management and technology.',
      'Now I work as a CEO/CTO consultant, saving others years of pain, money, and frustration.',
      'Stuck and need a clear, external perspective? Let\'s jump on a 15-minute call — free of charge.',
      'If it\'s useful, we can talk about working together for&nbsp;real.'
    ],
    'apply': 'Apply',
    'bookCall': 'Book a call',
    'period.month': 'month',
    'heading.individual': 'Individual tiers',
    'heading.corporate': 'Corporate tiers',
    'tier.consultant.title': 'Consultant',
    'tier.consultant.description': ['One FREE 15-minute session'],
    'tier.consultant.buttonText': 'Apply FREE',
    'tier.advisor.title': 'Advisor',
    'tier.advisor.description': [
      'Async support via Telegram or&nbsp;Slack',
      'Short questions/quick replies, typically within the day'
    ],
    'tier.expert.title': 'Expert',
    'tier.expert.description': ['One 60 minute session'],
    'tier.coach.title': 'Coach',
    'tier.coach.description': [
      'Three 15-minute sessions',
      'Ongoing support via Telegram between sessions'
    ],
    'tier.mentor.title': 'Mentor',
    'tier.mentor.description': [
      '45-minute sessions every 2&nbsp;weeks',
      'Ongoing support via Telegram between sessions'
    ],
    'tier.partner.title': 'Partner',
    'tier.partner.description': [
      '60-minute session every week',
      'Ongoing support via Telegram or&nbsp;Slack between sessions'
    ]
  },
  ru: {
    'greeting': 'Привет, это Влад',
    'logo': 'КОЗУЛЯ',
    'blog.label': 'личный блог',
    'blog.title': 'КАК СТАТЬ СТО',
    'pitch': [
      '20 лет я работаю на стыке технологий и&nbsp;управления.',
      'Теперь я CEO/CTO-консультант и экономлю другим годы боли, денег и нервов.',
      'Буксуете и нужен здравый внешний взгляд? Давайте созвонимся на 15 минут, бесплатно.',
      'Будет польза — обсудим работу уже за&nbsp;деньги.'
    ],
    'apply': 'Заказать',
    'bookCall': 'Записаться',
    'period.month': 'месяц',
    'heading.individual': 'Индивидуальные тарифы',
    'heading.corporate': 'Корпоративные тарифы',
    'tier.consultant.title': 'Консультант',
    'tier.consultant.description': ['Одна БЕСПЛАТНАЯ сессия&nbsp;15 мин'],
    'tier.consultant.buttonText': 'БЕСПЛАТНО',
    'tier.advisor.title': 'Советник',
    'tier.advisor.description': [
      'Асинхронная поддержка в&nbsp;Telegram или&nbsp;Slack',
      'Короткие вопросы, быстрые ответы, обычно в течение дня'
    ],
    'tier.expert.title': 'Эксперт',
    'tier.expert.description': ['Одна сессия 60 мин'],
    'tier.coach.title': 'Коуч',
    'tier.coach.description': [
      'Три сессии пo 15 мин',
      'Постоянная поддержка в&nbsp;Telegram между сессиями'
    ],
    'tier.mentor.title': 'Ментор',
    'tier.mentor.description': [
      'Сессии по 45 мин каждые 2&nbsp;недели',
      'Постоянная поддержка в&nbsp;Telegram между сессиями'
    ],
    'tier.partner.title': 'Партнер',
    'tier.partner.description': [
      'Cессии по 60 мин каждую&nbsp;неделю',
      'Постоянная поддержка в&nbsp;Telegram или&nbsp;Slack между сессиями'
    ]
  }
}

export function t(lang, key) {
  return translations[lang]?.[key]
}
