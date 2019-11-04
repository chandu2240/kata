import React from 'react';
import LeapYearForm from './Components/LeapYearForm';
import {AppConstants} from './Constants/AppConstants';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{AppConstants.APP_TITLE}</h1>
      </header>
      <LeapYearForm/>
    </div>
  );
}

export default App;
