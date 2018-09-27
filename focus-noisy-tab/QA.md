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

### 1. A noisy tab will steal focus from a non-noisy tab

#### setup
- Open tab: `youtube.com`
- In the youtube.com tab, play any video; ensure the tab shows the speaker icon
- Open new tab.

#### action
- click "Focus Tab" Button

#### expect
- the `youtube` tab steals focus.

### 2. A noisy tab in which the source of the noise is paused/muted/stopped will no longer steal focus

#### setup
- Open tab: `youtube.com`
- In the youtube.com tab, play any video; ensure the tab shows the speaker icon
- Open new tab.
- In the youtube.com tab, pause the video
- focus on the new tab

#### action
- Ensure the speaker icon no longer shows for the youtube tab
- click "Focus Tab" Button

#### expect
- Focus stays on the new tab.
