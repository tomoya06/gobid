import { detectPatterns } from '../index';

test('invalid name', () => {
  expect(detectPatterns('notabit')).toStrictEqual(new Set());
  expect(detectPatterns('not.bit')).toStrictEqual(new Set());
});

test('official cases', () => {
  expect(detectPatterns('333.bit')).toStrictEqual(new Set(['AAA', '999']));
  expect(detectPatterns('2112.bit')).toStrictEqual(new Set(['ABBA', '10K']));
  expect(detectPatterns('45555.bit')).toStrictEqual(new Set(['ABBBB', '100K']));
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
