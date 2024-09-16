/*
You are given an integer n.

Each number from 1 to n is grouped according to the sum of its digits.

Return the number of groups that have the largest size.

 

Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
There are 4 groups with largest size.
Example 2:

Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.
 

Constraints:

1 <= n <= 104
*/

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let group = {};

  const sumOfDigits = (num) => {
      return num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  for (let i = 1; i <= n; i++) {
      const sum = sumOfDigits(i);

      if (group[sum]) {
          group[sum]++;
      } else {
          group[sum] = 1;
      }
  }

  const maxSize = Math.max(...Object.values(group));

  let count = 0;
  for (let key in group) {
      if (group[key] === maxSize) {
          count++;
      }
  }

  return count;
};