const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length 
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(value)
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if( typeof position != 'number' || position > this.chain.length || !Number.isInteger(position) || position <= 0) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chain.splice(position - 1, 1)
      return this;
    }
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let chainResult = ""
    for (let el of this.chain) {
      chainResult = `${chainResult}( ${el} )~~`;
    }
    chainResult = chainResult.slice(0, chainResult.length - 2);
    this.chain = []
    return chainResult
  }
};

module.exports = {
  chainMaker
};
