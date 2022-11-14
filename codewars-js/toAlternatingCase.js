// Define String.prototype.toAlternatingCase (or a similar function/method such as 
// to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution 
// for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function() {
    let res = '';
    for (let i = 0; i < this.length; i++) {
        res += this[i] == this[i].toLowerCase() ? this[i].toUpperCase() : this[i].toLowerCase();
    }
    return res;
  }