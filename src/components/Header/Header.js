import React from 'react';
import Link from './Link';
import ContactButton from '../ContactButton/ContactButton';
import './Header.css';
import './Link.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-wrap'>
                <div className='logo'>DD</div>
            </div>
            <div className='header-right'>
              <Link title='ABOUT'/>
              <Link title='SERVICES'/>
              <Link title='PORTFOLIO'/>
              <ContactButton text="CONTACT"/>
            </div>
        </div>
    );
};
export default Header;