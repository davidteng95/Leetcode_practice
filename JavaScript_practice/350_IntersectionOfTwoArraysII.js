/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*
var intersect = function(nums1, nums2) {
    let output = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                output.push(nums1[i]);
                nums1.splice(i, 1);
                nums2.splice(j, 1);
                i--;
                j--;
            }
        }
    }

    return output;
};
*/

var intersect = function(nums1, nums2) {
  nums1.sort((a,b) => a - b);
  nums2.sort((a,b) => a - b);
  
  let output = [];
  let i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] === nums2[j]) {
          output.push(nums1[i]);
          i++;
          j++;
      } else if (nums1[i] < nums2[j]) {
          i++;
      } else {
          j++;
      }
  }

  return output;
};