// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's 
// decimal digits.

function sumDigits(number) {
    let num = Math.abs(number)
    let arr = [...num+''].map(Number)
    let sum = 0
    for (i=0; i< arr.length; i++) {
      sum += arr[i]
    }
    return sum
  }  