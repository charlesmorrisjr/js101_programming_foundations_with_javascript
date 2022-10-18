// The time of day can be represented as the number of minutes before or after
// midnight. If the number of minutes is positive, the time is after midnight.
// If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns
// the time of day in 24 hour format (hh:mm). Your function should work with any
// integer input.

// You may not use javascript's Date class methods.

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function timeOfDay(totalMinutes) {
  let hours;
  let minutes;

  while (totalMinutes < 0) {
    totalMinutes += MINUTES_IN_DAY;
  }

  if (totalMinutes >= MINUTES_IN_DAY) {
    hours = Math.floor(totalMinutes / MINUTES_IN_HOUR / HOURS_IN_DAY);
    minutes = totalMinutes - (hours * MINUTES_IN_DAY) -
      (hours * MINUTES_IN_HOUR);
  } else if (totalMinutes >= MINUTES_IN_HOUR && totalMinutes < MINUTES_IN_DAY) {
    hours = Math.floor(totalMinutes / MINUTES_IN_HOUR);
    minutes = totalMinutes - (hours * MINUTES_IN_HOUR);
  } else if (totalMinutes >= 0) {
    hours = 0;
    minutes = totalMinutes;
  }

  return `${padZeroes(hours)}:${padZeroes(minutes)}`;
}

function padZeroes(number) {
  return number < 10 ? (number = '0' + number) : number;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
