// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let maxChar = "";
  var obj = {};
  str.split("").forEach((el) => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  });
  for (let prop in obj) {
    if (obj[prop] > max) {
      max = obj[prop];
      maxChar = prop;
    }
  }
  return maxChar;
}

module.exports = maxChar;

console.log(maxChar("abccccccddf"));
console.log(maxChar("apple 1231111"));

function maxChar2(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  // for-of...loops through the values of an iterable object
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1; // ak null prida 1, inak inkrementuje
  }
  // for/in...loops through the properties of an object
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
