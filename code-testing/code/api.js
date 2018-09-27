/**
 * Simple helper function for reducing an array of numbers
 * by summing the squares of each element in the array.
 *
 * Note: this function does not take multiple plain numbers as input.
 *
 * @param {Array<Number>} the numbers to sum as squares as array.
 */
function sumAsSquares(input=[]) {
  if (input.length===0) return 0;

  if (!(input instanceof Array)) return 0;

  // We could use a filter(nan).map(square).reduce,
  // but as per https://jsperf.com/chained-vs-looped
  // using a straight loop is faster.
  let sum = 0;
  input.forEach(v => {
    v = parseFloat(v)**2;
    if (isNaN(v)) return;
    sum += v;
  });
  return sum;
}


const asyncDelay = (ms) => new Promise(r => setTimeout(r, ms));

async function fakeOpenUrl(url, delay=Math.random()*100) {
  await asyncDelay(delay);
  return ["url", url];
}

/**
 * Opens an array of URLs, loading one URL at a time
 * @returns workDo
 */
async function openUrlsInOrder (urlsArray) {
  const work = [];
  for (const url of urlsArray) {
    const status = await fakeOpenUrl(url);;
    work.push(status);
  }
  work.push(['done',true]);
  return work;
}

module.exports = {
  sumAsSquares,
  openUrlsInOrder
}


