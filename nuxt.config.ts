// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  extends: ['./tailwindcss-layer'],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',

    '@nuxtjs/fontaine', // 优化 Web 字体加载
    '@nuxtjs/critters', // 优化关键 CSS 加载

    '@nuxt/image',
    '@nuxtjs/seo',

    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
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
})
