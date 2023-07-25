/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.


ref:https://leetcode.com/problems/counter-ii/


Test Case : 
 

Case 1 : Input: init = 5, calls = ["increment","reset","decrement"] Output: [6,5,4]
case 2 : Input: init = 0, calls = ["increment","increment","decrement","reset","reset"] Output: [1,2,1,0,0]


Solution :

var createCounter = function(init) {
    
};

*/

var createCounter = function (init) {
  let reset = init;

  return {
    increment() {
      return ++reset;
    },
    decrement() {
      return --reset;
    },
    reset() {
      reset = init;
      return init;
    },
  };
};
