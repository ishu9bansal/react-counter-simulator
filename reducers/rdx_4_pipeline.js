const addOne = (x) => x + 1;
const double = (x) => x * 2;
const subtractThree = (x) => x - 3;

const pipeline = [addOne, double, subtractThree];

const input = 5;

const output = pipeline.reduce((acc, fn) => fn(acc), input);

console.log(output);
