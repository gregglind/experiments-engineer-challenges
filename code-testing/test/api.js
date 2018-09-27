const assert = require("assert");
const {
  sumAsSquares,
  openUrlsInOrder
} = require('../code/api.js');


describe('sumAsSquares()', function () {
  it("should accept no parameters, yielding 0", function () {
    assert(sumAsSquares() === 0, "function works with undefined input");
  })
  it("should accept an empty array, yielding 0", function () {
    assert(sumAsSquares([]) === 0, "function works for empty array");
  })
  it("should accept an array of integers", function () {
    assert(sumAsSquares([1,2]) === 5, "function sums int terms correctly");
  })
  it("should accept an array of floats", function () {
    assert(sumAsSquares([1.5,2.5]) === 8.5, "function sums float terms correctly");
  })
  it("should filter out non-numbers", function () {
    assert(sumAsSquares(['a', 'b', {}, [], ()=>{}, 1]) === 1, "function filters out non-numbers");
  })
});


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

    assert.deepEqual(result, expected);
  });
});
