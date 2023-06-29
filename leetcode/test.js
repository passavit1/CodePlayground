// let number = [4, 6, 7];
// let target = 13;
// let result = [];

// for (let x = 0; x < number.length; x++) {
//   for (let y = 0; y < number.length; y++) {
//     if (number[x] + number[y] === target) {
//       result.push(x, y);
//     }
//     console.log("number x = ", number[x], "number y = ", number[y]);
//   }
// }

// console.log(result);

let number = [4, 5, 6];
let target = 11;

for (let i = 0; i < number.length; i++) {
  for (let j = i + 1; j < number.length; j++) {
    console.log("number i = ", number[i], `number j = `, number[j]);
  }
}
