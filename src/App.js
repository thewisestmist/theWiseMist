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
      modalVisible: false,
      modalToShow: "",
      wisdomObject: {},
      userName: "",
      wisdomKeyword: "",
    };
  }

  componentDidMount () {
    this.showModal("start");
  }

  showModal = (modalToShow) => {
    this.setState({
      modalVisible: true,
      modalToShow: modalToShow,
    });
  }

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  }

  getWisdom = (wisdom) => {
    this.setState({ wisdomObject: wisdom });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  render() {
    return (
      <div className="App">
        <Modal 
          modalVisible={this.state.modalVisible}
          hideModal={this.hideModal}
          modalToShow={this.state.modalToShow}
          handleChange={this.handleChange}
          userName={this.state.userName}
          wisdomMessage={this.state.wisdomObject}
        />
        {!this.state.modalVisible ? <WisdomAPICall 
          userQuery={this.state.wisdomKeyword} 
          getWisdom={this.getWisdom} 
        /> : ""}
        <header className="App-header">
          <img src="./1.jpg" className="App-logo" alt="The Wise Mist" />
        </header>
        <Maze maze={this.state.maze}/>
        <button onClick={() => {this.showModal("win")}}>test win modal</button>
      </div>
    );
  }
}

export default App;
