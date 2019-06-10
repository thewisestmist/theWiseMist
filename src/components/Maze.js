import React from "react";
import Tile from "./Tile.js";

// builds the actual maze array
class Maze extends React.Component {
  makeMaze = () => {
    // map through each row of the 2D array
    let displayMaze = this.props.maze.map((tiles, i) => {
      // map through each column of the 2D array
      return tiles.map((tile, j) => {
        // spit out a tile object with fill value and x,y placement values
        return <Tile fillValue={this.props.maze[i][j]} gridX={j} gridY={i} key={`${i}-${j}`} />;
      });
    });
    return displayMaze;
  };

  render() {
    return <div className="mazeBoard">{this.makeMaze()}</div>;
  }
}

export default Maze;
