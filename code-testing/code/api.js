const assert = require('assert');
module.exports = {
  openUrlsInOrder,
  sumOfSquares
}

/**
 * Square a number
 * Throws if square will be greater than Number.MAX_VALUE (will not return infinity)
 * @param {Number} base number to be squared
 * @return {Number} square of base
 */
function square(base){
  assert(typeof base === 'number', new TypeError('base must be a Number'));
  assert(!Number.isNaN(base), 'cannot square NaN');
  const power = Math.pow(base, 2);
  assert(Number.isFinite(power), new RangeError('base too large to square'))
  return power;
}

/**
 * Add two numbers together.
 * Strict about inputs being numbers & not NaN
 * Throws if sum is greater than Number.MAX_VALUE (will not return infinity)
 * @param  {Number} augend
 * @param  {Number} addend
 * @return {Number} sum of the two
 */
function add(augend, addend){
  assert(typeof augend === 'number', new TypeError('augend must be a Number'));
  assert(!Number.isNaN(augend), 'augend cannot be NaN');
  assert(typeof addend === 'number', new TypeError('addend must be a Number'));
  assert(!Number.isNaN(addend), 'addend cannot be NaN');
  let sum = augend + addend;
  assert(Number.isFinite(sum), new RangeError('input numbers too large: sum greeter than infinity'))
  return sum;
}

/**
 * Square over array of numbers & return the sum
 * Returns 0 if empty array passed
 * Throws if sum is greater than Number.MAX_VALUE (will not return infinity)
 * Throws if non-array passed or if any elements are not finite numbers
 * See `square` and `add` for more error conditions
 * @param {Number[]} bases numbers to be squared & summed
 * @return {Number} sum of the square of the bases, or 0 if empty array passed
 */
function sumOfSquares(bases) {
  assert(Array.isArray(bases), new TypeError('bases must be an array'));
  if(!bases.length){ return 0; }
  return bases
    .map(square)
    .reduce(add, 0);
}

// Part 2:  openTabsInOrder

// promised timeout.
const waitFor = (ms) => new Promise(r=>setTimeout(r,ms));

// Simulate a tabOpening with random loading time.
async function fakeOpenUrl (url, loadingTime=3*Math.random()) {
  return waitFor(loadingTime).then(()=>console.log(`${url} opened after ${loadingTime}`));
}

/** opensTabsInOrder
  *
  * @returns workDo
  */
async function openUrlsInOrder (urlsArray) {
  const work = [];
  urlsArray.forEach(async (url) => {
    await fakeOpenUrl(url);
    work.push(['url',url]);
  })
  work.push(['done',true]);
  return work;
}