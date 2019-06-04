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

  componentDidMount () {
    this.showModal();
  }

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  }

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  }



  render() {
    return (
      <div className="App">
        <Modal 
          modalVisible={this.state.modalVisible}
          hideModal={this.hideModal}
        />
        <WisdomAPICall userQuery={this.state.userQuery} />
        <header className="App-header">
          <img src="./1.jpg" className="App-logo" alt="The Wise Mist" />
        </header>
        <Maze maze={this.state.maze}/>
      </div>
    );
  }
}

export default App;
