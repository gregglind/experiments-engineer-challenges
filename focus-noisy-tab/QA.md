# Manual QA test plan

## Once

`npm install -g web-ext`

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
- Click 'Focus Noisy Tab' button.

#### action
- click Focus Tab Button

#### expect
- the `youtube` tab steals focus.

### 2.  ...


