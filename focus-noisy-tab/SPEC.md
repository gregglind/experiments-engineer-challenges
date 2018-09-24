# Functional Specification for the Focus Noisy Tab Extension

Using the assets suggested below in the “Assets” section, implement a [`BrowserAction`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction) with this behavior:

- When the user clicks on the `BrowserAction` button,

  - If one or more tabs are playing audio,
    **Focus the first tab** that is playing audio  (bring it to the foreground)

- Use the `recordData` function in the following places, where recording data would help the Product manager to make choices about the feature or understand if the feature is successful:
  - Whenever the button is clicked.
  - Proposal: When the button is clicked, indicate in the event payload (in the fields object) how many tabs are playing audio at the time it was clicked (note: the current implementation does not do this).

## Assets

### Icon 

- Use the [“Audio 16” icon](https://design.firefox.com/icons/viewer/#audio) from Firefox’s design guide for the browserAction icon.
