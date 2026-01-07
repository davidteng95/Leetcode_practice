/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
Example 3:

Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) {
        return [];
    }

    // 1. Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    for (let i = 0; i < intervals.length; i++) {
        // If result is empty or no overlap
        if (
            result.length === 0 ||
            intervals[i][0] > result[result.length - 1][1]
        ) {
            result.push(intervals[i]);
        } else {
            // Overlap → merge
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                intervals[i][1]
            );
        }
    }

    return result;
};