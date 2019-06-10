import React from "react";
import "./App.css";
import Modal from "./components/Modal.js";
import WisdomAPICall from "./components/WisdomAPICall";
import Maze from "./components/Maze";
import obstacleSetOne from "./obstacleSetOne";
import obstacleSetTwo from "./obstacleSetTwo"
import mazeMap from "./mazeMap.js";
import Avatar from "./components/Avatar.js";
import Controller from './components/Controller'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: true,
      modalToShow: "",
      wisdomObject: {},
      userName: "",
      wisdomKeyword: "",
      userX: 0,
      userY: mazeMap.length - 1,
      // mazeWindow is always 15x15 tiles, so to center the map the initial position of maze map is
      // 8 x 8
      mazeX: 8,
      mazeY: 8,
      keysActive: true,
      wisdomError: false,
      inputError: false,
      avatarDirection: "0%",
      mazeMap: mazeMap
    };
  }
  alternator = () => {
    setInterval( () =>
    this.setState({
      mazeMap: mazeMap
    }), 1000
    );
    setInterval(() =>
      this.setState({
        mazeMap: obstacleSetOne
      }),2000
      )
    setInterval(() =>
      this.setState({
        mazeMap: obstacleSetTwo
      }), 3000
    )
  }
  componentDidMount() {
    this.moveAvatar();
    this.alternator();

    this.showModal("start");
    window.addEventListener("keydown", this.handleKeyPress);

    //add event listener to see when player move is finished,
    document.addEventListener("transitionend", () => {
      this.setState({
        keysActive: true
      });
    });
  }

  componentWillUnmount() {
    //clean up event listeners on component dismount
    window.removeEventListener("keydown", null);
    window.removeEventListener("resize");
    document.removeEventListener("transitionend");
  }

  showModal = modalToShow => {
    this.setState({
      modalVisible: true,
      modalToShow: modalToShow
    });
  };

  hideModal = () => {
    if (this.state.userName && this.state.wisdomKeyword) {
      const regex = /^\b[a-zA-Z]+\b$/;
      if (!this.state.wisdomKeyword.match(regex)) {
        this.setState({
          wisdomError: true,
          inputError: false
        });
      } else {
        this.setState({
          modalVisible: false
        });
      }
    } else {
      this.setState({
        inputError: true,
        wisdomError: false
      });
    }
  };

  handleKeyPress = event => {
    if (!this.state.modalVisible && this.state.keysActive) {
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
          if (this.state.mazeMap[this.state.userY - 1][this.state.userX] >= 0) {
            this.setState(
              {
                userY: this.state.userY - 1,
                mazeY: this.state.mazeY + 1,
                keysActive: false,
                avatarDirection: "66%"
              },
              this.moveAvatar
            );
          }
        }
        break;
      case "right":
        if (this.state.userX < this.state.mazeMap[0].length - 1) {
          if (this.state.mazeMap[this.state.userY][this.state.userX + 1] >= 0) {
            this.setState(
              {
                userX: this.state.userX + 1,
                mazeX: this.state.mazeX + 1,
                keysActive: false,
                avatarDirection: "33%"
              },
              this.moveAvatar
            );
          }
        }
        break;
      case "down":
        if (this.state.userY < this.state.mazeMap.length - 1) {
          if (this.state.mazeMap[this.state.userY + 1][this.state.userX] >= 0) {
            this.setState(
              {
                userY: this.state.userY + 1,
                mazeY: this.state.mazeY - 1,
                keysActive: false,
                avatarDirection: "0%"
              },
              this.moveAvatar
            );
          }
        }
        break;
      case "left":
        if (this.state.userX > 0) {
          if (this.state.mazeMap[this.state.userY][this.state.userX - 1] >= 0) {
            this.setState(
              {
                userX: this.state.userX - 1,
                mazeX: this.state.mazeX - 1,
                keysActive: false,
                avatarDirection: "100%"
              },
              this.moveAvatar
            );
          }
        }
        break;
      default:
        break;
    }
  };

  moveAvatar = () => {
    document.documentElement.style.setProperty("--mazeX", this.state.mazeX);
    document.documentElement.style.setProperty("--mazeY", this.state.mazeY);
    document.documentElement.style.setProperty("--avatarDirection", this.state.avatarDirection);
    this.checkCurrentPosition();
  };

  checkCurrentPosition = () => {
    if (this.state.mazeMap[this.state.userY][this.state.userX] === 9) {
      this.showModal("win");
    }
  };

  resetGame = () => {
    this.setState(
      {
        userX: 0,
        userY: this.state.mazeMap.length - 1,
        userName: "",
        wisdomKeyword: "",
        modalToShow: "start",
        inputError: false,
        wisdomError: false
      },
      () => {this.moveAvatar(); this.setTileSize()}
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
          inputError={this.state.inputError}
          wisdomError={this.state.wisdomError}
        />
        {!this.state.modalVisible ? (
          <WisdomAPICall
            userQuery={this.state.wisdomKeyword}
            getWisdom={this.getWisdom}
          />
        ) : (
          <></>
        )}
        <main className="AppContainer">
          <div className="wrapper">
            <div className="mazeWindow">
              <Maze maze={this.state.mazeMap} />
              <Avatar />
            </div>
            <Controller updateUserPosition={this.updateUserPosition}
              onKeyDown={this.handleKeyPress} />
            <p className="instruction">Use arrow keys to navigate.</p>
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
