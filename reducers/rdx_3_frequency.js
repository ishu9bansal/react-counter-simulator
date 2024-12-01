const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequencyMap = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(frequencyMap);
