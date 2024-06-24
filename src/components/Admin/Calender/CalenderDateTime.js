import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const CalenderDateTime = () => {
  const [date, setDate] = useState(new Date());
  const [times, setTimes] = useState(['']);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
      const response = await axios.post('http://localhost:3001/api/schedules', { date, times });
     
      setSuccess('Schedule created successfully!');
      setError(null);
    } catch (error) {
       setError(error.response ? error.response.data : 'Error creating schedule');
      setSuccess(null);
    }
  };

  return (
    <Container>
      <h2 className="my-4">Select Date and Times</h2>
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
      {error && <Alert variant="danger" className="mt-3">{error.message || error}</Alert>}
      {success && <Alert variant="success" className="mt-3">{success}</Alert>}
    </Container>
  );
};

export default CalenderDateTime;
