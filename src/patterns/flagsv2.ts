// @see https://stackoverflow.com/questions/53360006/detect-with-regex-if-emoji-is-country-flag
const CountryEmojiRanges = [
  '\\u{1F1E6}[\\u{1F1E9}-\\u{1F1EC}\\u{1F1EE}\\u{1F1F1}\\u{1F1F2}\\u{1F1F4}\\u{1F1F6}-\\u{1F1FA}\\u{1F1FC}\\u{1F1FD}\\u{1F1FF}]',
  '\\u{1F1E7}[\\u{1F1E6}\\u{1F1E7}\\u{1F1E9}-\\u{1F1EF}\\u{1F1F1}-\\u{1F1F4}\\u{1F1F6}-\\u{1F1F9}\\u{1F1FB}\\u{1F1FC}\\u{1F1FE}\\u{1F1FF}]',
  '\\u{1F1E8}[\\u{1F1E6}\\u{1F1E8}\\u{1F1E9}\\u{1F1EB}-\\u{1F1EE}\\u{1F1F0}-\\u{1F1F4}\\u{1F1F7}\\u{1F1FA}-\\u{1F1FF}]',
  '\\u{1F1E9}[\\u{1F1EA}\\u{1F1EF}\\u{1F1F0}\\u{1F1F2}\\u{1F1F4}\\u{1F1FF}]',
  '\\u{1F1EA}[\\u{1F1E8}\\u{1F1EA}\\u{1F1EC}\\u{1F1ED}\\u{1F1F7}-\\u{1F1F9}]',
  '\\u{1F1EB}[\\u{1F1EE}\\u{1F1EF}\\u{1F1F0}\\u{1F1F2}\\u{1F1F4}\\u{1F1F7}]',
  '\\u{1F1EC}[\\u{1F1E6}\\u{1F1E7}\\u{1F1E9}-\\u{1F1EE}\\u{1F1F1}-\\u{1F1F3}\\u{1F1F5}-\\u{1F1FA}\\u{1F1FC}\\u{1F1FE}]',
  '\\u{1F1ED}[\\u{1F1F0}\\u{1F1F2}\\u{1F1F3}\\u{1F1F7}\\u{1F1F9}\\u{1F1FA}]',
  '\\u{1F1EE}[\\u{1F1E9}-\\u{1F1F4}\\u{1F1F6}-\\u{1F1F9}]',
  '\\u{1F1EF}[\\u{1F1EA}\\u{1F1F2}\\u{1F1F4}\\u{1F1F5}]',
  '\\u{1F1F0}[\\u{1F1EA}\\u{1F1EC}-\\u{1F1EE}\\u{1F1F2}\\u{1F1F3}\\u{1F1F5}\\u{1F1F7}\\u{1F1FC}\\u{1F1FE}\\u{1F1FF}]',
  '\\u{1F1F1}[\\u{1F1E6}-\\u{1F1E8}\\u{1F1EE}\\u{1F1F0}\\u{1F1F8}-\\u{1F1FB}\\u{1F1FE}]',
  '\\u{1F1F2}[\\u{1F1E6}\\u{1F1E8}-\\u{1F1ED}\\u{1F1F0}-\\u{1F1FF}]',
  '\\u{1F1F3}[\\u{1F1E6}\\u{1F1E8}\\u{1F1EA}-\\u{1F1EC}\\u{1F1EE}\\u{1F1F1}\\u{1F1F4}\\u{1F1F5}\\u{1F1F7}\\u{1F1FA}\\u{1F1FF}]',
  '\\u{1F1F4}\\u{1F1F2}',
  '\\u{1F1F5}[\\u{1F1E6}\\u{1F1EA}-\\u{1F1ED}\\u{1F1F0}-\\u{1F1F3}\\u{1F1F7}-\\u{1F1F9}\\u{1F1FC}\\u{1F1FE}]',
  '\\u{1F1F6}\\u{1F1E6}',
  '\\u{1F1F7}[\\u{1F1EA}\\u{1F1F4}\\u{1F1F8}\\u{1F1FA}\\u{1F1FC}]',
  '\\u{1F1F8}[\\u{1F1E6}-\\u{1F1EA}\\u{1F1EC}-\\u{1F1F4}\\u{1F1F7}-\\u{1F1F9}\\u{1F1FB}\\u{1F1FD}-\\u{1F1FF}]',
  '\\u{1F1F9}[\\u{1F1E8}\\u{1F1E9}\\u{1F1EB}-\\u{1F1ED}\\u{1F1EF}-\\u{1F1F4}\\u{1F1F7}\\u{1F1F9}\\u{1F1FB}\\u{1F1FC}\\u{1F1FF}]',
  '\\u{1F1FA}[\\u{1F1E6}\\u{1F1EC}\\u{1F1F2}\\u{1F1F8}\\u{1F1FE}\\u{1F1FF}]',
  '\\u{1F1FB}[\\u{1F1E6}\\u{1F1E8}\\u{1F1EA}\\u{1F1EC}\\u{1F1EE}\\u{1F1F3}\\u{1F1FA}]',
  '\\u{1F1FC}[\\u{1F1EB}\\u{1F1F8}]',
  '\\u{1F1FE}[\\u{1F1EA}\\u{1F1F9}]',
  '\\u{1F1FF}[\\u{1F1E6}\\u{1F1F2}\\u{1F1FC}]',
];

const flagReg = new RegExp(`^(${CountryEmojiRanges.join('|')})\\d{3}$`, 'u');

export const flagfunc: PatternFunc = (input) => {
  if (flagReg.test(input)) {
    return ['Flag999'];
  }
  return [];
};
