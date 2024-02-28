/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBgImg: "url('/src/assets/home-bg-img.jpg')",
        logo: "url('/src/assets/logo.png')",
        homeMainText: "url('/src/assets/technology-art-fashion-title.png')",
        logoRound: "url('/src/assets/dkerulative-round-logo.png')",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    colors: {
      primary: "#E80E0F",
      muted: "#888888",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },

    fontFamily: {
      plusJakartaSans: ["PlusJakartaSans", "sansSerif"],
      montserrat: ["Montserrat", "sansSerif"],
      poppins: ["Poppins", "sansSerif"],
      archivo: ["Archivo", "sansSerif"],
    },

    animation: {
      spinSlow: "spin 6s linear infinite",
    },
  },
  plugins: [],
};
