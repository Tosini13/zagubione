/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292C45",
          light: "#D6E6FE",
          on: "#D6E6FE",
          variant: {
            DEFAULT: "#4992FF",
            on: "#FFF",
          },
        },
        secondary: { label: "#A3A8D2", tab: "#00BF13" },
        background: {
          DEFAULT: "#fff",
          on: "#000",
        },
      },
      height: {
        header: "80px",
      },
      minHeight: {
        "section-minus-header": "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
