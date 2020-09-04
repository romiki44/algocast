// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if(!str) {
    return str;
  }
  let arr=[];
  for (let i =str.length;  i >= 0; i--) {
    arr.push(str[i-1]);
  }
  return arr.join('');
}

module.exports = reverse;


