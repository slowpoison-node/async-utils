const { describe, it } = require('mocha');
const assert = require('assert');
const RewindableIterator = require('../rewindable-iterator.cjs');

describe('Rewindable Iterator', function() {
  it('should rewind', function() {
    let iter = new RewindableIterator([1, 2, 3]);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 2);
    iter.rewind();
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 3);
    assert.equal(iter.next().done, true);
  });
});
