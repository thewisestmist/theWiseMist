import React from "react";

const Tile = props => {
  return (
    <>
      {props.fillValue === 0 ? (
        <div className="tile empty" />
      ) : (
        <div className="tile filled" />
      )}
    </>
  );
};

export default Tile;
