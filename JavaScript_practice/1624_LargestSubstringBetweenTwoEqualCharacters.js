/*
Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
Example 2:

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
Example 3:

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.
 

Constraints:

1 <= s.length <= 300
s contains only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let output = -1;
  for (let i = 0; i < s.length; i++) {
      let count = -1;
      for (let j = i + 1; j < s.length; j++) {
          if (s[i] === s[j]) {
              count = j - i - 1;
          }
      }
      
      if (count > output) {
          output = count;
      }

  }

  return output;
};