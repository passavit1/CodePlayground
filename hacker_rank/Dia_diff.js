/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference

ref : https://www.hackerrank.com/challenges/diagonal-difference


function diagonalDifference(arr) {


}


Test Case  : 

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const result = diagonalDifference(matrix);
console.log(result); // Output: 2


*/

function diagonalDifference(arr) {
  let n = arr.length;
  let sum_left = 0;
  let sum_right = 0;

  for (let i = 0; i < n; i++) {
    sum_left += arr[i][i];
    sum_right += arr[i][n - 1 - i];
  }

  let result = Math.abs(sum_left - sum_right);
  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const result = diagonalDifference(matrix);
console.log(result); // Output: 2
