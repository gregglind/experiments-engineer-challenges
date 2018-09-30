const assert = require("assert");
const {
  sumOfSquares,
  openUrlsInOrder
} = require('../code/api.js');

/**
 * creates array of descending numbers, from limit to last number >=1
 * decremented by 1 until number is less than 1
 * (will optimize for tail-call once Node adds that feature)
 * @param {Number} limit largest number to use
 * @param {Number[]} acc
 */
function range(limit, acc=[]){
  if(limit < 1) { return acc; }
  return range(limit - 1, acc.concat(limit));
}

// part 1: sumOfSquares
describe('sumOfSquares()', function () {
  it('returns 0 if array is empty',() => {
    assert.strictEqual(sumOfSquares([]), 0);
  })
  it('works with an array of length 1',() => {
    assert.strictEqual(sumOfSquares([2]), 4);
  })
  it('works with integers',() => {
    assert.strictEqual(sumOfSquares([2, 4, 6, 8]), 120);
  })
  it('works with floats',() => {
    assert.strictEqual(sumOfSquares([2.5, 0.9, .01]), 7.0601);
  })
  it('works with a mix of floats and integers',() => {
    assert.strictEqual(sumOfSquares([2, 4, 6, 8, 2.5, 0.9, .01]), 127.0601);
  })
  it('works with negative numbers',() => {
    assert.strictEqual(sumOfSquares([-2, 4, -6, 8, -2.5, 0.9, -.01]), 127.0601);
  })
  it('throws if any items in the array are not numbers',() => {
    assert.throws(() => sumOfSquares([1,2,3,"four"]), TypeError);
    assert.throws(() => sumOfSquares([null,1,2,3]), TypeError);
    assert.throws(() => sumOfSquares([{a:1},2,3]), TypeError);
  })
  it('throws if any items in the array are NaN',() => {
    assert.throws(() => sumOfSquares([1,2,3,NaN]), assert.AssertionError);
    assert.throws(() => sumOfSquares([Math.pow(1,"abc")]), assert.AssertionError);
  })
  it('throws if no argument is passed',() => {
    assert.throws(() => sumOfSquares(), TypeError);
  })
  it('throws if a non-array value is passed',() => {
    assert.throws(() => sumOfSquares(1,2,3), TypeError);
    const arrayLike = {0: 1, 1: 12, length: 2}
    assert.throws(() => sumOfSquares(arrayLike), TypeError);
  })
  it('throws if nulls are in the array',() => {
    assert.throws(() => sumOfSquares([1,2,3, null]), TypeError);
  })
  it('throws if a too-large-to-square number is passed', () =>{
    const tooLargeToSquare = Number.MAX_VALUE;
    assert.throws(() => sumOfSquares([1,2,tooLargeToSquare]), RangeError);
  });
  it('throws if bases produce powers too large to sum', () =>{
    assert.doesNotThrow(() => sumOfSquares([1e+154]), 'not throwing on square');
    assert.throws(() => sumOfSquares([1e+154,1e+154]), RangeError, 'throwing on summing the powers');
  });
  // added to check for performance regressions
  // @TODO verify that this works on CI platform, other devs computers etc.
  it('processes 2000 numbers in <100ms', () =>{
    const input = range(2000);
    const start = process.hrtime.bigint();
    sumOfSquares(input);
    const end = process.hrtime.bigint();
    const millis = Number(end - start) / 1000000;
    assert.ok(millis < 100);
  });
});


// part 2:  openUrlsInOrder
xdescribe('openUrlsInOrder()', function () {
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
