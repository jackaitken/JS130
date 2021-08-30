function bar() {
  console.log('world');
}

bar = 'hello';
bar();             // raises "TypeError: bar is not a function"
