import React from 'react';
import { AppConstants } from '../Constants/AppConstants';
import FizzBuzz from '../Containers/FizzBuzz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {AppConstants.APP_TITLE}
      </header>
      <FizzBuzz />
    </div>
  );
}

export default App;
