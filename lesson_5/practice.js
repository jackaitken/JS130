class SumOfMultiples {
  constructor(...nums) {
    [ this.num1, this.num2, this.num3 ] = nums;
  }

  static to(num) {
    return new SumOfMultiples().to(num);
  }

  to(num) {
    if (!this.num1) {
      this.num1 = 3;
      this.num2 = 5;
    }

    let sum = 0;

    for (let i = this.num1; i < num; i++) {
      if (i % this.num1 === 0 || i % this.num2 === 0 || 
          i % this.num3 === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

let num = new SumOfMultiples(43, 47)

console.log(num.to(10000));