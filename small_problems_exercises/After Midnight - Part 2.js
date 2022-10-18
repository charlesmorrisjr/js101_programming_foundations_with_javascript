// As seen in the previous exercise, the time of day can be represented as the
// number of minutes before or after midnight. If the number of minutes is
// positive, the time is after midnight. If the number of minutes is negative,
// the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and
// return the number of minutes before and after midnight, respectively. Both
// functions should return a value in the range 0..1439.

// You may not use javascript's Date class methods.


const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function afterMidnight(time) {
  let [hours, minutes] = convertToDeltaMinutes(time);
  let deltaMinutes = ((hours * MINUTES_IN_HOUR) + minutes) % MINUTES_IN_DAY;

  return deltaMinutes;
}

function beforeMidnight(time) {
  let deltaMinutes = (MINUTES_IN_DAY - afterMidnight(time)) % MINUTES_IN_DAY;

  return deltaMinutes;
}

function convertToDeltaMinutes(time) {
  return [Number(time.slice(0, 2)), Number(time.slice(3, 5))];
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
