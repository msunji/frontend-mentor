import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --primary-blue: hsl(233, 47%, 7%);
        --primary-desat-blue: hsl(244, 38%, 16%);
        --primary-violet: hsl(277, 64%, 61%);
        --neutral-white: hsl(0, 0%, 100%);
        --neutral-white-main: hsla(0, 0%, 100%, 0.75);
        --neutral-white-headings: hsla(0, 0%, 100%, 0.6);
        --font-inter: 'Inter', sans-serif;
        --font-lexend: 'Lexend Deca', sans-serif;
    }
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
    html,
    body {
        height: 100%;
        font-size: 15px;
        overflow-x: hidden;
        box-sizing: border-box;
        font-size: 15px;
        line-height: 1.8;
        font-family: var(--font-inter);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        background-color: var(--primary-blue);
        color: var(--neutral-white-main);
    }
    h1 {
        font-size: 2em;
        font-weight: 700;
        line-height: 1.2;
    }
`;

export default GlobalStyle;
