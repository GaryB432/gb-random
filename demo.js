"use strict";
const gbrandom = require("./lib/random");

const NaNValue = NaN;
const rand = new gbrandom.Random();
const nanRand = new gbrandom.Random({ NaNValue });

const res = rand.floatFromBuffer(2, Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(res); // [ 0.387939260590663, 0.301941157072183 ]

console.log(gbrandom.NanBuffer); // [ 127, 192, 0, 1 ]

nanRand.getRandoms(3).then(randoms => {
  console.log(randoms); // [ 0.387939260590663, NaN, 0.301941157072183 ]
});

nanRand.getRandom().then(random => {
  console.log(random); // 0.387939260590663
});

