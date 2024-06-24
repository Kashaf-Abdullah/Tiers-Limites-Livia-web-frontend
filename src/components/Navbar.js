import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars } from 'react-icons/fa'; // Importing the Font Awesome icon component

function Navbarr() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setExpanded(false); // Close the navbar after scrolling
    }
  };

  return (
    <Navbar
      expand="lg"
      className=""
      expanded={expanded}
      style={{
        borderBottom: "2px solid var(--darkblue)",
        backgroundColor: "var(--skin)",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000
      }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <h4 className="navlogo" style={{fontWeight:"400",marginLeft:"4px",position:"relative",top:"4px",color:"#454545"}}>Livia Schröder</h4>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="navbarScroll" 
          onClick={handleToggle} 
          style={{marginRight:"5px", border: expanded ? "none" : "none"}}> 
          {/* Applying blue border color */}
          <FaBars /> 
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto  my-lg-0 nav-items" navbarScroll>
            <Nav.Link as={Link} to="/?section=home" onClick={() => handleNavLinkClick("home")}>Home</Nav.Link>
            <Nav.Link as={Link} to="/?section=speaking" onClick={() => handleNavLinkClick("speaking")}>Speaking</Nav.Link>
            <Nav.Link as={Link} to="/?section=consulting" onClick={() => handleNavLinkClick("consulting")}>Consulting</Nav.Link>
            <Nav.Link as={Link} to="/?section=about" onClick={() => handleNavLinkClick("about")}>Über mich</Nav.Link>
            <Nav.Link as={Link} to="/?section=media" onClick={() => handleNavLinkClick("media")}>Media</Nav.Link>
            <Nav.Link as={Link} to="/?section=contact" onClick={() => handleNavLinkClick("contact")}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;