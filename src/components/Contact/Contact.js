import React, {useState} from "react";
import axios from "axios";
import Section from "../Section/Section";
import './Contact.css';
import { useEffect } from "react";

const { X_RAPIDAPI_KEY } = process.env;


const Contact = (X_RAPIDAPI_KEY) => {

    useEffect(() => {
        const axios = require("axios");

        const options = {
        method: 'POST',
        url: 'https://fapimail.p.rapidapi.com/email/send',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'fapimail.p.rapidapi.com'
        },
        data: `{"recipient":"patrickdayton24@gmail.com","sender":${sender},"subject":${subject},"message":${message}}`
        };

        const sendEmail = axios.request(options).then(function (response) {
            console.log(response.data);
            alert('Your email has been sent!')
        }).catch(function (error) {
            console.error(error);
        });
    })
    
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState({
            company: '',
            budget: '',
            message: '',
        });

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
                            <input type='number' name='budget' onChange={() => {}} className='input budget'></input>  
                        </div>
                        <div className="contact-field">
                            <label>Subjects</label>
                            <input type='text' name='subject' onChange={()=>{}} className='input'></input>  
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className="message">
                            <label>Describe your needs</label>
                            <textarea type='text' name='message' onChange={()=>{}} rows='12'></textarea>  
                        </div>
                    </div>
                    <div className="contact-row submit-container">
                        <button className="submit-contact-form" onClick={(e) => {e.preventDefault()}}>Send</button>
                    </div>
                </form>
            </div>
        </Section>
    )
}
export default Contact;