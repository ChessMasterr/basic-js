const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

   // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] == "--discard-next") {
  //     i++;
  //   }
  //   if (arr1[i] == "--discard-prev") {
  //     if (i != 0) {
  //       resultArr.pop();
  //     } 
      
  //   }
  //   if (arr1[i] == "--double-next") {
  //     if (arr1[i + 1] != undefined) {
  //     resultArr.push(arr1[i + 1]);
  //     }
  //   }
  //   if (arr1[i] == "--double-prev") {
  //     if ((i !== 0)) {
  //       resultArr.push(arr1[i - 1]);
  //     } else {
  //       i++;
  //     }
  //   }
    
  //    else {
  //     resultArr.push(arr1[i]);
  //   }
  // }
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arr1 = [...arr];
  let resultArr = [];
 

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === '--discard-next') {
      arr1[i + 1] = undefined
      i++
    } else if (arr1[i] === '--discard-prev') {
      if (resultArr[resultArr.length - 1] === arr1[i - 1]) {
        resultArr.pop()
      }
    } else if (arr1[i] === '--double-next') {
      if (arr1[i + 1] != undefined) {
        resultArr.push(arr1[i + 1])
      }
    } else if (arr1[i] === '--double-prev') {
      if (arr1[i - 1] != undefined) {
        resultArr.push(arr1[i - 1])
      }
    } else {
      resultArr.push(arr1[i])
    }
  }
  return resultArr;
}

module.exports = {
  transform,
};
