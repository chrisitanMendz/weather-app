module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "poppins",
    },
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      backgroundColor: {
        prim: "#1E202B",
        prim2: "#2D303D",
        sec: "#323544",
        sec2: "#222531",
      },
      textColor: {
        prim: "#ffffff",
        sec: "#BFC1C8",
      },
      backgroundImage: {
        "with-image": "url('/src/assets/background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1000px",
          padding: "0 10px",
          margin: "0 auto",
        },
      });
    },
  ],
};
