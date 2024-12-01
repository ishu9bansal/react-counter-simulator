const arr = [5, 10, 35, 25, 15, 20];

const reducer = (acc, ele) => {
  return acc + ele;
};

const result = arr.reduce(reducer, 0);
console.log(result);
