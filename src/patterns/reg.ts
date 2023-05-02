const regs: [RegExp, string][] = [
  [/^\d{3}$/, '999'],
  [/^\d{4}$/, '10K'],
  [/^\d{5}$/, '100K'],
  [/^0x\d{1}$/, '0x9'],
  [/^0x\d{2}$/, '0x99'],
  [/^0x\d{3}$/, '0x999'],
  [/^0x\d{4}$/, '0x10k'],
  [/^\d{1,3}0000$/, 'WanClub'],
  [/^0x[0-9a-f]{1}$/, '1Hex'],
  [/^0x[0-9a-f]{2}$/, '2Hex'],
  [/^0x[0-9a-f]{3}$/, '3Hex'],
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
