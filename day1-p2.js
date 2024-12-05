document.body.innerText.trim().split("\n").map(row => row.trim().split(/\s+/).map(Number)) // parse input
  .transpose()
  .map((l, i) => i == 0 ? l : l.reduce((acc, n) => (acc[n] = (acc[n] ?? 0)+1, acc), {})) // convert 2nd array to frequency map
  .map((arr, i, big) => i == 0 ? arr : big[0].map(n => arr[n] ?? 0)) // convert 2nd array to freq count from 1st array
  .transpose()
  .map(([x, m]) => x*m)
  .sum()
