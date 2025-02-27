
// @ts-nocheck


export const localeCodes =  [
  "zh",
  "en"
]

export const localeLoaders = {
  "zh": [{ key: "../i18n/locales/zh-CN.js", load: () => import("../i18n/locales/zh-CN.js" /* webpackChunkName: "locale_D_58_D_58_Works_nuxt3_luci_env_i18n_locales_zh_CN_js" */), cache: true }],
  "en": [{ key: "../i18n/locales/en-US.js", load: () => import("../i18n/locales/en-US.js" /* webpackChunkName: "locale_D_58_D_58_Works_nuxt3_luci_env_i18n_locales_en_US_js" */), cache: true }]
}

export const vueI18nConfigs = [
  () => import("../i18n.config.ts?hash=bffaebcb&config=1" /* webpackChunkName: "__i18n_config_ts_bffaebcb" */)
]

export const nuxtI18nOptions = {
  "restructureDir": "i18n",
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false,
    "typedPages": true,
    "typedOptionsAndMessages": false,
    "generatedLocaleFilePathFormat": "absolute",
    "alternateLinkCanonicalQueries": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false,
    "optimizeTranslationDirective": true
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./i18n.config.ts",
  "locales": [
    {
      "code": "zh",
      "iso": "zh-CN",
      "name": "中文",
      "files": [
        "D:/Works/nuxt3-luci-env/i18n/locales/zh-CN.js"
      ]
    },
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "files": [
        "D:/Works/nuxt3-luci-env/i18n/locales/en-US.js"
      ]
    }
  ],
  "defaultLocale": "zh",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "zh",
    "iso": "zh-CN",
    "name": "中文",
    "files": [
      {
        "path": "D:/Works/nuxt3-luci-env/i18n/locales/zh-CN.js"
      }
    ]
  },
  {
    "code": "en",
    "iso": "en-US",
    "name": "English",
    "files": [
      {
        "path": "D:/Works/nuxt3-luci-env/i18n/locales/en-US.js"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
export const hasPages = true

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
