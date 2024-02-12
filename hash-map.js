import LinkedList from './linked-list.js';

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(new LinkedList());
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }

    return hashCode;
  }
}

const hm = new HashMap();
console.log(hm);
