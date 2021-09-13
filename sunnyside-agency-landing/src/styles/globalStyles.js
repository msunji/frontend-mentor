import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --red-soft: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --cyan: hsl(167, 44%, 70%);
    --cyan-dark-desat: hsl(167, 40%, 24%);
    --cyan-dark-moderate: hsl(168, 34%, 41%);
    --blue-dark: hsl(198, 62%, 26%);
    --blue-dark-desat: hsl(212, 27%, 19%);
    --blue-greyish: hsl(210, 4%, 67%);
    --blue-greyish-dark: hsl(232, 10%, 55%);
    --blue-greyish-darker: hsl(213, 9%, 39%);
    --white: hsl(0, 0%, 100%);
    --barlow: 'Barlow', sans-serif;
    --fraunces: 'Fraunces', serif;
    --padding-y: 2rem;
    --padding-x: 2rem;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    overflow-x: hidden;
    font-size: 18px;
    line-height: 1.7;
    font-family: var(--barlow);
    letter-spacing: 0.9px;
  }

`;

export default GlobalStyle;