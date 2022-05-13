import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import breakpoints from "../styles/breakpoints";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    --magenta-dark: hsl(300, 43%, 22%);
    --pink: hsl(333, 80%, 67%);
    --grey-magenta-light: hsl(300, 24%, 96%);
    --grey-magenta-dark: hsl(303, 10%, 53%);
    --white: hsl(0, 0%, 100%);
    --spartan: 'Spartan', sans-serif;
    --padding-y: 2rem;
    --padding-x: 2rem;
    --margin-y: 2rem;
    --margin-x: 2rem;
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
    background-image: 
      url('/img/bg-pattern-top-mobile.svg'), 
      url('/img/bg-pattern-bottom-mobile.svg');
    background-position:
      top left,
      bottom right;
    background-repeat: no-repeat;
  }
  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;
    justify-content: center;
  }
  a {
    transition: color 1s ease;
  }
  a, a:visited {
    color: var(--magenta-dark);
  }
  a:hover {
    color: var(--pink);
  }
  @media screen and ${breakpoints.lg} {
    body {
      background-image: 
      url('/img/bg-pattern-top-desktop.svg'), 
      url('/img/bg-pattern-bottom-desktop.svg');
    background-position:
      top left,
      bottom right;
    background-repeat: no-repeat;
    }
  }
`;

export default GlobalStyle;
