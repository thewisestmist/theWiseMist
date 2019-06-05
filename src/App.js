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
    document.documentElement.style.setProperty("--userX", 1);
    document.documentElement.style.setProperty("--userY", -1);
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
        this.updateUserPosition("up", event);
      } else if (event.key === "ArrowRight") {
        this.updateUserPosition("right", event);
      } else if (event.key === "ArrowDown") {
        this.updateUserPosition("down", event);
      } else if (event.key === "ArrowLeft") {
        this.updateUserPosition("left", event);
      }
    }
  };

  updateUserPosition = (direction, event) => {
    event.preventDefault();
      switch (direction) {
        case "up":
          if (this.state.userY > 0) {
            if (this.state.maze[this.state.userY - 1][this.state.userX] === 0) {
              this.setState({
                userY: this.state.userY - 1
              }, this.moveAvatar);
            }
          }
          break;
        case "right":
          if (this.state.userX < this.state.maze[0].length - 1) {
            if (this.state.maze[this.state.userY][this.state.userX + 1] === 0) {
              this.setState({
                userX: this.state.userX + 1
              }, this.moveAvatar);
            }
          }
          break;
        case "down":
          if (this.state.userY < this.state.maze.length - 1) {
            if (this.state.maze[this.state.userY + 1][this.state.userX] === 0) {
              this.setState({
                userY: this.state.userY + 1
              }, this.moveAvatar);
            }
          }
          break;
        case "left":
          if (this.state.userX > 0) {
            if (this.state.maze[this.state.userY][this.state.userX - 1] === 0) {
              this.setState({
                userX: this.state.userX - 1
              }, this.moveAvatar);
            }
          }
          break;
        default:
          console.log("sup");
          break;
      }
  };

  moveAvatar = () => {
    const newX = this.state.userX + 1;
    const newY = this.state.userY - this.state.maze.length;
    document.documentElement.style.setProperty("--userX", newX);
    document.documentElement.style.setProperty("--userY", newY);
  }

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
          <button
            id="Up"
            onClick={(event) => {
              this.updateUserPosition("up", event);
            }} >Up
          </button>
          <button
            id="Right"
            onClick={(event) => {
              this.updateUserPosition("right", event);
            }}>Right
          </button>
          <button
            id="Down"
            onClick={(event) => {
              this.updateUserPosition("down", event);
            }}>Down
          </button>
          <button
            id="Left"
            onClick={(event) => {
              this.updateUserPosition("left", event);
            }}>Left
          </button>
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
