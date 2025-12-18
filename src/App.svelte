<script>
  import { t } from './translations.js'
  import { pricingTiersData } from './data.js'
  import './styles.scss'
  import vladImage from './vlad_bg.webp'
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
</script>

<div class="container">
  <div class="photo">
    <img src={vladImage} alt="Vlad" />
  </div>
  <header>
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
      <div class="intro">
        <p class="greeting">{t(lang, 'greeting')}</p>
        <h1 class="logo">{t(lang, 'logo')}</h1>
      </div>
        <div class="pitch">
          {#each t(lang, 'pitch') || [] as item}
            <p>{@html item}</p>
          {/each}
          <a 
          href="https://calendly.com/kozulia/free-call" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="button book intro-button"
        >
          {t(lang, 'bookCall')}
        </a>
        </div>


  </header>
 
  <div class="links">
    <a href="https://t.me/ctohow" target="_blank" rel="noopener noreferrer" class="link">
      <div class="link__text">
        <p class="blog-label">{t(lang, 'blog.label')}</p>
        <p class="blog-title">{t(lang, 'blog.title')}</p>
      </div>
      <div class="link__circle">
        <img src={ctohowImage} alt="CTO How" />
      </div>
    </a>
  </div>

  <footer>
    <div class="credits">
      Despoinas & Nikou Pattichi, 27, Flat/Office 2 3071, Lemesos, Cyprus<br />
      © KOZULIA LTD, 2024 All rights reserved
    </div>
  </footer>
</div>

