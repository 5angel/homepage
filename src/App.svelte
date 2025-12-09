<script>
  import { t } from './translations.js'
  import { pricingTiersData } from './data.js'
  import './styles.scss'
  import vladImage from './vlad.webp'
  import ctohowImage from './ctohow.webp'

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
    period: tier.period === 'month' ? `/${t(lang, 'period.month')}` : tier.period
  }))

  $: individualTiers = pricingTiers.slice(0, 3)
  $: corporateTiers = pricingTiers.slice(3)

  function handleClick(tier, event) {
    if (!tier.link || tier.link === '#') {
      event.preventDefault()
    }
  }

  function getTierClasses(tier) {
    const classes = ['tier']
    if (!tier.link || tier.link === '#') {
      classes.push('disabled')
    }
    if (tier.color) {
      classes.push(tier.color)
    }
    return classes.join(' ')
  }

  function getButtonClasses(tier) {
    const classes = ['button']
    if (tier.variant === 'book') {
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
    <div class="image-container">
      <img src={vladImage} alt="Vlad" />
    </div>
    <div class="ctohow-container">
      <a href="https://t.me/ctohow" target="_blank" rel="noopener noreferrer" class="ctohow-link">
        <div class="ctohow-text">
          <p class="blog-label">{t(lang, 'blog.label')}</p>
          <p class="blog-title">{t(lang, 'blog.title')}</p>
        </div>
        <div class="ctohow-circle">
          <img src={ctohowImage} alt="CTO How" />
        </div>
      </a>
    </div>
    <div class="header-content">
      <p class="greeting">{t(lang, 'greeting')}</p>
      <h1 class="logo">{t(lang, 'logo')}</h1>
      <div class="pitch">
        {#each t(lang, 'pitch') || [] as item}
          <p>{item}</p>
        {/each}
      </div>
    </div>
  </header>

  <div class="pricing">
    <h3 class="section-heading">{t(lang, 'heading.individual')}</h3>
    {#each individualTiers as tier (tier.title)}
      <a
        href={tier.link || '#'}
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
          {#if tier.link}
            <span class={getButtonClasses(tier)}>
              {tier.variant === 'book' ? tier.buttonText : t(lang, 'apply')}
            </span>
          {/if}
        </span>
        <span class="effects"></span>
      </a>
    {/each}
    
    <h3 class="section-heading">{t(lang, 'heading.corporate')}</h3>
    {#each corporateTiers as tier (tier.title)}
      <a
        href={tier.link || '#'}
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
          {#if tier.link}
            <span class={getButtonClasses(tier)}>
              {tier.variant === 'book' ? tier.buttonText : t(lang, 'apply')}
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

