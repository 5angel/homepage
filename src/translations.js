export const translations = {
  en: {
    'logo': 'KOZULIA',
    'subtitle': "If you're stuck and need another brain and a fresh perspective, book a consultation with me",
    'apply': 'Apply',
    'period.month': '/month',
    'tier.consultant.title': 'Consultant',
    'tier.consultant.description': ['One FREE 15-minute session'],
    'tier.consultant.buttonText': 'Apply FREE',
    'tier.advisor.title': 'Advisor',
    'tier.advisor.description': [
      'Async support via Telegram',
      'Short questions/quick replies, typically within the day'
    ],
    'tier.guide.title': 'Guide',
    'tier.guide.description': ['One 60 minute session'],
    'tier.coach.title': 'Coach',
    'tier.coach.description': [
      'Three 15-minute sessions per&nbsp;week',
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
      'Ongoing support via Telegram between sessions'
    ]
  },
  ru: {
    'logo': 'КОЗУЛЯ',
    'subtitle': 'Если вы застряли и нужен другой взгляд и свежая перспектива, запишитесь на консультацию',
    'apply': 'Заказать',
    'period.month': '/месяц',
    'tier.consultant.title': 'Консультант',
    'tier.consultant.description': ['Одна БЕСПЛАТНАЯ сессия&nbsp;15 мин'],
    'tier.consultant.buttonText': 'БЕСПЛАТНО',
    'tier.advisor.title': 'Советник',
    'tier.advisor.description': [
      'Асинхронная поддержка в&nbsp;Telegram',
      'Короткие вопросы, быстрые ответы, обычно в течение дня'
    ],
    'tier.guide.title': 'Гид',
    'tier.guide.description': ['Одна сессия 60 мин'],
    'tier.coach.title': 'Коуч',
    'tier.coach.description': [
      'Три сессии пo 15 мин раз в&nbsp;неделю',
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
      'Постоянная поддержка в&nbsp;Telegram между сессиями'
    ]
  }
}

export function t(lang, key) {
  return translations[lang]?.[key]
}
