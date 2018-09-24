// Changed from vanilla node assert to chai to take advantage of assert.isNaN.
const assert = require("chai").assert;
const { sumOfSquares, openUrlsInOrder } = require("../code/api.js");

// part 1: sumOfSquares
describe("sumOfSquares()", function() {
  it("calculates the sum of squares for integers", function() {
    assert.equal(sumOfSquares([1, 2]), 5);
  });
  it("calculates the sum of squares when the inputs are negative", function() {
    assert.equal(sumOfSquares([-2, -3]), 13);
  });
  it("returns zero when an empty array is passed to it", function() {
    assert.equal(sumOfSquares([]), 0);
  });
  it("returns NaN when an array of strings is passed to it", function() {
    assert.isNaN(sumOfSquares(["a", "b"]));
  });
  it("returns NaN when an array of objects is passed to it", function() {
    assert.isNaN(sumOfSquares([{ a: "1" }]));
  });
  it("throws a TypeError when no param is passed to it", function() {
    assert.throws(function() {
      sumOfSquares();
    }, TypeError);
  });
  it("throws a TypeError when undefined is explicitly passed to it", function() {
    assert.throws(function() {
      sumOfSquares(undefined);
    }, TypeError);
  });
  it("throws a TypeError when a single number is passed to it", function() {
    assert.throws(function() {
      sumOfSquares(3);
    }, TypeError);
  });
});

// part 2:  openUrlsInOrder
describe("openUrlsInOrder()", function() {
  it("should open urls in order", async function() {
    const urls = ["url1", "url2", "url3", "url4"];
    const expected = [
      ["url", "url1"],
      ["url", "url2"],
      ["url", "url3"],
      ["url", "url4"],
      ["done", true]
    ];

    var result = await openUrlsInOrder(urls);

    // 3. ASSERT
    assert.deepEqual(result, expected);
  });
});
