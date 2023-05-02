const stockptns = [/^000\d\d\d$/, /^60[1234]\d\d\d$/];

const stockfunc: PatternFunc = (input) => {
  if (stockptns.some((ptn) => ptn.test(input))) {
    return ['A股代码'];
  }
  return [];
};

module.exports = stockfunc;
