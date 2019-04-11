import React, { Component } from 'react';
import './App.css';

class App extends Component {
// state
  constructor(props){
    super(props);
    this.state = {
      currentInput1: "",
      currentInput2: "",
      currentInput3: "",
      currentInput4: "",
      showing: false,
    }
  }

// function
  inputChanged1 = (event) => {
    let inputValue = event.target.value;
    this.setState({currentInput1:inputValue});
    console.log(inputValue);
  }

  inputChanged2 = (event) => {
    let inputValue = event.target.value;
    this.setState({currentInput2:inputValue});
    console.log(inputValue);
  }

  inputChanged3 = (event) => {
    let inputValue = event.target.value;
    this.setState({currentInput3:inputValue});
    console.log(inputValue);
  }

  inputChanged4 = (event) => {
    let inputValue = event.target.value;
    this.setState({currentInput4:inputValue});
    console.log(inputValue);
  }

// render
  render() {
    return (
      <div className="App">
        <h3>MadLib</h3>
        <p>1.<input class="w3-border w3-hover-red" onInput={this.inputChanged1} type="text" placeholder='NOUN'/> </p>
        <p>2.<input class="w3-border w3-hover-red" onInput={this.inputChanged2} type="text" placeholder='NOUN'/> </p>
        <p>3.<input class="w3-border w3-hover-red" onInput={this.inputChanged3} type="text" placeholder='PART OF THE BODY'/>  
            <input class="w3-border w3-hover-red" onInput={this.inputChanged4} type="text" placeholder='NOUN'/></p>
        
        <div>
          <button onClick={() => this.setState({ showing: !this.state.showing })}>Submit</button>
              
          {this.state.showing ? <div>
            <h3>Here are 3 horror movie names for your to choose as the name of your next great film</h3>
            <p>You are welcome director</p>
            <p>1. Invasion of the {this.state.currentInput1} Snatchers</p>
            <p>or</p>
            <p>2. Last {this.state.currentInput2} on the Left</p>
            <p>or</p>
            <p>3. The Hunch {this.state.currentInput3} of Notre {this.state.currentInput4}</p>
          </div> : null}
        </div> 

      </div>
    );
  }

}
export default App;
