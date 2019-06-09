import React from "react";
import "./App.css";
import Modal from "./components/Modal.js";
import WisdomAPICall from "./components/WisdomAPICall";
import Maze from "./components/Maze";
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
      userY: 0,
      // this number is from 58% / 5.3% (58% is where the avatar is centered)
      mazeX: -10.943,
      mazeY: -10.943,
      mazeTileSize: 0,
      keysActive: true,
      wisdomError: false,
      inputError: false,
      avatarDirection: "down"
    };
  }

  componentDidMount() {
    this.setState({
      userY: mazeMap.length - 1
    });
    
    this.setTileSize();
    console.log(this.state.mazeX, this.state.mazeY, this.state.mazeTileSize);
    
    window.addEventListener("resize", () => {
     this.setTileSize();
    });

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
    window.removeEventListener("keydown");
    window.removeEventListener("resize");
    document.removeEventListener("transitionend");
  }

  setTileSize = () => {
    if (window.innerWidth < 768) {
      this.setState({
        mazeTileSize: 0.06625,
        // this number is from 84% / 6.625% (84% is where the avatar is centered)
        mazeX: -12.679,
        mazeY: -12.679
      }, this.positionMaze)   
    } else {
      this.setState({
        mazeTileSize: 0.053,
        mazeX: -10.943,
        mazeY: -10.943
      }, this.positionMaze)
    }
  }

  positionMaze = () => {
    const newX = this.state.mazeX * this.state.mazeTileSize * 100;
    const newY = this.state.mazeY * this.state.mazeTileSize * 100;

    document.documentElement.style.setProperty("--mazeX", newX + "%");
    document.documentElement.style.setProperty("--mazeY", newY + "%");
    console.log(this.state.mazeX, this.state.mazeY, this.state.mazeTileSize);
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
          if (mazeMap[this.state.userY - 1][this.state.userX] >= 0) {
            this.setState(
              {
                userY: this.state.userY - 1,
                mazeY: this.state.mazeY + 1,
                keysActive: false,
                avatarDirection: "up"
              },
              this.moveAvatar
            );
          }
        }
        break;
      case "right":
        if (this.state.userX < mazeMap[0].length - 1) {
          if (mazeMap[this.state.userY][this.state.userX + 1] >= 0) {
            this.setState(
              {
                userX: this.state.userX + 1,
                mazeX: this.state.mazeX + 1,
                keysActive: false,
                avatarDirection: "right"
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
                mazeY: this.state.mazeY - 1,
                keysActive: false,
                avatarDirection: "down"
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
                mazeX: this.state.mazeX - 1,
                keysActive: false,
                avatarDirection: "left"
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
    const newX = this.state.mazeX * this.state.mazeTileSize * 100;
    const newY = this.state.mazeY * this.state.mazeTileSize * 100;
    document.documentElement.style.setProperty("--mazeX", newX + "%");
    document.documentElement.style.setProperty("--mazeY", newY + "%");
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
              <Maze maze={mazeMap} />
              <Avatar avatarDirection={this.state.avatarDirection}/>
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
