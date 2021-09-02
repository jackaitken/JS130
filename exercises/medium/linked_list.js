class Element {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  isTail() {
    return this.next === null;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextNode || null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  static fromArray(arr) {
    let list = new SimpleLinkedList();
    arr.reverse().forEach(elem => {
      list.push(elem);
    });
    return list;
  }

  head() {
    return this.list[0];
  }

  push(datum, next = null) {
    let node = new Element(datum, next);
    let list = this.list;

    if (list.length) {
      node.nextNode = list[0]
    }

    list.unshift(node);
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.length.length === 0;
  }

  peek() {
    if (this.list.length > 0) {
      return this.list[0].datum();
    } else {
      return null;
    }
  }

  pop() {
    this.list.shift();
  }

  reverse() {
    // STUB
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let list = SimpleLinkedList.fromArray(arr);
console.log(list.head().next());