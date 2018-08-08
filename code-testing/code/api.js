// Part 1:  sumOfSquares

/**
 * Compute and return the sum of the squares of a iterable sequence of numbers.
 *
 * @param {Iterable} numbers - an iterable object whose iterator returns
 *     a sequence of zero or more numbers.
 *
 * @returns {number} the sum of the squares of the specified numbers.
 *   Returns 0 if the iterator is empty (such as an array of length 0).
 *   Returns NaN if any element of numbers is not a number or is the NaN
 *   value itself.
 *
 * @throws {TypeError} if numbers is omitted or is not iterable
 */
function sumOfSquares(numbers) {
  let sum = 0;
  for (let x of numbers) {
    if (typeof x !== "number") {
      return NaN;
    }
    sum += x * x;
  }
  return sum;
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

module.exports = {
  openUrlsInOrder,
  sumOfSquares
}


