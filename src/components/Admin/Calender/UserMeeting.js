import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const UserMeeting = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        fetchSchedules();
    }, []);

    const fetchSchedules = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/schedulemeeting');
            setSchedules(response.data);
        } catch (error) {
                 }
    };

    return (
        <Container>
            <h2 className="my-4">Meeting Schedules</h2>
            <Row>
                {schedules.map((schedule) => (
                    <Col key={schedule._id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{schedule.date}</Card.Title>
                                <Card.Text>
                                    <strong>Time:</strong> {schedule.time}<br />
                                    <strong>Firma:</strong> {schedule.firma}<br />
                                    <strong>Vorname:</strong> {schedule.vorname}<br />
                                    <strong>Email:</strong> {schedule.email}<br />
                                    <strong>Anrede:</strong> {schedule.anrede}<br />
                                    <strong>Nachname:</strong> {schedule.nachname}<br />
                                    <strong>Telefon:</strong> {schedule.telefon}<br />
                                    <strong>Ziel:</strong> {schedule.ziel}<br />
                                </Card.Text>
                                {/* <Button variant="danger">Delete</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default UserMeeting;
