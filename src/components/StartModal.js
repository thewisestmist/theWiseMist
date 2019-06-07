import React from "react";

const StartModal = (props) => {
    return(
        <div className="startModal">
            <h1>The Wise Mist</h1>
            <div className="mistContainer">
                <img src="./assets/wiseMist.png" className="wiseMist mist1" alt="The Wise Mist" />
                <img src="./assets/wiseMist.png" className="wiseMist mist2" alt="The Wise Mist" />
                <img src="./assets/wiseMist.png" className="wiseMist mist3" alt="The Wise Mist" />
            </div>
            <h3>Welcome, traveler.</h3>
            <p>Many come to seek The Wise Mist’s counsel, but it lives on the far side of a maze! If you make it through the labyrinth, you too can hear its wisdom. Before you begin, we will need your name, and one single word you may ask of The Wise Mist.</p>
            <div className="startModalInputContainer">
                <div className="inputWrapper">
                    <label htmlFor="userName">Enter your name:</label>
                    <input onChange={props.handleChange} type="text" name="userName" id="userName"></input>
                </div>
                <div className="inputWrapper">
                    <label htmlFor="wisdomKeyword">Enter a word:</label>
                    <input onChange={props.handleChange} type="text" name="wisdomKeyword" id="wisdomKeyword"></input>
                </div>
                {props.inputError || props.wisdomError ?
                <div className="errorMessage">
                    {props.inputError ? 
                    <p className="emptyInputError">INPUT SOMETHING!</p> : "" }
                    {props.wisdomError ?
                    <p className="wisdomError">WRONG THING TYPED!</p> : "" }
                </div> : ""}
            </div>
            <button className="beginButton" onClick={() => props.hideModal()}>Begin your journey!</button>
        </div>
    );
}

export default StartModal;