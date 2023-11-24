import React from 'react';
import './App.css';

import Name from './components/Name';
import BioData from './components/Biography';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Name />
        <BioData/>
      </header> */}
      <Name/>
      <BioData/>      
    </div>
    
  );
}

export default App;
