import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
import tailwindHeadless from '@headlessui/tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        xl: '1200px',
        '2xl': '1200px',
      },
      boxShadow: {
        'custom-banner': '0px 4px 6px 0px #E9E9E9',
      },
      borderRadius: {
        'custom-rounded': '8px 8px 1px 8px',
      },
    },
  },
  plugins: [
    tailwindTypography,
    tailwindForms({
      strategy: 'class',
    }),
    tailwindAspectRatio,
    tailwindHeadless,
  ],
  content: [
    '{.,app,*-layer}/components/**/*.{js,vue,ts}',
    '{.,app,*-layer}/layouts/**/*.vue',
    '{.,app,*-layer}/pages/**/*.vue',
    '{.,app,*-layer}/plugins/**/*.{js,ts}',
    '{.,app,*-layer}/app.vue',
    '{.,app,*-layer}/*.{mjs,js,ts}',
    '{.,*-layer}/nuxt.config.{js,ts}',
  ],
}
