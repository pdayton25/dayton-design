import React from 'react';
import { Parallax } from 'react-parallax';

import Palms from '../../img/palmtrees.jpg';
import './Hero.css';


const Hero = () => (
    <Parallax bgImage={Palms} bgImageAlt='palm-tree' strength={300} className='hero'>
        <div className='content'>
            <h1 className='tagline'>STAND OUT AMONG A SEA OF COMPETITORS</h1>
            <button className='hero-btn'>
                <p className='hero-btn-txt'>Book a Designer!</p>
            </button>
        </div>
    </Parallax>
);
export default Hero;