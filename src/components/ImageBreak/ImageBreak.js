import React from "react";
import { Parallax } from "react-parallax";
import './ImageBreak.css';

const ImageBreak = ({image, alt}) => {
    return (
        <Parallax bgImage={image} bgImageAlt={alt} strength={300} className='image-break'></Parallax>
    );  
};
export default ImageBreak;