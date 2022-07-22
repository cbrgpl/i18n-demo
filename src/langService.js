import languages from './i18n'

const promisifiedResponse = ( data ) => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve(data)
     }, 800 + Math.random() * 1000);   
    })
}

export const langService = new class LangService {
    getLocaleDicts( locale ) {
        return promisifiedResponse( languages[locale] )
    }
} 