const jpnums = /^[零壱弐参肆伍陸漆捌玖]{3}$/;
const cnnums = /^[零一二三四五六七八九]{3}$/;
const arnums = /^[٠١٢٣٤٥٦٧٨٩]{3}$/;
const arnums10k = /^[٠١٢٣٤٥٦٧٨٩]{4}$/;

const langPtns: [RegExp, string][] = [
  [cnnums, '999CN'],
  [jpnums, '999JP'],
  [arnums, 'Arabic999'],
  [arnums10k, 'Arabic10K'],
];

export const langfunc: PatternFunc = (input) => {
  const output: string[] = [];
  for (let i = 0; i < langPtns.length; i++) {
    if (langPtns[i][0].test(input)) {
      output.push(langPtns[i][1]);
    }
  }

  return output;
};
