# browser-locale

[![NPM](https://nodei.co/npm/browser-locale.png?global=true)](https://nodei.co/npm/browser-locale/)

normalizes weird cross browser issues and tries to return the users selected language in 100% client side JS by looking at various properties on the `window.navigator` object

note that another technique used to detect the browsers user-set language preference is to look at the `accept-language` header set on outgoing http requests, but this requires making a round trip XHR to a server, which is what [jquery-browser-language](https://github.com/dansingerman/jQuery-Browser-Language) does.

however, it seems that as of 2014 you can get the user specified language without making a HTTP request (see `index.js` for details)

## installation

```
npm install browser-locale
```

use [browserify](http://browserify.org) or [browserify-cdn](http://wzrd.in) to package it for browser use

## usage

```js
var locale = require('browser-locale')()
// locale will be e.g. en-US or undefined if it could not be detected (e.g. you are in a super weird browser)
```
