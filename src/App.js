import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box'
import Header from './Header'

function App(props) {
  let makeBoxes = (n) => {
    let boxes = [];
    for (let i = 0; i < n; i++) {
      boxes.push(<Box index={i}/>);
    }
    return boxes;
  }

  return (
    <div className="App">
    <Header>
      <Header.Button to='/admin' text='Admin Panel'/>
    </Header>
    { 
      makeBoxes(10)
    }
    </div>
  );
}

export default App;
