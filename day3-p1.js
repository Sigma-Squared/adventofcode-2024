document.body.innerText.matchAll(/mul\((\d+),(\d+)\)/g)
  .map(([_, x, y]) => x*y)
  .sum();
