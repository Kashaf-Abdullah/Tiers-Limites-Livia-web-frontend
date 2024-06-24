import React from 'react'
import Container from 'react-bootstrap/Container'
import email from '../assets/Bilder website/mail_blue@2x.png'
import phone from '../assets/Bilder website/Phone_blue@2x.png'
import address from '../assets/Bilder website/Location_blue@2x.png'

import insta from '../assets/Bilder website/instagram_icon.png'
import linkedin from '../assets/Bilder website/linkedin_icon.png'

const ContactDet = () => {
    const img_style={
        width:"29.3px",
        height:"31px"
    }
    const con={
        display:"flex",
      flexWrap:"wrap",
       gap:"30px",
       
    }
    const cont_text={
        fontSize:"19px",
        color:"var(--darkblue)"
    }
  return (
    <Container>
    <div className="con-det" style={{display:"flex",justifyContent:"center",flexWrap:"wrap",margin:"6rem 0"}}>
        <div className="email-det det" style={con}>
            <img src={email} alt="" style={{
              width:"28.3px", 
              height: "23px",
              position:"relative",
              top:"4px"
              }} />
            <p style={cont_text}>info@livia-schroeder.ch</p>
        </div>
   <div className="phone-det det" style={con}>
    <img src={phone} alt="" style={img_style} />
    <p style={cont_text}>+41 76 496 43 67</p>
   </div>
   <div className="add-det det" style={con}>
    <img src={address} alt="" style={{
              width:"20.3px", 
              height: "27px",
              position:"relative",
              top:"4px"
              }} /> 
    <p style={{...cont_text,
    position:"relative",
  bottom: "23px",
  zIndex:"-99",
  
  }} >Seestrasse 65 <br />
    5712 Beinwil am See  <br />
    Switzerland</p>
   </div>
    <div className="insta-det det" style={con}>
<img src={insta} alt="" style={img_style} />
        <p style={cont_text}>livia.f.schroeder</p>
    </div>
   <div className="linkedin-det det" style={con}>
<img src={linkedin} alt="" style={img_style} />
    <p  style={{...cont_text,
    position:"relative",
  top: "6px",
  zIndex:"-99"}}>Livia Florina Schröder</p>
   </div>
    </div>
      
    </Container>
  )
}

export default ContactDet




