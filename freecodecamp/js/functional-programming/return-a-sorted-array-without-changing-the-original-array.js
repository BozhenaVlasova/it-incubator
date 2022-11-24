const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let res = arr.slice().sort((a,b) => a-b);
  return res;
  // Only change code above this line
}

nonMutatingSort(globalArray);