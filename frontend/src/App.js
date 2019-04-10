import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
            <Checkout 
                name={"The Road to learn React"}
                description={"only the book"}
                amount={1}
                />
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
