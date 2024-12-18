/*
Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

 

Example 1:

Input: nums = [1,3,6,10,12,15]
Output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.
Example 2:

Input: nums = [1,2,4,7,10]
Output: 0
Explanation: There is no single number that satisfies the requirement, so return 0.
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 1000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 6 === 0) {
          sum += nums[i];
          count++;
      }
  }

  return count > 0 ? Math.floor(sum/count) : 0;
};