/*
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Constraints:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
words[i] and chars consist of lowercase English letters.
*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const characters = {};
  
  //Looping through chars to get object
  for (let char of chars) {
      characters[char] = 1 + (characters[char] || 0);
  }

  //checking object contains the letters
  let result = 0;
  for (const word of words) {
      //reinitialize everytime executed
      const copy = {...characters};

      for (const c of word) {
          if (c in copy && copy[c] !== 0) {
              copy[c]--;
          } else {
              result -= word.length
              break;
          }
      }
      
      result += word.length;       
  }

  return result;
};