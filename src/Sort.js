export const getSortedArray = (array) => {
  array?.sort((a, b) => {
    return a?.sort - b?.sort;
  });
};
