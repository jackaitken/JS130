/*
Given a word, compute the scrabble score for that word

Letter	Value
A, E, I, O, U, L, N, R, S, T	  1
D, G	                          2
B, C, M, P	                    3
F, H, V, W, Y	                  4
K	                              5
J, X	                          8
Q, Z	                          10

iterate through string
for each letter add it to the running total
return the total
*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static scoreObj = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  }

  score() {
    if (this.word === null) return 0;

    let word = this.word.toUpperCase();

    return word.split('').reduce((acc, elem) => {
      if (elem >= 'A' && elem <= 'Z') {
        return acc + Scrabble.scoreObj[elem];
      } else {
        return acc;
      }
    }, 0);
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;