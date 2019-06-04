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
      ],
      modalVisible: false
    };
  }

  componentDidMount() {
    this.showModal();
    window.addEventListener("keydown", this.handleKeyPress);
  }

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };
  handleKeyPress = event => {
    event.preventDefault();
    if (event.key == "ArrowUp") {
      console.log("enter press here! Up");
    } else if (event.key == "ArrowRight") {
      console.log("enter press here! Right");
    } else if (event.key == "ArrowDown") {
      console.log("enter press here! Down");
    } else if (event.key == "ArrowLeft") {
      console.log("enter press here! Left");
    }
  };

  render() {
    return (
      <div className="App">
        <Modal
          modalVisible={this.state.modalVisible}
          hideModal={this.hideModal}
        />
        <WisdomAPICall userQuery={this.state.userQuery} />
        <header className="App-header">
          {/* <img src="./1.jpg" className="App-logo" alt="The Wise Mist" /> */}
        </header>
        <Maze maze={this.state.maze} />
        <div>
          <input type="button" id="Up" onKeyDown={this.handleKeyPress} />
          <input type="button" id="Right" onKeyDown={this.handleKeyPress} />
          <input type="button" id="Down" onKeyDown={this.handleKeyPress} />
          <input type="button" id="Left" onKeyDown={this.handleKeyPress} />
        </div>
      </div>
    );
  }
}

export default App;
