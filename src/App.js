import React, {Component} from 'react';
import Button from './components/Button.component';
import Input from './components/Input.component';
import ClearButton from './components/ClearButton.component';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  addToInput = (value) => {
    this.setState({input: this.state.input + value});
  };

  addZeroToInput = (value) => {
    // add zero to input only if the input is ot empty
    if(this.state.input !== ""){
      this.setState({input: this.state.input + value});
    }
  };

  addDecimalInput = (value) => {
    // add decimal if there is no current decimal point in input area
    if(this.state.input.indexOf(".") === -1){
      this.setState({input: this.state.input + value});
    }
  };

  clearInput = () => {
    this.setState({input: ""});
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "plus";
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if(this.state.operator == "plus"){
      this.setState({
        input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
      })
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="header">Calculator App</h1>
        <div className="App">
          <div className="calc-wrapper">
            <div>
              <Input>{this.state.input}</Input>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button>/</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button>*</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.add}>+</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addDecimalInput}>.</Button>
              <Button handleClick={this.addZeroToInput}>0</Button>
              <Button handleClick={this.evaluate}>=</Button>
              <Button>-</Button>
            </div>
            <div className="row">
              <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
}

export default App;
