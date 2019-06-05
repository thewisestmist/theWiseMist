import React from "react";

const Tile = props => {
  let divStyle = {
    gridColumnStart: `${props.gridX + 1}`,
    gridColumnEnd: `span 1`,
    gridRowStart: `${props.gridY + 1}`,
    gridRowEnd: `span 1`
  }

  return (
    <>
      {props.fillValue === 0 ? (
        <div className="tile empty" style={divStyle} />
      ) : (
        <div className="tile filled" style={divStyle} />
      )}
    </>
  );
};

export default Tile;
