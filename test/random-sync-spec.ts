import test from "ava";
import { Random, NanBuffer } from "../src/random";

test("Should get randoms", t => {
  const rand = new Random();
  const res = rand.getRandomsSync(6);
  t.is(res.length, 6);
});

test("Should get single random", t => {
  const rand = new Random();
  const res = rand.getRandomSync();
  t.truthy(res);
});
