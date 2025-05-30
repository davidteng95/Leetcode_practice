/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

 

Example 1:


Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.
Example 2:


Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
 

Constraints:

1 <= path.length <= 104
path[i] is either 'N', 'S', 'E', or 'W'.
*/

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  let x = 0, y = 0;
  let visited = new Set(["0,0"]);

  for (let i = 0; i < path.length; i++) {
      if (path[i] === "N") {
          y++;
      } else if (path[i] === "S") {
          y--;
      } else if (path[i] === "E") {
          x++;
      } else if (path[i] === "W") {
          x--;
      }

      let currentPos = `${x},${y}`;
      if (visited.has(currentPos)) {
          return true;
      }

      visited.add(currentPos);
  }

  return false;
};