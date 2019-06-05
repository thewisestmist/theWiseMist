import React from "react";
import "./App.css";
import Modal from "./components/Modal.js";
import WisdomAPICall from "./components/WisdomAPICall";
import Maze from "./components/Maze";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // Y is the first index of the maze, starting at the bottom (i.e. 7)
      // X is the second index of the maze, starting at the left (i.e. 0)
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
      userX: 0,
      userY: 7
    };
  }

  componentDidMount() {
    this.showModal("start");
    window.addEventListener("keydown", this.handleKeyPress);
  }

  showModal = modalToShow => {
    this.setState({
      modalVisible: true,
      modalToShow: modalToShow
    });
  };

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  // !!!! work on it more!!!!!!
  handleKeyPress = event => {
    if (!this.state.modalVisible) {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        this.updateUserPosition("up");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        this.updateUserPosition("right");
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        this.updateUserPosition("down");
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.updateUserPosition("left");
      }
    }
  };

  updateUserPosition = direction => {
      switch (direction) {
        case "up":
          if (this.state.userY > 0) {
            if (this.state.maze[this.state.userY - 1][this.state.userX] === 0) {
              this.setState({
                userY: this.state.userY - 1
              });
            }
          }
          break;
        case "right":
          if (this.state.userX < this.state.maze[0].length - 1) {
            if (this.state.maze[this.state.userY][this.state.userX + 1] === 0) {
              this.setState({
                userX: this.state.userX + 1
              });
            }
          }
          break;
        case "down":
          if (this.state.userY < this.state.maze.length - 1) {
            if (this.state.maze[this.state.userY + 1][this.state.userX] === 0) {
              this.setState({
                userY: this.state.userY + 1
              });
            }
          }
          break;
        case "left":
          if (this.state.userX > 0) {
            if (this.state.maze[this.state.userY][this.state.userX - 1] === 0) {
              this.setState({
                userX: this.state.userX - 1
              });
            }
          }
          break;
        default:
          console.log("sup");
          break;
      }
    const newX = this.state.userX + 1;
    const newY = this.state.userY - this.state.maze.length;
    document.documentElement.style.setProperty("--userX", newX);
    document.documentElement.style.setProperty("--userY", newY);
  };

  getWisdom = wisdom => {
    this.setState({ wisdomObject: wisdom });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

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
        {!this.state.modalVisible ? (
          <WisdomAPICall
            userQuery={this.state.wisdomKeyword}
            getWisdom={this.getWisdom}
          />
        ) : (
          ""
        )}
        <header className="App-header">
          {/* <img src="./1.jpg" className="App-logo" alt="The Wise Mist" /> */}
        </header>
        <Maze maze={this.state.maze} />
        <div>
          <input
            type="button"
            id="listener"
            className="visuallyHidden"
            onKeyDown={this.handleKeyPress}
          />
          <input
            type="button"
            id="Up"
            onClick={() => {
              this.updateUserPosition("up");
            }}
          />
          <input
            type="button"
            id="Right"
            onClick={() => {
              this.updateUserPosition("right");
            }}
          />
          <input
            type="button"
            id="Down"
            onClick={() => {
              this.updateUserPosition("down");
            }}
          />
          <input
            type="button"
            id="Left"
            onClick={() => {
              this.updateUserPosition("left");
            }}
          />
        </div>
        <button
          onClick={() => {
            this.showModal("win");
          }}
        >
          test win modal
        </button>
      </div>
    );
  }
}

export default App;
