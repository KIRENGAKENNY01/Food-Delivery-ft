/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'ss':'375px',
      'sm':'600px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
      'mb':'375px',
      
    },
    colors:{
     'red':' hsl(14, 86%, 42%)',
     'Dark_red':'hsl(14, 86%, 32%)',
     'green':'hsl(159, 69%, 38%)',
     'Rose-50':'hsl(20, 50%, 98%)',
     'Rose-100':'hsl(13, 31%, 94%)',
     'Rose-300':' hsl(14, 25%, 72%)',
     'Rose-400':'hsl(7, 20%, 60%)',
     'Rose-500':'hsl(12, 20%, 44%)',
     'Rose-900':'hsl(14, 65%, 9%)',
     'Lighter_gray':'rgb(209, 213, 218)',
     'Dark_gray':'rgb(107, 114, 128)',
     'Black_gray':'rgb(52, 64, 78)',
     'whity':'rgb(255,255,255)'
    },
    boxShadow:{
      'custom':'0px 10px 20px rgba(0,0,0,0.5)'
    },
    fontSize:{
      'custom-sm':'0.8rem',
      'custom-lg':'1.4rem',
      'custom-heading':'2.5rem'
    },
 extend: {},
  },
  plugins: [],
}

