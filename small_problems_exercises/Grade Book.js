// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.

function getGrade(grade1, grade2, grade3) {
  let avgGrade = (grade1 + grade2 + grade3) / 3;

  if (avgGrade >= 90 && avgGrade <= 100) {
    return 'A';
  } else if (avgGrade >= 80 && avgGrade <= 90) {
    return 'B';
  } else if (avgGrade >= 70 && avgGrade <= 80) {
    return 'C';
  } else if (avgGrade >= 60 && avgGrade <= 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
