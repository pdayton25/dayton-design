import React from "react";
import Section from "../Section/Section";
import './About.css';

const About = () => {

    return (
        <>
            <Section header="About" id='about' >
                <div className="about-container">
                    <div className='about'>
                        <div className="persons" data-aos='fade-right' data-aos-delay="300">
                            <div className="person">
                                <amp-img src={require('../../img/headshot.avif')} alt="headshot" className="headshot-img"/>
                                <p>Patrick</p>
                            </div>
                        </div>
                        <div className="about-description" data-aos='fade-left' data-aos-delay="300">
                            <p>Dayton designs was started in 2022 with the vision to bring fresh design into an old fashioned market.</p>
                            <p>While working in the CRE industry we saw time and time again that companies had poor collateral and site design.</p>
                            <p>A professional look is ESSENTIAL to grow and build trust with your investors, but more importantly your tenants.</p>
                            <p>Having recently worked with the likes of 13th Floor Investments and Bolt Storage to redesign their collateral and create templates for reporting, we saw just how valuable a fresh and professional look can be.</p>
                            <p>Our team has a combined 65+ years in design most notably in the Hotel industry with national marketing campaigns for the Manchester Grand Hyatt, Whitetail Hotel &amp; Resorts, and The Grand Del Mar.</p>
                        </div>
                    </div>
                </div>
                <section className='brands'>
                    <amp-img src={require('../../img/13fi-logo.png')} alt='13th Floor Investment' className="company-logo"/>
                    <amp-img src={require('../../img/13fihomes-logo.png')} alt='13th Floor Homes' className="company-logo"/>
                    <amp-img src={require('../../img/BoltStorage-logo.png')} alt='Bolt Storage' className="company-logo"/>
                </section>
            </Section>
        </>
    );
};
export default About;

/*
{[persons].map((person) => {
    console.log(person.img)
    return (
        <div className="person">
            <img src={require(person.img)} alt="headshot" />
            <p>{person}</p>
        </div>
    )
})}
*/