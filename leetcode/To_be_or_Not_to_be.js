/* 
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

Test Case :

Case 1 : () => expect(5).toBe(5) Output: {"value": true}
Case 2 : () => expect(5).toBe(null) Output: {"error": "Not Equal"}
Case 3 : () => expect(5).notToBe(null) Output: {"value": true}


*/

var expect = function (val) {
  return {
    toBe: (data) => {
      if (val === data) return true;
      throw new Error("Not Equal");
      //   else return { error: "Not Equal" };
    },
    notToBe: (data) => {
      if (val !== data) return true;
      throw new Error("Equal");
    },
  };
};

console.log(expect(10).toBe(20));
