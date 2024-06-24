import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import MainWegcard from "./cards/MainWegcard";
// import { fireConfetti } from "./confetti";
const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  // const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback = () => {
    setMessage1("Step one");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Step two");
  };

  const someCallback3 = () => {
    // setMessage3("3");
    // fireConfetti();
  };

  const someCallback4 = () => {
    // setMessage2("4");
  };

  const someCallback5 = () => {
    // setMessage2("5");
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    // setObserver(timeline5.current);

    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <>
      {/* left box */}
      <h3 className="heading">Mein Weg</h3>.
      {/* center timeline */}
      <div className="wrapper" >
        <div className="circleWrapper">
          <div id="circle1" ref={circle1} className="circle">
            

            <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2024
            </div>
          </div>
          <div className="message">
          <MainWegcard head="FOCUS" text="m Jahr 2024 habe ich viel Zeit für einen technologischen Wandel in der Bau- und Bildungsbranche investiert, um eine Veränderung zu bewirken. Zudem halte regelmässig Vorträge zu Themen wie Generation Chaos, Social Media und Künstliche Intelligenz. Zusätzlich unterstütze ich Unternehmen dabei, ihre Social-Media-Präsenz zu stärken, um sie erfolgreich in die Zukunft zu führen."/>
         
          </div>
        </div>
        <div id="timeline1" ref={timeline1} className="timeline" />

        <div className="circleWrapper">
          <div id="circle2" ref={circle2} className="circle">
            
            <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2023
            </div>
          </div>
          <div className="message">
          <MainWegcard head="AUS DER KOMFORTZONE" text="2023 markierte für mich ein Jahr voller bedeutender Ereignisse. Ich wagte den Schritt in die Selbstständigkeit und begann international zu arbeiten. Zusätzlich wurde ich als Premium Speaker aufgenommen, was mir erlaubte, mein Wissen einem breiteren Publikum zu vermitteln, während ich gleichzeitig mein Studium der Wirtschaftsinformatik an der HKV Aarau begann, um meine beruflichen Perspektiven zu erweitern"/>
             </div>
        </div>
        <div id="timeline2" ref={timeline2} className="timeline" />

        <div className="circleWrapper">
          <div id="circle3" ref={circle3} className="circle">
          <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2022
            </div>
          </div>
          <div className="message">
       <MainWegcard head="KV, KOMMUNIKATION , KRYPTO" text="Ich absolvierte ein Praktikum in einem Kommunikationsunternehmen, erhielt erste Einblicke in die professionelle Kommunikation und schloss erfolgreich meine kaufmännische Ausbildung ab. Mein 18. Geburtstag verbrachte ich auf einer Krypto-Konferenz in Dubai, was mir ermöglichte, mich mit aktuellen Technologietrends vertraut zu machen und mein Netzwerk zu erweitern. Neben meinen eigenen Lern- und Karriereschritten hatte ich die Gelegenheit, mein Wissen weiterzugeben, indem ich Vorträge an der Kantonsschule hielt und an verschiedenen Veranstaltungen teilnahm, sowie kleinere Vorträge im Büro meiner Eltern hielt, um meine Präsentations- und Wissensvermittlung Fähigkeiten zu verbessern"/>
          </div>
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />

        <div className="circleWrapper">
          <div id="circle4" ref={circle4} className="circle">
          <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2021
            </div>
          </div>
          <div className="message">
       
          <MainWegcard head="VERÄNDERUNG" text="Im Jahr 2021 erlebte ich zahlreiche Veränderungen: Der Verkauf von Kosmetikartikeln expandierte, und wir organisierten erfolgreich Offline-Events wie das im Hotel Widder Zürich. Diese Erfahrungen verbesserten meine organisatorischen Fähigkeiten und gaben mir Einblicke in die Eventplanung. Parallell dazu entdeckte ich ein Interesse für Blockchain-Technologie und Kryptowährungen. Aufgrund der Pandemie-bedingten Einschränkungen im Reisebüro entschied ich mich für einen Wechsel in die Baubranche, was mir ermöglichte, praktische Erfahrung zu sammeln und meine Ausbildung zu bereichern."/>
          </div>
        </div>
        <div id="timeline4" ref={timeline4} className="timeline" />

        <div className="circleWrapper">
          <div id="circle5" ref={circle5} className="circle">
          <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2020
            </div>
          </div>
          <div className="message">
          
       <MainWegcard head="AUS LANGEWEILE WERTVOLLE ERFAHRUNGEN GESAMMELT" text="Im Jahr 2020, während meiner kaufmännischen Ausbildung, entdeckte ich durch Langeweile den Online-Verkauf von Kosmetikprodukten. Diese Erfahrung war wertvoll: Ich betreute Kunden, beriet sie und sammelte erste Erfahrungen im Social-Media-Bereich. Diese spontane Tätigkeit gab mir Einblicke in E-Commerce und stärkte meine Fähigkeiten im Kundenservice und Online-Marketing."/>
          </div>
        </div>
        {/* <div id="timeline5" ref={timeline5} className="timeline" /> */}
      </div>

      {/* right box */}
    </>
  );
};

export default function App() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App" style={{margin:"5rem 0 23rem 0"}}>
      <TimelineObserver
        initialColor="
        #f4eae1"
        fillColor=" var(--darkblue)"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      {/* <div className="stub2">{message}</div> */}
    </div>
  );
}






















