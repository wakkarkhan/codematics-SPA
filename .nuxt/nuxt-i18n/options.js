import locale6010b66b from '../../static/lang/en-US.js'
import localed9eab500 from '../../static/lang/ar-AR.js'
import locale1b218780 from '../../static/lang/de-DE.js'
import locale2431a480 from '../../static/lang/id-ID.js'
import locale13dd0660 from '../../static/lang/pt-PT.js'
import localeaf3512c0 from '../../static/lang/zh-ZH.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"code":"ar","iso":"ar-AR","name":"Arabic","file":"ar-AR.js","dir":"rtl"},{"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"id","iso":"id-ID","name":"Bahasa Indonesia","file":"id-ID.js","dir":"ltr"},{"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.js","dir":"ltr"},{"code":"zh","iso":"zh-ZH","name":"Chinese","file":"zh-ZH.js","dir":"ltr"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix",
  lazy: false,
  langDir: "/Users/codematics/Desktop/codematics-SPA/static/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":true,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"ar","iso":"ar-AR","name":"Arabic","file":"ar-AR.js","dir":"rtl"},{"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"id","iso":"id-ID","name":"Bahasa Indonesia","file":"id-ID.js","dir":"ltr"},{"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.js","dir":"ltr"},{"code":"zh","iso":"zh-ZH","name":"Chinese","file":"zh-ZH.js","dir":"ltr"}],
  localeCodes: ["ar","de","en","id","pt","zh"],
  additionalMessages: [],
}

export const localeMessages = {
  'en-US.js': () => Promise.resolve(locale6010b66b),
  'ar-AR.js': () => Promise.resolve(localed9eab500),
  'de-DE.js': () => Promise.resolve(locale1b218780),
  'id-ID.js': () => Promise.resolve(locale2431a480),
  'pt-PT.js': () => Promise.resolve(locale13dd0660),
  'zh-ZH.js': () => Promise.resolve(localeaf3512c0),
}
