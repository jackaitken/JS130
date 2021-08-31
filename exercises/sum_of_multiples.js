class SumOfMultiples {
  constructor(...nums) {
    this.nums = nums;
  }

  static to(num) {
    return new SumOfMultiples().to(num);
  }

  to(num) {
    if (this.nums.length === 0) {
      this.nums = [3, 5];
    }

    let sum = 0;
    while (num > 0) {
      num -= 1;
      if (this.anyMultiples(num)) {
        sum += num;
      };
    }
    return sum;
  }

  anyMultiples(num) {
    return this.nums.some(multiple => num % multiple === 0);
  }
}

module.exports = SumOfMultiples;