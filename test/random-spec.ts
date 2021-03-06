import test from "ava";
import { Random, NanBuffer } from "../src/random";

test("Should throw on small buffer", t => {
  const rand = new Random();
  t.throws(() => rand.floatFromBuffer(1, Buffer.from([1, 2, 3])), "Buffer too small");
});

test("Should handle NaN", t => {
  const rand = new Random();
  const expected = [0.5, 0.387939260590663]
  const res = rand.floatFromBuffer(2, Buffer.from([...NanBuffer, 1, 2, 3, 4, 5, 6, 7, 8]));
  t.deepEqual(res, expected);
});

test("Should handle custom NaN", t => {
  const NaNValue = NaN;
  const rand = new Random({ NaNValue });
  const expected = [0.387939260590663, NaNValue]
  const res = rand.floatFromBuffer(2, Buffer.from([1, 2, 3, 4, ...NanBuffer, 5, 6, 7, 8]));
  t.deepEqual(res, expected);
});

test("Should getFloatFromBuffer", t => {
  const rand = new Random();
  const expected = [0.387939260590663, 0.301941157072183]
  const res = rand.floatFromBuffer(2, Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]));
  t.deepEqual(res, expected);
});

test("Should get randoms", async t => {
  const rand = new Random();
  const res = await rand.getRandoms(6);
  t.is(res.length, 6);
});

test("Should get single random", async t => {
  const rand = new Random();
  const res = await rand.getRandom();
  t.truthy(res);
});
