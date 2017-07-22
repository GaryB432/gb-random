"use strict";
const gbrandom = require("./lib/random");

const rand = new gbrandom.Random();
const res = rand.floatFromBuffer(2, Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(res); // [ 0.387939260590663, 0.301941157072183 ]

console.log(gbrandom.NanBuffer); // [ 127, 192, 0, 1 ]

const NaNValue = 0.5;
const nrand = new gbrandom.Random({ NaNValue });
nrand.getRandoms(2).then(randoms => {
  console.log(randoms); // [ 0.387939260590663, 0.301941157072183 ]
});
