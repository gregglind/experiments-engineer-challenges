# Focus Noisy Tab Browser Extension Challenge.

### Background

User Need: Easier to find Noisy Tabs.

It can be annoying when a background tab in Firefox plays audio,  especially when the user doesn’t know which tab it is.  After some research, the Firefox Product Manager wants to test a solution to help the user find noisy background tabs.

The Product Manager delegates a junior engineer to do the work.  The junior engineer builds a WebExtension to test the idea.

(Note:  Browser extensions are web applications that have some privileges of the browser. They use the [WebExtensions API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) to do this. One of the motivations for browser extensions is to improve the browsing experience for users.)


## Task - Repair / Improve a Simple Firefox Browser Extension

Improve the Firefox browser extension that focuses a noisy tab.

1. Read the existing [Functional Specification](./SPEC.md)

2. Verify that the addon as written does or does not follow the Specfication.

3. Submit a Pull Request that does the following:

    - Augments the [Functional Specification](./SPEC.md) to clarify addition questions and behaviours
    - Improves the [Manual QA Plan](QA.md) to handle more edge cases.
    - Either in code, or in a file `Remarks.md`, comment on what could be improved / changed / expanded.  (For inspriation, look at other methods on [`browserAction`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), and think of how they might improve the UI.

