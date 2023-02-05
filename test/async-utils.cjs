/**
 * 
 */

const AsyncUtils = require('../async-utils.cjs');
const expect = require('chai').expect;

describe('AsyncUtils.callbackToPromise', () => {
  it('should turn a callback into a promise', async function() {
    // set up a mock callback
    var callbackCalled = false;
    callback = (args) => {
      callbackCalled = true;
    }

    method = (callback) => {
      setTimeout(() => callback(), 1);
    }

    await AsyncUtils.callbackToPromise(method, callback);
    expect(callbackCalled).to.be.true;
  });
});