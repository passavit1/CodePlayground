var createCounter = function (n) {
  let count = n; // Initialize count with the given value

  return function () {
    const currentCount = count; // Store the current count
    count++; // Increment the count for the next call
    return currentCount; // Return the current count
  };
};
