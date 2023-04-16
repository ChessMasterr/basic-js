const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0
  let changeNumToStr = n.toString().split('')
  // console.log(changeNumToStr)
  for (let i = 0; i < changeNumToStr.length; i++){
    let arr = [...changeNumToStr]
    arr.splice(i, 1)
    result = Math.max(result, +arr.join(''))
  }
  return result
}

module.exports = {
  deleteDigit
};
