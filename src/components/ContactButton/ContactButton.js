import React from 'react';
import './ContactButton.css';

const ContactButton = ({text}) => {
    return(
        <div className='contact-btn'>{text}</div>
    )
}
export default ContactButton;