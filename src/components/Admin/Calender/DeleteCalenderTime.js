
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const DeleteCalenderTime = () => {
  const [schedules, setSchedules] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/schedules');
      setSchedules(response.data);
    } catch (error) {

    }
  };

  const handleDeleteSchedule = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/schedules/${id}`);
      setMessage(response.data.message);
      // Remove the deleted schedule from the state
      setSchedules(schedules.filter(schedule => schedule._id !== id));
    } catch (error) {
      setMessage('Error deleting schedule');

    }
  };

  const handleDeleteTime = async (scheduleId, time) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/schedules/${scheduleId}/time/${time}`);
      setMessage(response.data.message);
      // Update the state with the modified schedule
      setSchedules(schedules.map(schedule => 
        schedule._id === scheduleId ? response.data.schedule : schedule
      ));
    } catch (error) {
      setMessage('Error deleting time');
   
    }
  };

  return (
    <Container>
      <h2 className="my-4">Delete Calendar Time</h2>
      {message && <p className="alert alert-info">{message}</p>}
      <Row>
        {schedules.map((schedule) => (
          <Col key={schedule._id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{new Date(schedule.date).toLocaleDateString()}</Card.Title>
                <Card.Text>
                  <ul>
                    {schedule.times.map((time, index) => (
                      <li key={index} className="d-flex justify-content-between align-items-center">
                        {time}
                        <Button variant="danger" size="sm" onClick={() => handleDeleteTime(schedule._id, time)}>Delete</Button>
                      </li>
                    ))}
                  </ul>
                </Card.Text>
                <Button variant="danger" onClick={() => handleDeleteSchedule(schedule._id)}>Delete Schedule</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DeleteCalenderTime;
