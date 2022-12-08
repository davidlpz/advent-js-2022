function distributeGifts(packOfGifts, reindeers) {
  const totalWeight = packOfGifts.reduce((total, gift) =>
    total + gift.length
  , 0);
  const totalReindeers = reindeers.reduce((total, reinder) =>
    total + reinder.length * 2
  , 0);

  return Math.trunc(totalReindeers/totalWeight);
}

const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];

const distribution = distributeGifts(packOfGifts, reindeers);
console.log(distribution);
