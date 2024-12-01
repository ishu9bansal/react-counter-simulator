const arr = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
];

const reducer = (acc, product) => {
  const { category } = product;
  acc[category] = acc[category] || [];
  acc[category].push(product);
  return acc;
};

const result = arr.reduce(reducer, {});
console.log(result);
