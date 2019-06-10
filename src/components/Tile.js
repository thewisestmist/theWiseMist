import React from "react";
import MistTile from "./MistTile";

const Tile = props => {
  let divStyle = {
    gridColumnStart: `${props.gridX + 1}`,
    gridColumnEnd: `span 1`,
    gridRowStart: `${props.gridY + 1}`,
    gridRowEnd: `span 1`
  };

  function getTileSprite(type) {
    switch (type) {
      case 0:
        return "empty";
      case -1:
        return "filled";
      case -2:
        return "cage";
      case 2:
        return "wormhole";
      case 3:
        return "wormhole";
      case 9:
        return "mist";
      default:
        return null;
    }
  }

  return (
    <div className={`tile ${getTileSprite(props.fillValue)}`} style={divStyle}>
      {props.fillValue === 9 ? <MistTile /> : ""}
    </div>
  );
};

export default Tile;
