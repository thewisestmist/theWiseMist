import React from "react";

const WinModal = (props) => {
  return (
    <div className="winModal">
      <h2>CONGRATION! YOU DONE IT</h2>
      <div className="mistContainer">
        <img src="./assets/wiseMist.png" className="wiseMist mist1" alt="The Wise Mist" />
        <img src="./assets/wiseMist.png" className="wiseMist mist2" alt="The Wise Mist" />
        <img src="./assets/wiseMist.png" className="wiseMist mist3" alt="The Wise Mist" />
      </div>
      <p>Well done, {props.userName}! Here is your wisdom from The Wise Mist:</p>
      <p>{props.wisdomMessage}</p>
      <button onClick={() => props.resetGame()}>Play again?</button>
    </div>
  );
}

export default WinModal;