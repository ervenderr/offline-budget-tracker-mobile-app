/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary2': '#344e41',
        'primary-light1': '#a7c4bc',
        'primary-dark1': '#2e5549',
        
        'secondary1': '#dad7cd',
        'secondary-light1': '#f2f2f2',
        'secondary-dark1': '#c2c0b9',
        
        
    },
    fontFamily: {
      pthin: ['Poppins-Thin', 'sans-serif'],
      plight: ['Poppins-Light', 'sans-serif'],
      pmedium: ['Poppins-Medium', 'sans-serif'],
      pbold: ['Poppins-Bold', 'sans-serif'],
      pblack: ['Poppins-Black', 'sans-serif'],
      
    }
  },
  plugins: [],
}
}

