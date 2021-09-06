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
        --padding-x: 2rem;
        --padding-y: 2.5rem;
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
        font-weight: 400;
        min-height: 100vh;
    }
    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        min-height: 100vh;
    }
    h1 {
        font-size: 2em;
        font-weight: 700;
        line-height: 1.2;
    }
    a, a:visited {
        color: white;
        transition: all 0.4s ease-in-out;
    }
    a:hover,
    a:focus {
        color: var(--primary-violet);
    }

    footer {
        text-align: center;
    }
    
    @media screen and (min-width: 760px) {
        :root {
            --padding-y: 5rem;
            --padding-x: 4rem;
        }

        .card {
            flex-direction: row-reverse;
            
            .card-content {
                padding-top: var(--padding-y);
                padding-bottom: var(--padding-y);
                padding-left: var(--padding-x);
                padding-right: var(--padding-x);
                flex: 0 0 50%;
                min-width: 0;
            }
        }
        .header-img {
            border-radius: 0 8px 8px 0;
            flex: 0 0 50%;
            width: 50%;
            height: auto;
            background: url("/assets/img/image-header-desktop.jpg") hsl(277, 64%, 61%);
            background-size: cover;
            background-repeat: no-repeat;
        }
        .card-text {
            text-align: left;

            p {
                padding-bottom: calc
            }
        }
        h1 {
            font-size: 2.4em;
        }
    }
    @media screen and (min-width: 980px) {
        .card-stats {
            flex-direction: row;
                .stat {
                    text-align: left;
                    :not(:last-of-type) {
                        padding-bottom: 0;
                    }
                }
        }
    }
`;

export default GlobalStyle;
