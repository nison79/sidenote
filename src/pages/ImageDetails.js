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
                <img src= {image.mainImg} alt="imageState"></img>
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
        top:10%;
        left:50%;
        transform: translateX(-50% ,-10%)
    }
    img{
        width:100%;
        height:70vh;
        object-fit:cover;
    }
`

const Awards = styled.div`
    min-height:80vh;
    display:flex;
    margin:5rem 10rem;
    align-items:center;
    justify-content:space-around;

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
    min-height:50vh;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
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
