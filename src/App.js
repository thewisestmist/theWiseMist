import React from "react";
import "./App.css";
import Modal from "./components/Modal.js";
import WisdomAPICall from "./components/WisdomAPICall";
import Maze from "./components/Maze";
import mazeMap from "./mazeMap.js";
import Avatar from "./components/Avatar.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      modalToShow: "",
      wisdomObject: {},
      userName: "",
      wisdomKeyword: "",
      userX: 0,
      userY: 0,
      mazeX: -13,
      mazeY: -13,
      mazeTileSize: window.innerWidth * 0.053
    };
  }

  componentDidMount() {
    this.setState({
      userY: mazeMap.length - 1
    });
    document.documentElement.style.setProperty(
      "--mazeTileSize",
      this.state.mazeTileSize + "px"
    );
    const newX = this.state.mazeX * this.state.mazeTileSize;
    const newY = this.state.mazeY * this.state.mazeTileSize;
    document.documentElement.style.setProperty("--mazeX", newX + "px");
    document.documentElement.style.setProperty("--mazeY", newY + "px");
    this.showModal("start");
    window.addEventListener("keydown", this.handleKeyPress);
    window.addEventListener("resize", () => {
      this.setState({ mazeTileSize: window.innerWidth * 0.053 }, () => {
        document.documentElement.style.setProperty(
          "--mazeTileSize",
          this.state.mazeTileSize + "px"
        );
      });
    });
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
          if (mazeMap[this.state.userY - 1][this.state.userX] >= 0) {
            this.setState(
              {
                userY: this.state.userY - 1,
                mazeY: this.state.mazeY + 1
              },
              this.moveAvatar
            );
          }
          console.log("waiting");
        }
        break;
      case "right":
        if (this.state.userX < mazeMap[0].length - 1) {
          if (mazeMap[this.state.userY][this.state.userX + 1] >= 0) {
            this.setState(
              {
                userX: this.state.userX + 1,
                mazeX: this.state.mazeX + 1
              },
              this.moveAvatar
            );
          }
        }
        break;
      case "down":
        if (this.state.userY < mazeMap.length - 1) {
          if (mazeMap[this.state.userY + 1][this.state.userX] >= 0) {
            this.setState(
              {
                userY: this.state.userY + 1,
                mazeY: this.state.mazeY - 1
              },
              this.moveAvatar
            );
          }
        }
        break;
      case "left":
        if (this.state.userX > 0) {
          if (mazeMap[this.state.userY][this.state.userX - 1] >= 0) {
            this.setState(
              {
                userX: this.state.userX - 1,
                mazeX: this.state.mazeX - 1
              },
              this.moveAvatar
            );
          }
        }
        break;
      default:
        console.log("sup");
        break;
    }
  };

  moveAvatar = () => {
    const newX = this.state.mazeX * this.state.mazeTileSize;
    const newY = this.state.mazeY * this.state.mazeTileSize;
    document.documentElement.style.setProperty("--mazeX", newX + "px");
    document.documentElement.style.setProperty("--mazeY", newY + "px");
    this.checkCurrentPosition();
  };

  checkCurrentPosition = () => {
    if (mazeMap[this.state.userY][this.state.userX] === 9) {
      this.showModal("win");
    }
  };

  resetGame = () => {
    this.setState(
      {
        userX: 0,
        userY: mazeMap.length - 1,
        mazeX: -13,
        mazeY: -13,
        userName: "",
        wisdomKeyword: "",
        modalToShow: "start"
      },
      this.moveAvatar
    );
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
          resetGame={this.resetGame}
        />
        {!this.state.modalVisible ? (
          <WisdomAPICall
            userQuery={this.state.wisdomKeyword}
            getWisdom={this.getWisdom}
          />
        ) : (
          ""
        )}
        <main className="AppContainer">
          <div className="wrapper">
            <div className="mazeWindow">
              <Maze maze={mazeMap} />
              <Avatar />
            </div>
            <div>
              <input
                type="button"
                id="listener"
                className="visuallyHidden"
                onKeyDown={this.handleKeyPress}
              />
              <button
                id="Up"
                onClick={event => {
                  this.updateUserPosition("up", event);
                }}
              >
                Up
              </button>
              <button
                id="Right"
                onClick={event => {
                  this.updateUserPosition("right", event);
                }}
              >
                Right
              </button>
              <button
                id="Down"
                onClick={event => {
                  this.updateUserPosition("down", event);
                }}
              >
                Down
              </button>
              <button
                id="Left"
                onClick={event => {
                  this.updateUserPosition("left", event);
                }}
              >
                Left
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
        </main>
      </div>
    );
  }
}

export default App;
