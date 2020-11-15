import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body {
        background:#1b1b1b;
        font-family: 'Poppins', sans-serif;

    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor:pointer;
        padding: 1rem 2rem;
        border: 3px solid #41EAD4;
        background: transparent;
        color: white;
        font-family: 'Poppins', sans-serif;
        transition: all 0.5s ease;
        &:hover{
            background-color: #41EAD4;
            color:white;
        }

}

    h2 {
        font-weight:lighter;
        font-size:4rem;

}

    h4 {
        font-weight:bold;
        
}

    h3 {
        color:white;
}

    a{
        font-size:1.1rem;

}
    p{
        padding: 3rem 0rem;
        color:#ccc;
        font-size:1.4rem;
        line-height:150%;
}

span {
        font-weight:bold;
        color:#41EAD4;
}
`;


export default GlobalStyle
    