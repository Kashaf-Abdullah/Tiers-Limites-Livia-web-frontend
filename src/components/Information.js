
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import InfoCard from "./cards/InfoCard";
import i1 from "../assets/Bilder website/Neuronetix.png";
import i2 from "../assets/Bilder website/speaker.png";
import i3 from "../assets/Bilder website/consulting.png";
import { Link } from "react-router-dom";
const Information = () => {
  const [expanded, setExpanded] = useState(false);
 
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      setExpanded(false); // Close the navbar after scrolling
    }
  };
  return (
    <Container id="about py-2">
      <h3 className="heading">Damit beschäftige ich mich</h3>
      <div className="row" style={{ margin: "5rem 1rem 0 0" }}>
    <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center" data-aos="fade-in">

        <img src={i1} alt="" className="info-card-img" />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6">
        <h4>Informatik</h4>
        <p className="text" style={{color:"#182C47"}}>Ich tauche begeistert und voller Leidenschaft in die Welt der IT und Kl ein! Neuronetix ist mein kreativer Spielplatz dafür. In diesem Unternehmen entwickeln wir individuelle Softwarelösungen und setzen innovative KI-Technologien ein, um aktiv die Zukunft der Technologie mitzugestalten. Ich bin überzeugt davon, dass wir mit unseren Lösungen einen wichtigen Beitrag zur Gestaltung der Zukunft leisten werden!</p>
        <button className="in-btn" role="button"  data-aos="fade-in">
      
        <a href="https://neuronetix.ch/" target='_blank' style={{textDecoration:"none"}}> Weiterlesen</a>

       </button>
      </div>
    </div>








    <div className="row" style={{ margin: "5rem 1rem 0 0" }}>
    <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center" data-aos="fade-in">

        <img src={i3} alt="" className="info-card-img" />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6">
        <h4>Social Media</h4>
        <p className="text" style={{color:"#182C47"}}>180 Grad Consulting ist meine Leidenschaft in Aktion! Ich unterstütze kleine und mittelständische Unternehmen dabei, ihre Social-Media-Strategien zu verbessern. Mit massgeschneiderten Lösungen gestalte ich digitale Präsenzen, die zu ihnen passen und sie zum Erfolg führen werden.</p>
        <button className="in-btn" role="button"  data-aos="fade-in">
      
        <Link as={Link} to="/?section=consulting" onClick={() => handleNavLinkClick("consulting")} style={{textDecoration:"none"}} >Weiterlesen</Link>
       </button>
      </div>
    </div>















    <div className="row" style={{ margin: "5rem 1rem 0 0" }}>
    <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center" data-aos="fade-in">

        <img src={i2} alt="" className="info-card-img" />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6">
        <h4>Speaking</h4>
        <p className="text" style={{color:"#182C47"}}>Als Speaker teile ich nicht nur Wissen, sondern schaffe auch inspirierende Gespräche über die sich ständig verändernde Arbeitswelt junger Menschen und die aufstrebende Bedeutung von künstlicher Intelligenz! Ich bin davon überzeugt, dass wir gemeinsam die Zukunft gestalten können! In meinen Vorträgen möchte ich nicht nur informieren, sondern auch dazu ermutigen, neue Perspektiven zu erkunden und gemeinsam nachhaltige Lösungen zu finden.</p>
        <button className="in-btn" role="button"  data-aos="fade-in">
      
        <Link as={Link} to="/?section=speaking" onClick={() => handleNavLinkClick("speaking")} style={{textDecoration:"none"}} >Weiterlesen</Link>

       </button>
      </div>
    </div>
    </Container>
  );
};

export default Information;
