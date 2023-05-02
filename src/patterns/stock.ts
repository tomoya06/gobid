const stockptns = [/^000\d\d\d$/, /^60[0123]\d\d\d$/];

export const stockfunc: PatternFunc = (input) => {
  if (stockptns.some((ptn) => ptn.test(input))) {
    return ['AShareCode'];
  }
  return [];
};
