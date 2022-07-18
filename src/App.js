import React, {useState} from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import ImageBreak from './components/ImageBreak/ImageBreak';
import Reviews from './components/Reviews/Reviews';
import Modal from './components/Modal/Modal';
import Contact from './components/Contact/Contact';

//Images
import Hallway from './img/hallway.jpeg'
import Thirteenth from './img/13th-Floor.png'


function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <ImageBreak alt='bolt-storage' image={Hallway}/>
      <Reviews />
      <ImageBreak alt='13th-Floor' image={Thirteenth}/>
      <Modal title='CONTACT' show={show}>
        <Contact />
      </Modal>
      <button onClick={()=> setShow(true)}>Show Modal</button>
    </div>
  );
}

export default App;
