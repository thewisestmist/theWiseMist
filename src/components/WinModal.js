import React from "react";

const WinModal = (props) => {
  return (
    <div className="winModal">
      <h2>CONGRATION! YOU DONE IT</h2>
      <p>Well done, {props.userName}! Here is your wisdom from The Wise Mist:</p>
      <p>{props.wisdomMessage}</p>
      <button onClick={() => props.hideModal()}>Dismiss</button>
    </div>
  );
}

export default WinModal;