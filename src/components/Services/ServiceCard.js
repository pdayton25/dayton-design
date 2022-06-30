import React from "react";
import ServiceButton from './ServiceButton/ServiceButton'
import './ServiceCard.css';

const ServiceCard = ({data}) => {
    console.log(data);


    return (
        <div className="service-card">
            <div className="img-container">
                <img src={require(`../../img/${data.imgFile}`)} alt={data.service} className='service-img'></img>
            </div>
            <div className="service-content">
            <h2 className="service-title">{data.service}</h2>
            <ul className="service-list">
                {data.note.map((note) => {
                    return (
                        <li className="note">{note}</li>
                    ) 
                })}
            </ul>
            </div>
            <ServiceButton />
        </div>
    )
};
export default ServiceCard;