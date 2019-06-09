import React from "react";
import MistTile from "./MistTile.js";

const StartModal = (props) => {
    return(
        <div className="startModal">
            <h1>The Wise Mist</h1>
            <div className="mistModalWrap">
                <MistTile />
            </div>
            <h3>Welcome, traveler.</h3>
            <p>Many come to seek The Wise Mist’s counsel, but it lives on the far side of a maze! If you make it through the labyrinth, you too can hear its wisdom. Before you begin, we will need your name, and one single word you may ask of The Wise Mist.</p>
            <div className="startModalInputContainer">
                <div className="inputWrapper">
                    <label htmlFor="userName">Enter your name:</label>
                    <input onChange={props.handleChange} type="text" name="userName" id="userName" maxLength="30"></input>
                </div>
                <div className="inputWrapper">
                    <label htmlFor="wisdomKeyword">Enter a word:</label>
                    <input onChange={props.handleChange} type="text" name="wisdomKeyword" id="wisdomKeyword"></input>
                </div>
                {props.inputError || props.wisdomError ?
                <div className="errorMessage">
                    {props.inputError ? 
                    <p className="emptyInputError">Please enter a name and a keyword.</p> : "" }
                    {props.wisdomError ?
                    <p className="wisdomError">Please enter only one keyword.</p> : "" }
                </div> : ""}
            </div>
            <button className="beginButton" onClick={() => props.hideModal()}>Begin your journey!</button>
        </div>
    );
}

export default StartModal;