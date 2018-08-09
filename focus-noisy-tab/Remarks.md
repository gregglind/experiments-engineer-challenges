Since I'm not able to comment on the current implementation in a code
review tool, I'll leave my comments in this file instead

## webextension/manifest.json

- Please remove the permissions grant. According to the docs, we
  don't actually need the 'tabs' permission for any of the actions
  we're performing. Having the tabs permission let's us spy on what
  sites a user is visiting and it is easier to protect a user's
  privacy if we can't invade their privacy in the first place.

- browser_action.default_icon is using the "Audio Mute" icon, but the
  spec calls for the "Audio" icon instead. Please switch. You
  should also add 32x32 and 64x64 pixel versions of the icon for
  retina displays and for when the browser action is displayed in a
  menu instead of a toolbar.

- Add an `icons` property to the manifest and specify 48x48 and 96x96
  pixel versions of the Audio icon for use in the about:addons page.

## webextension/icons/*.svg

- Delete the unused "Audio Mute" svg file from this directory.

- The Audio.svg file here has a hardcoded width and height of 16 which
  prevents Firefox from resizing it on the about:plugins page. If you
  edit the file to change the width and height to 96 (don't change the
  viewBox, though!) it should make the icon more flexibly resizable.

## webextension/background.js

I've left comments directly in this file marked `TODO`.

## Other issues

- I'd like to see if we can get a designer to consult with us about
  the icon we're using for this extension. It looks just like the icon
  that is displayed in the tab header for a tab that is playing sound,
  and I think that might be confusing for users. But the "Audio Mute"
  icon is no better: I always struggle to understand whether that icon
  is a state indicator saying the sound is currently muted or an
  action button saying "click here to mute". Ideally we want an icon
  that captures the action of finding and focusing noisy tabs, but
  how we can render that at 16x16 I do not know!

- We should experiment with "default_area":"tabstrip" for our browser
  action. Since it is for moving among tabs, maybe it belongs on the
  tab strip (with the + and > buttons) instead of on the
  toolbar. Unfortunately the tab strip is sometimes light and sometimes
  dark so we might need a more versatile or theme-sensitive icon.
