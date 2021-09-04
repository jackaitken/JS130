class Stack {
  constructor() {
    this.stack = [];
  }

  push(num) {
    this.stack.push(num);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    return this.stack[this.stack.length - 1] || 'Stack is empty';
  }

  size() {
    return this.stack.length;
  }
}

module.exports = Stack;