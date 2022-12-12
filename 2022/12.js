function selectSleigh(distance, sleighs) {
  sleighs = sleighs.filter((sleigh) => sleigh.consumption * distance <= 20);
  return sleighs.length ? sleighs.at(-1).name : null;
}

const distance = 30;
const sleighs = [
  { name: 'Dasher', consumption: 0.3 },
  { name: 'Dancer', consumption: 0.5 },
  { name: 'Rudolph', consumption: 0.7 },
  { name: 'Midu', consumption: 1 }
];

console.log(selectSleigh(distance, sleighs)); // => "Dancer"