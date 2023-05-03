export const wanfunc: PatternFunc = (input) => {
  const mat = /^(\d{1,3})0000$/.exec(input);
  if (mat && mat[0] && Number(mat[1]) >= 1) {
    return ['WanClub'];
  }
  return [];
};
