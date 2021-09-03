/*
Given a letter we need to print out a string
in a diamond shape

input: 'C'

'   A   '
'  B B  '
' C   C '
'D     D'
' C   C '
'  B B  '
'   A   '

107 - 97


Get charcode of input
subtract 97 from charcode to get amt of spaces

*/

class Diamond {
  static makeDiamond(char) {
    const CHAR_CODE_A = 65;
    let charCode = char.charCodeAt();
    let spaces = charCode - CHAR_CODE_A;
    let height = spaces * 2;

    let resultStr = '';

    while()
  }
}

console.log(Diamond.makeDiamond('C'));
