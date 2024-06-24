

import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs library
import { Container } from 'react-bootstrap';

const ContactForm = () => {
    const form = useRef();

  
    const sendEmail = (e) => {
        e.preventDefault();
    
        // Get form data
        const formData = new FormData(form.current);
    
        // Send form data to backend endpoint
        fetch('http://localhost:3001/api/sendcontactform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        })
        .then((response) => response.json())
        .then((data) => {
           
            // You can add additional handling here, such as showing a success message to the user
        })
        .catch((error) => {
                 // You can add additional handling here, such as showing an error message to the user
        });
    
        // Clear the form after sending email
        form.current.reset();
    };

    const border_style = {
        border: "1px solid var(--darkblue)",
        height: "2.7rem",
    };

    return (
        <Container id="contact"  style={{ padding:"1rem 0 0 0 "}}>
            <h3 className="heading">Kontakt aufnehmen</h3>
            <form ref={form} onSubmit={sendEmail} style={{padding:"0 10%"}}>
                <div className="row mb-2">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <input
                            type="text"
                            className="form-control"
                            style={{ ...border_style, borderRadius: "5px", marginBottom: "10px" }}
                            placeholder="Firma..."
                            name="company_name" // Add name attribute for each input field
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            style={{ ...border_style, borderRadius: "5px" }}
                            placeholder="Name..."
                            name="user_name" // Add name attribute for each input field
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <input
                            type="text"
                            className="form-control"
                            style={{ ...border_style, borderRadius: "5px", marginBottom: "10px" }}
                            placeholder="Anrede..."
                            name="salutation" // Add name attribute for each input field
                        />
                        <input
                            type="email"
                            className="form-control"
                            style={{ ...border_style, borderRadius: "5px" }}
                            placeholder="E-Mail..."
                            name="user_email" // Add name attribute for each input field
                        />
                    </div>
                </div>

                <div className="row" style={{marginBottom: ".3rem !important"}}>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <textarea
                            className="form-control"
                            style={{ ...border_style, borderRadius: "5px", height: "130px", resize: "none" }}
                            placeholder="Nachricht..."
                            rows="5"
                            name="message" // Add name attribute for textarea
                        ></textarea>
                    </div>
                </div>
                <button
                    style={{
                        backgroundColor: "transparent",
                        borderRadius: "8px",
                        color: "var(--darkblue)",
                        border: "1px solid var(--darkblue)",
                        width: "9rem",
                        height: "2.7rem",
                        textAlign: "center",
                        padding: "0px",
                        margin: "10px 0",
                        display: "block",
                        marginRight: "auto",
                    }}
                    type="submit" // Specify button type as submit
                >
                    Send
                </button>
            </form>
        </Container>
    );
};

export default ContactForm;
