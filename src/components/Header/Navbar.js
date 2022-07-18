import React, {useState, useCallback} from 'react'
import './Navbar.css';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);


  const Menu = (isOpen) => {
    if(isOpen === true) {
      return (
        <ul className='menu'>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )
    }
  }
  
  return (
    <nav className="navBar">
      <label className='menu-button-container' onClick={handleClick}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </label>
      {Menu(isOpen)}
    </nav>
  )
};

export default Navbar;

//About, Services, Portfolio, Contact