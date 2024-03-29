/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-lato)'],
    },
    container: {
      center: true,
      screens: {
        xxl: '1350px',
      },
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      'strong-orange': '#C2912E',
      'gradient-primary': '#B78624',
      'gradient-secondary': '#FFE278',
      'quote-bg': '#212121',
      'border-color': '#424242',
      'label-color': '#666666',
      'footer-border': 'rgba(122,122,122,0.50)',
      'accordion-border': 'rgba(255, 255, 255, 0.20)',
    },
    fontSize: {
      sm: '0.875rem', //14px
      '1sm': '1rem', //16px
      base: ['1.122rem', '1.6875rem'], //18px
      md: '1.3125rem', //21px
      xl: '1.5rem', //24px
      '2xl': '1.75rem', //28px
      '3xl': '2rem', //32px
      '3.5xl': '2.5rem', //40px
      '4xl': '3rem', //48px
      '4.5xl': '3.5rem', //56px
      '5xl': '3.75rem', //60px
      '6xl': '4.5rem', //72px
    },
    fontWeight: {
      100: '100',
      hairline: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      'extra-bold': '800',
      900: '900',
    },

    extend: {
      screens: {
        xxl: '1350px',
      },
      container: {
        maxWidth: {
          lg: '1350px',
        },
      },
      maxWidth: {
        '1350px': '1350px',
        '1244': '1244px',
        '600': '600px',
      },
      width: {
        '4.5': '18px',
      },
      height: {
        '4.5': '18px',
      },
      lineHeight: {
        '27': '1.6875rem',
        '30': '1.875rem',
        '40': '2.5rem',
        '48': '3.75rem',
      },
      padding: {
        '15': '60px',
        '24': '100px',
        '75': '75px',
        '347': '347px',
        '371': '371px',
      },
      margin: {
        '54px': '54px',
        '-160': '-160px',
      },
      gap: {
        '15': '3.75rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'simpifying-image': "url('../public/svg/simplyfing.svg')",
        'footer-texture': "url('../public/svg/footer-bg.svg')",
      },
    },
  },
  plugins: [
    require('tailwindcss-container-bleed'),
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '16px' },
      })
    }),
  ],
}
