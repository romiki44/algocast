// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }
  add(el) {
    this.data.unshift(el);
  }
  remove(el) {
    return this.data.pop();
  }
  list() {
    return this.data;
  }
  peek() {
    if (this.data.length > 0) {
      return this.data[this.data.length - 1];
    }
    return null;
  }
}

module.exports = Queue;

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
console.log(q.list());
console.log(q.peek());
console.log(q.peek());
console.log(q.peek());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
