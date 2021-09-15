import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --red-soft: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --bright-blue: hsl(200, 100%, 62%);
    --cyan: hsl(167, 44%, 70%);
    --cyan-dark-desat: hsl(167, 40%, 24%);
    --cyan-dark-moderate: hsl(168, 34%, 41%);
    --blue-dark: hsl(198, 62%, 26%);
    --blue-dark-desat: hsl(212, 27%, 19%);
    --blue-greyish: hsl(210, 4%, 67%);
    --blue-greyish-dark: hsl(232, 10%, 55%);
    --blue-greyish-darker: hsl(213, 9%, 39%);
    --blue-black: hsl(212, 27%, 19%);
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
    width: 100%;
    overflow-x: hidden;
    font-size: 18px;
    line-height: 1.6;
    font-weight: 600;
    font-family: var(--barlow);
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--fraunces);
  }

  p {
    letter-spacing: -0.13px;
  }
  a,
  a:visited {
    text-decoration: none;
    color: var(--cyan-dark-desat);
  }
`;

export default GlobalStyle;