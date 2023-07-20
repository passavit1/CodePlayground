let arr = [1, 2, 3, 4, 5];

let arr1 = arr.shift();

console.log(arr);
console.log(arr1);

const chuck = (arr, size) => {
  if (size >= arr.length) console.log([arr]);
};
