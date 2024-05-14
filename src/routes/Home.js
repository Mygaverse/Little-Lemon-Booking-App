import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <About />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
