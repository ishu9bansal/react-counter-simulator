const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattened = nestedArray.reduce((acc, subArray) => acc.concat(subArray), []);

console.log(flattened);
