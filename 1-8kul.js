function heavyBallAtRandomPosition() {
  let array = [1, 1, 1, 1, 1, 1, 1, 1];
  let heavyBallPosition = Math.floor(Math.random() * 8);
  array[heavyBallPosition] = 2;
  return array;
}
const balls = heavyBallAtRandomPosition();
console.log(`Balls in random positions ${balls}`);

const group1 = balls.slice(0, 3);
console.log(`First group: ${group1}`);
const group2 = balls.slice(3, 6);
console.log(`Second group: ${group2}`);
const group3 = balls.slice(6);
console.log(`Third group: ${group3}`);

// pierwsze ważenie:

const group1Weight = group1.reduce((a, b) => a + b);
console.log(`First group weight: ${group1Weight}`);
const group2Weight = group2.reduce((a, b) => a + b);
console.log(`Second group weight: ${group2Weight}`);

let balls2 = [];
if (group1Weight > group2Weight) {
  balls2 = group1;
  ammountOfpreviousIndexes = 0;
} else if (group1Weight < group2Weight) {
  balls2 = group2;
  ammountOfpreviousIndexes = 3;
} else {
  balls2 = group3;
  ammountOfpreviousIndexes = 6;
}
console.log(`Balls for second weighting: ${balls2}`);

// drugie ważenie:

if (balls2[0] > balls2[1]) {
  IndexOfHeavierBall = ammountOfpreviousIndexes;
} else if (balls2[0] < balls2[1]) {
  IndexOfHeavierBall = 1 + ammountOfpreviousIndexes;
} else {
  IndexOfHeavierBall = 2 + ammountOfpreviousIndexes;
}
console.log(`Heavier ball is at position: ${IndexOfHeavierBall}`);
