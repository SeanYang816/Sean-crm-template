import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import EN from 'locales/en'
import TW from 'locales/zh-TW'
import CN from 'locales/zh-CN'
// import JP from './jp'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EN,
      },
      'zh-CN': {
        translation: CN,
      },
      'zh-TW': {
        translation: TW,
      },
      // jp: {
      //   translation: JP,
      // },
    },
    lng: 'zh-CN', // 預設語言
    fallbackLng: 'en', // 如果當前切換的語言沒有對應的翻譯則使用這個語言，
    interpolation: {
      escapeValue: false,
    },
  })

i18n.changeLanguage('zh-tw')

export default i18n
