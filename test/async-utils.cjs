/**
 * 
 */

const AsyncUtils = require('../async-utils.cjs');
const expect = require('chai').expect;

describe('AsyncUtils.callbackToPromise', () => {
  it('should turn a callback into a promise', async function() {
    // set up a mock callback
    var callbackCalled = false;
    var callbackArgs = [];
    callback = (...args) => {
      callbackCalled = true;
      callbackArgs = args;
    }

    method = (callback) => {
      setTimeout(() => callback(1, 2, 3), 0);
    }

    await AsyncUtils.callbackToPromise(method, callback);
    expect(callbackCalled).to.be.true;
    expect(callbackArgs).to.deep.equal([1, 2, 3]);
  });
});