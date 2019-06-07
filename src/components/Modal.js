import React from "react";
import StartModal from "./StartModal.js";
import WinModal from "./WinModal.js";

const Modal = props => {
  const showModal = props.modalVisible ? "modal show" : "modal hide";

  let innerModalContent = "";
  if (props.modalToShow === "start") {
    innerModalContent = (
      <StartModal
        hideModal={props.hideModal}
        handleChange={props.handleChange}
      />
    );
  } else if (props.modalToShow === "win") {
    innerModalContent = (
      <WinModal
        hideModal={props.hideModal}
        userName={props.userName}
        wisdomMessage={props.wisdomMessage}
        resetGame={props.resetGame}
      />
    );
  }

  return <div className={showModal}>{innerModalContent}</div>;
};

export default Modal;
