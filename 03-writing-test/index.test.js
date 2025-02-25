import { test } from "node:test";
import assert from "assert";
import { sum } from ".";

test("should add correctly", () => {
  const angka1 = 1;
  const angka2 = 2;

  const actualyValue = add(angka1, angka2);

  const expected = 3;
  assert.equal(actualyValue, expected);
});

test("should throw an error if string passed");
