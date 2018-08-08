# Functional Specification for the Focus Noisy Tab Extension

This extension is a simple
[`BrowserAction`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction)
that displays a button in the toolbar and defines a background script
to handle clicks on that button.

## Appearance

When this extension is installed, the browser action button should be
displayed in the toolbar using the [“Audio”
icon](https://design.firefox.com/icons/viewer/#audio) from Firefox’s
design guide. The extension should use this same icon in the
about:addons page. Hovering the mouse over the browser action button
should display the string "Focus Noisy Tab".

## Behavior

When the user clicks on the `BrowserAction` button:

- If no tabs are currently audible, do nothing. (For the purposes of
  this spec "audible" means that content in the tab is playing
  audio and the tab has not been muted. A tab can still be audible
  even if the user has set their system volume to 0.)

- If one tab is currently audible, then focus that tab.

- If more than one tab is currently audible, then focus the audible
  tab that is closest to, and to the left of, the current tab. If
  there is no such tab then focus the rightmost audible
  tab. (Assuming an LTR writing direction for 'left' and 'right'
  here.) These focusing rules mean that if the user clicks multiple
  times on the browser action button we cycle through the audible
  tabs in more recent to less recent order. (The implicit hypothesis
  here is that this right-to-left tab cycling order will allow the
  user to find the offending tab most quickly.)

- (Implementation note: the requirements above about cycling through
  tabs in right-to-left order assume that `browser.tabs.query()`
  returns tabs in the order that they appear to the user. Both
  Chromium and MDN documentation leave the order unspecified. So if
  the tabs returned in a query are not ordered, we should sort them
  by their `lastAccessed` property and cycle tabs in order from
  most-recently used to least recently used, even though this may
  not match their visual order in the window.)

- If the user has multiple Firefox windows open, then each window
  should display the browser action button, but the button should
  only affect the tabs in that one window. Users might sometimes
  want to find a noisy tab regardless of what window it is in, so
  we may want to revisit this design decision. But for now it feels
  that switching from one window to another might carry too many
  unintended consequences. For example, it would probably be a
  mistake for this extension to switch focus from a private window
  to a non-private window or vice versa.

- When any same-window tabs other than the current tab are audible,
  the BrowserAction should display a badge that indicates how many of
  these tabs there currently are in the window. If the badge is
  visible, then clicking on the browser action will change the current
  tab, and when the badge is not visible, clicking on the button will
  have no effect. So we expect that the appearance of the badge will
  be a helpful prompt for the user. (The
  `browser.tabs.onUpdated.addListener()` and
  `browserAction.setBadgeText()` should enable us to implement this
  feature.)

## Telemetry

The implementation of this extension should send telemetry (using the
`recordData` stub function for the time being) to help us understand
how the extension is being used. Assume for now that recordData()
automatically includes a timestamp and provides some way of
aggregating telemetry by user browsing session.

- Whenever the browser action button is clicked, we should record
  the id of the currently active tab and the number of
  noisy tabs (i.e. the number displayed in the badge). If we see the
  button being clicked frequently when there are no noisy tabs that
  may be a signal that users are misunderstanding our icon.

- We should also monitor changes to the `mutedInfo` state (with
  `browser.tabs.onUpdated.addListener()` again) of the user's tabs
  and send telemetry when a tab is muted or unmuted within one
  minute of any click on the browser action button. If we see users
  muting tabs soon after clicking on the browser action button, that
  will be a strong signal to us that our extension is being used as
  intended.

- Let's also record any changes to the active tab (recording the tab
  id of the new active tab) that occur within one minute of any use of
  browser action button. For simplicity and completeness, we can
  include the active tab changes caused by our extension. The goal
  here is to understand how and how soon our users return to the tab
  they were on after being interrupted by a noisy tab and using the
  extension. If we see multiple rapid tab changes that may indicate
  that the user is having trouble getting back to the tab that was
  originally in use. And in that case we might want to consider a
  design that takes the user to a noisy tab on the first button click
  and then returns the user to the previous tab on the second button
  click. If we see that users commonly click on the button, mute a tab
  and then quickly return to the original tab, the we might want to
  write another extension or change this one to just mute the noisy
  tab directly without focusing it first.

## Privacy Considerations

Since this extension will be doing fairly aggressive telemetry
collection, we should ensure that it runs with no extra
permissions. In particular, if we do not request the 'tabs'
permission, then the extension will not be able to see the URLs of the
user's tabs, which seems like an important safeguard against
accidental collection of sensitive information.
