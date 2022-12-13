function checkPart(part) {
  if (part === [...part].reverse().join('')) return true;

  for (let i = 0; i < part.length; i++) {
    const aux = part.substring(0, i) + part.substring(i + 1);
    if (aux === [...aux].reverse().join('')) {
      return true;
    }
  }

  return false;
}