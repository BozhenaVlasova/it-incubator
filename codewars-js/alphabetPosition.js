// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
    let str = text.match(/[a-z]/gi)?.map(x=>x.toLowerCase());
    if (!str) return '';
    let res = [];
    for (let i = 0; i < str.length; i++) {
        res.push(alphabet.indexOf(str[i])+1);
    }
    return res.join(" ");
  }