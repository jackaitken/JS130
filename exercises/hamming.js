class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(newSeq) {
    let hammingCounter = 0;

    for (let i = 0; i < newSeq.length; i++) {
      if (this.sequence[i] === undefined) {
        break;
      } else if (newSeq[i] !== this.sequence[i]) {
        hammingCounter += 1;
      }
    }
    return hammingCounter;
  }
}

module.exports = DNA;