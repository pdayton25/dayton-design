import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="p">Dayton Designs</p>
            <p className="p">Est. 2022</p>
            <div className="social">
                <a className='social-icon' href='https://twitter.com/0xDayton'>
                    <img src={require('../../img/Twitter.png')} alt='twitter'/>
                </a>
                <a className='social-icon' href='https://www.linkedin.com/in/patrick-dayton-902b7176/'>
                    <img src={require('../../img/LinkedIn.png')} alt='linkedin'/>
                </a>
                <a className='social-icon' href='https://github.com/pdayton25'>
                    <img src={require('../../img/GitHub.png')} alt='github'/>
                </a>
            </div>

        </div>
    )
};
export default Footer;