const regs: [RegExp, string][] = [
  [/^\d{3}$/, '999'],
  [/^\d{4}$/, '10K'],
  [/^\d{5}$/, '100K'],
];

const regfunc: PatternFunc = (input) => {
  const output: string[] = [];

  regs.forEach((rg) => {
    if (rg[0].test(input)) {
      output.push(rg[1]);
    }
  });

  return output;
};

module.exports = abcfunc;
