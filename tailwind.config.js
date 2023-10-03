/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'my-black': '#0B0C10',
        'my-gray': '#1F2833',
        'my-light-gray': '#C5C6C7',
        'my-light-cyan': '#66FCF1',
        'my-dark-cyan': '#45A29E',
      },
      
    },
  },
  plugins: [],
}
