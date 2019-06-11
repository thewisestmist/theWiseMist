import React from "react";
import MistTile from "./MistTile.js";

// inner modal content to show if user wins the game
const WinModal = (props) => {
  return (
    <section className="winModal">
      <h2>Well done!</h2>
      <div className="mistModalWrap">
        <MistTile />
      </div>
      <p>Congratulations, {props.userName}! Here is your wisdom from The Wise Mist:</p>
      <p>{props.wisdomMessage}</p>
      <button className="beginButton" onClick={() => props.resetGame()}>Play again?</button>
    </section>
  );
}

export default WinModal;