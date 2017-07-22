import test from "ava";
import { Random } from "../src/random";

// 0x7fc00001
const fd = [127, 192, 0, 1];
let rnd: Random;

test.beforeEach((f) => {
  rnd = new Random();
});

test("Should blow on small buffer", t => {
  t.throws(() => rnd.floatFromBuffer(1, Buffer.from([1, 2, 3])), "Buffer too small");
});

test("Should handle NaN", t => {
  const expected = [NaN]
  const res = rnd.floatFromBuffer(1, Buffer.from([...fd, 1, 2, 3, 4, 5, 6, 7, 8]));
  t.deepEqual(res, expected);
});

test("Should getFloatFromBuffer", t => {
  const expected = [0.387939260590663, 0.301941157072183]
  const res = rnd.floatFromBuffer(2, Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]));
  t.deepEqual(res, expected);
});
