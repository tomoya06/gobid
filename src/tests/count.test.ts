import { detectPatterns } from '../index';
import { TotalCnt } from './cnt';

describe('count all cnt', () => {
  test('all', () => {
    const validlens = [3, 4, 5, 6, 7, 8, 11];
    const cnt: { [key: string]: number } = {};
    for (let len = 3; len <= 11; len++) {
      if (!validlens.includes(len)) {
        continue;
      }
      for (let num = 0; num < 10 ** len; num++) {
        const numstr = `${num}`.padStart(len, '0');
        const output = detectPatterns(`${numstr}.bit`);
        output.forEach((pt) => {
          cnt[pt] = (cnt[pt] || 0) + 1;
        });
      }
    }

    expect(cnt).toStrictEqual(TotalCnt);
  });
});
