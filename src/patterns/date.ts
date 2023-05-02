const months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const datefunc: PatternFunc = (input) => {
  const reg = /^(\d\d)(\d\d)$/;
  const mat = reg.exec(input);
  if (
    mat &&
    mat[0] &&
    months[Number(mat[1])] >= Number(mat[2]) &&
    Number(mat[2]) > 0
  ) {
    return ['MMDD'];
  }
  return [];
};
