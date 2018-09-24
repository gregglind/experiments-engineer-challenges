// Part 1:  sumOfSquares
/**
 * This function accepts an array as a parameter and calculates the sum of the squares of each
 * element of that array passed to it. Passing an undefined or no parameter will return 0.
 * Passing arrays that contain non-numbers will return a sum of NaN. Passing a non-array will
 * result in a TypeError.
 *
 * @summary Computes the sum of squares of an array of numbers.
 * @param {Array.number} a An array of numbers.
 * @returns {number} the sum of the squares of each element in the passed array.
 */
function sumOfSquares(a) {
  if (!Array.isArray(a)) {
    throw new TypeError("sumOfSquares requires a parameter that is an array.");
  }
  var b = a.map(function(el) {
    return el * el;
  });
  return b.reduce(function(s, el) {
    return s + el;
  }, 0);
}

// Part 2:  openTabsInOrder

// promised timeout.
const waitFor = ms => new Promise(r => setTimeout(r, ms));

// Simulate a tabOpening with random loading time.
async function fakeOpenUrl(url, loadingTime = 3 * Math.random()) {
  return waitFor(loadingTime).then(() =>
    console.log(`${url} opened after ${loadingTime}`)
  );
}

/** opensTabsInOrder
 *
 * There are two ways to "fix" this function based on what the expected behavior
 * is, and because it isn't documented, I had to pick one.
 *
 * 1. The expected behavior could be that the function waits for one tab to completely
 *    load before proceeding to the next tab, etc. In that case this function would not
 *    return until all tabs are open and loaded.
 * 2. The expected behavior could also be that this function should not wait for one
 *    tab to load before proceeding to open the next tab, in which case this function
 *    would return before all the tabs are loaded.
 *
 * Which behavior is correct has implications for the semantics of the return value, too.
 * Does the returned array represent URLs which we attempted to load, with no implication
 * of whether or not they were successful? Or does the return value represent only URLs that
 * were successfully loaded?
 *
 * For the purposes of this code challenge I assumed that the correct behavior was #2 above.
 * I assumed this because, if the expected behavior was #1, there was no need to even consider
 * sprinkling async/awaits through this - it could all be done synchronously.
 *
 * Making solution #2 work just required swapping the order of pushing URLs onto the return
 * value array and opening the URL (the two lines inside the forEach loop). If item #1 above
 * is the intended behavior, then the work.push/await inside the forEach loop below should be
 * swapped back to their original order, and the async/await inside the forEach loop should
 * be removed. -md 2018.09.24
 *
 * @param {Array.string} urlsArray - an array of URLs to open in successive tabs.
 * @returns An array of URLs that were opened, with a final "done"/true element.
 */
async function openUrlsInOrder(urlsArray) {
  const work = [];
  urlsArray.forEach(async url => {
    work.push(["url", url]);
    await fakeOpenUrl(url);
  });
  work.push(["done", true]);
  return work;
}

module.exports = {
  openUrlsInOrder,
  sumOfSquares
};
