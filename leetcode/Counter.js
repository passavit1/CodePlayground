/* 
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

ref : https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

Test case : 

Case 1 : 10 , ["call","call","call"]
Case 2 : -2 , ["call","call","call","call","call"]

var createCounter = function(n) {
    return function() {
        
    };
};

*/

var createCounter = function (n) {
  let count = n; // Initialize count with the given value

  return function () {
    const currentCount = count; // Store the current count
    count++; // Increment the count for the next call
    return currentCount; // Return the current count
  };
};
