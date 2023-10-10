/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6D9', 
        green: '#72ac75',
        darkgreen: '#006400',
        lightgreen: '#E1FFE0',
        brrx: '#975200',
      },
      fontFamily: {
        custom: ['Inconsolata', 'monospace'],
        fashion: ['Playfair Display', 'serif'],
        nav: ['Rubik', 'sans-serif'],
        footer: ['Lora', 'serif'],
      },
      screens: {
        'smm': '969px', 
      },
    },
  },
  plugins: [],
}