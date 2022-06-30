import React from "react";
import Card from './ServiceCard'
import './Services.css';


const serviceData = {
    0 : {
        imgFile: 'Presentation.png',
        service : "Presentation & Decks",
        note : ["Pitch deck design", "Project proposals", "Marketing materials for sales"]
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
        <section className="service-section">
            <img src={require(`../../img/squiggle.png`)} alt='background' className='background-image'></img>
            <h1 className="service-header">Our Services</h1>
            <div className="card-container">
                <Card data={serviceData[0]}/>
                <Card data={serviceData[1]}/>
                <Card data={serviceData[2]}/>
            </div>
        </section>
    )
};
export default Services;