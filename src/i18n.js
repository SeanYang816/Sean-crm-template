import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import { LANGUAGE } from 'constants'
import qs from 'qs'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    lng: qs.parse(window.location.search, { ignoreQueryPrefix: true }).language || LANGUAGE.ZH_TW, // 預設語言
    fallbackLng: LANGUAGE.EN, // 如果當前切換的語言沒有對應的翻譯則使用這個語言，
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
