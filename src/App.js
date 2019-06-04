import React from "react";
import "./App.css";
import Modal from "./components/Modal.js";
import WisdomAPICall from "./components/WisdomAPICall";
import Maze from "./components/Maze";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userQuery: "life",
      maze: [
        [0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 1],
        [1, 1, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 1, 0, 0]
      ]
    };
  }

  componentDidMount () {
    
  }

  render() {
    return (
      <div className="App">
        <WisdomAPICall userQuery={this.state.userQuery} />
        <header className="App-header">
          <img src="./1.jpg" className="App-logo" alt="The Wise Mist" />
        </header>
        <Maze maze= {this.props.maze}/>
      </div>
    );
  }
}

export default App;
