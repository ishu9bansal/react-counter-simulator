const nestedArray = [[1, 2], [3, 4], [5, 6]];

const result = nestedArray.reduce((acc, subArray) => acc.concat(subArray), []);

console.log(result);
