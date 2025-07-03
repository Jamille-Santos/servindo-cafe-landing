module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Great Vibes', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        coffee: {
          light: '#F5F2EB',
          DEFAULT: '#6B4226',
          dark: '#3E2C12',
        },
      },
    },
  },
  plugins: [],
};