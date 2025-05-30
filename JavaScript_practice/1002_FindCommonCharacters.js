/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  let output = [];
  let firstWord = words[0].split("");
  
  for (let i = 0; i < firstWord.length; i++) {
      let isCommon = true;

      for (let j = 1; j < words.length; j++) {
          if (words[j].includes(firstWord[i])) {
              words[j] = words[j].replace(firstWord[i], "");
          } else {
              isCommon = false;
              break;
          }
      }

      if (isCommon) {
          output.push(firstWord[i]);
      }
  }

  return output;
};