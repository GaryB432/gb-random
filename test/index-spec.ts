import test from "ava";
import * as index from "../src/index";

test("Should have Random available", (t) => {
  t.truthy(index.Random);
});
