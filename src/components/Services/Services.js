import React from "react";
import Card from './ServiceCard'
import './Services.css';


const serviceData = {
    0 : {
        imgFile: 'Presentation.png',
        service : "Presentations & Collateral",
        note : ["We provide clean and modern designs for all project associated collateral", "Project proposals", "Marketing materials for sales"]
    },
    1 : {
        imgFile: 'Page.png',
        service: "Financial Reporting",
        note: ['Annual / Quarterly / Monthly financial reports', 'Reusable & Modifiable reporting templates', 'Dramatically improve readability']
    },
    2 : {
        imgFile: 'Website.png',
        service: "Web Development",
        note: ['Start from scratch', 'Modify exsisting website', 'Responsive web design', 'Improve SEO']
    }
};

const Services = () => {
    return (
        <div className="services">
            <section className='brands'>
                <img src={require('../../img/13fi-logo.png')} alt='13th Floor Investment' className="company-logo"/>
                <img src={require('../../img/13fihomes-logo.png')} alt='13th Floor Homes' className="company-logo"/>
                <img src={require('../../img/BoltStorage-logo.png')} alt='Bolt Storage' className="company-logo"/>
            </section>
            <section className="service-section">
                <img src={require(`../../img/squiggle.png`)} alt='background' className='background-image'></img>
                <h1 className="service-header">SERVICES</h1>
                <div className="card-container">
                    <Card data={serviceData[0]}/>
                    <Card data={serviceData[1]}/>
                    <Card data={serviceData[2]}/>
                </div>
            </section>
        </div>
    )
};
export default Services;