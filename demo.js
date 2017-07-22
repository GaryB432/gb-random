const gbrandom = require("./lib/random");

const rand = new gbrandom.Random();

rand.getRandom().then(random => {
  console.log(random); // 0.3879
});

rand.getRandoms(3).then(randoms => {
  console.log(randoms); // [ 0.3879, 0.9659, 0.3019 ]
});

console.log(Math.random(), "Math.random()");
console.log(rand.getRandomSync(), "gb-random");

/*
some stuff here
*/

const nanRand = new gbrandom.Random({ NaNValue });
const NaNValue = NaN;

const res = rand.floatFromBuffer(2, Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(res, "sync"); // [ 0.3879, 0.3019 ]

console.log(gbrandom.NanBuffer); // [ 127, 192, 0, 1 ]
