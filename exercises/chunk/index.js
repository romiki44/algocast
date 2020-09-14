// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// my solution!
function chunk1(array, size) {
  const result = [];
  let chunk = [];
  let i = 0;
  for (let el of array) {
    if (i >= size) {
      result.push(chunk);
      i = 0;
      chunk = [];
    }
    chunk.push(el);
    i++;
  }
  result.push(chunk);
  return result;
}

module.exports = chunk;

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 10));
console.log(chunk([1], 1));

function chunk2(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1]; // hlada posledny chunk
    if (!last || last.length == size) {
      // ak neexistuje alebo je plne, vytvori novy chunk aj s elementom!
      chunked.push([element]);
    } else {
      // ak existuje, prida do neho elemnet
      last.push(element);
    }
  }
  return chunked;
}

// celkom dobre!!
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    // slice() - vyberieme patricnu cast z povodneho pola a vlozime do noveho
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
