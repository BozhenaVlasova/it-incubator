function findLongestWordLength(str) {
  let arr = str.split(" ");
  let number_arr = [];
  for (let i = 0; i < arr.length; i++) {
    number_arr.push(arr[i].length);
  }
  return Math.max.apply(null, number_arr);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");