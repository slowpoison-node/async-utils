'use strict';
const assert = require('assert');
const GeneratorUtils = require('../generator-utils.cjs');

function *gen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

async function *genAsync() {
  for (let v of gen()) {
    yield v;
  }
}

describe('Generator Utils', function() {
  it('should return first matching value', function() {
    let iter = gen();
    assert.equal(GeneratorUtils.first(iter, item => item === 3), 3);
  });

  it('should filter an iterator', async function() {
    let iter = await GeneratorUtils.filter(gen(), item => item % 2 === 0);
    assert.equal((await iter.next()).value, 2);
    assert.equal((await iter.next()).value, 4);
    assert.equal((await iter.next()).done, true);
  });

  it('should filter an async iterator', async function() {
    let iter = await GeneratorUtils.filter(await genAsync(), item => item % 2 === 0);
    assert.equal((await iter.next()).value, 2);
    assert.equal((await iter.next()).value, 4);
    assert.equal((await iter.next()).done, true);
  });


  it('should map an iterator', function() {
    let iter = GeneratorUtils.map(gen(), item => item * 2);
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 4);
    assert.equal(iter.next().value, 6);
    assert.equal(iter.next().value, 8);
    assert.equal(iter.next().value, 10);
    assert.equal(iter.next().done, true);
  });
});
