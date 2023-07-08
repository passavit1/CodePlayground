const two_sum = (number, target) => {
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[i] + number[j] === target) {
        result.push([i, j]);
      }
    }
  }

  console.log(result);
};
