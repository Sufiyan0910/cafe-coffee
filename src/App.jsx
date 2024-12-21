import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Services from './Components/Services';
import Banner from './Components/Banner';
import AppStore from './Components/AppStore';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';




const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    })
  })
  return (
    <div className='overflow-x-hidden' >
      <NavBar />
      <Home />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer/>



    </div>
  )
}

export default App
