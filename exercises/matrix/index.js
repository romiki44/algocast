// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// hah, dosiel som na to!!!!!!!!!!!!!
// klucom boli smery a tiez minmalne a maximalne stlpce a riadky,
// ktore sa menili kazdym kolekcom, resp. zmenou smeru
function matrix(n) {
  const result = Array();
  for (i = 0; i < n; i++) {
    result.push(Array(n));
  }
  const smer = ['vpravo', 'dole', 'vlavo', 'hore'];
  let colindex = 0;
  let rowindex = 0;
  let smerindex = 0;
  let minrow = 0;
  let maxrow = n;
  let mincol = 0;
  let maxcol = n;
  for (i = 0; i < n * n; i++) {
    result[rowindex][colindex] = i + 1;
    //console.log(i, rowindex, colindex);

    //vpravo minrow+1
    if (smerindex == 0 && colindex < maxcol) {
      colindex++;
    }
    if (smerindex == 0 && colindex == maxcol) {
      colindex = maxcol - 1;
      smerindex = 1;
      minrow++;
    }

    //dole maxcol-1
    if (smerindex == 1 && rowindex < maxrow) {
      rowindex++;
    }
    if (smerindex == 1 && rowindex == maxrow) {
      rowindex = maxrow - 1;
      smerindex = 2;
      maxcol--;
    }

    //vlavo maxrow-1
    if (smerindex == 2 && colindex >= mincol) {
      colindex--;
    }
    if (smerindex == 2 && colindex < mincol) {
      colindex = mincol;
      smerindex = 3;
      maxrow--;
    }

    //hore mincol+1
    if (smerindex == 3 && rowindex >= minrow) {
      rowindex--;
    }
    if (smerindex == 3 && rowindex < minrow) {
      smerindex = 0;
      mincol++;
      rowindex = minrow;
      colindex = mincol;
    }
  }

  return result;
}

module.exports = matrix;

console.log(matrix(2));

function matrix2(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}
