/*

Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.


Ref : https://leetcode.com/problems/chunk-array/


Test CAse : 

Case 1 : Input: arr = [1,2,3,4,5], size = 1 Output: [[1],[2],[3],[4],[5]]
Case 2 : Input: arr = [1,9,6,3,2], size = 3 Output: [[1,9,6],[3,2]] 
Case 3 : Input: arr = [8,5,3,2,6], size = 6 Output: [[8,5,3,2,6]]
Case 4 : Input: arr = [], size = 1 Output: []


Solution : 

var chunk = function(arr, size) {
    
};


*/

var chunk = function (arr, size) {
  const ans = [];
  for (let i = 0; i < arr.length; i += size) ans.push(arr.slice(i, i + size));
  return ans;
};
