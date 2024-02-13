import LinkedList from './linked-list.js';

class HashMap {
  constructor() {
    this.clear();
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const loadFactor = this.length() / this.capacity;

    if (loadFactor >= 0.75) {
      const oldPairs = this.entries();
      this.capacity *= 2;
      this.buckets = new Array(this.capacity)
        .fill(null)
        .map(() => new LinkedList());
      oldPairs.forEach((entry) => this.set(entry[0], entry[1]));
    }

    const index = this.hash(key);
    if (
      this.buckets[index].headNode === null ||
      key !== this.buckets[index].headNode.value[0]
    ) {
      this.buckets[index].append([key, value]);
    } else {
      this.buckets[index].headNode.value[1] = value;
    }
  }

  get(key) {
    const index = this.hash(key);
    if (this.has(key)) {
      return this.buckets[index].find(key);
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);

    return this.buckets[index].contains(key);
  }

  remove(key) {
    const index = this.hash(key);

    if (this.has(key)) {
      this.buckets[index].delete(key);
      return true;
    }
    return false;
  }

  length() {
    let count = 0;
    this.buckets.forEach((bucket) => (count += bucket.size()));
    return count;
  }

  clear() {
    this.capacity = 16;
    this.buckets = new Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList());
  }

  keys() {
    const arr = [];

    this.buckets.forEach((bucket) => {
      let temp = bucket.headNode;
      while (temp !== null) {
        arr.push(temp.value[0]);
        temp = temp.next;
      }
    });

    return arr;
  }

  values() {
    const arr = [];

    this.buckets.forEach((bucket) => {
      let temp = bucket.headNode;
      while (temp !== null) {
        arr.push(temp.value[1]);
        temp = temp.next;
      }
    });

    return arr;
  }

  entries() {
    const arr = [];

    this.buckets.forEach((bucket) => {
      let temp = bucket.headNode;
      while (temp !== null) {
        arr.push(temp.value);
        temp = temp.next;
      }
    });

    return arr;
  }
}
