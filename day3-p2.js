document.body.innerText.matchAll(/(?<op>mul)\((?<x>\d+),(?<y>\d+)\)|(?<op>do)\(\)|(?<op>don't)\(\)/g)
  .reduce((o, {groups: g}) => ({
    "mul": () => ({...o, t: o.t+o.do*g.x*g.y}), 
    "do": () => ({...o, do: true}), 
    "don't": () => ({...o, do: false})
  }[g.op]()), {do: true, t: 0}).t
