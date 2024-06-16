import logo from './logo.svg';
import './App.css';
import {BrowserRouter,routes,route, Routes, Route} from "react-router-dom"
import { Tophead } from './HeadSection/Tophead';
import { Navbar } from './Navbar/Navbar';
import { Slidersection } from './Slider/Slidersection';
import { Marquee } from './Slider/Marquee';
import { About } from './AboutSection/About';
import { Why } from './HeadSection/Body/whysection/Why';
import { Who } from './HeadSection/Body/whysection/Who';
import { What } from './HeadSection/Body/whysection/What';
import { Work } from './HeadSection/Body/Worksection/Work';
import { Contact } from './AboutSection/ContactSection/Contact';
import { TrustSlider } from './Slider/TrustSlider';
import { Risk } from './FooterSection/Risk';
import { Footer } from './FooterSection/Footer';
import { AboutP } from './AboutPage/AboutP';
import { Home } from './HomeSection/Home';
import { ResearchPage } from './Research/ResearchPage';
import { Productpage } from './ProductSection/Productpage';


function App() {
  return (
       
       <BrowserRouter>
       {/* <Tophead/>
      <Navbar/>
       */}

      {/* <Slidersection/>
      
      <Marquee/>
       <About/> 
      <Why/>
      <Who/>
      <What/>
      <Work/>
      <TrustSlider/>
      <Contact/>
      <Risk/>
      <Footer/>  */}
      <Routes> 
        <Route path='/'     element={<Home/>}/>
        <Route path="/about" element={<AboutP/>}/> 
        <Route path='/research' element={<ResearchPage/>}/>
        <Route path='/product' element={<Productpage/>}/>
      </Routes>
      
      </BrowserRouter>
    
  );
}

export default App;
