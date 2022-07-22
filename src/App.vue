<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div v-show="loading" class="loader">
    ...
  </div>

  <router-view @changeLang="changeLang" @mounted="disableTemplatePreloader"></router-view>
</template>

<script>
import { I18nUtils } from './i18n.utils'

export default {
  name: 'TheApp',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    disableTemplatePreloader() {
      setTimeout( () => {
        const $templatePreloader = document.querySelector( '#template-preloader' )
        document.body.removeChild( $templatePreloader )
      }, 0 )
    },
    async changeLang(count) {
      this.loading = true
      const locale = count % 2 === 0 ? 'ru' : 'en'

      await I18nUtils.loadLocaleMessagesSmarty(locale)
      I18nUtils.setI18nLocale( locale )
      
      this.loading = false
    }
  }
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.loader {
  position: absolute;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;
}
</style>
