document.body.innerText.trim().split("\n").map(s => s.trim().split(" ").map(Number)) // parse input
  .map(row => 
    row.map((_, i) => row.slice(0, i).concat(row.slice(i + 1))) // generate subarrays
    .map(sub => sub.map((e, i) => e-sub[i-1]).slice(1)) // convert to array of diffs
    .some(sub => (sub.every(e => e>0) || sub.every(e => e<0)) && sub.every(e => Math.abs(e)>=1 && Math.abs(e)<=3)) // check monotonicity and difference magnitude
  ) 
  .filter(e => e).length // count matches
