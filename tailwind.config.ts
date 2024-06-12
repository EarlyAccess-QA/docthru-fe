import type { Config } from 'tailwindcss';

const createPxEntries = (size: number) => {
  return {
    0: '0',
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i}`]: `${i / 16}rem` };
    }),
  };
};

const PX_ENTRIES_10 = createPxEntries(10);
const PX_ENTRIES_100 = createPxEntries(100);
const PX_ENTRIES_1000 = createPxEntries(1000);

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: PX_ENTRIES_10,
    fontSize: PX_ENTRIES_100,
    // spacing values are inherited by the 'padding', 'margin', 'height', 'maxHeight', 'flex-basis', 'gap', 'inset', 'space', 'translate', 'scrollMargin', 'scrollPadding', and 'textIndent'.
    spacing: PX_ENTRIES_1000,
    fontWeight: {
      light: '300',
      DEFAULT: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    zIndex: {
      zero: '0',
      first: '10',
      second: '20',
      third: '30',
      beforeInfinite: '9980',
      infinite: '9990',
      toast: '9999', // Do not use!!
    },
    borderRadius: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      ml: '1.25rem',
      lg: '1.5rem',
      xl: '2rem',
      full: '9999px',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: 'var(--primary-yellow)',
        white: 'var(--primary-white)',
        black: 'var(--primary-black)',
      },
      green: {
        DEFAULT: 'rgb(var(--green) / <alpha-value>)',
        light: 'rgb(var(--green-light) / <alpha-value>)',
      },
      purple: {
        DEFAULT: 'rgb(var(--purple) / <alpha-value>)',
        light: 'rgb(var(--purple-light) / <alpha-value>)',
      },
      orange: {
        DEFAULT: 'rgb(var(--orange) / <alpha-value>)',
        light: 'rgb(var(--orange-light) / <alpha-value>)',
      },
      blue: {
        DEFAULT: 'rgb(var(--blue) / <alpha-value>)',
        light: 'rgb(var(--blue-light) / <alpha-value>)',
      },
      black: 'var(--black)',
      white: 'var(--white)',
      red: 'var(--red-error)',
      gray: {
        0: 'var(--gray-50)',
        1: 'var(--gray-100)',
        2: 'var(--gray-200)',
        3: 'var(--gray-300)',
        4: 'var(--gray-400)',
        5: 'var(--gray-500)',
        6: 'var(--gray-600)',
        7: 'var(--gray-700)',
        8: 'var(--gray-800)',
        9: 'var(--gray-900)',
      },
    },
    screens: {
      sm: { max: '375px' }, // mobile
      md: { max: '744px' }, // iPad mini
      // => @media (max-width: 767px) { ... }
    },
    extend: {
      backdropBlur: {
        'custom-blur': '2.5px',
      },
      fontFamily: {
        quantico: ['Quantico', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
