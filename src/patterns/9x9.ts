const nynyfunc: PatternFunc = (input) => {
  const reg = /^(\d)(\d)(\d\d)$/;
  const mat = reg.exec(input);
  if (
    mat &&
    mat[0] &&
    Number(mat[0]) <= Number(mat[1]) &&
    Number(mat[0]) * Number(mat[1]) === Number(mat[2])
  ) {
    return ['99乘法表'];
  }

  return [];
};
