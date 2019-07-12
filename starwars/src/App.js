import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StarWarsMap from './components/StarWarsMap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swData, setSWData] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [state, setState] = useState([])

  const fetchData = () => {
    axios.get('https://swapi.co/api/people')
    .then(res => {
      console.log(res.data)
      setSWData(res.data)
      setState(res.data)
    })
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
    fetchData();
  }, [])

console.log(state)
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
      {state !== swData ? 
        <div className="ui icon teal huge message">
        <div className="content">
          <i className="notched circle loading icon"></i>
        <div className="header">
          Just one second
        </div>
          <p>We're fetching that content for you.</p>
        </div>
        </div> :
      null}    
      {state === swData ? <StarWarsMap data={swData} /> : null }
    </div>
  );
}

export default App;

