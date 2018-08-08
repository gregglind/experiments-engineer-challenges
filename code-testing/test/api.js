const { describe, it } = require('mocha');
const assert = require('assert');
const {
  sumOfSquares,
  openUrlsInOrder
} = require('../code/api.js');


// Part 1: sumOfSquares()
describe('sumOfSquares()', () => {
  it('is a function', () => {
    assert.equal(typeof sumOfSquares, 'function');
  });

  it('returns 0 for the empty array', () => {
    assert.equal(sumOfSquares([]), 0);
  });

  it('computes the sum of squares of array values', () => {
    assert.equal(sumOfSquares([3,4]), 25);
    assert.equal(sumOfSquares([-3,-4]), 25);
  });

  it('also works for sets', () => {
    assert.equal(sumOfSquares(new Set([12,5])), 169);
    assert.equal(sumOfSquares(new Set()), 0);
  });

  it('and for generators, too', () => {
    function* numbers() {
      yield 1;
      yield 2;
      yield 3;
    }
    function* empty() {}
    assert.equal(sumOfSquares(numbers()), 14);
    assert.equal(sumOfSquares(empty()), 0);
  });

  it('returns Infinity if any values are infinite', () => {
    assert.equal(sumOfSquares([1, Infinity, 2]), Infinity);
    assert.equal(sumOfSquares([1, -Infinity, 2]), Infinity);
  });

  it('returns NaN for non-numeric values', () => {
    assert(Number.isNaN(sumOfSquares([undefined])));
    assert(Number.isNaN(sumOfSquares([null])));
    assert(Number.isNaN(sumOfSquares([true])));
    assert(Number.isNaN(sumOfSquares([false])));
    assert(Number.isNaN(sumOfSquares(['test'])));
    assert(Number.isNaN(sumOfSquares(['1'])));
    assert(Number.isNaN(sumOfSquares('123'))); // iterable string
    assert(Number.isNaN(sumOfSquares([Symbol('1')])));
    assert(Number.isNaN(sumOfSquares([{}])));
    assert(Number.isNaN(sumOfSquares([[]])));
    assert(Number.isNaN(sumOfSquares([[1]])));
    assert(Number.isNaN(sumOfSquares([()=>{}])));
  });

  it('returns NaN if any values are themselves NaN', () => {
    assert(Number.isNaN(sumOfSquares([NaN])));
    assert(Number.isNaN(sumOfSquares([0,1,0/0,2])));
  });

  it('throws TypeError if argument is not iterable', () => {
    assert.throws(() => sumOfSquares(), TypeError);
    assert.throws(() => sumOfSquares(null), TypeError);
    assert.throws(() => sumOfSquares(true), TypeError);
    assert.throws(() => sumOfSquares(false), TypeError);
    assert.throws(() => sumOfSquares(0), TypeError);
    assert.throws(() => sumOfSquares(Symbol('1')), TypeError);
    assert.throws(() => sumOfSquares({}), TypeError);
    assert.throws(() => sumOfSquares(()=>{}), TypeError);
  });
});

// part 2:  openUrlsInOrder
describe('openUrlsInOrder()', function () {
  it('should open urls in order', async function () {

    const urls = ['url1', 'url2', 'url3', 'url4']
    const expected = [
      ['url', 'url1'],
      ['url', 'url2'],
      ['url', 'url3'],
      ['url', 'url4'],
      ['done', true]
    ]
    var result = await openUrlsInOrder(urls);

    // 3. ASSERT
    assert.deepEqual(result, expected);
  });
});
