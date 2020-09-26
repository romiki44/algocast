// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let revNr;
  if (n < 0) {
    const rev = (n * -1).toString().split('').reverse().join('');
    revNr = parseInt(rev) * -1;
  } else {
    const rev = n.toString().split('').reverse().join('');
    revNr = parseInt(rev);
  }
  return revNr;
}

module.exports = reverseInt;

function reverseInt2(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}
