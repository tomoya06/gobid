function baseReg(name: string): string {
  return /^(.+)\.bit$/.exec(name)?.[1] || '';
}

const patterns = ['abc'];

function detectPatterns(name: string): Set<string> {
  const output = new Set<string>();
  const input = baseReg(name);

  if (!input) {
    return output;
  }

  if (/^\d+$/.test(input)) {
    patterns.forEach((pt) => {
      const ptfn = require(`./decimals/${pt}`) as PatternFunc;
      const res = ptfn(input);
      res.forEach((r) => output.add(r));
    });
  }

  return output;
}
