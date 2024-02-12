import LinkedList from './linked-list.js';

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(new LinkedList());
  }
}

const hm = new HashMap();
console.log(hm);
