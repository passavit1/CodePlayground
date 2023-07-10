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
