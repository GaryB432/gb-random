[![Build Status](https://travis-ci.org/GaryB432/gb-random.svg?branch=master)](https://travis-ci.org/GaryB432/gb-random)
[![Coverage Status](https://coveralls.io/repos/github/GaryB432/gb-random/badge.svg?branch=master)](https://coveralls.io/github/GaryB432/gb-random?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# gb-random
An alternative implementation of Math.random using crypto.getRandomBytes

## Usage

> npm install gb-random --save

```
const gbrandom = require("gb-random");

const rand = new gbrandom.Random();

// just replace Math.random with rand.getRandomSync
// console.log(Math.random(), "Math.random()");
console.log(rand.getRandomSync(), "gb-random");

// you can also use async
rand.getRandom().then(random => {
  console.log(random); // 0.3879
});

// or even better in an async function
const rando = await rnd.getRandom();
console.log(rando);

rand.getRandoms(3).then(randoms => {
  console.log(randoms); // [ 0.3879, 0.9659, 0.3019 ]
});
```

