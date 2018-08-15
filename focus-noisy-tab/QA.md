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
- Open tab:  `youtube.com`
- Open new tab.

#### action
- click "Focus Noisy Tab" BrowserAction Button

#### expect
- the `youtube` tab steals focus.

### 2.  ...


