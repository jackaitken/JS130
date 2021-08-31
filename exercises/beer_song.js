/*
verse

Given a number, we need to return a verse from the song
that verse includes the current number and the next number

verse(3) ===

"3 bottles of beer on the wall, 3 bottles of beer.\n" +
"Take one down and pass it around, 2 bottles of beer " +
"on the wall.\n";

num = 3
nextNum = num - 1

"num bottles of beer on the wall, num bottles of beer.\n" +
"Take one down and pass it around, nextNum bottles of beer " +
"on the wall.\n";

edge cases: 
first
verse(0) 

"No more bottles of beer on the wall, no more " +
"bottles of beer.\nGo to the store and buy some " +
"more, 99 bottles of beer on the wall.\n";

verse(99)

*/


class BeerSong {
  static verse(num) {
    if (num === 0) {
      return this.getLastVerse();
    } else if (num === 1) {
      return this.getOneMoreVerse();
    } else {
      return this.getNormalVerse(num);
    }
  }

  static verses(from, to) {
    let fullVerse = '';

    for (let i = from; i >= to; i--) {
      fullVerse += this.verse(i);
    }
    return fullVerse;
  }

  static getNormalVerse(num) {
    let nextNum = num === 1 ? 'no more' : num - 1;
    let nextPlural = nextNum === 1 ? 'bottle' : 'bottles';

    return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
    `Take one down and pass it around, ${nextNum} ${nextPlural} of beer ` +
    `on the wall.\n`;
  }

  static getOneMoreVerse() {
    return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
    `Take it down and pass it around, no more bottles ` +
    `of beer on the wall.\n`;
  }

  static getLastVerse() {
    return `No more bottles of beer on the wall, no more ` +
    `bottles of beer.\nGo to the store and buy some ` +
    `more, 99 bottles of beer on the wall.\n`;
  }
}

console.log(BeerSong.verses(99, 98));

// "99 bottles of beer on the wall, 99 bottles of beer.\n" +
// "Take one down and pass it around, 98 bottles of beer " +
// "on the wall.\n\n98 bottles of beer on the wall, " +
// "98 bottles of beer.\nTake one down and pass it " +
// "around, 97 bottles of beer on the wall.\n"
module.exports = BeerSong;