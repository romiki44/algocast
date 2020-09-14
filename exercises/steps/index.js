// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps1(n) {
  for (let i = 0; i < n; i++) {
    const line = [];
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        line.push('#');
      } else {
        line.push(' ');
      }
    }
    const result = line.join('');
    console.log(result, result.length);
  }
}

module.exports = steps;

steps(2);
steps(3);
steps(4);

function steps2(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

// rekurzivne...trosku komplikovane, ale funguje
function steps(n, row = 0, stair = '') {
  if (n == row) {
    return;
  }
  if (n == stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}
