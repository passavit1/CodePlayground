/*

Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.


Test cases : 

Case 1 : Input: callCount = 5 Output: [0,1,1,2,3]
Case 2 : Input: callCount = 0 Output: []


Answer : 

var fibGenerator = function*() {
    
};

*/

var fibGenerator = function* () {
  let prev = 0;
  let curr = 1;

  yield prev; // Yield the initial value 0
  yield curr; // Yield the initial value 1

  for (let i = 2; i <= 50; i++) {
    const next = prev + curr;
    yield next; // Yield the next Fibonacci number
    prev = curr;
    curr = next;
  }
};
