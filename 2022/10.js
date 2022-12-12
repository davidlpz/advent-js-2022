function checkJump(heights) {
  const max = Math.max(...heights);
  const index = heights.indexOf(max);
  const firstHalf = heights.slice(0, index + 1);
  const secondHalf = heights.slice(index);

  return (
    heights.at(0) !== max &&
    heights.at(-1) !== max &&
    firstHalf.join('') === firstHalf.sort().join('') &&
    secondHalf.join('') === secondHalf.sort().reverse().join('')
  );
}

console.log(checkJump([1, 3, 8, 5, 2])); // true

console.log(checkJump([1, 7, 3, 5])); // false

console.log(checkJump([2, 1, 2, 1])); // false

console.log(checkJump([2, 2, 2, 2])); // false

console.log(checkJump([1, 7, 3, 5])); // false