// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// anagram - v kazdom texte sa musi pouzit presne rovnake mnozstvo znakov
// neberieme do uvahy vykricniky, bodky, ciarky a pod...
// male a velke pismenka su totozne
function anagrams1(stringA, stringB) {
  const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const strB = stringB.replace(/[^\w]/g, "").toLowerCase();

  const objA = {};
  for (char of strA.split("")) {
    if (!objA[char]) {
      objA[char] = 1;
    } else {
      objA[char]++;
    }
  }

  const objB = {};
  for (char of strB.split("")) {
    if (!objB[char]) {
      objB[char] = 1;
    } else {
      objB[char]++;
    }
  }

  for (let prop in objA) {
    if (objA[prop] != objB[prop]) {
      return false;
    }
  }

  for (let prop in objB) {
    if (objB[prop] != objA[prop]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));

function buildCharMap(str) {
  const charMap = {};
  const cleanStr = str.replace(/[^\w]/g, "").toLowerCase();
  for (let char of cleanStr) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams2(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  // pocet keys v objekte!
  if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] != bCharMap[char]) {
      return false;
    }
  }
  return true;
}

// vycistime a zotriedime podla abecedy
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  const strA = cleanString(stringA);
  const strB = cleanString(stringB);
  return strA == strB;
}
