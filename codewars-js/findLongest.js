// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let max = 0;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      let num = String(array[i]).length;
      if (num > max) {
        max = num;
        index = i;
      }
    }
    return array[index];
  }