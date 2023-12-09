/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width :{
        '1' : '10px',
        '30' : '6rem',
        '35' : '7.5rem',
        'r-w' : '40%',
        'mycard': '333px',
        'mycardbtn': '8.5rem',
        
      },
      maxHeight:{
        
      },
      height: {
        '1' : '10px',
        'h-item' : '230px',
      },
      fontFamily:{
        'Ubuntu' : 'Ubuntu, sans-serif;',
      },
      backgroundImage: {
        'beach' : "url('../public/beach.jpg')",
        'camping' : "url('../public/camping.jpg')",
        'lake' : "url('../public/lake.jpg')",
        'beachh' : "url('../public/beachh.jpg')",
        'mount' : "url('../public/mount.jpg')",
      },
      colors :{
        'blue-c' : '#3E54AC',
        'purple-c' : '#7286D3',
        'pink-c' : '#FFCEFE',
        'dpink-c' : '#AD7BE9',
        'gb-c' : '#393053',
        'green-c' : '#609966',
        'white-c' : '#ECF2FF',
        'pink-c' : '#FFACAC',
      }
    },
  },
  daisyui: {
    themes: [
      "light"
    ],
  },
  plugins: [require("daisyui")],
}
