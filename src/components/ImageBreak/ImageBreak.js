import React from "react";
import { Parallax } from "react-parallax";
import './ImageBreak.css';

const ImageBreak = ({image, alt}) => {
    return (
        <Parallax strength={300} className='image-break' bgImage={image} bgImageAlt={alt} bgImageStyle={{height: '130%', 'max-width': '100vw'}}>   
        </Parallax>
    );  
};
export default ImageBreak;

/*
<Background className='image-break'>
    <img src={image} alt={alt} className="test-tag"/>
</Background>
*/