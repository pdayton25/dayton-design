import React from "react";
import './Section.css';

const Section = (props) => {
    return (
        <section className='section'>
            <p className='section-header'>{props.header}</p>
            <div className="section-content">
                {props.children}
            </div>
        </section>
    );
};
export default Section;