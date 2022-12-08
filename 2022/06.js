function createCube(size) {
  let top = '';
  let bottom = '';
  for (let i = 0; i < size; i++) {
    top += ' '.repeat(size - i - 1) + '/\\'.repeat(i + 1) + '_\\'.repeat(size) + '\n';
    bottom += ' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size) + '\n';
  }
  return top + bottom.slice(0, -1);
}

const cube = createCube(3);
console.log(cube);