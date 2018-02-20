import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* //put div in nav around list items 
      //float container right
      //then justify content space between  */}
      
        <nav className="navtop">
          <div className="boots-div">
              <a className="yellow-bootstrap-words" href=""> Start Bootstrap</a>
          </div>
        <div className="navDiv">
        
          <ul>
         
            <li>Services</li>
            <li>About</li>
            <li>Team</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <button className="menu-button">Menu</button>
          </ul>
          </div>
        </nav>
      <div className="desktop-img-main">
          <div className="img-main-inner-content">
              <h4 className="ourStudio">Welcome To Our Studio!</h4>
              <h1 className="niceToMeetYou">IT'S NICE TO MEET YOU</h1>
              <div className="TellMeButtonDiv"><button className="tellMeButtn">TELL ME MORE</button></div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
