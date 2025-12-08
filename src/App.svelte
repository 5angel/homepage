<script>
  import { t } from './translations.js'
  import { pricingTiersData } from './data.js'
  import './styles.scss'

  let lang = 'en'
  
  // Try to get saved language from localStorage
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('lang')
    if (saved && (saved === 'en' || saved === 'ru')) {
      lang = saved
    }
  }

  function setLang(newLang) {
    lang = newLang
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang)
    }
  }

  $: pricingTiers = pricingTiersData.map(tier => ({
    ...tier,
    title: t(lang, `tier.${tier.key}.title`),
    description: t(lang, `tier.${tier.key}.description`),
    buttonText: t(lang, `tier.${tier.key}.buttonText`),
    period: tier.period === '/month' ? t(lang, 'period.month') : tier.period
  }))

  function handleClick(tier, event) {
    if (!tier.buttonLink || tier.buttonLink === '#') {
      event.preventDefault()
    }
  }

  function getTierClasses(tier) {
    const classes = ['tier']
    if (!tier.buttonLink || tier.buttonLink === '#') {
      classes.push('disabled')
    }
    if (tier.brandColor) {
      classes.push(tier.brandColor)
    }
    return classes.join(' ')
  }

  function getButtonClasses(tier) {
    const classes = ['button']
    if (tier.buttonType === 'book') {
      classes.push('book')
    } else {
      classes.push('apply')
    }
    return classes.join(' ')
  }
</script>

<div class="container">
  <div class="lang-switcher">
    <button 
      class="lang-btn" 
      class:active={lang === 'en'}
      on:click={() => setLang('en')}
    >
      EN
    </button>
    <button 
      class="lang-btn" 
      class:active={lang === 'ru'}
      on:click={() => setLang('ru')}
    >
      RU
    </button>
  </div>
  <header>
    <h1 class="logo">{t(lang, 'logo')}</h1>
    <p class="subtitle">{t(lang, 'subtitle')}</p>
  </header>
  <div class="pricing">
    {#each pricingTiers as tier (tier.title)}
      <a
        href={tier.buttonLink || '#'}
        target="_blank"
        rel="noopener noreferrer"
        class={getTierClasses(tier)}
        on:click={(e) => handleClick(tier, e)}
      >
        <span class="content">
          <h3 class="title">{tier.title}</h3>
          <span class="price-row">
            <span class="price">€{tier.price}</span>
            {#if tier.period}
              <span class="period">{tier.period}</span>
            {/if}
          </span>
          <ul class="description">
            {#each tier.description as item}
              <li>{@html item}</li>
            {/each}
          </ul>
          {#if tier.hasButton}
            <span class={getButtonClasses(tier)}>
              {tier.buttonType === 'book' ? tier.buttonText : t(lang, 'apply')}
            </span>
          {/if}
        </span>
        <span class="effects"></span>
      </a>
    {/each}
  </div>
  <footer>
    <div class="credits">
      Despoinas & Nikou Pattichi, 27, Flat/Office 2 3071, Lemesos, Cyprus<br />
      © KOZULIA LTD, 2024 All rights reserved
    </div>
  </footer>
</div>

