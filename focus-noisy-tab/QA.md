# Manual QA test plan

## Once

1. Install a Firefox.

2. `npm install -g web-ext`

## Once per testing session

```
cd webextension
web-ext run
```

## Tests

### 1. Browser action button in toolbar

- Verify that the audio icon appears as expected in the toolbar and
  that when you hover over it the tooltip reads "Focus Noisy Tab"

### 2. Extension icons

- Open about:addons
- Click "Extensions"
- Verify that the "focus-noisy-tab" extension is listed and that the
  audio icon is displayed (not the generic jigsaw puzzle piece icon)
- Click the "More" link
- Verify that a larger version of the audio icon is displayed

### 3. No noisy tabs

- At this point you should have one silent tab open
- Verify that browser action button has no badge
- Verify that clicking the browser action button does nothing

### 4. One noisy tab

- Open a new tab (you should have two tabs now)
- Load https://www.youtube.com/watch?v=dQw4w9WgXcQ (if the video ends
  during the test, simply replay it.)
- Wait for the video to begin playing
- Switch back to the first about:addons tab
- Verify that the browser action button has a badge with the number 1
- Click the browser action button
- Verify that you were switched to the youtube tab
- Verify that the browser action button badge is gone
- Verify that clicking the browser action button has no effect

### 5. Muted tab

- Switch back to the about:addons tab
- Verify that the browser action button badge is back and reads "1".
- Mute the youtube tab by clicking the Mute button in the tab
- Verify that the badge goes away
- Verify that clicking on the browser action button does nothing.

### 6. Three noisy tabs

- Close the youtube tab, since the video is probably almost done.
- Open three new tabs.
- Load https://www.youtube.com/watch?v=vWwgrjjIMXA into all new tabs.
- You should have four tabs now: about:addons and three youtube.
  tabs. The 4th tab (the rightmost youtube tab) should be focused.
- Verify that the browser action badge reads "2".
- Verify that clicking the browser action button focuses the third tab.
- Verify that clicking the button again focuses the second tab.
- Verify that clicking the button again focuses the fourth tab.
- Click on the first tab to focus it.
- Verify that the badge now reads "3".
- Verify that clicking the button focuses the fourth tab.
- Drag the about:plugins tab to the 3rd position and focus it.
- Verify that clicking the button focuses the 2nd tab.

### 7. Two windows

- Restart the videos in the youtube tabs so that they continue to play.
- Verify that you have 4 tabs open: youtube, youtube, about:addons, and
  youtube, that tab #2 is focused, and that the badge displays "2".
- Drag tab #4 out of the tab bar so that it becomes a window of its own.
- Verify that the badge in the original window now displays "1".
- Verify that the new window has an audio icon in the toolbar and that
  it does not have a badge.
- Drag tab #3 (about:addons) out of the original window and add it to
  the new window, leaving that tab focused.
- Verify that the new window's browser action button now has a badge
  that reads "1".
- Verify that clicking the browser action button in the new window
  switches focus to the youtube tab in that window.
- Verify that the badge in the new window is gone
- Verify that any additional clicks on the browser action button in
  the new window have no effect and, in particular, that focus does not
  switch back to the original window.
- Focus the original window
- Verify that clicking the browser action button in the original
  window repeatedly switches focus back and forth between the two
  youtube tabs in that window and does not switch focus to the new window.
