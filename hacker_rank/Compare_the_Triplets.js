/*

Ref; https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true 

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.


Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

function compareTriplets(a, b) {
    
}


Test Case : 
 

let a = [5,6,7]
let b = [3,6,10]

result = [1,1]

let c = [17,28,30]
let d = [99,16,8]

result = [2,1]

console.log(compareTriplets(a, b))
console.log(compareTriplets(c,d))

*/

function compareTriplets(a, b) {
  let a_score = 0;
  let b_score = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] === b[i]) continue;

    if (a[i] > b[i]) a_score++;
    else b_score++;
  }

  return [a_score, b_score];
}

let a = [5, 6, 7];
let b = [3, 6, 10];

let c = [17, 28, 30];
let d = [99, 16, 8];

console.log(compareTriplets(a, b));
console.log(compareTriplets(c, d));
