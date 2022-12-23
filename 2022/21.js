function printTable(gifts) {
  const nameColumnSize = Math.max(
    'Gift'.length,
    ...gifts.map((gift) => gift.name.length)
  );

  const quantityColumnSize = Math.max(
    'Quantity'.length,
    ...gifts.map((gift) => gift.quantity.toString().length)
  );

  const tableSize = nameColumnSize + quantityColumnSize + 7;
  const borderTop = '+'.repeat(tableSize);
  const borderBottom = '*'.repeat(tableSize);

  const header =
    borderTop +
    '\n' +
    `| ${'Gift'.padEnd(nameColumnSize)} | ` +
    `${'Quantity'.padEnd(quantityColumnSize)} |\n` +
    `| ${'-'.repeat(nameColumnSize)} | ${'-'.repeat(quantityColumnSize)} |\n`;

  const body = gifts.map(({ name, quantity }) => {
    return `| ${name.padEnd(nameColumnSize)} | ${(quantity + '').padEnd(
      quantityColumnSize
    )} |\n`;
  });

  return header + body.join('') + borderBottom;
}

console.log(
  printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ])
);

console.log(
  printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
  ])
);