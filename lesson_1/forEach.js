function forEach(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(thisArg, arr[i], i, arr);
  }
}

let arr = [1, 2, 3, 4];
forEach(arr, function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});