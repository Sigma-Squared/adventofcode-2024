Array.prototype.count = function() {
  return this.reduce((acc, n) => (acc[n]=(acc[n] ?? 0) + 1, acc), {});
}
