class Series {
  constructor(num) {
    if (this.validNum(num)) throw new Error('Invalid input');
    this.num = num;
  }

  validNum(num) {
    return num.split('').some(digit => {
      digit = Number(digit);
      return Number.isNaN(digit);
    });
  }

  slices(chunk) {
    if (chunk > this.num.length) {
      throw new Error("Slice can't be larger than number");
    }
    let chunks = [];
    let index = 0;

    while ((chunk + index) <= this.num.length) {
      let curChunk = [];
      for (let i = index; i < (chunk + index); i++) {
        curChunk.push(Number(this.num[i]));
      }
      chunks.push(curChunk);
      index += 1;
    }
    return chunks;
  }
}

module.exports = Series;