import React, {useState} from "react";
import axios from "axios";
import Section from "../Section/Section";
import './Contact.css';
import { useEffect } from "react";

const { REACT_APP_X_RAPIDAPI_KEY } = process.env;

const Contact = () => {

    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState({
            name: '',
            budget: '',
            message: '',
        });
    const [sendRequest, setSendRequest] = useState(false);

    const handleEmailChange = (e) => {
        setSender(e.target.value);
    };
    const handleNameChange = (e) => {
        setMessage(prevState => ({
            message: { ...prevState.message, name: e.target.value }
        }))
    };
    const handleBudgetChange = (e) => {
        setMessage(prevState => ({
            message: { ...prevState.message, budget: e.target.value }
        }))
    };
    const handleMessageChange = (e) => {
        setMessage(prevState => ({
            message: { ...prevState.message, message: e.target.value }
        }))
    };


    const options = {
    method: 'POST',
    url: 'https://fapimail.p.rapidapi.com/email/send',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': REACT_APP_X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'fapimail.p.rapidapi.com'
    },
    data: `{"recipient":"patrick.dayton24@gmail.com","sender":${sender},"subject":${subject},"message":${toString(message)}}`
    };
    console.log(options);

    useEffect(() => {
        if (sendRequest) {
            axios.request(options).then(function (response) {
                console.log(response.data);
                alert('Your email has been sent!')
            }).catch(function (error) {
                console.error(error);
            });

            return () => {
                setSendRequest(false);
            }
        }
    })

    

    return (
        <Section header="Contact" id="contact">
            <div className="contact-wrapper" data-aos='fade-up' data-aos-delay="300">
                <form className="contact-form">
                    <div className="contact-row">
                        <div className="contact-field">
                            <label for="name">Name / Company</label>
                            <input id='name' type='text' name='name' className='input' onChange={handleNameChange}></input>    
                        </div>
                        <div className="contact-field">
                            <label for="email">Email</label>
                            <input id='email' type='text' name='email'  className='input' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={handleEmailChange}></input>
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className="contact-field">
                            <label for="subject">Subject</label>
                            <input id='subject' type='text' name='subject' onChange={(e) => setSubject(e.target.value)} className='input'></input>  
                        </div>
                        <div className="contact-field">
                            <label for="budget">Budget</label>
                            <input id='budget' type='number' name='budget' onChange={handleBudgetChange} className='input budget'></input>  
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className="message">
                            <label for="message">Describe your needs</label>
                            <textarea id='message' type='text' name='message' onChange={handleMessageChange} rows='12'></textarea>  
                        </div>
                    </div>
                    <div className="contact-row submit-container">
                        <button className="submit-contact-form" onClick={(e) => {e.preventDefault(); setSendRequest(true)}}>Send</button>
                    </div>
                </form>
            </div>
        </Section>
    )
}
export default Contact;