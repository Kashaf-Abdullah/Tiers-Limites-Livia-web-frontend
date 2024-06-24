import React from 'react'
import cons1 from "../assets/cons1.PNG";
import ConsultingCard from "./cards/ConsultingCard";

const ConsultingSection = () => {
  return (
   <>
     <div className="row" style={{ padding: "6rem 0 3rem 0"}}>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h4>Das Marketing hat sich um 180 Grad gedreht!</h4>
          <p className="text">
            Unternehmen werben auf den falschen Marktplätzen und verlieren
            dadurch mehrere tausend Franken und unzählige Kund:innen oder
            Mitarbeiter:innen.
            <br />
            <br />
             Der neue Marktplatz ist Social Media!
         
          </p>
          {/* <p className="text" style={{marginTop:"2px"}}>
            Mit unserer Dienstleistung stehen wir Dir zur Seite, um Deine
            digitale Präsenz auf Plattformen wie LinkedIn, TikTok, YouTube
            Shorts und Instagram zu optimieren. Unser Team besteht aus
            erfahrenen Experten, die Dir helfen, das volle Potenzial Deiner
            Social-Media-Strategie auszuschöpfen. Unser Prozess ist darauf
            ausgerichtet, Deine individuellen Bedürfnisse gerecht zu werden und
            maßgeschneiderte Lösungen zu bieten.
          </p> */}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-start justify-content-center">
          <img
          // style={{marginLeft:"auto"}}

            src={cons1}
            alt=""
            className="const-card-img"
            data-aos="fade-in"
          />
        </div>
      </div>
      <p className="text" >            Mit unserer Dienstleistung stehen wir Dir zur Seite, um Deine
            digitale Präsenz auf Plattformen wie LinkedIn, TikTok, YouTube
            Shorts und Instagram zu optimieren. Unser Team besteht aus
            erfahrenen Experten, die Dir helfen, das volle Potenzial Deiner
            Social-Media-Strategie auszuschöpfen. Unser Prozess ist darauf
            ausgerichtet, Deine individuellen Bedürfnisse gerecht zu werden und
            maßgeschneiderte Lösungen zu bieten.
          </p>
      <div className="row ">
        <ConsultingCard
          head="Workshop"
          text="Wir bringen dein Inhouse Marketing Team auf den neusten Stand und bringen ihnen bei, wie sie selbst Trends erkennen und ihre Präsenz modern und attraktiv gestalten können"
        />
        <ConsultingCard
          head="Consulting"
          text="Wir analysieren Ihre Profile! Dabei geben wir Ihnen strategische Optimierungslösungen auf den Weg und helfen Ihnen, taktisch mit Insider Tipps Ihre Ziele zu erreichen."
        />
      </div>

      <div className="row ">
        <ConsultingCard
          head="Agentur"
          text="Wir führen deine Social Media Kanäle (Instagram, LinkedIn, TikTok)"
        />
        <ConsultingCard
          head="Strategie"
          text="Wir erstellen dir eine Social Media Strategie mit einem umfangreichen Konzept"
        />
      </div>
   </>
  )
}

export default ConsultingSection
