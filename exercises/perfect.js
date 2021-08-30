class PerfectNumber {
  constructor(num) {
    if (num < 1) {
      throw new Error('Input cannot be less that 1');
    }
    this.num = num;
  }

  static classify(num) {
    let newNum = new PerfectNumber(num);
    let aliquot = newNum.calculateDivisors();

    if (aliquot > newNum.num) {
      return 'abundant';
    } else if (aliquot < newNum.num) {
      return 'deficient';
    } else {
      return 'perfect';
    }
  }

  calculateDivisors() {
    let sum = 0;

    for (let i = this.num - 1; i > 0; i--) {
      if (this.num % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

module.exports = PerfectNumber;