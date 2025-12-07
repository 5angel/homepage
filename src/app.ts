import Alpine from 'alpinejs'
import { pricingTiers, type PricingTier } from './data'

declare global {
  interface Window {
    Alpine: typeof Alpine
  }
}

window.Alpine = Alpine

Alpine.data('pricing', () => ({
  tiers: pricingTiers
}))

Alpine.start()

