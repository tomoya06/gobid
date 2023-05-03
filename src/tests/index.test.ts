import { detectPatterns } from '../index';

const nativecase = (input: string, output: string[]) => {
  test(`${input} -> "${output}`, () => {
    expect(detectPatterns(input)).toStrictEqual(new Set(output));
  });
};

const fastcase = (input: string, output: string[]) => {
  nativecase(`${input}.bit`, output);
};

const fastlist = (inputs: string, output: string[]) => {
  inputs.split(' ').forEach((c) => fastcase(c, output));
};

describe('invalid name', () => {
  nativecase(undefined as unknown as string, []);
  nativecase(null as unknown as string, []);
  nativecase([] as unknown as string, []);
  nativecase({} as unknown as string, []);
  nativecase('test', []);
  nativecase('notbid', []);
  nativecase('not.bid', []);
  nativecase('not123.bid', []);
});

describe('official cases', () => {
  fastlist('333', ['AAA', '999']);
  fastlist('2112', ['ABBA', '10K']);
  fastlist('45555', ['ABBBB', '100K']);
  fastlist('888000', ['AAABBB', 'XXX000']);
  fastlist('0098', ['10K', 'AABC', '0XXX', '00XX']);
  fastlist('0x9832', ['0x10K']);
  fastlist('0311', ['ABCC', '0XXX', '10K', 'MMDD']);
});

describe('straights', () => {
  fastlist('1234 2345 3456 4567 5678 6789', ['ABCD', '10K']);
  fastcase('0123', ['ABCD', '10K', 'MMDD', '0XXX']);
  fastlist('01234 12345 23456 34567 45678 56789', ['ABCDE', '100K', 'XABCD']);
  fastlist(
    '02345 03456 04567 05678 06789 10123 11234 13456 14567 15678 16789 20123 21234 22345 24567 25678 26789 30123 31234 32345 33456 35678 36789 40123 41234 42345 43456 44567 46789 50123 51234 52345 53456 54567 55678 60123 61234 62345 63456 64567 65678 66789 70123 71234 72345 73456 74567 75678 76789 80123 81234 82345 83456 84567 85678 86789 90123 91234 92345 93456 94567 95678 96789',
    ['XABCD', '100K']
  );
});

describe('langs', () => {
  fastlist(
    '٠٧٧ ٠٧٨ ٠٧٩ ٠٨٠ ٠٨١ ٠٨٢ ٠٨٣ ٠٨٤ ٠٨٥ ٠٨٦ ٠٨٧ ٠٨٨ ٠٨٩ ٠٩٠ ٠٩١ ٠٩٢ ٠٩٣ ٠٩٤ ٠٩٥ ٠٩٦ ٠٩٧',
    ['Arabic999']
  );
  fastlist('٠٧٧٧ ٠٧٩٧', ['Arabic10K']);
  fastlist(
    '零零壱 零零弐 零零参 零零肆 零零伍 零零陸 零零漆 零零捌 零零玖 零壱零 零壱壱 零壱弐 零壱参 零壱肆 零壱伍 零壱陸 零壱漆 零壱捌 零壱玖 零弐零 零弐壱 零弐弐 零弐参 零弐肆 零弐伍',
    ['999JP']
  );
  fastlist(
    '零零一 零零二 零零三 零零四 零零五 零零六 零零七 零零八 零零九 零一零 零一一 零一二 零一三 零一四 零一五 零一六 零一七 零一八 零一九 零二零 零二一 零二二 零二三 零二四',
    ['999CN']
  );
  fastcase('零零零', ['999JP', '999CN']);
  fastcase('零零壱壱 零壱 零四 四', []);
  fastlist('٠٨٠٠٨٠ ٠٨', []);
});

describe('flags', () => {
  fastlist('🇨🇳123 🇺🇸121 🇺🇸122 🇦🇪202 🇦🇪203', ['Flag999']);
  fastlist('🇨🇳8144', []);
  fastlist('🔥144 🏎000', []);
});

describe('9x9', () => {
  fastlist('1303 8972', ['TimesTable', '10K']);
});

describe('360deg', () => {
  fastlist('110° 054°', ['360Degree']);
  fastlist('370° 000°', []);
});

describe('date', () => {
  fastlist('1204', ['MMDD', '10K']);
  fastlist('0131', ['MMDD', '10K', '0XXX']);
  fastlist('1294 9231', ['10K']);
  fastlist('0230', ['10K', '0XX0', '0XXX']);
});

describe('phone', () => {
  fastlist('18111111111 13022222222 13266666666', ['XXXAAAAAAAA']);
  fastlist('10911111111 13022322222 13266667666', []);
});

describe('reg', () => {
  fastlist('4860000 9760000 9580000', ['WanClub']);
  fastlist('00000', [
    '100K',
    'XXX00',
    '00XXX',
    '00XX0',
    'XX000',
    '000XX',
    'AAAAA',
  ]);
  fastlist('0000000', []);
  fastlist('48600000 48600001', []);
  fastlist('0x0 0x1 0x2 0x3 0x4 0x5 0x6 0x7 0x8 0x9', ['0x9', '1Hex']);
  fastlist('0xa 0xb 0xc 0xd 0xe 0xf', ['1Hex']);
  fastlist(
    '0x51 0x52 0x53 0x54 0x55 0x56 0x57 0x58 0x59 0x60 0x61 0x62 0x63 0x64 0x65 0x66 0x67 0x68 0x69 0x70 0x71 0x72 0x73 0x74 0x75 0x76 0x77 0x78 0x79 0x80 0x81 0x82 0x83 0x84 0x85 0x86 0x87 0x88 0x89 0x90 0x91 0x92 0x93 0x94 0x95 0x96 0x97 0x98 0x99',
    ['0x99', '2Hex']
  );
  fastlist('0xff9 0xffa 0xffb 0xffc 0xffd 0xffe 0xfff', ['3Hex']);
  fastlist('0x020 0x021 0x022', ['0x999', '3Hex']);
  fastlist('11112222 44441111', ['AAAABBBB']);
  fastlist('11122222 44444111', []);
});

describe('Stock', () => {
  fastlist('000006 000007', ['AShareCode', '000XXX', 'AAAAAB']);
  fastlist('000420', ['AShareCode', '000XXX', 'XXX420']);
  fastlist('000169 000269', ['AShareCode', '000XXX', 'XXXX69']);
  fastlist('600169', ['AShareCode', 'XXXX69']);
  fastlist('000996 000997 000998', ['AShareCode', '000XXX']);
  fastlist('600001 600002 600003 600004 600005', ['AShareCode', 'ABBBBC']);
  fastlist('610001', []);
  fastlist('602002', []);
});

describe('xxx', () => {
  fastlist('0102 0204', ['0X0X', 'MMDD', '10K', '0XXX']);
});

describe('kings of number', () => {
  fastlist('0000', [
    '00XX',
    '0X0X',
    '0XX0',
    '0XXX',
    '10K',
    'AAAA',
    'X0X0',
    'XX00',
  ]);
});
