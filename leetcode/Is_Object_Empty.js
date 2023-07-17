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

var isEmpty = function (obj) {
  return Object.keys(obj).length === 0; //การดึงเฉพาะ Key ออกมา หรือสามารถดึง Values ได้ดังนี้ Object.Values(obj)
};

let case1 = { x: 5, y: 42 };
let case2 = {};
let case3 = [null, false, 0];

console.log("case1 result", isEmpty(case1));
console.log("case2 result", isEmpty(case2));
console.log("case3 result", isEmpty(case3));
