import React, {Component} from 'react';
import Button from './components/Button.component';
import Input from './components/Input.component';
import ClearButton from './components/ClearButton.component';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <h1 className="header">Calculator App</h1>
      <div className="App">
        <div className="calc-wrapper">
          <div>
            <Input></Input>
          </div>
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <ClearButton>Clear</ClearButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
