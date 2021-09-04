/*
We're going to make a meetup class.

The meetup format is usually like: 'the first Monday of January 2021'

Each object takes a month number (1-12) and a year (2021).

we can call a method called day, which takes a weekday and then a schedule
as argument.

13, 14, 15, 16, 17, 18, 19

If teenth is passed as argument, we need to use the weekday to find the teenth
day that the weekday falls on.

first,
second,
third,
fourth,
fifth,

last,
teenth,

find first day of the month in that year
*/

class Meetup {
  static dayCoverter = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ]

  static scheduleConverter = [
    'zero',
    'first',
    'second',
    'third',
    'fourth',
    'fifth'
  ]

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.date = new Date(year, month - 1);
  }

  day(weekday, schedule) {
    debugger;
    let dayNum = Meetup.dayCoverter.indexOf(weekday.toLowerCase());
    schedule = schedule.toLowerCase();

    let counterThreshold = Meetup.scheduleConverter.indexOf(schedule);
    let counter = 0;
    let day = this.date.getDay();
    let newDate;

    while (counterThreshold > counter) {
      newDate = new Date(this.year, this.month - 1, day);
      if (newDate.getDay() === dayNum) {
        counter += 1;
      }
      day += 1;
    }

    return newDate;
  }
}

module.exports = Meetup;

let meetup = new Meetup(2013, 3);
meetup.day('SUNDAY', 'first');