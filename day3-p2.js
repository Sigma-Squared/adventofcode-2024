document.body.innerText.matchAll(/(?<op>mul)\((?<x>\d+),(?<y>\d+)\)|(?<op>do)\(\)|(?<op>don't)\(\)/g)
  .reduce((acc, {groups: g}) => ({
    "mul": {...acc, t: acc.t+acc.do*(g.x*g.y)}, 
    "do": {...acc, do: true}, 
    "don't": {...acc, do: false}
  }[g.op]), {do: true, t: 0}).t
