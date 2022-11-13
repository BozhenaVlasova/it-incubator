// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input == null || input == [] || input == 0) return [];
    let positive = input.filter((item) => item > 0).length;
    let negative = input.filter((item) => item < 0);
    let sum = negative.reduce((accum, item) => accum + item, 0);
    return [positive, sum];
  }