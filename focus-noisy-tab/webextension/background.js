function recordData(area, event, fields={}) {
  console.log("recordData", area, event, fields);
}

function getNoisyTabs() {
  // Note that this is not failsafe: this query is tied to the
  // value of browser.tabs.delayHidingAudioPlayingIconMS in
  // about:config, which is set to 3000ms by default.
  // This value does not just control the hiding of the icon,
  // it actually controls the audible/muted value for tabs as
  // well, so it might be worth investigating whether this
  // is a bug to file, whether we need to inform the user
  // about this setting, and if we do, whether (and how) to
  // tell them to update this value for a more responsive
  // web extension.
  return browser.tabs.query({
    "audible": true,
    "muted": false
  });
}

browser.browserAction.onClicked.addListener(async (tab) => {
  recordData('button', 'clicked');

  // get some noise tabs.
  const tabs = await getNoisyTabs();

  if (tabs.length === 0) {
    // If the user invoked this functionality but there are no
    // noisy tabs, either they're hitting a problem we did not
    // account for, or our code isn't catching sources of
    // "noisiness". Either way, we need this data:
    recordData('query', 'no noisy tabs found');
  }

  // This will let us gather some stats on how many tabs are
  // noisy when users feel the need to use this feature.
  // Activations when there's only 1 vs. when there's more than
  // one lets us gain some insight into possible "why"s of the
  // user electing to use this feature.
  recordData('query', `${tabs.length} noisy tabs found`);

  const firstNoisy = tabs[0];

  // shift focus to this tab
  browser.tabs.update(firstNoisy.id,{active: true})
});
