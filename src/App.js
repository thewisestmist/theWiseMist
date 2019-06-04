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
<<<<<<< HEAD
        <Maze maze={this.state.maze}/>
=======
        {/* <Maze maze= {this.props.maze}/> */}
        
>>>>>>> ace892607e2b5ce3eff3c27a3e3e13065f77adc8
      </div>
    );
  }
}

export default App;
