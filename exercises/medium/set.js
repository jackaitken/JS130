/*
We need to create a custom set.


*/

class CustomSet {
  constructor(set = []) {
    this.set = this.getUniqueValues(set);
  }

  getUniqueValues(arr) {
    return arr.filter((elem, index, arr) => {
      return arr.indexOf(elem) === index;
    });
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(num) {
    return this.set.indexOf(num) !== -1;
  }

  isSubset(set) {
    return this.set.every(elem => set.set.indexOf(elem) !== -1);
  }

  isDisjoint(set) {
    return this.set.every(elem => set.set.indexOf(elem) === -1);
  }

  isSame(set) {
    if (this.set.length === set.set.length) {
      return this.isSubset(set);
    } else {
      return false;
    }
  }

  add(num) {
    if (this.set.indexOf(num) === -1) {
      this.set.push(num);
    }
    return this;
  }

  intersection(set) {
    let newSet = this.set.filter(elem => set.contains(elem));
    return new CustomSet(newSet);
  }

  difference(set) {
    let newSet = this.set.filter(elem => !set.contains(elem));
    return new CustomSet(newSet);
  }

  union(set) {
    let combinedSets = [...this.set, ...set.set];

    let newSet = combinedSets.filter((elem, index, arr) => {
      return arr.indexOf(elem) === index;
    });

    return new CustomSet(newSet)
  }
}

let set = new CustomSet([1, 1, 1, 3, 4, 4, 4]);
console.log(set.set);
module.exports = CustomSet;
