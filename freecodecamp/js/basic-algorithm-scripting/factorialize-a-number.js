function factorialize(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    if (i == 0)
      return 1;
    else
    res *= i;
  }
  return res;
}

factorialize(5);