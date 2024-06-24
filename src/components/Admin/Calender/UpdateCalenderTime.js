import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col, Card, Button, Form, Modal, Alert } from 'react-bootstrap';

const UpdateCalenderTime = () => {
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [date, setDate] = useState(new Date());
  const [times, setTimes] = useState(['']);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  const handleUpdateClick = (schedule) => {
    setSelectedSchedule(schedule);
    setDate(new Date(schedule.date));
    setTimes(schedule.times);
    setShowModal(true);
  };

  const handleTimeChange = (index, value) => {
    const newTimes = [...times];
    newTimes[index] = value;
    setTimes(newTimes);
  };

  const addTimeField = () => {
    setTimes([...times, '']);
  };

  const removeTimeField = (index) => {
    setTimes(times.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/api/schedules/${selectedSchedule._id}`, { date, times });
      console.log('Schedule updated:', response.data);
      setSuccess('Schedule updated successfully!');
      setError(null);
      setShowModal(false);
      fetchSchedules();
    } catch (error) {
      console.error('Error updating schedule:', error);
      setError(error.response ? error.response.data : 'Error updating schedule');
      setSuccess(null);
    }
  };

  return (
    <Container>
      <h2 className="my-4">Update Calendar Time</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Row>
        {schedules.map((schedule) => (
          <Col key={schedule._id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{new Date(schedule.date).toLocaleDateString()}</Card.Title>
                <Card.Text>
                  <ul>
                    {schedule.times.map((time, index) => (
                      <li key={index}>
                        {time}
                      </li>
                    ))}
                  </ul>
                </Card.Text>
                <Button variant="primary" onClick={() => handleUpdateClick(schedule)}>Update</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formDate">
              <Form.Label column sm={2}>Date:</Form.Label>
              <Col sm={10}>
                <DatePicker 
                  selected={date} 
                  onChange={(date) => setDate(date)} 
                  className="form-control"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formTimes">
              <Form.Label column sm={2}>Times:</Form.Label>
              <Col sm={10}>
                {times.map((time, index) => (
                  <div key={index} className="d-flex mb-2">
                    <Form.Control 
                      type="time" 
                      value={time} 
                      onChange={(e) => handleTimeChange(index, e.target.value)}
                    />
                    <Button 
                      variant="danger" 
                      onClick={() => removeTimeField(index)} 
                      className="ms-2"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </Col>
            </Form.Group>
            <Button variant="primary" type="button" onClick={addTimeField} className="mb-3">
              Add Time
            </Button>
            <br />
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {error && <Alert variant="danger" className="m-3">{error.message || error}</Alert>}
        {success && <Alert variant="success" className="m-3">{success}</Alert>}
      </Modal>
    </Container>
  );
};

export default UpdateCalenderTime;
