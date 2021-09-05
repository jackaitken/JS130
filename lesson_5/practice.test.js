let Stack = require('./practice.js');

describe('Testing stack operations', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('Empty stack', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  test('Pushing element to stack', () => {
    stack.push(10);
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.peek()).toEqual(10);
    expect(stack.size()).toEqual(1);
  });

  test('Popping element from stack', () => {
    stack.push(1);
    stack.push(2);
    let elem = stack.pop();
    expect(elem).toEqual(2);
    expect(stack.size()).toEqual(1);
  });

  test('Peek returns most recent pushed element', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
    expect(stack.size()).toEqual(3);
  });

  test('Peek returns message with empty stack', () => {
    expect(stack.peek()).toEqual('Stack is empty');
  });

  test('Size returns actual size of stack', () => {
    for (let i = 0; i < 25; i++) {
      stack.push(i);
    }

    expect(stack.size()).toEqual(25);
    expect(stack.peek()).toEqual(24);
  });
});