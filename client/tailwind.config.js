module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ["./public/index.html", "./src/**/*.svelte"],
    options: {
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
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
      },
      borderRadius: {
        circle: "50%",
      },
    },
  },
  plugins: [],
};
