import React, { Component } from 'react';
import Footer, { ListItem } from './components/Footer';
import Header from './components/Header';
import ListExample from './components/ListExample';
import MagicButton from './components/MagicButton';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerTitle="this is a header title" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
        <blockquote>Hello</blockquote>
        <ListItem />
        <ListExample />
        <MagicButton />
      </div>
    );
  }
}

export default App;
