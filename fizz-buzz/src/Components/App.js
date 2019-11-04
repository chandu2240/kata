import React from 'react';
import { AppConstants } from '../Constants/AppConstants';
import FizzBuzz from '../Containers/FizzBuzz';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{AppConstants.APP_TITLE}</h1>
      </header>
      <FizzBuzz />
    </div>
  );
}

export default App;
