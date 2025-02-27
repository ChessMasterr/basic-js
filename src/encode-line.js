const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = []
  let counter = 1
  for(let i = 0; i < str.length; i++){
    while(str[i] == str[i + 1]){
      counter++
      i++
    }
    if(counter > 1){
      result.push(counter, str[i])
    } else{
      result.push(str[i])
    }
    counter = 1
  }
   return result = result.join('')
}

module.exports = {
  encodeLine
};
