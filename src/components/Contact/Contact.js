import React from "react";
import Section from "../Section/Section";
import './Contact.css';


const Contact = () => {
    return (
        <Section header="Contact" id="contact">
            <div className="contact-wrapper" data-aos='fade-up' data-aos-delay="300">
                <form className="contact-form">
                    <div className="contact-row">
                        <div className="contact-field">
                            <label>Name / Company</label>
                            <input type='text' name='name' className='input' onChange={()=>{}}></input>    
                        </div>
                        <div className="contact-field">
                            <label>Email</label>
                            <input type='text' name='name'  className='input' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={()=>{}}></input>
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className="contact-field">
                            <label>Budget</label>
                            <input type='number' name='budget' onChange={()=>{}} className='input budget'></input>  
                        </div>
                        <div className="contact-field">
                            <label>Timeline</label>
                            <input type='text' name='timeline' onChange={()=>{}} className='input'></input>  
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className="message">
                            <label>Describe your needs</label>
                            <textarea type='text' name='message' onChange={()=>{}} rows='12'></textarea>  
                        </div>
                    </div>
                    <div className="contact-row submit-container">
                        <button className="submit-contact-form" onClick={(e) => {e.preventDefault(); console.log('submitted')}}>Send</button>
                    </div>
                </form>
            </div>
        </Section>
    )
}
export default Contact;