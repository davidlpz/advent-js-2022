function wrapping(gifts) {
  return gifts.map((gift) => {
    const wrap = '*'.repeat(gift.length + 2);
    return `${wrap}\n${'*'+gift+'*'}\n${wrap}`;
  });
}

const gifts = ['cat', 'game', 'socks'];

const wrapped = wrapping(gifts);
console.log(wrapped);