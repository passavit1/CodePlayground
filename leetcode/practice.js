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
