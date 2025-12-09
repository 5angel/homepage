export const translations = {
  en: {
    'greeting': 'Hi, this is Vlad',
    'logo': 'KOZULIA',
    'blog.label': 'personal blog (ru)',
    'blog.title': 'HOW TO BE CTO',
    'pitch': [
      "I spent 20 years burning out in IT until I hit a wall. Now I'm a CEO/CTO helping individuals and companies avoid the mistakes I made myself.",
      "If you're stuck and need a second head and a fresh perspective, let's jump on a 15-minute call — no charge.",
      'If it\'s useful, we can continue afterward on a paid basis.'
    ],
    'apply': 'Apply',
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
      '20 лет я выгорал в айти, пока не дошел до ручки — теперь я CEO/CTO и помогаю людям и компаниям избегать ошибки, которые совершал сам.',
      'Если вы застряли, и вам нужна вторая голова и свежий взгляд, го созвонимся на 15 минут. Без оплаты.',
      'А дальше можем продолжить уже за деньги'
    ],
    'apply': 'Заказать',
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
