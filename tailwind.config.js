/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      apercu: ["Apercu", "sans-serif"],
      sans: ["Geist", "system-ui", "sans-serif"],
      display: ["'Bricolage Grotesque'", "Geist", "sans-serif"],
      serif: ["'Instrument Serif'", "Georgia", "serif"],
      mono: ["'Geist Mono'", "ui-monospace", "monospace"],
    },
    extend: {},
    colors: {
      'default': '#565656',
      'black': '#000000',
      'white': '#ffffff',
      'light-green': '#A1F651',
      'green': '#234801',
      'light-red': '#F46363',
      'red': '#8F0404',
      'primary': '#0f0f0f',
      'secondary': '#181818',
      'transparent': 'transparent',
      'current': 'currentColor',
      // swiss-poster palette
      'bg': '#f1eee6',
      'surface': '#e8e4d9',
      'fg': '#141414',
      'muted': '#6b6860',
      'line': 'rgba(20, 20, 20, 0.14)',
      'accent': '#e5450f',
    },
    screens: {
      'xs': '574px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
