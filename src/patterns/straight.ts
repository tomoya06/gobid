function isStraight(input: string, lo: number, hi: number): boolean {
  for (let i = lo, cnt = 0; i <= hi; i++, cnt++) {
    if (input.charCodeAt(i) - input.charCodeAt(lo) !== cnt) {
      return false;
    }
  }
  return true;
}

const strptns: [RegExp, number, number, string][] = [
  [/^\d{3}$/, 0, 2, 'ABC'],
  [/^\d{4}$/, 0, 3, 'ABCD'],
  [/^\d{5}$/, 0, 4, 'ABCDE'],
  [/^\d{5}$/, 1, 4, 'XABCD'],
];

export const straightfunc: PatternFunc = (input: string) => {
  const output: string[] = [];
  strptns.forEach((ptn) => {
    if (ptn[0].test(input) && isStraight(input, ptn[1], ptn[2])) {
      output.push(ptn[3]);
    }
  });

  return output;
};
