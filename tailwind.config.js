/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xsm': {'max': '479px'},
      // => @media (max-width: 479px) { ... }

      'xxsm': {'max': '319px'},
      // => @media (max-width: 319px) { ... }

      'mhh': {'raw': '(max-height: 459px)'},
      // => @media (max-height: 459px) { ... }

      'mhs': {'raw': '(max-height: 530px)'},
      // => @media (max-height: 530px) { ... }

      'mhp': {'raw': '(max-height: 690px)'},
      // => @media (max-height: 690px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "hover-color": "var(--hover-color)",
        "tertary-color": "var(--tertary-color)",
        "form-color": "var(--form-color)",
        "bg-color": "var(--bg-color)",
        "bg-color2": "var(--bg-color2)",
        "bg-color3": "var(--bg-color3)",
        "border-color": "var(--border-color)",
      },
      animation: {
        updown: "updown 1s ease-in-out infinite",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      boxShadow: {
        "3xl": "0px 0px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
