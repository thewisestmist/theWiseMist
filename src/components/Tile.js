import React from "react";

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
      case 1:
        return "filled";
      case 2:
        return "asteroid";
      case 9:
        return "mist";
      default:
        return null;
    }
  }

  return <div className={`tile ${getTileSprite(props.fillValue)}`} />;
  //   return (
  //     <>
  //       {props.fillValue === 0 ? (
  //         <div className="tile empty" style={divStyle} />
  //       ) : (
  //         <div className="tile filled" style={divStyle} />
  //       )}
  //     </>
  //   );
};

export default Tile;
