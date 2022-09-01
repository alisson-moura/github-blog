import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['blue']};
    }
    body {
        width: 100vw;
        height: 100vh;
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.6;
        overflow-x: hidden;
    }
    body, input-security, text-area, button {
        font: 400 1rem 'Nunito Sans', sans-serif;
        line-height: 1.6;
    }
    button {
        cursor: pointer;
    }
`
