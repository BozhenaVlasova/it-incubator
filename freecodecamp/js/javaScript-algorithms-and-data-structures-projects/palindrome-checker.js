function palindrome(str) {
  let p = str.toLowerCase().match(/[A-Za-z0-9]/gi);
  return p.join("") == p.reverse().join("");
}

palindrome("eye");