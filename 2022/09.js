// Option A
function countTime(leds) {
  let time = 0;
  const mod = (n, m) => ((n % m) + m) % m;

  while (leds.includes(0)) {
    leds = leds.map((led, i) =>
      leds[mod(i - 1, leds.length)] === 1 ? 1 : led)
    ;
    time++;
  }

  return time * 7;
}

// Option B
function countTime(leds) {
  const arr = leds.join('').split(1);
  arr[0] += arr.splice(-1);

  return Math.max(...arr.map(led => led.length)) * 7;
}

console.log(countTime([0, 1, 1, 0, 1])); // 7 segundos
console.log(countTime([0, 0, 0, 1])); // 21
console.log(countTime([0, 0, 1, 0, 0])); // 28