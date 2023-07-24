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
class Calculator {
  constructor(value) {
    this.result = value;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by 0 is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result **= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}
