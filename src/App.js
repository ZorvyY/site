import React, { Component } from 'react';
import './utils/initFont'; // Simplify font awesome initialization
import Nav from './Nav/Nav';
import About from './About/About';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main">
        <header className="App-header">
          <Nav 
            title={'Zoravur Singh'} 
            menuitems={['about','portfolio','contact']} 
          />
          <About />
        </header>
      </div>
    );
  }
}

export default App;
