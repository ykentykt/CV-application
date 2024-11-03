import React from 'react';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
