function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => (a.l + a.w + a.h) - (b.l + b.w + b.h))
    .every((box, i) => {
      if (i === 0) return true;
      return
        box.l > boxes[i - 1].l &&
        box.w > boxes[i - 1].w &&
        box.h > boxes[i - 1].h;
    })
}


const boxes1 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
];
console.log(fitsInOneBox(boxes1)); // false

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
];
console.log(fitsInOneBox(boxes2)); // true
