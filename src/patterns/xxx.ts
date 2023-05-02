const xxxptns = [
  '0XXX',
  '00XX',
  '0X0X',
  '0XX0',
  'XX00',
  'X0X0',
  'XX88',
  'XX69',
  'XX000',
  '00XX0',
  '000XX',
  'XX420',
  'XXX69',
  '69XXX',
  '00XXX',
  'XXX00',
  '00XX00',
  'XXX420',
  '420XXX',
  'XXX000',
  '000XXX',
  'XXXX69',
];

export const xxxfunc: PatternFunc = (input) => {
  const output: string[] = [];
  xxxptns.forEach((ptn) => {
    const regptn = `^${ptn.replaceAll('X', '\\d')}$`;
    if (new RegExp(regptn).test(input)) {
      output.push(ptn);
    }
  });

  return output;
};
