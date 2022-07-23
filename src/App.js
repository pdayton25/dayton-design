import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import ImageBreak from './components/ImageBreak/ImageBreak';
import About from './components/About/About';
//import Modal from './components/Modal/Modal';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

//Images
import Hallway from './img/hallway.jpeg';
import Building from './img/building-grayscale.jpeg';





function App() {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []) 

  //const [show, setShow] = useState(false)

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <ImageBreak alt='bolt-storage' image={Hallway}/>
      <About />
      <ImageBreak alt='13th-Floor' image={Building}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

/* 
<Modal title='CONTACT' show={show}>
  
</Modal>
<button onClick={()=> setShow(true)}>Show Modal</button>
*/
