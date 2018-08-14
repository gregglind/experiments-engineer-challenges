

// Part 1:  foo
/**
 * Returns the sum of all the squared values
 * @function
 * @param {Object[]} array - Array of objects
 * @returns {number} - The sum of the squared values
 * @throws {Error} if square is NaN
 */
function sumOfSquares(array) {
  array = Array.isArray(array) ? array : [];

  return array.map(function(val) {
    const product = val * val;

    // Note: Checking here because, we're allowing multiplication
    // of strings of numbers. i.e. ("5" * "5") === 25
    if (Number.isNaN(product)) {
      throw new Error('val * val resulted in NaN');
    }

    return product
  }).reduce((sum, n) => sum + n, 0);
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

  for (let i = 0; i < urlsArray.length; i++) {
    const url = urlsArray[i];
    await fakeOpenUrl(url);
    work.push(['url',url]);
  }

  work.push(['done',true]);
  return work;

}

module.exports = {
  openUrlsInOrder,
  sumOfSquares
}


