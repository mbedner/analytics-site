module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        inner:  'inset 0px -2px 2px 0 rgba(0, 0, 0, 0.25), inset 0 4px 4px 0 rgba(255, 255, 255, 0.45)'
      },
      colors: {
        blue: {
          light: '#F5FAFF',
          dark: '#021177',
          medium: '#2C6399'
        },
        yellow: {
          medium: '#FFC33D',
          dark: '#FFA93A'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
