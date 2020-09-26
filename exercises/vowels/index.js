// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels1(str) {
  const arrVowels = ['a', 'e', 'i', 'o', 'u'];
  const arr = str.toLowerCase().split('');
  let count = 0;
  for (const char of arr) {
    if (arrVowels.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
console.log(vowels('Why?'));

function vowels2(str) {
  let counter = 0;
  const checker = 'aeiou'; // aj takto, ale vraj lepsie array
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counter++;
    }
  }
  return counter;
}

function vowels(str) {
  // ak existuje niektory znak v stringu vrati true...asi skor vrati znak
  // g-nezastavi sa ak najde prvy
  // case insensitive
  const matches = str.match(/[aeiou]/gi);
  //console.log(matches);
  return matches ? matches.length : 0;
}
