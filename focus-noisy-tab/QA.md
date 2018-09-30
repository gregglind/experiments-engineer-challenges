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

### 1.  A noisy tab will steal focus from a non-noisy tab

#### setup
1. Open tab 1:  `youtube.com`
2. Click on a video to start playback
3. Open new tab 2

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- the `youtube.com` tab steals focus.

### 2.  A no-longer noisy tab will not steal focus from current tab

#### setup
1. Open tab 1:  `youtube.com`
2. Click on a video to start playback
3. Click "pause" on video to stop playback
4. Open new tab 2
5. Wait 5 seconds _(tab 1 is treated as audible for a few seconds after playback stops)_

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- new tab keeps focus, focus not changed to youtube.com tab.

### 3.  Given 2 noisy tabs, the leftmost one will get focus

#### setup
1. Open tab 1:  `youtube.com`
2. Click on a video to start playback on tab 1
3. Open new tab 2: `youtube.com`
4. Click on a video to start playback on tab 2

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- the **leftmost** `youtube.com` tab steals focus.

### 4.  If lone noisy tab already has focus, it keeps focus

#### setup
1. Open tab 1:  `example.com`
2. Open new tab 2: `youtube.com`
3. Click on a video to start playback on tab 2

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- Youtube tab keeps focus

### 5.  If leftmost noisy tab (among many) already has focus, it keeps focus

#### setup
1. Open tab 1:  `youtube.com`
2. Click on a video to start playback on tab 1
3. Open new tab 2: `youtube.com`
4. Click on a video to start playback on tab 2
5. Focus on tab 1

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- Tab focus does not change

### 6.  If no tab is noisy, do not change tab focus

#### setup
1. Open tab 1:  `example.com`
2. Open new tab 2: `example.com`

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- Tab focus does not change

### 7.  A noisy tab with recently paused audio will steal focus from current tab

#### setup
1. Open tab 1:  `youtube.com`
2. Click on a video to start playback
3. Click "pause" on video to stop playback
4. Open new tab 2

#### action
- click "Focus Noisy Tab" BrowserAction Button **Within 4 seconds of pressing pause in step 3**

#### expect
- the `youtube.com` tab steals focus.