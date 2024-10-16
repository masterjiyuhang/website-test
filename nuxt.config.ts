// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  app: {
    buildAssetsDir: 'assets',
  },
  site: {
    url: 'https://masterjiyuhang.github.io/website-test/',
  },
  extends: ['./tailwindcss-layer'],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon', // 优化 Web 字体加载
    '@nuxtjs/fontaine', // 优化关键 CSS 加载
    '@nuxtjs/critters',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    'nuxt-headlessui',
  ],

  eslint: {
    // options here
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },

  icon: {
    size: '16px',
  },

  fontMetrics: {
    fonts: ['Inter', 'Kalam'],
  },

  critters: {
    config: {
      preload: 'swap',
    },
  },
  robots: {
    groups: [
      {
        userAgent: ['AdsBot-Google-Mobile', 'AdsBot-Google-Mobile-Apps'],
        disallow: ['/admin'],
        allow: ['/admin/login'],
        comment:
          'Allow Google AdsBot to index the login page but no-admin pages',
      },
    ],
  },

  image: {
    format: ['webp, png, jpg'],
    providers: {
      ipx: {
        sharp: {
          webp: {
            quality: 120,
          },
        },
      },
    },
    // dir: 'assets/images',
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 100,
          height: 100,
        },
      },
    },
  },

  pinia: {
    storesDirs: ['app/stores/**'],
  },

  i18n: {
    locales: [
      { code: 'en', file: 'en-US.json', name: 'English 🇺🇸' },
      { code: 'cn', file: 'zh-CN.json', name: '中国 🇨🇳' },
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },

  headlessui: {
    prefix: 'Headless',
  },
})
