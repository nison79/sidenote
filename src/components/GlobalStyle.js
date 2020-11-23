
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body {
        background:#3F4045;
        font-family: 'Poppins', sans-serif;
        overflow-x:hidden;

    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor:pointer;
        padding: 1rem 2rem;
        border: 3px solid rgb(164, 56, 111);
        background: transparent;
        color: white;
        font-family: 'Poppins', sans-serif;
        transition: all 0.5s ease;
        &:hover{
            background-color:rgb(164, 56, 111);
            color:white;
        }

}
    h1{
        font-size:4.5rem;
        font-weight:700;
    }

    h2 {
        font-weight:bold;
        font-size:3rem;

}

    h4 {
        font-weight:bold;
        font-size:2rem;
        
}

    h3 {
        font-size:1rem;
        color:white;
}

    a{
        font-size:1.1rem;

}
    p{
        padding: 3rem 0rem;
        color:#eee;
        font-size:1.4rem;
        line-height:150%;
}

span {
        font-weight:bold;
        color:#A4036F;
}


html {
    @media (max-width: 978px ){
        font-size: 75%;
    }

    
}

`;

export default GlobalStyle

