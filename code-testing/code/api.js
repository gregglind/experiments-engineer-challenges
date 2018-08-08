

// Part 1:  foo
function foo(a) {
  a = a || [];
  var b = a.map(function(el) { return el * el });
  return b.reduce(function(s, el) { return s + el }, 0);
}


// Part 2:  openTabsInOrder

// promised timeout.
const waitFor = (ms) => new Promise(r=>setTimeout(r,ms));

// Simulate a tabOpening with random loading time.
async function fakeOpenUrl (url, loadingTime=3*Math.random()) {
  return waitFor(loadingTime).then(()=>console.log(`${url} opened after ${loadingTime}`));
}

/**
 * Simulate opening an array of URLs sequentially, but asynchronously.
 *
 * @param {Array<string>} - an array (or iterable) of URLs
 * @returns {Array<Array<string>>} - a data structure representing the
 *   simulated loading of the URLs.
 */
async function openUrlsInOrder(urlsArray) {
  const work = [];
  for(let url of urlsArray) {
    await fakeOpenUrl(url);
    work.push(['url',url]);
  }
  work.push(['done',true]);
  return work;
}

module.exports = {
  openUrlsInOrder,
  foo
};


