// Take an array and remove every second element from the array. Always keep the first element and 
// start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr){
    let res = arr.filter((val, ind) => ind%2 == 0);
    return res;
  }

