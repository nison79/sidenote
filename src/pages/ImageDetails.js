import React , { useState , useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from  'react-router-dom'
import  { ImageState }  from '../ImageState'
//animations
import  { motion } from 'framer-motion'
import  PageAnimation  from '../animation'

const ImageDetails = () => {


    const history = useHistory(); 
    const url = history.location.pathname;
    const [images,setImages] = useState(ImageState);
    const [image,setImage] = useState(null);
    

    //useEffect
    useEffect(() =>{
        const currentImage = images.filter((ImageState) => ImageState.url === url);
        setImage(currentImage[0]);
    },[images, url]);

    return (
        <>
        {image && (
        <Details variants = {PageAnimation} initial="hidden" animate="show" exit="exit">
            <Headline>
                <h2>{image.title}</h2>
                    <div className="images">
                        <img src= {image.mainImg} alt="imageState"></img>
                        <img src= {image.mainImg} alt="imageState"></img>
                        <img src= {image.mainImg} alt="imageState"></img>
                        <img src= {image.mainImg} alt="imageState"></img>
                    </div>
            </Headline>
            <Awards>
                {image.awards.map((award) => (
                    <Award 
                    title={award.title} 
                    description ={award.description} 
                    key= {award.title} />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={image.secondaryImg} alt="gilr2"></img>
            </ImageDisplay>
        </Details>
            )}
        </>
    );
};

const Details = styled(motion.div)`
    color:white;

`;

const Headline = styled.div`
    min-height:90vh;
    padding-top:20vh;
    position:relative;
    h2{
        position: absolute;
        padding:2rem 3rem;
        margin-bottom:5rem;
        top:2%;
        left:0%;
        transform: translateX(-50% ,-10%);
        @media (max-width:978px){
            font-size:2rem;
            padding:rem 1rem;
            
        }
    }
    
    .images {
        display:flex;
        grid-template-columns:repeat(auto-fill,minmax(500px,1fr));
        column-gap:2rem;
        justify-content:space-between;
        align-items:center;
        @media (max-width:978px){
            flex-direction:column;
            row-gap:2rem;
        }
        img{
        width:50%;
        height:50vh;
        object-fit:cover;
        @media (max-width:978px){
            object-fit:contain;
            height:20vh;
            width:100%;
            min-height:60vh;
        }
        @media (max-width:768px){
            object-fit:contain;
            height:20vh;
            width:100%;
            min-height:30vh;
        }
    }
    }
`

const Awards = styled.div`
    min-height:60vh;
    display:flex;
    margin:3rem 10rem;
    align-items:center;
    justify-content:space-around;
    @media(max-width:768px){
    flex-direction:colum


    }

`;

const StyledAward =styled.div`
    padding:5rem;
    h3{
        font-size:2rem;
    }
    .line {
        width:100%;
        background:#41EAD4;
        height:0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding:2rem 0rem;
    }
`

const ImageDisplay = styled.div`
    min-height:20vh;
    img{
        width:80%;
        height:50vh;
        object-fit:cover;
    }
    @media (max-width:978px){
        object-fit:cover;
        width:500px;
        margin-left:3rem;
        
    }

`


//award component

const Award = ({ title , description }) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );
};

export default ImageDetails
