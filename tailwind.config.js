/** @type {import('tailwindcss').Config} */

export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slider: {
          "0%": { backgroundImage: "url('../assets/hero_bg_1.jpeg')" },
          "33%": { backgroundImage: "url('../assets/hero_bg_2.jpeg')" },
          "66%": { backgroundImage: "url('../assets/hero_bg_3.jpeg')" },
        },
      },
      animation: {
        heroSlider: "slider 12s steps(1, end) infinite",
      },
    },
  },
  plugins: [],
};
