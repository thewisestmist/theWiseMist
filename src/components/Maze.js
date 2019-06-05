import React from "react";
import Tile from "./Tile.js";
import Avatar from "./Avatar.js";

class Maze extends React.Component {
  // constructor() {
  //   super();
  // }

  makeMaze = () => {
    let displayMaze = this.props.maze.map((tiles, i) => {
      return tiles.map((tile, j) => {
        return <Tile fillValue={this.props.maze[i][j]} />;
      });
    });
    displayMaze.push(<Avatar />)
    return displayMaze;
  };

  render() {
    return <div className="mazeBoard">{this.makeMaze()}</div>;
  }
}

export default Maze;
