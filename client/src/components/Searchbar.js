import React from 'react';
import { Navbar, Nav, DropdownButton, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
          <FontAwesomeIcon icon={faSwimmer} />Swim Times Tracker
        </Navbar.Brand>
        <Form className="form-inline ml-auto">
          <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom>
              <option value="0">Search Times by...</option>
              <option value="1">All Times</option>
              <option value="2">Fastest Times by Event</option>
              <option value="3">Event</option>
            </Form.Control>
          <FormControl type="text" placeholder="Enter First Name" className="mr-sm-2" />
          <FormControl type="text" placeholder="Enter Last Name" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default Searchbar;