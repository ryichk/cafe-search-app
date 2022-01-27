module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#81B29A',
      secondary: '#F4F1DE',
      danger: '#E07A5F',
    }),
    extend: {
      colors: {
        dark: '#151b22',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        default: {
          primary: '#81B29A',
          'primary-focus': '#719885',
          'primary-content': '#FFFFFF',

          secondary: '#F2CC8F',
          'secondary-focus': '#D5BA90',
          'secondary-content': '#FFFFFF',

          accent: '#E07A5F',
          'accent-focus': '#C68270',
          'accent-content': '#FFFFFF',

          neutral: '#3D4451',
          'neutral-focus': '#2A2E37',
          'neutral-content': '#FFFFFF',

          'base-100': '#EAFAF9',
          'base-200': '#F9FAFB',
          'base-300': '#D1D5DB',
          'base-content': '#3D405B',

          info: '#2094F3',
          success: '#009485',
          warning: '#FF9900',
          error: '#FF5724',
        },
      },
    ],
  },
};
