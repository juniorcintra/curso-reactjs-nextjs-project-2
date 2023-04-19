import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={reverse ? 'App-logo-reverse' : 'App-logo'}
          alt="logo"
        />

        <button type="button" onClick={() => setReverse(!reverse)}>
          Reverse
        </button>
      </header>
    </div>
  );
}

export default App;
