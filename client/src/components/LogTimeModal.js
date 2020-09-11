import React,{ useState } from 'react';
import { Button, Modal, FormControl, Form } from 'react-bootstrap';
import axios from 'axios';

const LogTimeModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState('');
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const [lastName, setLastName] = useState('');
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const [time, setTime] = useState('');
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  const [date, setDate] = useState('');
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const [event, setEvent] = useState('');
  const handleEventChange = (e) => {
    setEvent(e.target.value)
  }

  const [meet, setMeet] = useState('');
  const handleMeetChange = (e) => {
    setMeet(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = () => {
    axios.post(`/swimTimes/${firstName} ${lastName}`, {
      date: date,
      event: event,
      time: time,
      meet: meet
    })
    .then(results => res.send(results))
    .catch(err => console.log(`Error saving time to database: ${err}`))
  }

  return (
    <div>
      <Button variant="outline-light" onClick={handleShow}>
        Log Time
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log New Swim Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Enter First Name:</Form.Label>
          <FormControl onChange={handleFirstNameChange} type="text" className="mr-sm-2" required={true} />
          <Form.Label>Enter Last Name:</Form.Label>
          <FormControl onChange={handleLastNameChange} type="text" className="mr-sm-2" required={true} />
          <Form.Label>Enter Time as MM:SS.MS :</Form.Label>
          <FormControl onChange={handleTimeChange} type="text" className="mr-sm-2" required={true} />
          <Form.Label>Enter Date as YYYY-MM-DD :</Form.Label>
          <FormControl onChange={handleDateChange} type="text" className="mr-sm-2" required={true} />
          <Form.Label>Enter Swim Meet Name:</Form.Label>
          <FormControl onChange={handleMeetChange} type="text" className="mr-sm-2" required={true} />
          <Form.Label>Select Event</Form.Label>
          <Form.Control onChange={handleEventChange}
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom>
              <option value=""></option>
              <option value="50 FR SCY">50 FR SCY</option>
              <option value="100 FR SCY">100 FR SCY</option>
              <option value="200 FR SCY">200 FR SCY</option>
              <option value="500 FR SCY">500 FR SCY</option>
              <option value="1000 FR SCY">1000 FR SCY</option>
              <option value="1650 FR SCY">1650 FR SCY</option>
              <option value="100 BK SCY">100 BK SCY</option>
              <option value="200 BK SCY">200 BK SCY</option>
              <option value="100 BR SCY">100 BR SCY</option>
              <option value="200 BR SCY">200 BR SCY</option>
              <option value="100 FL SCY">100 FL SCY</option>
              <option value="200 FL SCY">200 FL SCY</option>
              <option value="200 IM SCY">200 IM SCY</option>
              <option value="400 IM SCY">400 IM SCY</option>
              <option value="50 FR LCM ">50 FR LCM</option>
              <option value="100 FR LCM">100 FR LCM</option>
              <option value="200 FR LCM">200 FR LCM</option>
              <option value="500 FR LCM">500 FR LCM</option>
              <option value="1500 FR LCM">1500 FR LCM</option>
              <option value="100 BK LCM">100 BK LCM</option>
              <option value="200 BK LCM">200 BK LCM</option>
              <option value="100 BR LCM">100 BR LCM</option>
              <option value="200 BR LCM">200 BR LCM</option>
              <option value="100 FL LCM">100 FL LCM</option>
              <option value="200 FL LCM">200 FL LCM</option>
              <option value="200 IM LCM">200 IM LCM</option>
              <option value="400 IM LCM">400 IM LCM</option>
            </Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            handleClose()
            handleSubmit()
          }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LogTimeModal;