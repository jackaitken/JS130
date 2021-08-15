function filter(arr, callback) {
  return arr.reduce((acc, num) => {
    acc.push(callback(num));
    return acc;
  }, [])
}

console.log(filter([1, 2, 3, 4], num => num * 2));