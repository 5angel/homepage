export interface PricingTier {
  title: string
  price: number
  period: string
  description: string[]
  hasButton?: boolean
  buttonText?: string
  buttonLink?: string
  buttonType?: 'book' | 'apply'
  brandColor?: string
}

export const pricingTiers: PricingTier[] = [
  {
    title: 'Consultant',
    price: 0,
    period: '',
    description: [
      'One FREE 15-minute session'
    ],
    hasButton: true,
    buttonText: 'Apply FREE',
    buttonLink: 'https://calendly.com/kozulia/free-call',
    buttonType: 'book'
  },
  {
    title: 'Advisor',
    price: 100,
    period: '/month',
    description: [
      'Async support via Telegram',
      'Short questions/quick replies, typically within the day'
    ],
    hasButton: true,
    buttonType: 'apply',
    brandColor: 'blue'
  },
  {
    title: 'Guide',
    price: 200,
    period: '',
    description: [
      'One 60 minute session'
    ],
    hasButton: true,
    buttonType: 'apply',
    brandColor: 'green'
  },
  {
    title: 'Coach',
    price: 300,
    period: '',
    description: [
      'Three 15-minute sessions per week',
      'Ongoing support via Telegram between sessions'
    ],
    hasButton: true,
    buttonType: 'apply',
    brandColor: 'red'
  },
  {
    title: 'Mentor',
    price: 500,
    period: '/month',
    description: [
      '45-minute sessions every 2 weeks',
      'Ongoing support via Telegram between sessions'
    ],
    hasButton: true,
    buttonType: 'apply',
    brandColor: 'purple'
  },
  {
    title: 'Partner',
    price: 2000,
    period: '/month',
    description: [
      '60-minute session every week',
      'Ongoing support via Telegram between sessions'
    ],
    hasButton: true,
    buttonType: 'apply',
    brandColor: 'orange'
  }
]

