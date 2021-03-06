import React from "react";
import "./App.css";
import Modal from "./components/Modal.js";
import WisdomAPICall from "./components/WisdomAPICall";
import Maze from "./components/Maze";
import mazeIntervalOne from "./mazeIntervalOne.js";
import mazeIntervalTwo from "./mazeIntervalTwo";
import mazeIntervalThree from "./mazeIntervalThree"
import mazeIntervalFour from "./mazeIntervalFour";
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
      userY: mazeIntervalOne.length - 1,
      // mazeWindow is always 15x15 tiles, so to center the map
      // the initial position of maze map is 8 x 8
      mazeX: 8,
      mazeY: 8,
      keysActive: true,
      wisdomError: false,
      inputError: false,
      avatarDirection: "0%",
      mazeMap: mazeIntervalOne,
      showInstructions: true
    };
  }

  // on first page load
  componentDidMount() {
    // center the map on the current user x,y position
    this.moveAvatar();
    // turn on the shifting maze walls
    this.alternator();
    // display beginning message
    this.showModal("start");
    // add event listeners for key presses
    window.addEventListener("keydown", this.handleKeyPress);

    //add event listener to see when player move is finished
    document.addEventListener("transitionend", () => {
      this.setState({
        keysActive: true
      });
    });
  }

  componentWillUnmount() {
    //clean up event listeners on component dismount
    window.removeEventListener("keydown", null);
    document.removeEventListener("transitionend");
  }

  // covers the whole window with the outer modal display
  // gets passed which inner modal to display within itself: start or win
  showModal = modalToShow => {
    this.setState({
      modalVisible: true,
      modalToShow: modalToShow
    });
  };

  // checks if user input is valid format; if so, removes start modal so game can begin
  hideModal = () => {
    // filter user input to one word, no non-alphabet characters
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

  // controls the timing of shifting maze walls
  alternator = () => {
    setInterval(
      () => {
        setTimeout(() => {
          this.setState({
            mazeMap: mazeIntervalOne
          });
        }, 0);
        setTimeout(() => {
          this.setState({
            mazeMap: mazeIntervalTwo
          });
        }, 1000);
        setTimeout(() => {
          this.setState({
            mazeMap: mazeIntervalThree
          });
        }, 2000);
        setTimeout(() => {
          this.setState({
            mazeMap: mazeIntervalFour
          });
        }, 3000);
      },
      4000
    );
  };

  // look for arrow key presses and pass that keypress to updateUserPosition
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

  // makes sure attempted move is valid, then makes that move if valid
  updateUserPosition = (direction, event) => {
    event.preventDefault();
    // hide instructions after first keypress
    this.setState({
      showInstructions: false
    });
    // if the user is trapped inside an obstacle, do nothing
    if (this.state.mazeMap[this.state.userY][this.state.userX] < 0) {
      return null
    } 

    // check which direction key was pressed, and make the appropriate action for each
    switch (direction) {
      case "up":
        // make sure we're staying within the bounds of the map
        if (this.state.userY > 0) {
          // make sure the map tile we're moving to allows movement within it
          if (this.state.mazeMap[this.state.userY - 1][this.state.userX] >= 0) {
            this.setState(
              {
                // update user x,y position in global state
                userY: this.state.userY - 1,
                mazeY: this.state.mazeY + 1,
                // disallow further input until movement animation finishes
                keysActive: false,
                // point avatar in the right direction (reposition sprite sheet)
                avatarDirection: "66%"
              },
              // center the map on new position
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

  // centers the map on the current user x,y position
  // animation is handled by css transition
  moveAvatar = () => {
    document.documentElement.style.setProperty("--mazeX", this.state.mazeX);
    document.documentElement.style.setProperty("--mazeY", this.state.mazeY);
    document.documentElement.style.setProperty("--avatarDirection", this.state.avatarDirection);
    this.checkCurrentPosition();
  };

  // see if there's anything special about the map tile the user is currently in
  checkCurrentPosition = () => {
    // 9 is the mist, so the user has won
    if (this.state.mazeMap[this.state.userY][this.state.userX] === 9) {
      this.showModal("win");
      } else if (this.state.mazeMap[this.state.userY][this.state.userX] === 2) { 
        // wormhole back to the start
        this.setState({
          userX: 0,
          userY: this.state.mazeMap.length - 1,
          mazeX: 8,
          mazeY: 8
        }, this.moveAvatar);
    } else if (this.state.mazeMap[this.state.userY][this.state.userX] === 3) {
      // wormhole to the upper-left of the maze
      this.setState({
        userX: 0,
        userY: 0,
        mazeX: 8,
        mazeY: 28
      }, this.moveAvatar);
    }
  };

  // reset game values to initial values (called by 'play again?' button on win modal)
  resetGame = () => {
    this.setState(
      {
        userX: 0,
        userY: this.state.mazeMap.length - 1,
        userName: "",
        wisdomKeyword: "",
        mazeX: 8,
        mazeY: 8,
        modalToShow: "start",
        inputError: false,
        wisdomError: false,
        showInstructions: true
      }, this.moveAvatar);
  };

  // puts result of wisdom API call in global state
  getWisdom = wisdom => {
    this.setState({ wisdomObject: wisdom });
  };

  // bind inputs in start modal
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
        ) : 
          null
        }
        <main className="AppContainer">
          <div className="wrapper">
            <div className="mazeWindow">
              <Maze maze={this.state.mazeMap} />
              <Avatar />
              {this.state.showInstructions ? <p className="instruction">Use arrow keys to navigate.</p> : null}
            </div>
            <Controller
              updateUserPosition={this.updateUserPosition}
              onKeyDown={this.handleKeyPress}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
