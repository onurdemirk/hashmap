export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.size = 0;
    this.buckets = new Array(this.capacity);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = [];
    }
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
    const bucket = this.buckets[index];

    for (const i of bucket) {
      if (i[0] === key) {
        i[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      const oldBucket = this.buckets;
      this.capacity *= 2;
      this.buckets = new Array(this.capacity);

      for (let i = 0; i < this.capacity; i++) {
        this.buckets[i] = [];
      }

      for (const bucket of oldBucket) {
        for (const [key, value] of bucket) {
          const newIndex = this.hash(key);
          this.buckets[newIndex].push([key, value]);
        }
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return null;

    for (const i of bucket) {
      if (i[0] === key) {
        return i[1];
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (const i of bucket) {
      if (i[0] === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      const entry = bucket[i];
      if (entry[0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = [];
    }
    this.size = 0;
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.buckets.length; i++) {
      const currentBucket = this.buckets[i];
      for (const entry of currentBucket) {
        keysArray.push(entry[0]);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let i = 0; i < this.buckets.length; i++) {
      const currentBucket = this.buckets[i];
      for (const entry of currentBucket) {
        valuesArray.push(entry[1]);
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];

    for (const bucket of this.buckets) {
      entriesArray.push(...bucket);
    }

    return entriesArray;
  }
}
