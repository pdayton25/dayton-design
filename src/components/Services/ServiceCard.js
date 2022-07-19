import React from "react";
import ServiceButton from './ServiceButton/ServiceButton'
import './ServiceCard.css';

const ServiceCard = ({data}) => {
    console.log(data);


    return (
        <div className="card-container">
            <div className="service-card">
                <div className="header-container">
                    <h2 className="service-title">{data.service}</h2>
                    <img src={require(`../../img/${data.imgFile}`)} alt={data.service} className='service-img'></img>
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
                <ServiceButton />
            </div>
        </div>
    )
};
export default ServiceCard;