import React from 'react';
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "var(--skin)", zIndex: 1000, width: "100%", marginTop: "auto" }}>
    <div style={{ display: 'flex', justifyContent: 'space-between',margin:"0 1rem", alignItems: 'center', padding: "1rem 0.6rem", color: "var(--darkblue)" }}>
        <span className="copyright">Copyright © 2024 Livia Schröder</span>
        <Nav className='impressum-footer' style={{ margin: "0 auto",position:"relative",right:"5%" }}>
          <Nav.Item>
            <Nav.Link style={{color:"var(--darkblue)"}} as={Link} to="/impressum">Impressum</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </footer>
  );
}

export default Footer;
