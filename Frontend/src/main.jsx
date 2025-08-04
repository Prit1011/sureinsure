import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// index.js or main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './landing_page/Navbar';
import Hero from './landing_page/Hero';
import About from './landing_page/About';
import Services from './landing_page/Services';
import Why_us from './landing_page/Why_us';
import Feature from './landing_page/Feature';
import Final from './landing_page/Final';
import Footer from './landing_page/Footer';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbar />
   <Hero />
   <About />
   <Services />
   <Why_us />
   <Feature />
   <Final />  
   <Footer />
  </StrictMode>,
)
