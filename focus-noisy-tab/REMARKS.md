
# Remarks

Ways that the current Noisy Tabs feature could be improved or expanded:

1. It would be nice if the BrowserAction button icon could be disabled when there
   are no audible tabs, so the user can tell at a glance if the Browser application
   is making any noise, or if it's a different application. Enable/Disable probably
   makes the most sense as a way to convey this state, as clicking the button when
   there are no audible tabs does nothing, but you could be accomplish a similar
   effect by dynamically setting the icon. To implement this you would need to
   create an EventListener for tab property updates:
   https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
   When the audible property is changed, you would need to update the state of
   the button.
2. You could also display the number of noisy tabs, either on the BrowserAction
   Button (if there's room to do so legibly), or as hover text over the button with
   the getTitle/setTitle methods.
3. browser.tabs has a mute property that can be changed via the update API just as
   the active tab is being updated:
   https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update
   Perhaps it'd make more sense to mute noisy tabs instead of simply making the
   noisy tab active?
