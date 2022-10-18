function triangle(...angles) {
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return 'invalid';
  }
}

function getTriangleType(angles) {
  if (angles.every(testAcuteAngle)) {
    return 'acute';
  } else if (angles.some(testRightAngle)) {
    return 'right';
  } else {
    return 'obtuse';
  }
}

function testAcuteAngle(angle) {
  return angle < 90;
}

function testRightAngle(angle) {
  return angle === 90;
}

function isValid(angles) {
  let totalAngle = angles.reduce((total, angle) => total + angle);
  let allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
