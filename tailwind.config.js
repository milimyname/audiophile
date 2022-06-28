/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "375px" },
      md: { max: "768px" },
      lg: "1110px",
      xl: "1440px",
    },
    colors: {
      primary: "#D87D4A",
      secondary: "#101010",
      gray: "#F1F1F1",
      darkWhite: "#FAFAFA",
      lightPrimary: "#fbaf85",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontSize: {
      h1: [
        "56px",
        {
          letterSpacing: "2px",
          lineHeight: "58px",
        },
      ],
      h2: [
        "40px",
        {
          letterSpacing: "1.15px",
          lineHeight: "44px",
        },
      ],
      h3: [
        "32px",
        {
          letterSpacing: "1.15px",
          lineHeight: "36px",
        },
      ],
      h4: [
        "28px",
        {
          letterSpacing: "2px",
          lineHeight: "38px",
        },
      ],
      h4: [
        "28px",
        {
          letterSpacing: "2px",
          lineHeight: "38px",
        },
      ],
      h5: [
        "24px",
        {
          letterSpacing: "1.7px",
          lineHeight: "32px",
        },
      ],
      h6: [
        "18px",
        {
          letterSpacing: "1.3px",
          lineHeight: "24px",
        },
      ],
      overline: [
        "14px",
        {
          letterSpacing: "10px",
          lineHeight: "19px",
        },
      ],
      subTitle: [
        "13px",
        {
          letterSpacing: "1px",
          lineHeight: "25px",
        },
      ],
      body: ["15px", "25px"],
    },
    extend: {},
  },
  plugins: [],
};
