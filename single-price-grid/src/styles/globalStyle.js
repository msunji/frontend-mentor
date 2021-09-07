import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  // CSS Vars
  :root {
    --cyan: hsl(179, 62%, 43%);
    --bright-yellow: hsl(71, 73%, 54%);
    --light-grey: hsl(204, 43%, 93%);
    --greyish-blue: hsl(218, 22%, 67%);
    --karla: 'Karla', sans-serif;
    --padding-y: 2rem;
    --padding-x: 2rem;
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
    font-family: var(--karla);
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    color: var(--greyish-blue);
    background-color: var(--light-grey);
  }
  main {
    display: flex;
    align-content: center;
    width: 100%;
    flex: 1;
    justify-content: center;
  }
`;

export default GlobalStyle;
