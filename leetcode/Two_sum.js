/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

https://leetcode.com/problems/two-sum/
*/

let result = [];

const two_sum = (number, target) => {
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[i] + number[j] === target) {
        result.push([i, j]);
      }
    }
  }

  console.log(result);
};

// two_sum([2, 7, 11, 15], 9);
// two_sum([3, 2, 4], 6);
// two_sum([3, 3], 6);
two_sum([3, 5, 2, 4, 8, 1], 6);
