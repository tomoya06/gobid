const jpnums = /^[零壱弐参肆伍陸漆捌玖]{3}$/;
const cnnums = /^[零一二三四五六七八九]{3}$/;
const arnums = /^[٠١٢٣٤٥٦٧٨٩]{3}$/;
const arnums10k = /^[٠١٢٣٤٥٦٧٨٩]{4}$/;

const langPtns: [RegExp, string][] = [
  [jpnums, '日语999'],
  [cnnums, '中文999'],
  [arnums, '阿语999'],
  [arnums10k, '阿语10K'],
];

export const langfunc: PatternFunc = (input) => {
  for (let i = 0; i < langPtns.length; i++) {
    if (langPtns[i][0].test(input)) {
      return [langPtns[i][1]];
    }
  }

  return [];
};
