function steamrollArray(arr) {
  let res = [].concat(...arr);
  return res.some(Array.isArray) ? steamrollArray(res) : res;
}

steamrollArray([1, [2], [3, [[4]]]]);