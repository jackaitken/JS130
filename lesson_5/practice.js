function foo(y) {
  function bar(w = 0) {
    return w + x + y + z;
  }
  var z;
  z = 10;
  return bar();
}

const x;
x = 30;
console.log(foo(2)); // 42
