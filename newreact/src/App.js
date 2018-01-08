import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navtop">
          <ul>
          <a className="yellow-bootstrap-words" href=""> Start Bootstrap</a>
            <li>Services</li>
            <li>About</li>
            <li>Team</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <button className="menu-button"></button>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
