class Triangle {
  constructor(side1, side2, side3) {
    if (this.validTriangle(side1, side2, side3)) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  }

  validTriangle(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new TypeError('Illegal triangle size');
    }

    let sortedSides = [side1, side2, side3].sort((a, b) => a - b);
    debugger;
    if (sortedSides[2] >= (sortedSides[0] + sortedSides[1])) {
      throw new TypeError('Illegal triangle size');
    }

    return true;
  }

  kind() {
    if (this.equilateral()) {
      return 'equilateral';
    } else if (this.scalene()) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }

  equilateral() {
    return this.side1 === this.side2 && this.side1 === this.side3;
  }

  scalene() {
    return this.side1 !== this.side2 && this.side1 !== this.side3 &&
      this.side2 !== this.side3;
  }
}

module.exports = Triangle;