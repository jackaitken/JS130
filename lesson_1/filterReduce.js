function filter(arr, callback) {
  return arr.reduce((acc, elem) => {
    if (callback(elem)) {
      acc.push(elem);
    }
    return acc;
  }, []);
}

console.log(filter([1, 2, 3, 4], num => num > 2));
