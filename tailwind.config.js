/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayBackground: "#1d1d1d",
        grayText: "#a6a6a6",
        fbColor: "#1773ea",
        twitter: "#1c9cea",
        instr: "#e12a72",
        linkEnd: "#144679",
        mobile: "#E93B81",
        borderColor: "#333",
        emailColor: "#6AB5B9",
        locationColor: "#FD7590",
        calendarColor: "#C17CEB",
        orange: "#FF972D",
        borderRe: "#353535",
        tealColor: "#5debd7",
        knowColor: "#1c1c1c",
        activeColor: "#fa5252",
        grayBg: "#0d0d0d",
        border_Sub: "#44566c"
      },
      fontFamily: {
        Roboto: "'Roboto Slab', 'serif'",
        Poppins: "'Poppins', 'sans-serif'",
      },
      padding: {
        2.5: "10px",
        3.5: "15px",
        7.5: "30px",
        11.5: "45px",
        13: "50px",
        15: "60px",
        25: "100px",
      },
      margin: {
        2.5: "10px",
        3.5: "15px",
        7.5: "30px",
        11.5: "45px",
        13: "50px",
        15: "60px",
        25: "100px",
      },
      fontSize: {
        3.5: "36px",
      },
    },
  },
  plugins: [],
};
