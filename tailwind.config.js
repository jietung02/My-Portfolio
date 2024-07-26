/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-dark-gray': '#161919',
      }
    },
    animation: {
      "fade-slide-down": "fade-slide-down 1.5s ease 0.5s forwards",
      "fade-slide-right": "fade-slide-right 1.5s ease 0.5s forwards",
    },
    keyframes: {
      "fade-slide-down": {
        "0%": { opacity: 0, transform: "translateY(-50px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      "fade-slide-right": {
        "0%": { opacity: 0, transform: "translateX(-50px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
  },
  plugins: [],
};
