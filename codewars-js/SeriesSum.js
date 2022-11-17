// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

function SeriesSum(n)
{
  let sum = 1;
  let a = 4;
  let i = 1;
  if (n == 0) {
    return n.toFixed(2).toString();
  }
  else {
    while (i < n) {
      sum += (1/a);
      a += 3;
      i++;
    }
    return sum.toFixed(2).toString();
  }
}