/*
Write a function that takes the binary representation of a positive integer and returns the number of 
set bits
 it has (also known as the Hamming weight).

 

Example 1:

Input: n = 11

Output: 3

Explanation:

The input binary string 1011 has a total of three set bits.

Example 2:

Input: n = 128

Output: 1

Explanation:

The input binary string 10000000 has a total of one set bit.

Example 3:

Input: n = 2147483645

Output: 30

Explanation:

The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

Constraints:

1 <= n <= 231 - 1
 

Follow up: If this function is called many times, how would you optimize it?
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // Convert the number to its binary representation
  const binaryString = n.toString(2);

  // Split the binary string into an array of characters
  const binaryArray = binaryString.split("");

  // Filter the array to keep only the '1' characters
  const setBits = binaryArray.filter(bit => bit === "1");

  // Return the length of the filtered array
  return setBits.length;

};


// optimized way

/*
var hammingWeight = function(n) {
  let count = 0;

  //Loop Until n is Zero: while (n) runs as long as n is not zero.
  while (n) {
      //Count Set Bits: n & 1 checks if the least significant bit is set (1) and adds it to count.
      count += n & 1;
      //Right Shift n: n >>= 1 shifts n to the right by one bit, effectively dividing n by 2 and discarding the least significant bit.
      n >> = 1;
  }

  return count;
}
*/
