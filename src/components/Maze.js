import React from "react";

class Maze extends React.Component {
  constructor() {
    super();
    this.state={
      maze: [
        [0,1,0,1,0,0,0,0],
        [0,0,0,1,0,1,1,1],
        [1,1,0,1,0,0,0,1],
        [0,1,0,0,0,1,0,1],
        [0,1,0,1,0,1,0,0],
        [0,0,0,0,0,0,0,1],
        [0,1,1,1,0,1,0,1],
        [0,0,0,1,0,1,0,0]
      ]
    }
  }

  render() {
    return(
      <div>Whatever</div>
    )
  }
}