// Only change code below this line
function urlSlug(title) {
  let str = title.toLowerCase().trim().split(/\s+/);
  let res = str.reduce((accum, item) => accum + '-' + item);
  return res;
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");