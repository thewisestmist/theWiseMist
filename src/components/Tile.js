import React from "react";
import MistTile from "./MistTile";

// simple component to draw each tile of the maze map
const Tile = props => {
  // this explicitly sets each tile's position in the grid
  // you can overlap things in CSS grid, but for it to not push things out of alignment,
  // everything has to be explicitly positioned
  let divStyle = {
    gridColumnStart: `${props.gridX + 1}`,
    gridColumnEnd: `span 1`,
    gridRowStart: `${props.gridY + 1}`,
    gridRowEnd: `span 1`
  };

  // show a different tile style depending on maze grid value of this square
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
