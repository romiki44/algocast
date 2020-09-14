// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// my solution!
function pyramid1(n) {
  let max = 2 * n - 1;
  for (let i = 0; i < n; i++) {
    const line = [];
    const hash = 2 * (i + 1) - 1;
    const space1 = (max - hash) / 2;
    const space2 = max - space1;
    //console.log(max, i, hash, space1, space2);
    for (let j = 0; j < max; j++) {
      if (j < space1 || j >= space2) {
        line.push(' ');
      } else {
        line.push('#');
      }
    }
    const result = line.join('');
    console.log(result);
  }
}

module.exports = pyramid;

pyramid(1);
pyramid(2);
pyramid(3);
pyramid(4);

function pyramid2(n) {
  const midPoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = '';
    for (let column = 0; column < 2 * n - 1; column++) {
      if (column >= midPoint - row && column <= midPoint + row) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

// rekurzivne!!!
function pyramid(n, row = 0, level = '') {
  if (row == n) {
    return;
  }
  if (level.length == 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midPoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}
