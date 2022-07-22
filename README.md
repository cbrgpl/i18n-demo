# Демка к использованию i18n

В данном проекте использовался i18n с lazy-подгрузкой языков с "сервера". В качестве сервера выступает `src/langService.js`, который возвращает промис с рандомным временем резолва. Резолвит он данные одного из языков, описанные по `src/i18n`.

Дальше у нас есть i18nUtils класс, который является чуть более высокоуровневой оберткой для базового функционала i18n; 

Основной функционал:

- get : locale - возвращает текущую locale
- setupI18n() - инициализирует инстанс i18n, используется в `src/main.js`\
- setI18nLocale( locale ) - устанавливает новую locale в качестве активной. **Предварительно данные языка нужно загрузить!**
- loadLocaleMessages( locale = I18nUtils.locale ) - загружает данные указанного языка 
- loadLocaleMessagesSmarty() - загружает данные указанного языка, но с проверкой на кеш. Если язык предварительно загружался, то мгновенно возвращает промис.

P.S. На клиенте не должна использовать `loadLocaleMessages` кроме инициализации приложения. 

Важной часть является guard по пути `src/router/_utils/loadLocaleOnInit.guard.js` - загружает базовый словарь при инициализации.

Т.к. предварительно мы должны загрузить базовый словарь, то нужно показывать loader, который только после того, как гуард закончится и смаунтится(mounted hook) компонент-страница.

[gh:pages](https://cbrgpl.github.io/i18n-demo/)