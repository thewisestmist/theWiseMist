// Y is the first index of the maze, starting at the bottom (i.e. 7)
// X is the second index of the maze, starting at the left (i.e. 0)
// Numbers 0 and great you can pass through
// Number less than 0 you cannot

const mazeMap = [
  [-1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, -1, -1, -1, 0, 0, 0, 0, 9],
  [-1, -1, -1, -1, 0, 0, -1, -1, 0, -1, -1, -1, 0, 0, 0, -1, 0, -1, -1, 0, -1],
  [-1, -1, -1, -1, 0, -1, -1, -1, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, -1, 0, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, 0, -1, -1, -1],
  [-1, -1, -1, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
  [-1, -1, -1, -1, 0, -1, 0, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, -1, -1, -1, 0],
  [-1, -1, -1, -1, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0],
  [-1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, 0, -1, -1],
  [-1, -1, -1, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0],
  [-1, -1, -1, -1, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, 0],
  [-1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 0],
  [-1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0],
  [-1, -1, -1, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0],
  [-1, -1, -1, -1, 0, -1, -1, -1, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, 0],
  [-1, -1, -1, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0],
  [-1, -1, -1, -1, 0, -1, 0, -1, -1, -1, 0, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1],
  [-1, -1, -1, -1, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
  [0, -1, -1, -1, 0, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, 0],
  [0, -1, -1, -1, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0],
  [0, -1, -1 ,-1 ,-1 , -1, 0, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, -1, 0, 0, 0]
];

export default mazeMap;
