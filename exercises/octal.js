class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    let power = this.octal.length - 1;
    let sum = 0;

    for (let i = 0; i < this.octal.length; i++) {
      let num = Number(this.octal[i]);
      if (num >= 8 || Number.isNaN(num)) {
        return 0;
      } else {
        sum += (num * (8 ** power));
        power -= 1;
      }
    }
    return sum;
  }
}

let oct = new Octal('abcd');
console.log(oct.toDecimal());