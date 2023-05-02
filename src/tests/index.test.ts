import { detectPatterns } from '../index';

const fastcase = (input: string, output: string[]) => {
  test(`${input}.bit -> "${output}"`, () => {
    expect(detectPatterns(`${input}.bit`)).toStrictEqual(new Set(output));
  });
};

describe('invalid name', () => {
  fastcase('test', []);
});

describe('official cases', () => {
  test('invalid names', () => {
    expect(detectPatterns('notabit')).toStrictEqual(new Set());
    expect(detectPatterns('not.bit')).toStrictEqual(new Set());
  });

  test('official cases', () => {
    expect(detectPatterns('333.bit')).toStrictEqual(new Set(['AAA', '999']));
    expect(detectPatterns('2112.bit')).toStrictEqual(new Set(['ABBA', '10K']));
    expect(detectPatterns('45555.bit')).toStrictEqual(
      new Set(['ABBBB', '100K'])
    );
    expect(detectPatterns('888000.bit')).toStrictEqual(
      new Set(['AAABBB', 'XXX000'])
    );
    expect(detectPatterns('0098.bit')).toStrictEqual(
      new Set(['10K', 'AABC', '0XXX', '00XX'])
    );
    expect(detectPatterns('0x9832.bit')).toStrictEqual(new Set(['0x10K']));
    expect(detectPatterns('0311.bit')).toStrictEqual(
      new Set(['ABCC', '0XXX', '10K', 'MMDD'])
    );
  });
});

describe('straights', () => {
  '1234 2345 3456 4567 5678 6789'
    .split(' ')
    .forEach((c) => fastcase(c, ['ABCD', '10K']));
  fastcase('0123', ['ABCD', '10K', 'MMDD', '0XXX']);
  '01234 12345 23456 34567 45678 56789'
    .split(' ')
    .forEach((c) => fastcase(c, ['ABCDE', '100K', 'XABCD']));
  '02345 03456 04567 05678 06789 10123 11234 13456 14567 15678 16789 20123 21234 22345 24567 25678 26789 30123 31234 32345 33456 35678 36789 40123 41234 42345 43456 44567 46789 50123 51234 52345 53456 54567 55678 60123 61234 62345 63456 64567 65678 66789 70123 71234 72345 73456 74567 75678 76789 80123 81234 82345 83456 84567 85678 86789 90123 91234 92345 93456 94567 95678 96789'
    .split(' ')
    .forEach((c) => fastcase(c, ['XABCD', '100K']));
});

describe('langs', () => {
  '٠٧٧ ٠٧٨ ٠٧٩ ٠٨٠ ٠٨١ ٠٨٢ ٠٨٣ ٠٨٤ ٠٨٥ ٠٨٦ ٠٨٧ ٠٨٨ ٠٨٩ ٠٩٠ ٠٩١ ٠٩٢ ٠٩٣ ٠٩٤ ٠٩٥ ٠٩٦ ٠٩٧'
    .split(' ')
    .forEach((c) => fastcase(c, ['Arabic999']));
  '零零壱 零零弐 零零参 零零肆 零零伍 零零陸 零零漆 零零捌 零零玖 零壱零 零壱壱 零壱弐 零壱参 零壱肆 零壱伍 零壱陸 零壱漆 零壱捌 零壱玖 零弐零 零弐壱 零弐弐 零弐参 零弐肆 零弐伍'
    .split(' ')
    .forEach((c) => fastcase(c, ['999JP']));
  '零零一 零零二 零零三 零零四 零零五 零零六 零零七 零零八 零零九 零一零 零一一 零一二 零一三 零一四 零一五 零一六 零一七 零一八 零一九 零二零 零二一 零二二 零二三 零二四'
    .split(' ')
    .forEach((c) => fastcase(c, ['999CN']));
  fastcase('零零零', ['999JP', '999CN']);
  fastcase('零零壱壱', []);
  fastcase('٠٨٠٠٨٠', []);
});

// FIXME: ??
describe('flags', () => {
  fastcase('🇨🇳123', ['Flag999']);
  fastcase('🇨🇳8144', []);
});

describe('9x9', () => {
  '1303 8972'.split(' ').forEach((c) => fastcase(c, ['TimesTable', '10K']));
});

describe('360deg', () => {
  '110° 054°'.split(' ').forEach((c) => fastcase(c, ['360Degree']));
  '370°'.split(' ').forEach((c) => fastcase(c, []));
});
