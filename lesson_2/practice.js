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

function makeList() {
  let items = [];
  return {
    add(item) {
      items.push(item);
      console.log(`${item} added`);
    },

    list() {
      if (items.length > 0) {
        items.forEach(item => console.log(item));
      } else {
        console.log('list empty');
      }
    },

    remove(item) {
      let index = items.indexOf(item);
      items.splice(index, 1);
      console.log(`${item} removed`);
    }
  }
}

let list = makeList();
list.add('Milk');

// we've now privatized the state and made this easier to work with  