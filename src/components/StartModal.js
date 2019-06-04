import React from "react";

const StartModal = (props) => {
    return(
        <div className="startModal">
            <h1>The Wise Mist</h1>
            <label htmlFor="userName">Enter your name:</label>
            <input onChange={props.handleChange} type="text" name="userName" id="userName"></input>
            <label htmlFor="wisdomKeyword">Enter a word</label>
            <input onChange={props.handleChange} type="text" name="wisdomKeyword" id="wisdomKeyword"></input>
            <button onClick={() => props.hideModal()}>Start!</button>
        </div>
    );
}

export default StartModal;