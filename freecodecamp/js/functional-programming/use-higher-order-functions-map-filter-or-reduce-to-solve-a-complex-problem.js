const squareList = arr => {
  // Only change code below this line
  return arr.reduce((accum, item) => {
    if (item > 0 && item % 1 === 0) {
      accum.push(item**2);
    }
    return accum;
    }, []);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);