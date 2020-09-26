// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst1(value) {
    const node = new Node(value);
    if (this.next) {
      const oldhead = this.head;
      this.head = node;
      node.next = oldhead;
    } else {
      this.head = node;
    }
  }
  insertFirst(data) {
    // const node = new Node(data, this.head);
    // this.head = node;
    this.head = new Node(data, this.head); // zjednodusenie na 1 riadok!
  }
  size() {
    let node = this.head;
    let counter = 0;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast1() {
    let node = this.head;
    let lastNode = null;
    while (node) {
      lastNode = node;
      node = node.next;
    }
    return lastNode;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }
  // tak toto bol celkom zaberak...ale vyriesil som to!!!!!!
  removeLast1() {
    // ak head je null, vsetko je null
    if (!this.head) {
      return null;
    }
    let firstNode = this.head;
    // ak existuje iba head, tiez vrat null
    if (!firstNode.next) {
      this.head = null;
      return;
    }
    // ak existuju aspon dva uzly, a ten druhy ukazuje na null, tak
    // tomu prvemu vynuluj odkaz na ten druhy...dobrem co? :))
    let secondNode = firstNode.next;
    while (secondNode.next) {
      firstNode = secondNode;
      secondNode = secondNode.next;
    }
    firstNode.next = null;
  }
  removeLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let last = this.head.next;
    while (last.next) {
      previous = last;
      last = last.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt1(index) {
    let node = this.head;
    let i = 0;
    while (node && i < index) {
      i++;
      node = node.next;
    }
    return i == index ? node : null;
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt1(index) {
    // ak nic neexistuje
    if (!this.head) {
      return;
    }
    // ak index=0
    if (index == 0) {
      // ak existuje iba head
      if (!this.head.next) {
        this.head = null;
        return;
      }
      // ak existuje okrem head este nieco...dalo sa pouzit rovno
      this.head = this.head.next;
      return;
    }
    // ak je index>0
    let node = this.head;
    let i = 1;
    // hladam index-1
    while (node && i < index - 1) {
      i++;
      node = node.next;
    }
    if (!node || !node.next) {
      return;
    }
    if (node.next.next) {
      node.next = node.next.next;
    }
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index == 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (previous && previous.next) {
      previous.next = previous.next.next;
    } else {
      previous.next = null;
    }
  }
  insertAt1(data, index) {
    const newNode = new Node(data);
    if (index == 0) {
      if (!this.head) {
        this.head = newNode;
        return;
      }
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let i = 0;
    let node = this.head;
    let lastNode;
    while (node && i < index - 1) {
      i++;
      lastNode = node;
      node = node.next;
    }
    if (node) {
      newNode.next = node.next;
      node.next = newNode;
      return;
    }
    lastNode.next = newNode;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index == 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

const list = new LinkedList();
list.head = new Node(10);
