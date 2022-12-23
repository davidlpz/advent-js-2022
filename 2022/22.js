function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((e, i) => {
    const next = i + systemNames.slice(i + 1).indexOf(e) + 1;
    return stepNumbers[i] <= stepNumbers[next];
  });
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers)); // => true

console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])); // => false