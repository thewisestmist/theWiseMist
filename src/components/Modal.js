import React from "react";
import StartModal from "./StartModal.js";


const Modal = (props) => {
    const showModal = props.modalVisible ? "modal show" : "modal hide";

    return (
        <div className={showModal}>
            <StartModal 
                hideModal={props.hideModal}
            />
        </div>
    );
}

export default Modal;