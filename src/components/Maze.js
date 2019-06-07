import React from "react";
import Tile from "./Tile.js";

class Maze extends React.Component {
  makeMaze = () => {
    let displayMaze = this.props.maze.map((tiles, i) => {
      return tiles.map((tile, j) => {
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
