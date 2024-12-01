const dup = (x) => +(""+x+x);
const divideBySeven = (x) => x / 7;
const divideByEleven = (x) => x / 11;
const divideByThirteen = (x) => x / 13;

const pipeline = [dup, divideBySeven, divideByEleven, divideByThirteen];

const result = pipeline.reduce((acc, fn) => fn(acc), 345);

console.log(result);
