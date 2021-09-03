/*
when a robot comes off the factory floor we need to give it 
a random name. 

Occasionally a name must be wiped, so you need to reset the name
when you ask it next it should give it a new name.


*/

Math.seedRandom = require('seedrandom');

class Robot {
  constructor() {
    this.myName = null;
  }

  static takenNames = [];

  name() {
    if (this.myName) return this.myName;

    let robotName;
    while (true) {
      let randomChars = this.getRandomLetters();
      let randomNums = this.getRandomNums();
      robotName = randomChars + randomNums;

      if (Robot.takenNames.indexOf(robotName) === -1) {
        break;
      }
    }

    Robot.takenNames.push(robotName);
    this.myName = robotName;
    return robotName;
  }

  getRandomLetters() {
    let randChars = '';
    for (let i = 0; i < 2; i++) {
      let min = 65;
      let max = 91;
      let randCharCode = Math.floor(Math.random() * (max - min) + min);
      
      randChars += String.fromCharCode(randCharCode);
    }
    return randChars;
  }

  getRandomNums() {
    let randNums = '';

    for (let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random() * 10)
      randNums += String(num);
    }
    return randNums;
  }

  reset() {
    this.myName = null;
    return this.name();
  }
  
}

module.exports = Robot;