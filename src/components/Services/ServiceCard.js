import React from "react";
import ServiceButton from './ServiceButton/ServiceButton'
import './ServiceCard.css';

const ServiceCard = ({data}) => {

    return (
        <div className="card-container" data-aos='fade-up' data-aos-delay="300">
            <div className="service-card">
                <div className="header-container">
                    <h2 className="service-title">{data.service}</h2>
                    <img src={require(`../../img/${data.imgFile}`)} alt={data.service} className='service-img' />
                </div>
                <div className="service-content">
                <ul className="service-list">
                    {data.note.map((note) => {
                        return (
                            <li className="note">{note}</li>
                        ) 
                    })}
                </ul>
                </div>
                <div className="service-button">
                <ServiceButton />
                </div>
            </div>
        </div>
    )
};
export default ServiceCard;