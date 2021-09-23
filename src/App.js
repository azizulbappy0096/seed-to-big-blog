// modules
import React from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// components
import Main from './components/Main/Main';

function App() {
  return (
    <React.Fragment>
      {/* Header component goes here */}
      <header className="text-end py-2 px-4">
        <button className="btn btn-secondary"> Publish </button>
      </header>
      <Main />

      {/* Footer component goes here */}
    </React.Fragment>
  );
}

export default App;
