// Some people believe that Fridays that fall on the 13th day of the month are
// unlucky days. Write a function that takes a year as an argument and returns
// the number of Friday the 13ths in that year. You may assume that the year is
// greater than 1752, which is when the United Kingdom adopted the modern
// Gregorian Calendar. You may also assume that the same calendar will remain in
// use for the foreseeable future.

const JANUARY = 0;
const DECEMBER = 11;
const FRIDAY = 5;

function fridayThe13ths(year) {
  let numOfFridays = 0;

  for (let month = JANUARY; month <= DECEMBER; month++) {
    let date = new Date(year, month, 13);

    if (date.getDay() === FRIDAY) {
      numOfFridays += 1;
    }
  }

  return numOfFridays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
