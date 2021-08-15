function forEach(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(context, arr[i]);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo('Item: ');
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem);
