Array.from(document.body.innerText.matchAll(/mul\((\d+),(\d+)\)/g))
  .map(([m, x, y]) => +x*+y)
  .sum();
