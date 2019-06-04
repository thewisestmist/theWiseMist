import React from "react";

const StartModal = (props) => {
    return(
        <div className="startModal">
            <p>Welcome to our game!</p>
            <button onClick={() => props.hideModal()}>Dismiss</button>
        </div>
    );
}

export default StartModal;