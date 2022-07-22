import {I18nUtils} from '../../i18n.utils'

export const loadLocaleOnInitGuard = async ( to, from, next ) => {
    await I18nUtils.loadLocaleMessages()

    next()
}