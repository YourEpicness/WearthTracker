module.exports = {
  // purge: {
  //   enabled: !process.env.ROLLUP_WATCH,
  //   content: ["./public/index.html", "./src/**/*.svelte"],
  //   options: {
  //     defaultExtractor: (content) => [
  //       ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
  //       ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
  //     ],
  //   },
  // },
  content: ["./public/index.html", "./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        lightSecondary: "#21EC1D",
        error: "#850A0A",
      },
      textColor: {
        error: "#850A0A",
        primary: "#65520D",
        secondary: "#137211",
        lightSecondary: "#21EC1D",
        darkSecondary: "#0B4A0A",
      },
      backgroundColor: {
        lightPrimary: "rgba(202, 163, 25, 0.12);",
        bgPrimary: "#F2EACA",
        primary: "#65520D",
        secondary: "#137211",
        bgSecondary: "#F3FFF5",
        lightSecondary: "#21EC1D",
      },
      borderRadius: {
        circle: "50%",
        default: "10px",
        button: "6px",
      },
      boxShadow: {
        light: "0px 2px 2px rgba(0, 0, 0, 0.25);",
        transaction: "0px 4px 4px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
