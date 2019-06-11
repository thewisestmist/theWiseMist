import React from "react";
import mist from './assets/wiseMist.png'

// Simple component to display the Wise Mist graphic
// There's three stacked atop each other that rotate at different speeds for a 3D look
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
        alt=""
      />
      <img
        src={mist}
        className="wiseMist mist3"
        alt=""
      />
    </div>
  );
};

export default MistTile;
