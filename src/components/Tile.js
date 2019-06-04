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

//   if (props.fillValue === 0) {
//     return <div className="empty" />;
//   } else {
//     return <div className="filled" />;
//   }
// };

export default Tile;
