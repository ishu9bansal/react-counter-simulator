const numbers = [1, 2, 2, 3, 4, 4, 5];

const result = numbers.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(result);
