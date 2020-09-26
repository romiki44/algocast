class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    if (this.data.length > 0) {
      return this.data[this.data.length - 1];
    }
    return null;
  }
}

module.exports = Stack;
