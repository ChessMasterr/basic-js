const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let stringArr1 = [...s1]
  let stringArr2 = [...s2]
  let counter = 0
  for(let i = 0; i < stringArr1.length; i++){
    for(let j = 0; j < stringArr2.length; j++){
      if(stringArr1[i] === stringArr2[j]) {
        delete stringArr2[j];
        counter += 1
        break
      }
    }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
