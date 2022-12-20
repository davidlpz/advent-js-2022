// Option A
function dryNumber(dry, numbers) {
  let arr = [];
  for (let i = 1; i <= numbers; i++) {
    if (String(i).includes(dry)) {
      arr.push(i);
    }
  }
  return arr;
}

// Option B
function dryNumber(dry, numbers) {
   return [...Array(numbers + 1).keys()]
    .slice(1)
    .filter((i) => i.toString().includes(dry.toString()));
}

console.log(dryNumber(1, 15)); // [1, 10, 11, 12, 13, 14, 15]

console.log(dryNumber(2, 20)); // [2, 12, 20]