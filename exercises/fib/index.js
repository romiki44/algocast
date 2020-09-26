// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib1(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]; // alebo arr.push()
  }
  return arr[n];
}

// rekurzivne...O(2^n)
function fib2(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// tiez s cache...toto sa mi zda trochu jednoduchsie...od A.Neagoie
function quickFib(n) {
  cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const fib3 = quickFib();

// memoization...kapanek zlozite od Stepan Gridera
// memeoize je vseobecna funkcia pre akukolvek funkciu!!
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  // pozor, tu sa musi volat fib(), nie slowFib()!!!!!!!
  // preto je to kapanek cele komplikuvane :(
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

console.log(fib(0), fib(1), fib(4), fib(7), fib(9));
console.log(fib3(0), fib3(1), fib3(4), fib3(7), fib3(9));
