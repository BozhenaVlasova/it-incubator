function titleCase(str) {
  let arr = str.split(" ");
  let res = [];
  for (let i in arr) {
    res[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return res.join(" ");
}

titleCase("I'm a little tea pot");