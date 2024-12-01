const numbers = [1, 2, 2, 3, 4, 4, 5];

const unique = numbers.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(unique);
