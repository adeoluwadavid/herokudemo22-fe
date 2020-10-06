import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[name,setName] = React.useState("")
  React.useEffect(() => {
    fetch('https://herokudemo22.herokuapp.com/api/get')
    .then(res => res.text())
    .then(data => setName(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {name}
      </header>
    </div>
  );
}

export default App;
