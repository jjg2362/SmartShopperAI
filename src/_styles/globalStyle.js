import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import "../_fonts/Font.css";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        font-family: 'LINESeedSans', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        position: relative;
        font-size: 62.5%;
    }

    @media (max-width : 769px){
        html {
            font-size:50%;
        }
    }

    ::selection {
        background-color: #F5B940;
        color: #FFFFFF;
    }

    body {
        margin: 0; 
        padding: 0; 
    }

    h1, h2, h3, h4, h5, h6, p, span, a, strong, em{
        font-size: 1.6rem;
        color: #000000;
        font-family: 'LINESeedSans', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    strong {
        font-weight: bold;
    }

    h1,h2,h3,h4,h5,h6{margin-bottom: 0;}

    a {
        color: inherit; 
        text-decoration: none; 
        cursor: pointer;
        outline: none;

        &:hover, &:active{
            text-decoration: none;
        }
    }

    button {
        padding: 0;
        background-color: transparent;
        outline: none;
        border: 0;
        cursor: pointer;
    }

    button:focus, button:active{
        outline: none;
    }

    ul,li,ol {
        list-style:none;
    }

    textarea:focus, 
    textarea.form-control:focus, 
    input.form-control:focus, 
    input[type=text]:focus, 
    input[type=password]:focus, 
    input[type=email]:focus, 
    input[type=number]:focus, 
    [type=text].form-control:focus, 
    [type=password].form-control:focus, 
    [type=email].form-control:focus, 
    [type=tel].form-control:focus, 
    [contenteditable].form-control:focus {
    outline: none !important;
    outline-offset: none !important;
    box-shadow:none;
    }
    textarea{ resize: none !important; }
`;

export default GlobalStyle;
