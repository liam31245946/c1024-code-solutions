const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((element) => console.log('in order: ', element));

values.forEach((_, index, array) =>
  console.log('reverse order: ', array[array.length - 1 - index])
);
