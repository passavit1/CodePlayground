/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

https://leetcode.com/problems/is-object-empty/

TEST CASE :

case 1 : Input: obj = {"x": 5, "y": 42} output = false;
case 2 : Input: obj = {} output = true;
case 3 : Input: obj = [null, false, 0] output =  false;

*/

let is_object_empty = (value) => {
  return Object.keys(value).length === 0;
};

let case1 = { x: 5, y: 42 };
let case2 = {};
let case3 = [null, false, 0];

console.log(is_object_empty(case1));
console.log(is_object_empty(case2));
console.log(is_object_empty(case3));
