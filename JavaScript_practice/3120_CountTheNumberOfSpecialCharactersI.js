/*
You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

Return the number of special letters in word.

 

Example 1:

Input: word = "aaAbcBC"

Output: 3

Explanation:

The special characters in word are 'a', 'b', and 'c'.

Example 2:

Input: word = "abc"

Output: 0

Explanation:

No character in word appears in uppercase.

Example 3:

Input: word = "abBCab"

Output: 1

Explanation:

The only special character in word is 'b'.

 

Constraints:

1 <= word.length <= 50
word consists of only lowercase and uppercase English letters.
*/

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
  let upperCase = {};
  let lowerCase = {};

  for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toLowerCase()) {
          lowerCase[word[i]] = true;
      } else {
          upperCase[word[i].toLowerCase()] = true;
      }
  }

  let count = 0;
  for (let letter in lowerCase) {
      if (upperCase[letter]) {
          count++;
      }
  }

  return count;
};