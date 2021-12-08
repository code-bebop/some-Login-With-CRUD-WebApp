const color = {
  primary: {
    white: "#EEEEEE",
    black: "#24292E",
    default: "#FF69B4",
    dark: "#FD3B9C",
    deep: "#FF0281",
  },
};

const typo = {
  title1: {
    bold: `font-size: 24px;
              font-weight: bold;`,
    regular: `font-size: 24px;
              font-weight: regular;`,
  },
  button: {
    bold: `font-size: 18px;
              font-weight: bold;`,
    regular: `font-size: 18px;
              font-weight: regular;`,
  },
  body: {
    bold: `font-size: 14px;
                font-weight: bold;`,
    regular: `font-size: 14px;
              font-weight: regular;`,
  },
};

const theme = {
  color,
  typo,
};

export type Theme = typeof theme;

export default theme;
