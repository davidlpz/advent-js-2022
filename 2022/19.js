// Option A
function sortToys(toys, positions) {
  const step = Math.min(...positions);
  return [...Array(toys.length).keys()].map((i) => {
    const index = positions.findIndex((elem) => elem === i + step);
    return toys[index];
  });
}

// Option B
function sortToys(toys, positions) {
  const sortedPositions = [...positions].sort((a, b) => a - b);
  return sortedPositions.map((i) => {
    const index = positions.indexOf(i);
    return toys[index];
  });
}

const toys = ['ball', 'doll', 'car', 'puzzle'];
const positions = [2, 3, 1, 0];

console.log(sortToys(toys, positions)); // ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
const morePositions = [8, 6, 5, 7, 9];

console.log(sortToys(moreToys, morePositions)); // ['ps4', 'xbox', 'switch', 'pc', 'nintendo']