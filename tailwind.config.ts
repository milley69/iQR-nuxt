/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue', './app.vue', './error.vue'],
  darkMode: ['class', '[data-theme]'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      {
        dark: {
          primary: '#641ae6',
          secondary: '#d926a9',
          accent: '#1fb2a6',
          neutral: '#2a323c',
          'base-100': '#0F1215',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
    logs: false,
  },
}
