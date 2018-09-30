## Regarding Current Version

> 2. Verify that the addon as written does or does not follow the Specification.

* ✅ Basic behavior (focus noisy tab) **WORKS**
* ⚠️ "Use the recordData function in places where recording data would help the Product manager to make choices about the feature or understand if the feature is successful." **PARTIALLY WORKS**. The only data point currently recorded is button clicks.
* ❌ "Use the “Audio 16” icon from Firefox’s design guide" **DOES NOT WORK**. Icon is "Audio Mute" rather than "Audio"

## Recommended Changes

### Data collection

Consider collecting the following pieces of data in addition to simple button clicks:

* Number of noisy tabs when button is clicked
* Whether the click changed the focused tab (focusedBefore !== focusedAfter)
* How long since the last button click (to check for repeated click + mute sequences)
* "Mute Check": Whether focused tab is noisy 5 (or 10) seconds after the user clicked button (i.e. “did the user quiet the tab after focusing on it?”)
* "Close Check": Whether focused tab was still open 5 (or 10) seconds after the user clicked the button
* ⚠️ Domain name on click *and* on mute-check & close-check: are some domains more frequently muted or closed? 🚩 **ESPECIALLY HIGH PRIVACY RISK HERE**
* Unique ID/fingerprint of user: track button use across days/sessions
* Time between a tab starting to play audio and getting focused on via the button/muted/closed.

### Functionality

Possible improvements:

*   If no tab **besides the current tab** is noisy, disable button. There must be more than 1 tab and at least one noisy **background** tab to enable button
*   If multiple noisy tabs, cycle through them on click
*   Badge icon to show # of noisy tabs

"Maybe" ideas/alternate possibilities:

*   Cycle by *most recently started playing* so when you click the button it focuses on the tab that most recently became audible
*   ~~Include tabs that stopped playing audio in the last 5 seconds. This would help in the case of clicking the button just after audio playback stops and not being able to find the tab because it's no longer playing.~~ _(firefox already continues to consider a tab audible for a few seconds after playback has stopped)_
*   Right click for context menu to:
   *    **Mute all** noisy tabs (if this is possible)
   *    **Close all** noisy tabs
*   Right click for **list of all noisy tabs**, click on one to focus it
    *   Possibly: button in list to close that tab
    *   Possibly: button in list to mute that tab