import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';

const ImpressumPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container style={{ flex: "1" }}>
        <h3 className="heading" style={{ margin: "7rem 0 3rem 0" }}>
          Impressum
        </h3>
        <div className="row justify-content-center" style={{ marginTop: "4rem" }}>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
            <div style={{ width: "15rem" }}>
              <h4 style={{ margin: "1rem 0" }}>Angabe zur Firma:</h4>
              <p>
                Livia Florina Schröder <br />
                Seestrasse 65 <br />
                Beinwil am See, 5712 <br />
                Switzerland
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
            <div style={{ width: "15rem" }}>
              <h4 style={{ margin: "1rem 0" }}>Vertreten durch:</h4>
              <p>
                Livia Florina Schröder
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
            <div style={{ width: "15rem" }}>
              <h4 style={{ margin: "1rem 0" }}>Kontakt:</h4>
              <p>
                info@livia-schroeder.ch
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
            <div style={{ width: "15rem" }}>
              <h4 style={{ margin: "1rem 0" }}>Handelsregistereintrag:</h4>
              <p>CH-400.1.609.581-0</p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default ImpressumPage;
