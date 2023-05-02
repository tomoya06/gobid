const flags = [
  '🇺🇸',
  '🇨🇳',
  '🇺🇳',
  '🇦🇪',
  '🇨🇦',
  '🇰🇷',
  '🇫🇷',
  '🇯🇵',
  '🇧🇷',
  '🇩🇪',
  '🇪🇸',
  '🇷🇺',
  '🇬🇧',
  '🇪🇺',
  '🇻🇳',
  '🇺🇦',
  '🇦🇺',
  '🇸🇦',
  '🇨🇭',
  '🇮🇳',
  '🇮🇱',
  '🇹🇭',
];

const flagReg = new RegExp(`/^(${flags.join('|')})(\d{3})$/`);

export const flagfunc: PatternFunc = (input) => {
  if (flagReg.test(input)) {
    return ['Flags999'];
  }
  return [];
};
