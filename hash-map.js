import LinkedList from './linked-list.js';

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
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
}

const hm = new HashMap();
hm.set('Royal', 'old');
hm.set('Royal', 'new');
// hm.remove('Royal');
console.log(hm.get('Royal'));
