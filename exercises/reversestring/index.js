// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// moje riesenie :)
function reverse(str) {
  if (!str) {
    return str;
  }
  let arr = [];
  for (let i = str.length; i > 0; i--) {
    arr.push(str[i - 1]);
  }
  return arr.join("");
}

function reverse2(str) {
  const arr = str.split("");
  arr.reverse(); // zmeni original!
  return arr.join("");
}

function reverse3(str) {
  let reversed = "";
  // for of...je jednoduchsi
  // pozor, nie for in!!
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse4(str) {
  // zmena na array, potom vratenie stringu cez reduce
  // reversed je akysi akumulator, character je polozka vstupneho pola
  // '' je pociatocny stav.....kapanek komplikovane, ale co uz
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
  // jednoriadkove riesenie!!
  //return str.split('').reduce((rev,char)=>cahr+rev,'');
}

module.exports = reverse;

console.log(reverse("abcd"));
console.log(reverse2("abcd"));
console.log(reverse3("abcd"));
console.log(reverse4("abcd"));
