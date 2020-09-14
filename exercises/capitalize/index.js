// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize1(str) {
  var words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

module.exports = capitalize;

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));

function capitalize2(str) {
  const words = [];
  for (let word of str.split(' ')) {
    const capWord = word[0].toUpperCase() + word.slice(1);
    words.push(capWord);
  }
  return words.join(' ');
}

// pridavam postupne vsetky znaky do noveho stringu
// a ak je medzera, tak znak kapitalizujem...
function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
