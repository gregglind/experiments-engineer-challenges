// assert is like assert, but with some extra functions.
const assert = require("assert");
const {
  foo,
  openUrlsInOrder
} = require('../code/api.js');


// part 1: foo
describe('foo()', function () {
  it("should do something", function () {
    assert(false, "foo has no real tests");
  })
  it("should do something else", function () {
    assert(false, "foo has no real tests");
  })
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
