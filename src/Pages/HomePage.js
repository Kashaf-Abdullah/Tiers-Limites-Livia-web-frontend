import React, { useState, useEffect } from 'react';
import About from '../components/About';
import Information from '../components/Information';
import Speaking from '../components/Speaking';
import Cards_Vortragsthement from '../components/Cards_Vortragsthement';
import Consulting from '../components/Consulting';
import Media from '../components/Media';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ContactDet from '../components/ContactDet';
import Intro from '../components/Intro';
import MainWeg from '../components/MainWeg';
import MainWegMob from '../components/MainWegMob';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 744);
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize); // Add event listener to update on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up
    };
  }, []);

  return (
    <div style={{ marginTop: "4rem" }}>
      <Intro />
      <Information />
      <Speaking />
      <Cards_Vortragsthement />
      <Consulting />
      <About />
      {isMobile ? <MainWegMob /> : <MainWeg />}
      <Media />
      <Contact />
      <ContactDet />
      <Footer />
    </div>
  );
};

export default HomePage;
