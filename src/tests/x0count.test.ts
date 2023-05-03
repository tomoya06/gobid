import { detectPatterns } from '../index';
import { X0TotalCount } from './cnt';

test('0xXXX', () => {
  const validlens = [1, 2, 3, 4];
  const cnt: { [key: string]: number } = {};
  for (let len = 1; len <= 4; len++) {
    if (!validlens.includes(len)) {
      continue;
    }
    for (let num = 0; num < 16 ** len; num++) {
      const numstr = `${num.toString(16)}`.padStart(len, '0');
      const output = detectPatterns(`0x${numstr}.bit`);
      output.forEach((pt) => {
        cnt[pt] = (cnt[pt] || 0) + 1;
      });
    }
  }

  expect(cnt).toStrictEqual(X0TotalCount);
});
