const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = Number(sampleActivity)
  let k = 0.693 // константа полураспада log от 2
  if(typeof sampleActivity != 'string' ||  isNaN(sampleActivity) || !sampleActivity || result <= 0 || result > MODERN_ACTIVITY){
      return false
  }
  
  return Math.ceil(Math.log(MODERN_ACTIVITY / result) / (k / HALF_LIFE_PERIOD))

}

module.exports = {
  dateSample
};
