document.body.innerText.matchAll(/(?<op>mul)\((?<x>\d+),(?<y>\d+)\)|(?<op>do)\(\)|(?<op>don't)\(\)/g)
  .reduce((state, {groups: g}) => ({
    "mul": (s) => ({...s, t: s.t+s.do*g.x*g.y}), 
    "do": (s) => ({...s, do: true}), 
    "don't": (s) => ({...s, do: false})
  }[g.op](state)), {do: true, t: 0}).t
