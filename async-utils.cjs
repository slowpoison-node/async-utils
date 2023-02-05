/**
 * async-utils.js
 * 
 * @author: Vishal Verma <vish@slowpoison.net>
 */

class AsyncUtils {
  static callbackToPromise(method, callback) {
    return new Promise((resolve, reject) => {
        method((...args) => {
          try {
            var retVal = callback(args);
            resolve(retVal);
          } catch (e) {
            reject(e);
          }
        });
    });
  }
}

module.exports = AsyncUtils;