import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #0E0E0E;
        --gray: #f7f7f7;

        --text-title: #363f5f;
        --text-body: #969cb3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media(max-width: 720px){
            font-size: 87.5%; //14px
        }
        
    }

    body, input, textarea, button {
        font-family: Helvetica, sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`