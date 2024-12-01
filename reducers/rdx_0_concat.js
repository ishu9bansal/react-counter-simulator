const wordList = ["Reducers ", "are ", "awesome!"];

const reducer = (acc, word) => {
    return acc + word;
}

const result = wordList.reduce(reducer, "");
console.log(result);