/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** getIndex(idx): get node at index */

  getIndex(idx) {
    let current = this.head;
    let count = 0;
    while (count != idx && current !== null) {
      current = current.next;
      count += 1;
    }
    return current;
  }


  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let node = new Node();
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }
    let prev = this.getIndex(this.length - 2);
    let val = this.tail.val;
    prev.next = null;
    this.tail = prev;
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let node = new Node();
    if (!this.head) {
      return null;
    }
    let val = this.head.val;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of bounds");
    }
    return this.getIndex(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of bounds");
    }
    let node = this.getIndex(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index out of bounds");
    }
    if (idx === 0)  {
      return this.unshift(val);
    }
    if (idx === this.length) {
      return this.push(val);
    }  
    let node = new Node(val);
    let prev = this.getIndex(idx - 1);
    node.next = prev.next;
    prev.next = node;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of bounds");
    }
    if (idx === 0)  {
      return this.shift();
    }
    if (idx === this.length) {
      return this.pop();
    } 
    let prev = this.getIndex(idx - 1);
    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length > 0) {
      let total = 0;
      let current = this.head;
      while (current) {
        total += current.val;
        current = current.next;
      }
      return total / this.length;
    }
    return 0;
  }
}

module.exports = LinkedList;
