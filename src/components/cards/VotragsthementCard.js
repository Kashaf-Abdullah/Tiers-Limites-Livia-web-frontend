import React from 'react'

import c1 from '../../assets/Bilder website/icon3.png'
import MeineVortragsthemenCard from './MeineVortragsthemenCard'
const VotragsthementCard = ({ topics,fronthead1,fronthead2 ,image}) => {

  const  first= [
    'Grundlagen',
    'Vorteile & Nachteile für Unternehmen',
    'Einsetzungsmöglichkeiten',
    'Wie nutze ich KI für mein Unternehmen',
    '',
    'Empfohlen für: Menschen welche Up to Date sein möchten, sich für Technologien interessieren und ihr Unternehmen modernisieren möchten',
 
  ];
  const listStyle = {
    fontSize: '0.8rem',
    listStyleType: 'none',
    paddingLeft: '0rem', 
    color: 'black',
    marginTop: '32px',
    textAlign:"left",
    
  };
  return (
    <div className="col-lg-4 col-md-6  col-sm-12">
    <div class="flip-card" tabIndex="0" >
  <div class="flip-card-inner">
    <div class="flip-card-front" style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly", borderRadius:"20px"}}>
 
    <h4 style={{color:"var(--black)",fontWeight:'600',margin:" 3px 0 30px 0",fontSize:"1.9rem"}}>
   {fronthead1}
    <br />
    {fronthead2}</h4>
    
   
      <img src={image} alt="" style={{width:"13rem",height:"13rem"}} />
    </div>
    <div class="flip-card-back">
  
    <div className="MeineVortragsthemen-card">
        <h3 style={{ textAlign: 'center',color:"black", fontSize: '19px',fontWeight:"700" }}>{fronthead1} {fronthead2}</h3>
        <ul style={listStyle}>
          {topics.map((topic, index) => (
            <li key={index} style={{ margin: '10px 0', color: 'var(--black)' }}>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>

  )
}

export default VotragsthementCard
