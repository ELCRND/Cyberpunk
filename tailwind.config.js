/** @type {import('tailwindcss').Config} */

export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        title: [
          "3.875rem",
          {
            lineHeight: "4rem",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        regular: [
          "1.125rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
      },
      colors: {
        white: "#fff",
        black: "#000",
        blue: "#52BEDC",
        "regular-yellow": "#F8F200",
        "regular-gray": "#777",
      },
      padding: {
        y: "70px",
      },
      keyframes: {
        slider: {
          "0%": { backgroundImage: "url('../assets/hero_bg_1.jpeg')" },
          "33%": { backgroundImage: "url('../assets/hero_bg_2.jpeg')" },
          "66%": { backgroundImage: "url('../assets/hero_bg_3.jpeg')" },
        },
        sliderMobile: {
          "0%": { backgroundImage: "url('../assets/hero_bg_1_mobile.png')" },
          "33%": { backgroundImage: "url('../assets/hero_bg_2_mobile.png')" },
          "66%": { backgroundImage: "url('../assets/hero_bg_3_mobile.png')" },
        },
      },
      animation: {
        heroSlider: "slider 12s steps(1, end) infinite",
        heroSliderMobile: "sliderMobile 12s steps(1, end) infinite",
      },
    },
  },
  plugins: [],
};
