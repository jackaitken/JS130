class RomanNumeral {
  constructor(num) {
    this.num = num;
  }

  static romanConverter = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  toRoman() {
    let roman = ''
    let workingNum = this.num;

    Object.keys(RomanNumeral.romanConverter).forEach(num => {
      let value = RomanNumeral.romanConverter[num];
      let mult = Math.floor(workingNum / value);
      let remainder = workingNum % value;

      if (mult > 0) {
        roman += num.repeat(mult);
      }
      
      workingNum = remainder;
    });

    return roman;
  }
}

module.exports = RomanNumeral;