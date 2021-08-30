/*
Given a word and a list of possible anagrams for a word

return the correct sublist that contains the anagrams of the word.

for the string 'listen' and list of candidates:
["enlists", "google", "inlets", "banana"]
we should return inlets.

can have multiple
return in array form

*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(array) {
    let sortedWord = this.sortWord(this.word);
    return array.filter(word => {
      if (word.toLowerCase() !== this.word.toLowerCase()) {
        return this.sortWord(word) === sortedWord;
      }
    });
  }

  sortWord(word) {
    return word.toLowerCase().split('').sort().join('');
  }
}

module.exports = Anagram;