/*
Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.
 

Example 1:

Input: nums1 = [4,1,3], nums2 = [5,7]
Output: 15
Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have.
Example 2:

Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
Output: 3
Explanation: The number 3 contains the digit 3 which exists in both arrays.
 

Constraints:

1 <= nums1.length, nums2.length <= 9
1 <= nums1[i], nums2[i] <= 9
All digits in each array are unique.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
  let min = 10;
  for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
          if (nums1[i] === nums2[j]) {
              if (nums1[i] < min) {
                  min = nums1[i];
              }
          }
      }
  }

  if (min < 10) {
      return min;
  }


  let nums1Min = Math.min(...nums1);
  let nums2Min = Math.min(...nums2);

  if (nums1Min > nums2Min) {
      return Number(String(nums2Min) + String(nums1Min));
  } else {
      return Number(String(nums1Min) + String(nums2Min));
  }
};