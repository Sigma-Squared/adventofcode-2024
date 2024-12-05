document.body.innerText.trim().split("\n").map(s => s.trim().split(" ").map(Number)) // parse input
  .map(a => a.map((e, i) => e-a[i-1]).slice(1)) // convert to array of diffs
  .map(a => (a.every(e => e>0) || a.every(e => e<0)) && a.every(e => Math.abs(e)>=1 && Math.abs(e)<=3)) // check monotonicity and difference magnitude
  .filter(e => e).length // count matches
