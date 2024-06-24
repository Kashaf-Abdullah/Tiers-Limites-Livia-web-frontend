import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container";
import user from '../assets/Bilder website/IMG_9497.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <div className="row" style={{marginTop:"1rem"}}>
        <div id="about" className="col-lg-6 col-md-12 col-sm-12" >
            <h3 className='heading'    style={{margin:"0rem 0 0 0",fontSize:"2.6rem",textAlign:"left",padding:"4.5rem 0 0 0"}}>Ich bin Livia Schröder </h3>
            <p className='text' style={{margin:"1.5rem 0"}}>eine begeisterte Anhängerin von Innovation und Fortschritt! Derzeit tauche ich in die Welt der Wirtschaftsinformatik ein und führe zwei Unternehmen:,180 Grad Consulting', wo ich kleine und mittelständische Unternehmen in Sachen Social Media berate, und,Neuronetix',
            
            
            
             meine Spielwiese für IT und KI Entwicklung. Ich bin davon überzeugt, dass ich mit meinen Fähigkeiten und meinem Enthusiasmus einen grossen Beitrag zur digitalen Transformation leisten kann! <br />
            <br />Meine Reise begann mit einer Ausbildung zur Kauffrau! Doch meine Neugier und Freude an neuen Projekten trieben mich dazu, noch mehr zu entdecken. Ich bin begeistert davon, mein Wissen und meine Erfahrungen als Speaker zu Themen wie der Arbeitswelt junger Menschen und künstlicher Intelligenz zu teilen. Ich bin davon überzeugt, dass ich damit einen positiven Einfluss auf die Welt haben kann!</p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
    <img className='user_img' src={user} alt="" style={{ zIndex:"-99",position:"relative",top:"62px", padding: "0rem"}} data-aos="fade-in"/>
</div>

      </div>
    </Container>
  )
}

export default About;
