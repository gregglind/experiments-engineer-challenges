# Functional Specification for the Focus Noisy Tab Extension

Using the assets suggested below in the “Assets” section, implement a [`BrowserAction`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction) with this behavior:

- When the user clicks on the `BrowserAction` button,

  - If there are any tabs playing audio ("noisy tabs"),
    - If the **first** (leftmost) noisy tab is not already focused,
      **Focus that tab** (bring it to the foreground)
    - If the **first** (leftmost) noisy tab is **already focused**,
      noop (do nothing) _(current behavior calls .focus on the already focused tab, which is functionally the same but a superfluous call)_
  - If there are no tabs playing audio,
    noop (do nothing)

- Use the `recordData` function in places where recording data would help the Product manager to make choices about the feature or understand if the feature is successful.

## Definitions

* Noisy Tab : a tab that has audio playing, i.e. a tab included in the results of `browser.tabs.query({"audible": true});`. NB: a tab continues to be considered "Noisy" for a few seconds after audio playback is stopped.

## Assets

### Icon 

- Use the [“Audio 16” icon](https://design.firefox.com/icons/viewer/#audio) from Firefox’s design guide for the browserAction icon.
