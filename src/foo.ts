export const sum = (...a: number[]) => {
  return a.reduce((acc, val) => acc + val, 0);
};
