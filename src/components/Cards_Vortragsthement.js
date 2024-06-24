import React from 'react'
import Container from 'react-bootstrap/Container'
import c1 from '../assets/Bilder website/icon3.png'
import c2 from '../assets/Bilder website/icon2.png'

import c3 from '../assets/Bilder website/fli.png'

import VotragsthementCard from './cards/VotragsthementCard'
import Details from './cards/Details'

const Cards_Vortragsthement = () => {
  const  first= [
    'Grundlagen',
    'Vorteile & Nachteile für Unternehmen',
    'Einsetzungsmöglichkeiten',
    'Wie nutze ich KI für mein Unternehmen',
    '',
    'Empfohlen für: Menschen welche Up to Date sein möchten, sich für Technologien interessieren und ihr Unternehmen modernisieren möchten',
 
  ];
  const second = [
    'Wie ticken wir?',
    '',
    'Wie arbeiten wir?',
    '',
    'Wie kann man junge  Mitarbeiter:innen für sich gewinnen?',
    '',
    'Wie schaffen wir ein Miteinander, anstatt gegeneinander?',
    '',
    'Wie arbeiten wir gemeinsam?',
    
    '',
    'Empfohlen für: HR Mitarbeiter:innen, Geschäftsführung, Unternehmen mit Fachkräftemangel'
];
  
  const third=[
    'Wie beeinflusst Social Media unsere Welt?',
    '',
    'Vorteile und Nachteile von Social Media?',
    '',
    'Plattformen als Übersicht',
    'Empfohlen für:  ',
     '-Menschen welche mit jungen Menschen zusammenarbeiten',
     '-Eine Personal Brand aufbauen möchten',
     '-Ihr Geschäft in die Sichtbarkeit bringen möchten',

  ]
 
  return (
    <Container>
    <h3 className="heading">
    Meine Vortragsthemen
</h3>
   <div className="row" style={{marginBottom:"3rem"}}>
 <VotragsthementCard topics={first} fronthead1="Künstliche" fronthead2="Inteligenz" image={c1}/>
  
 <VotragsthementCard topics={second} fronthead1="Generation" fronthead2="Chaos" image={c2}/>
  
 <VotragsthementCard  topics={third}  fronthead1="Social" fronthead2="Media"  image={c3}/>
  

   </div>
   <div className="votra-card-detail">
<Details
 text="Bereit, deine Veranstaltung zu revolutionieren? Buche mich jetzt als Sprecherin und lass uns gemeinsam die Zukunft von Kl, Generation Z und Social Media erkunden! Mit fesselnden Einblicken und fundiertem Fachwissen bringe ich frische Perspektiven in deine Veranstaltung."
 btn="Jetzt buchen" 
 btn_class="in-btn" 
 btnlink="https://premium-speakers.com/referent-moderator/livia-schroeder/"
 />
 </div>

 

    </Container>
  )
}

export default Cards_Vortragsthement
