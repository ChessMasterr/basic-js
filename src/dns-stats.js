const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {}
  for(let elem of domains){
    let reverseDomains = elem.split('.').reverse()
    let keyDomains = ''
    for(let i = 0; i < reverseDomains.length; i++) {
      keyDomains = `${keyDomains}.${reverseDomains[i]}`;
      if(result[keyDomains]){
        result[keyDomains] += 1
      } else {
        result[keyDomains] = 1
      }
    }
  }
  return result
  
}

module.exports = {
  getDNSStats
};
