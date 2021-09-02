function foo1() {
  var Bar;
  let bar = new Bar();
  const Bar = class {};
}

function foo2() {
  let bar = new Bar();
}

foo1();
foo2();