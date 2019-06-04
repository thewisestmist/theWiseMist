import React from "react";
import ReactDOM from "react-dom";

const JSXModal = (
    <div className="ui dimmer modals visible active">
        <div className="ui standard modal visible active">
            This is our modal. Hello! UI stuff goes here.
        </div>
    </div>
)

const Modal = (props) => {
    return ReactDOM.createPortal(JSXModal, document.querySelector("#modal"));
}

export default Modal;