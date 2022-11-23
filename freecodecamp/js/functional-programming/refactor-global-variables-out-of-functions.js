// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
const add = (bookList, bookName) =>  {
  return [...bookList, bookName];
  // Change code above this line
}

// Change code below this line
const remove = (bookList, bookName) => {
  const book_index = bookList.indexOf(bookName);
  return bookList.filter( (x,i)=> i != book_index)
    // Change code above this line
    }
