import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';

function Sync() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
      fetch('http://192.168.0.44:5000/test/testAPI')
          .then(response =>{
              console.log("주소:",response);
              return response.json();
          })
          .then(message => {
            console.log("결과:",message);
            setMessage(message);
          });
    },[])
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              {message.map(({id,pwd}) => (
                  <li>{id}:{pwd}</li>
                ))}
          </header>
          <p className="App1-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    )
}

export default Sync;