import React from 'react';
import { Parallax} from 'react-parallax';

import City from '../../img/black-white-city.jpeg';
import './Hero.css';


const Hero = () => (
        <Parallax strength={300} className='hero' bgImage={City} bgImageAlt='city' bgImageStyle={{height: '100%'}}>
                <div className='content'>
                    <h1 className='tagline'><strong className='tag-color'>STAND OUT</strong></h1>
                    <h2 className='tagline second'>AMONGST A SEA OF COMPETITORS</h2>
                </div>      
        </Parallax>
);
export default Hero;