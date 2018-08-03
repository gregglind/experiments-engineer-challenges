function recordData(area, event, fields={}) {
  console.log("recordData", area, event, fields);
}

function getNoisyTabs() {
  return browser.tabs.query({"audible": true});
}

browser.browserAction.onClicked.addListener(async (tab) => {
  // get some noise tabs.
  recordData('button', 'clicked');
  const tabs = await getNoisyTabs();
  const firstNoisy = tabs[0];
  // handle 0 noisy tabs
  if (firstNoisy) {
    browser.tabs.update(firstNoisy.id,{active: true})
  }
});
