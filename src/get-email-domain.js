const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
let email = 'prettyandsimple@example.com'
function getEmailDomain(email) {
  
  return email.slice(email.lastIndexOf('@') + 1)
}
getEmailDomain(email)
module.exports = {
  getEmailDomain
};
