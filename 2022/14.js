function getOptimalPath(path) {
  return path
    .reduceRight((acc, curr) => curr
      .map((num, i) => num + Math.min(acc[i], acc[i + 1]))
    )[0];
}