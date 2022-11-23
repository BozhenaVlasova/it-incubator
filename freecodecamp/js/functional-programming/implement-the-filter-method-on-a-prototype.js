Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 != 0) newArray.push(this[i]);
  }
  // Only change code above this line
  return newArray;
};