/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

 

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
Example 2:

Input: x = 3, y = 1
Output: 1
 

Constraints:

0 <= x, y <= 231 - 1
 

Note: This question is the same as 2220: Minimum Bit Flips to Convert Number.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  x = x.toString(2);
  y = y.toString(2);
  
  let max = Math.max(x.length, y.length);
  x = x.padStart(max, "0");
  y = y.padStart(max, "0");
  
  let count = 0
  for (let i = 0; i < max; i++) {
      if (x[i] != y[i]) {
          count++;
      }
  }

  return count;
};