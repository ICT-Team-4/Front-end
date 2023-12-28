import React, {useState, useEffect,useLayoutEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';

function SyncJava() {
    const [message, setMessage] = useState([]);

    useLayoutEffect(() => {
      fetch('http://192.168.0.44:8080/users')
          .then(response =>{
            console.log(response);
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
              <ul>
                {message.map(({username, password, name, joindate}) => (
                  <li>{username}:{name}:{joindate}</li>
                ))}
            </ul>
          </header>
          <p className="App1-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    )
}

export default SyncJava;