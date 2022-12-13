function getCompleted(part, total) {
  const toSeconds = ([h, m, s]) => {
    return h * 3600 + m * 60 + s * 1;
  };

  const t1 = toSeconds(part.split(':'));
  const t2 = toSeconds(total.split(':'));

  let a = t1;
  let b = t2;

  while (b) {
    let aux = b;
    b = a % b;
    a = aux;
  }

  return `${t1 / a}/${t2 / a}`;
}

console.log(getCompleted('01:00:00', '03:00:00')); // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')); // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')); // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')); // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')); // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')); // '3/5