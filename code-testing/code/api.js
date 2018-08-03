

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
  foo
}


