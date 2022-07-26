import React, {Suspense, useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

//Images
import Hallway from './img/hallway.avif';
import Building from './img/building-grayscale.avif';

//Lazy load
const ImageBreak = React.lazy(() => import('./components/ImageBreak/ImageBreak')) ;
const About = React.lazy(() => import('./components/About/About'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'))






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
      <Suspense fallback={<div>Loading...</div>}>
        <ImageBreak alt='bolt-storage' image={Hallway}/>
        <About />
        <ImageBreak alt='13th-Floor' image={Building}/>
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

