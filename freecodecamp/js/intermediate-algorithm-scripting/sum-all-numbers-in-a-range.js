function sumAll(arr) {
  arr.sort((a,b) => a-b);
  let new_arr = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    new_arr.push(i);
  }
  return new_arr.reduce((accum, item) => accum + item);
}

sumAll([1, 4]);