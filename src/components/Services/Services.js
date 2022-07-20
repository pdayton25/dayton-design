import React, {useEffect} from "react";
import ServiceCard from './ServiceCard'
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
        <div className="services" id="services" >
            <section className="service-section">
                <img src={require(`../../img/squiggle.png`)} alt='background' className='background-image'></img>
                <h1 className="service-header" data-aos='fade-up' data-aos-delay="100">Services</h1>
                <div className="card-container">
                    <ServiceCard data={serviceData[0]}/>
                    <ServiceCard data={serviceData[1]}/>
                    <ServiceCard data={serviceData[2]}/>
                </div>
            </section>
        </div>
    )
};
export default Services;