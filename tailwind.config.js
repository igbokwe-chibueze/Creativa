/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        baseFont: ["Merriweather", 'serif'],
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          'base-opposite': withOpacity('--color-text-base-opposite'),
          muted: withOpacity('--color-text-muted'),
          muted2: withOpacity('--color-text-muted2'),
          muted3: withOpacity('--color-text-muted3'),
          inverted: withOpacity('--color-text-inverted'),
          icon: withOpacity('--color-text-icon'),
          icon2: withOpacity('--color-text-icon2'),
          'icon-hover': withOpacity('--color-text-icon-hover'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          fill2: withOpacity('--color-fill2'),
          fill3: withOpacity('--color-fill3'),
          fill4: withOpacity('--color-fill4'),
          fill5: withOpacity('--color-fill5'),
          'fill-muted': withOpacity('--color-fill-muted'),
          'fill-muted2': withOpacity('--color-fill-muted2'),
          'fill-muted-hover': withOpacity('--color-fill-muted-hover'),
          'fill-muted2-hover': withOpacity('--color-fill-muted2-hover'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted-hover': withOpacity('--color-button-muted-hover'),
        },
      },
      ringColor: {
        skin: {
          focus: withOpacity('--color-focus'),
          focus2: withOpacity('--color-focus2'),
        },
      },
      borderColor: {
        skin: {
          border: withOpacity('--color-border'),
          border2: withOpacity('--color-border2'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
      

    },
  },
  plugins: [],
}