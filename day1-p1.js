document.body.innerText.trim().split("\n").map(row => row.trim().split(/\s+/).map(Number)) // parse input
  .reduce((acc, p) => p.map((n, i) => (acc[i] ?? []).concat(n)), []) // transpose
  .map(l => l.sort()) // sort
  .reduce((acc, p) => p.map((n, i) => (acc[i] ?? []).concat(n)), []) // transpose
  .map(p => Math.abs(p[0]-p[1])) // calculate diff
  .reduce((x,y) => x+y, 0); // sum

// or 

document.body.innerText.trim().split("\n").map(row => row.trim().split(/\s+/).map(Number)) // parse input
  .transpose()
  .map(l => l.sort()) // sort
  .transpose()
  .map(p => Math.abs(p[0]-p[1])) // calculate diff
  .sum();
