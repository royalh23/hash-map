import Node from './node';

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) this.prepend(value);
    else {
      this.tail().next = new Node(value);
    }
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    if (this.headNode === null) return 0;
    let count = 0;
    let temp = this.headNode;
    while (temp !== null) {
      count += 1;
      temp = temp.next;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (this.headNode === null) return null;
    let temp = this.headNode;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  at(index) {
    let count = 0;
    let temp = this.headNode;
    while (count < index) {
      if (temp === null) return null;
      count += 1;
      temp = temp.next;
    }
    return temp;
  }

  pop() {
    if (this.headNode === null) throw new Error('Cannot delete the head node!');
    else if (this.size() === 1) this.headNode = null;
    else {
      let cur = this.headNode;
      let prev = null;
      while (cur.next !== null) {
        prev = cur;
        cur = cur.next;
      }
      prev.next = null;
    }
  }

  contains(value) {
    if (this.headNode === null) return false;
    let temp = this.headNode;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.next;
    }
    return false;
  }

  find(value) {
    if (this.headNode === null) return null;
    let count = 0;
    let temp = this.headNode;
    while (temp !== null) {
      if (temp.value === value) return count;
      count += 1;
      temp = temp.next;
    }
    return null;
  }

  toString() {
    if (this.headNode === null) return null;
    let str = '';
    let temp = this.headNode;
    while (temp !== null) {
      str += `( ${temp.value} ) -> `;
      temp = temp.next;
    }
    str += `${temp}`;
    return str;
  }
}
