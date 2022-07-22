import { nextTick } from "vue";
import { createI18n } from "vue-i18n";

import { langService } from "./../langService.js";

export class I18nUtils {
    i18n = null

    static get locale() {
        return I18nUtils.i18n.global.locale
    }

    static setupI18n(options = { locale: 'en' }) {
        const i18n = createI18n(options)
        I18nUtils.i18n = i18n
        
        return i18n
    }

    static setI18nLocale ( locale ) {
        if (I18nUtils.i18n.mode === 'legacy') {
            I18nUtils.i18n.global.locale = locale
        } else {
            I18nUtils.i18n.global.locale.value = locale
        }
        
        document.querySelector('html').setAttribute('lang', locale)
    }

    static async loadLocaleMessagesSmarty(locale) {
        if(I18nUtils._cacheContainsLocale(locale)) {
            return
        }

        return await I18nUtils.loadLocaleMessages(locale)
    }

    static _cacheContainsLocale(locale) {
        return I18nUtils.i18n.global.availableLocales.includes(locale)
    }

    static async loadLocaleMessages (locale = I18nUtils.locale) {
        const messages = await langService.getLocaleDicts(locale)
        I18nUtils.i18n.global.setLocaleMessage(locale, messages)
      
        nextTick()
    }
}