/*
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  
  let countS = {}
  let countT = {}
  for (let i = 0; i < s.length; i++) {
      if (countS[s[i]]) {
          countS[s[i]]++;
      } else {
          countS[s[i]] = 1;
      }

      if (countT[t[i]]) {
          countT[t[i]]++;
      } else {
          countT[t[i]] = 1;
      }
  }

  for (let letter in countS) {
      if (countS[letter] !== countT[letter]) {
          return false;
      }
  }

  return true;
};