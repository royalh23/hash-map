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
    this.loadFactor = 0.75;
    this.buckets = new Array(16).fill(null).map(() => new LinkedList());
  }
}

const hm = new HashMap();
hm.set('A', 1);
hm.set('B', 1);
hm.set('C', 1);
hm.set('D', 1);
hm.set('E', 1);
hm.set('F', 1);
hm.set('G', 1);
hm.set('H', 1);
hm.set('I', 1);
hm.set('J', 1);
hm.set('K', 1);
hm.set('L', 1);
hm.set('M', 1);
hm.set('N', 1);
hm.set('O', 1);
hm.set('P', 1);

console.log(hm.buckets[0]);
console.log(hm.buckets[1]);
console.log(hm.buckets[2]);
console.log(hm.buckets[3]);
console.log(hm.buckets[4]);
console.log(hm.buckets[5]);
console.log(hm.buckets[6]);
console.log(hm.buckets[7]);
console.log(hm.buckets[8]);
console.log(hm.buckets[9]);
console.log(hm.buckets[10]);
console.log(hm.buckets[11]);
console.log(hm.buckets[12]);
console.log(hm.buckets[13]);
console.log(hm.buckets[14]);
console.log(hm.buckets[15]);
