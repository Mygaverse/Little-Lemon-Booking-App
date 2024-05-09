import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Specials from '../Specials';
import Testimonials from '../Testimonials';
import About from '../About';
import Footer from '../Footer';
import './styles.css'; // Import styling for this page

const Home = () => {
  return (
    <main className="home-page">
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
