// Option A
function carryGifts(gifts, maxWeight) {
  let arr = [];
  let saco = '';
  let weight = 0;

  gifts
    .filter((gift) => gift.length <= maxWeight)
    .forEach((gift) => {
    if (weight + gift.length <= maxWeight) {
      saco = (saco + ' ' + gift).trim();
      weight += gift.length;
      return;
    }
    arr.push(saco);
    saco = gift;
    weight = gift.length;
  });
  arr.push(saco);
  return arr.filter((gift) => gift);
}

// Option B
function carryGifts(gifts, maxWeight) {
  let weight = 0;

  return gifts
    .filter((gift) => gift.length <= maxWeight)
    .reduce((acc, gift) => {
      if (weight + gift.length <= maxWeight) {
        acc[acc.length - 1] = (acc[acc.length - 1] + ' ' + gift).trim();
        weight += gift.length;
        return acc;
      }
      acc.push(gift);
      weight = gift.length;
      return acc;
    }, [''])
    .filter((gift) => gift);
}

// Option C
function carryGifts(gifts, maxWeight) {
  return (
    gifts
      .join(' ')
      .match(new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, "g")) || []
  );
}


console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10));
// ['game bike', 'book toy']

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7));
// ['game', 'bike', 'book toy']

console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 2));
// []

console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6));
// ['toy', 'gamme', 'toy', 'bike']
