import React from 'react'
import { Container } from 'react-bootstrap'
import MeineVortragsthemenCard from './cards/MeineVortragsthemenCard'

const MeineVortragsthemen = () => {
  const  first= [
    'Grundlagen',
    'Vorteile & Nachteile für Unternehmen',
    'Einsetzungsmöglichkeiten',
    'Wie nutze ich KI für mein Unternehmen',
    'Empfohlen für: Menschen welche Up to Date sein möchten, sich für Technologien interessieren und ihr Unternehmen modernisieren möchten',
 
  ];
  const second=[
    'Wie ticken wir',
    'Wie arbeiten wir',
    'Wie kann man junge Mitarbeiter:innen für sich gewinnen',
    'Wie schaffen wir ein Miteinander, anstatt Gegeneinander',
    'Wie arbeiten wir gemeinsam',
    'Empfohlen für: HR Mitarbeiter:innen, Geschäftsführung, Unternehmen mit Fachkräftemangel',

  ]
  const third=[
    'Wie beeinflusst Social Media unsere Welt',
    'Vorteile und Nachteile von Social Media',
    'Plattformen als Übersicht',
    'Empfohlen für: Menschen welche mit jungen Menschen zusammenarbeiten, Eine Personal Brand aufbauen möchten, Ihr Geschäft in die Sichtbarkeit bringen möchten',

  ]
 
  return (
    <Container>
    <h3 className="heading"  style={{margin:"4rem 0 3rem 0"}}>
    Meine Vortragsthemen
</h3>
        <div className="row">
        <MeineVortragsthemenCard topics={first} heading="Künstliche Inteligenz"/>
        <MeineVortragsthemenCard topics={second}  heading="Generation Chaos"/>
        <MeineVortragsthemenCard topics={third}  heading="Social Media"/>
   </div>
    </Container>
  )
}

export default MeineVortragsthemen
