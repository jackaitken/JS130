/*
We need to create a clock that allows us
to create time based on arguments

at(hours, minutes) {
  return hours: minutes
}
*/

class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes = 0) {
    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    return new Clock(Number(hours), Number(minutes));
  }

  toString(arr) {
    return `${this.hours}:${this.minutes}`
  }

  subtract(amt) {
    debugger;
    let [ hours, minutes ] = this.convertTime(amt);
    console.log(hours, minutes);

    let newHours = this.hours - hours;
    if (newHours < 0) {
      this.hours = 24 - newHours;
    } else {
      this.hours = newHours;
    }

    let newMinutes = this.minutes - minutes;
    if (newMinutes < 0) {
      this.minutes = 60 - Math.abs(newMinutes);
    } else {
      this.minutes = newMinutes;
    }

    // return [ this.hours, this.minutes ];
  }

  add(amt) {

  }

  convertTime(minutes) {
    let rawTime = minutes / 60
    let actualHours = Math.trunc(rawTime);
    let decimalMinutes = rawTime % 1;
    console.log(decimalMinutes);
    let actualMinutes = Math.round(decimalMinutes * 60);

    return [actualHours, actualMinutes];
  }
}

console.log(Clock.at(0).subtract(50));