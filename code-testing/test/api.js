const assert = require("assert");
const {
  sumAsSquares,
  openUrlsInOrder
} = require('../code/api.js');


describe('sumAsSquares()', function () {
  it("should accept falsey parameters, yielding 0", function () {
    assert(sumAsSquares() === 0);
  })
  it("should accept falsey parameters, yielding 0", function () {
    assert(sumAsSquares(false) === 0);
  })
  it("should accept an empty array, yielding 0", function () {
    assert(sumAsSquares([]) === 0);
  })
  it("should accept an array of integers", function () {
    assert(sumAsSquares([1,2]) === 5);
  })
  it("should accept an array of floats", function () {
    assert(sumAsSquares([1.5,2.5]) === 8.5);
  })
  it("should filter out non-numbers", function () {
    assert(sumAsSquares(['a', 'b', {}, [], ()=>{}, 1]) === 1);
  })
  it("should treat non-array input as undefined input: object", function () {
    assert(sumAsSquares({}) === 0);
  })
  it("should treat non-array input as undefined input: function", function () {
    assert(sumAsSquares(() => {}) === 0);
  })
  it("should not allow multiple plain numbers instead of array", function () {
    assert(sumAsSquares(1, 2,3) === 0);
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
