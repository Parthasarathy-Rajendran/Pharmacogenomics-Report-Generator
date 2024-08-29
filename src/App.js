import React from 'react';
import './App.css';
// import ReportGenerator from './components/ReportGenerator';
import PharmacogenomicsTest from './components/PharmacogenomicsTest';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>ReportGenerator</h1>
      </header>
      <main>
        {/* <ReportGenerator /> */}
        <PharmacogenomicsTest />
      </main>
    </div>
  );
}

export default App;
