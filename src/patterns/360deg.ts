const degptn = /^(\d{3})°$/;

export const degfunc: PatternFunc = (input) => {
  const mat = degptn.exec(input);
  if (mat && mat[0] && Number(mat[1]) <= 360) {
    return ['360Degree'];
  }

  return [];
};
