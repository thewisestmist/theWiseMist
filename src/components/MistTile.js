import React from "react";
import mist from './assets/wiseMist.png'

const MistTile = () => {
  return (
    <div className="mistContainer">
      <img
        src={mist}
        className="wiseMist mist1"
        alt="The Wise Mist"
      />
      <img
        src={mist}
        className="wiseMist mist2"
        alt="The Wise Mist"
      />
      <img
        src={mist}
        className="wiseMist mist3"
        alt="The Wise Mist"
      />
    </div>
  );
};

export default MistTile;
