function whatIsInAName(collection, source) {
  let res = collection.filter(item => {
    for (let key of Object.keys(source)) {
      if (!item.hasOwnProperty(key) || item[key] !== source[key]) return false;
    } return true;
  })
  return res;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });