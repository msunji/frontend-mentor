import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    --magenta-dark: hsl(300, 43%, 22%);
    --pink: hsl(333, 80%, 67%);
    --grey-magenta-dark: hsl(300, 24%, 96%);
    --grey-magenta-light: hsl(303, 10%, 53%);
    --white: hsl(0, 0%, 100%);
    --spartan: 'Spartan', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    overflow-x: hidden;
    height: 100%;
    font-family: var(--spartan);
    font-size: 15px;
    line-height: 1.6;
    font-weight: 400;
    color: var(--magenta-dark);
  }
  body {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
