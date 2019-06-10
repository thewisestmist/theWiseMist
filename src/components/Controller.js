import React from 'react'

// this is the directional pad that only shows on mobile
const Controller = (props) => {
    return (
        <div>
            <div>
                <input
                    type="button"
                    id="listener"
                    tabIndex="-1"
                    className="visuallyHidden"
                    onKeyDown={props.onKeyDown}
                />
                <div className="buttonContainer">
                    <button
                        id="Up"
                        className="navButton up"
                        onClick={event => {
                            props.updateUserPosition("up", event);
                        }}
                    >
                        <i className="fas fa-angle-up" aria-hidden="true">
                            <span className="visuallyHidden">up</span>
                        </i>
                    </button>
                </div>
                <div className="buttonContainer">
                    <button
                        id="Left"
                        className="navButton left"
                        onClick={event => {
                            props.updateUserPosition("left", event);
                        }}
                    >
                        <i className="fas fa-angle-left" aria-hidden="true">
                            <span className="visuallyHidden">left</span>
                        </i>
                    </button>
                    <button
                        id="Right"
                        className="navButton right"
                        onClick={event => {
                            props.updateUserPosition("right", event);
                        }}
                    >
                        <i className="fas fa-angle-right" aria-hidden="true">
                            <span className="visuallyHidden">right</span>
                        </i>
                    </button>
                </div>
                <div className="buttonContainer">
                    <button
                        id="Down"
                        className="navButton down"
                        onClick={event => {
                            props.updateUserPosition("down", event);
                        }}
                    >
                        <i className="fas fa-angle-down" aria-hidden="true">
                            <span className="visuallyHidden">down</span>
                        </i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Controller
