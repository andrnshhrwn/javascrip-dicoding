import { sum } from './index.js';
import assert from 'node:assert';
import {test} from 'node:test';

test("Should ", () => {
  const a = 2;
  const b = 2;

  const funcSum = sum(a, b);
  const expected = 4;

  assert.equal(funcSum, expected)
});