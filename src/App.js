import React from 'react';
import './App.css';
import Header from './header';
import TinderCards from './TinderCards';
import SwipedButton from './SwipedButton';

function App() {
  return (
    <div className="App">

      {/** Header */}
      <Header/>
      {/** Tinder cards */}
      <TinderCards/>
      {/** SwipedButton */}
      <SwipedButton/>
    </div>
  );
}

export default App;