import { detectPatterns } from '../index';
import { Len3Count, Len4Count, Len5Count, Len6Count, Len7Count } from './cnt';

describe('count all cnt', () => {
  const validlens = [3, 4, 5, 6, 7];
  const validCnts: { [key: number]: any } = {
    [3]: Len3Count,
    [4]: Len4Count,
    [5]: Len5Count,
    [6]: Len6Count,
    [7]: Len7Count,
  };
  validlens.map((len) => {
    test.concurrent(`len=${len}`, () => {
      const cnt: { [key: string]: number } = {};
      for (let num = 0; num < 10 ** len; num++) {
        const numstr = `${num}`.padStart(len, '0');
        const output = detectPatterns(`${numstr}.bit`);
        output.forEach((pt) => {
          cnt[pt] = (cnt[pt] || 0) + 1;
        });
      }
      expect(cnt).toStrictEqual(validCnts[len]);
    });
  });
});
