const phonePrefixes = [
  '139',
  '138',
  '137',
  '136',
  '135',
  '134',
  '159',
  '158',
  '157',
  '152',
  '151',
  '150',
  '188',
  '187',
  '184',
  '183',
  '182',
  '178',
  '172',
  '198',
  '195',
  '147',
  '186',
  '185',
  '155',
  '156',
  '130',
  '131',
  '132',
  '176',
  '175',
  '166',
  '145',
  '133',
  '153',
  '189',
  '181',
  '180',
  '177',
  '173',
  '199',
  '191',
];

const phonefunc: PatternFunc = (input) => {
  const mat = /^(\d{3})(\d{8})$/.exec(input);
  if (
    mat &&
    mat[0] &&
    phonePrefixes.includes(mat[1]) &&
    Number(mat[2]) % 11111111 === 0
  ) {
    return ['豹子手机号'];
  }

  return [];
};
