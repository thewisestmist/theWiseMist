import React from "react";
import StartModal from "./StartModal.js";
import WinModal from "./WinModal.js";

// Simple component to show modals
// this is the outer frame that takes over the whole screen until modal is dismissed
const Modal = props => {
  const showModal = props.modalVisible ? "modal show" : "modal hide";

  // if 'start' is passed as props to this component, show the Start modal as the inner content
  let innerModalContent = "";
  if (props.modalToShow === "start") {
    innerModalContent = (
      <StartModal
        hideModal={props.hideModal}
        handleChange={props.handleChange}
        inputError={props.inputError}
        wisdomError={props.wisdomError}
      />
    );
  // if 'win' is passed to this component as props, display the Win modal as the inner content
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
