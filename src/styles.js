import styled from 'styled-components'
import { motion } from 'framer-motion'

export const About = styled(motion.div)`
    min-height:90vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 2rem 5rem;
    color:white;

    @media (max-width: 1300px ){
        display:block;
        padding:5rem 2rem;
        text-align:center;
    }
`;

export const Description = styled.div`
    flex:1;
    padding:right;
    z-index:2;
    h2{
        font-weight:lighter;
    }

    @media (max-width: 1300px ){
        padding:0;
        button{
            margin:2rem 0rem 5rem 0rem;
        }
    }

`

export const Image = styled.div`
    flex:1;
    overflow:hidden;
    img{
        object-fit:cover;
        margin-left:5rem;
        z-index:2;
}
    @media (max-width: 1300px) {
        img{
        margin-left:0rem;
    }

`

export const Hide = styled.div`

overflow:hidden;

`



