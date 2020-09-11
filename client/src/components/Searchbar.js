import React from 'react';
import { Navbar, Nav, DropdownButton, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import LogTimeModal from './LogTimeModal';

const Searchbar = ({ handleFirstNameChange, handleLastNameChange, handleSearchOptionsChange, getTimes}) => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
          <FontAwesomeIcon icon={faSwimmer} />Swim Times Tracker
        </Navbar.Brand>
        <Form className="form-inline ml-auto" onSubmit={(e) => getTimes(e)}>
          <Form.Control onChange={(e)=>handleSearchOptionsChange(e)}
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom>
              <option value="Default">Search Times by...</option>
              <option value="All Times">All Times</option>
              <option value="Fastest Times by Event">Fastest Times by Event</option>
            </Form.Control>
          <FormControl onChange={(e) => handleFirstNameChange(e)} name="firstName" type="text" placeholder="Enter First Name" className="mr-sm-2" required={true} />
          <FormControl onChange={(e) => handleLastNameChange(e)} name="lastName" type="text" placeholder="Enter Last Name" className="mr-sm-2" required={true} />
          <Button variant="outline-light" type="submit">Search</Button>
        </Form>
        <span>|</span>
        <LogTimeModal />
      </Navbar>
    </div>
  )
}

export default Searchbar;