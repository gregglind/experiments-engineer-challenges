// assert is like assert, but with some extra functions.
const assert = require("assert");
const {
  sumOfSquares,
  openUrlsInOrder
} = require('../code/api.js');


// part 1: foo
describe('sumOfSquares()', function () {
  describe('when valid input', function() {
      it("should return sum of squares", function () {
          assert(sumOfSquares([1, 2, 3]) === 14, 'Incorrect result');
      });

      describe('when empty array', function() {
        it('should return 0', function() {
          assert(sumOfSquares([]) === 0, 'incorrect result')
        });
      });

      describe('when non-array input', function() {
        it('should return 0', function() {
          assert(sumOfSquares() === 0, 'incorrect result')
          assert(sumOfSquares('') === 0, 'incorrect result')
          assert(sumOfSquares(0) === 0, 'incorrect result')
          assert(sumOfSquares({}) === 0, 'incorrect result')
        });
      });
  });

  describe('when invalid input', function() {
    it("should throw error", function () {
      try {
        sumOfSquares([1, 2, 3, 'chirag', 4])
      } catch (e) {
        assert(true)
        return
      }
      assert(false, 'did not throw error')
    });
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
