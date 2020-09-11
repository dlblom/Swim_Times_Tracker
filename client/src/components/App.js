import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import TimesTable from './TimesTable';
import headerSchema from './headerSchema.json';

const App = () => {
  const [ times, setTimes ] = useState([]);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ searchOption, setSearchOption ] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleSearchOptionsChange = (e) => {
    setSearchOption(e.target.value)
  }

  const getTimes = (e) => {
    e.preventDefault();
    axios.get(`/swimTimes/${firstName} ${lastName}`)
      .then(results => {
        setTimes(results.data.times)
    })
    .catch(err => console.log(`Error retrieving times from database: ${err}`))
  }

  return (
    <div>
      <Searchbar handleFirstNameChange={handleFirstNameChange} handleLastNameChange={handleLastNameChange} handleSearchOptionsChange={handleSearchOptionsChange} getTimes={getTimes} />
      <TimesTable times={times} headers={Object.keys(headerSchema)} firstName={firstName} lastName={lastName} />
    </div>
  )
}

export default App;