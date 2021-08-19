function makeList() {
  let items = [];
  return function(item) {
    if (item) {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item);
      } else {
        items.push(item);
        console.log(`${item} added!`);
      }
    } else {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    }
  }
}

// This protects the state of makeList, but the implementation is a bit strange