import { createGlobalStyle } from "styled-components";
import { primaryBgColor } from "../../css/css-settings";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${primaryBgColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
