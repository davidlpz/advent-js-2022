function decorateTree(base) {
  const decorations = {
    'BB': 'B',
    'PP': 'P',
    'RR': 'R',
    'BP': 'R',
    'BR': 'P',
    'PB': 'R',
    'PR': 'B',
    'RB': 'P',
    'RP': 'B'
  }

  let response = [base];
  let arr = base.split(' ');
  while (arr.length > 1) {
    arr = arr.map((elem, i) => {
      return decorations[arr[i]+arr[i+1]];
    });
    arr.splice(-1);
    response.unshift(arr.join(' '));
  }
  return response;
}


console.log(decorateTree('B P R P'));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree('B B')); // ['B', 'B B']