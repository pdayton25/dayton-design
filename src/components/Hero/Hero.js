import React from 'react';
import { Parallax, Background } from 'react-parallax';

import City from '../../img/black-white-city.jpeg';
import './Hero.css';


const Hero = () => (
    <Parallax strength={300} className='hero'>
        <Background className='hero'>
            <img src={City} alt='city'/>
        </Background>
            <div className='content'>
                <h1 className='tagline first'><strong className='tag-color'>STAND OUT</strong></h1>
                <h2 className='tagline second'>AMONGST A SEA OF COMPETITORS</h2>
            </div>      
    </Parallax>
);
export default Hero;