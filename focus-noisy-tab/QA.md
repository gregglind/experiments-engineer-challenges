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

### 1.  The first noisy tab will steal focus from a non-noisy tab

#### setup
- Open tab:  `youtube.com`
- Click play on the first video.
- Open tab:  `vimeo.com`
- Click play on the first video.
- Open new tab.

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- the `youtube` tab steals focus.

### 2.  Clicking the BrowserAction Button when there are no noisy tabs causes nothing to happen to the UI.

#### setup
- Open tab.

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- the browser UI to not change

### 3.  Data is recorded to indicate to product management if/how this feature is used.

#### 3.1 Clicking the BrowserAction Button causes recordData to be invoked

#### setup
- Open tab.

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- console.log to render  ("recordData", "button", "clicked")

#### 3.2  Clicking the BrowserAction Button causes recordData to be invoked w/ number of audible tabs.

There has been a proposal to update the spec to include the number of audible tabs (see SPEC.md). If this
proposal is accepted, then replace test 3.1 with the following:

#### setup
- Open tab:  `youtube.com`
- Click play on the first video.
- Open new tab.

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- console.log to render  ("recordData", "button", "clicked", {audibleTabCount: 1})



