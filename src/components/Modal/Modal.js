import React from 'react';
import './Modal.css';


const Modal = (props) => {

  if(!props.show) {
    return null
  }
  const title = props.title
    return (
        <div className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>{title}</h4>
              <button className='modal-close' onClick={()=>{}}>X</button>
            </div>
            <div className='modal-body'>
              {props.children}
            </div>
            <div className='modal-footer'>
              <button className='submit-button' type='submit'>Send</button>
            </div>
          </div>
        </div>
    )
};
export default Modal

//make prop, title,
//wire up modal close