// Option 1
function getGiftsToRefill(a1, a2, a3) {
  let toRefill = [];

  const checkStock = (current, store1, store2) => {
    current.forEach((toy) => {
      if (
        !store1.includes(toy) &&
        !store2.includes(toy) &&
        !toRefill.find((elem) => elem === toy)
      ) {
        toRefill.push(toy);
      }
    });
  };

  checkStock(a1, a2, a3);
  checkStock(a2, a1, a3);
  checkStock(a3, a1, a2);

  return toRefill;
}

// Option 2
function getGiftsToRefill(a1, a2, a3) {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    (elem) => a1.includes(elem) + a2.includes(elem) + a3.includes(elem) == 1
  );
}

const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];

const toRefill = getGiftsToRefill(a1, a2, a3);
console.log(toRefill);