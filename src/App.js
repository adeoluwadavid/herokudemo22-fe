import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[name,setName] = React.useState("")
  const [fullname, setFullname] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    fetch('https://herokudemo22.herokuapp.com/api/get')
    .then(res => res.text())
    .then(data => setName(data))
    .catch(err => console.log(err))
  }, [])
  React.useEffect(()=>{
    fetch('https://herokudemo22.herokuapp.com/api/all')
    .then(res => res.json())
    .then(data => setList(data))
    .catch( err => console.log(err))
  },[])
  const handleSubmit =(e)=>{
    e.preventDefault();
    const user ={
      fullname: fullname,
      school : school
    }

    fetch("https://herokudemo22.herokuapp.com/api/post",{
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    setFullname('')
    setSchool('')
  }
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
        
        <br />
        {name}

        
        <br />
        <br />

        <form onSubmit={handleSubmit}>
       <div> <label>Full Name: </label><input className="form-padding" value={fullname} onChange={(e)=> setFullname(e.target.value)} type="text" required/> </div>
      <div>  <label>School: </label><input className="form-padding" value={school} onChange={(e)=> setSchool(e.target.value)} type="text" required/> </div>
      <button>Submit</button>
      </form>

      <div className="margin">
        <h1>List of Entered Student</h1>
        {list.map(l =><div key={l.id}>{l.fullname} - {l.school}</div>)} 
      </div>
      </header>
      
    </div>
  );
}

export default App;
