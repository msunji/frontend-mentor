import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  // CSS Vars
  :root {
    --cyan: hsl(179, 62%, 43%);
    --bright-yellow: hsl(71, 73%, 54%);
    --light-grey: hsl(204, 43%, 93%);
    --grayish-blue: hsl(218, 22%, 67%);
    --karla: 'Karla', sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
  }
  html, body {
    overflow-x: hidden;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    background-color: var(--light-grey);
  }

`;

export default GlobalStyle;
