const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date === null || date === undefined) {
    return "Unable to determine the time of year!";
  }
  // if(((date.getMonth() === 0) || (date.getMonth() === 2) || (date.getMonth() === 4) || (date.getMonth() === 6) || (date.getMonth() === 7) || (date.getMonth() === 9) || (date.getMonth() === 11)) && (date.getDate() > 31)) {
  //   throw new Error("Invalid date!")
  // }
  // if((date.getMonth() === 2) && (date.getDate() > 29)) {
  //   throw new Error("Invalid date!")
  // }
  // if(((date.getMonth() === 3) || (date.getMonth() === 5) || (date.getMonth() === 8) || (date.getMonth() === 10)) && (date.getDate() > 30)) {
  //   throw new Error("Invalid date!")
  // }
  // if(!(date instanceof (Date)) || date.hasOwnProperty("toString")){
  //   throw new Error("Invalid date!")
  // }
  if (!(date instanceof Date) || date.hasOwnProperty("toString")) {
    throw new Error("Invalid date!");
  }
  if (date.getMonth() == 0 || date.getMonth() == 1 || date.getMonth() == 11) {
    return "winter";
  }
  if (date.getMonth() == 2 || date.getMonth() == 3 || date.getMonth() == 4) {
    return "spring";
  }
  if (date.getMonth() == 5 || date.getMonth() == 6 || date.getMonth() == 7) {
    return "summer";
  }
  if (date.getMonth() == 8 || date.getMonth() == 9 || date.getMonth() == 10) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
