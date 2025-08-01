import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// index.js or main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './landing_page/Navbar';
import Hero from './landing_page/Hero';
import About from './landing_page/About';
import Footer from './landing_page/Footer';
import Services from './landing_page/Services';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbar />
   <Hero />
   <About />
   <Services />
   <Footer />
  </StrictMode>,
)
