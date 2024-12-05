Array.prototype.count = function() {
  return this.reduce((acc, n) => (acc[n]=(acc[n] ?? 0) + 1, acc), {});
};
Array.prototype.sum = function () {
  return this.reduce((x, y) => x + y, 0);
};
Array.prototype.transpose = function() {
  return this.reduce((acc, row) => row.map((n, i) => (acc[i] ?? []).concat(n)), []);
};
