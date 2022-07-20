# Legacy app integration POC

## Author: Adam Winick, Nisheed J

Stack:

The repo is 3 apps in 1:

1. Server: Express JS
2. Parent App: React v16 + Redux
3. Child App: React v18 + Typescript + MobX

POC:
Prove that we can host 1 modern React App (child), in an iFrame, that is hosted inside a legacy React App(parent).  The parent app is using Redux, and child app is using MobX and the two state machines have custom side effect management to subscribe to the BrowserChannelAPI which acts as a universal same origin context regardless of browser tab, window or frame/inline frame.

To run:

```js
cd server && yarn && node index
```
