# Example Progressive Web App

This is a currently a work in progress (hah)

## Web App Manifest

* Add `pwa-manifest.json` to `src/` directory
* Included in `.angular-cli.json` file `assets` array
* Declared in `index.html`

`pwa-manifest.json` will declare:
* icons to display for various sizes on mobile
* which page to load when launched from mobile desktop
* whether to display the mobile browser chrome

## Service Workers

* Add `@angular/service-worker` to `package.json` and install with `yarn` or `npm`
* Add `ngsw-manifest.json` to app root directory
* Add `"serviceWorker": true` in `.angular-cli.json`
* `ng build -prod` will now:
  * merge contents of `ngsw-manifest.json` with a file generated from contents of `dist/`
  * create `dist/worker-basic.min.js` file
  * generate `dist/sw-register.<hash>.bundle.js` to register our service worker
  * include `dist/sw-register.<hash>.bundle.js` in `index.html`

## Testing over non-TLS

Modern browsers will only allow you to install service workers on sites served over TLS.  

To test the site locally over http you need to access the site via `localhost` or `127.0.0.1` otherwise browsers like 
  Firefox or Chrome will not register the service workers.

## Tools

* http://realfavicongenerator.net

## Unsorted resources

References:

* https://github.com/angular/mobile-toolkit/blob/master/guides/service-worker.md
* https://github.com/angular/mobile-toolkit/tree/master/service-worker/worker
* https://developer.mozilla.org/en-US/Apps/Progressive
* https://developers.google.com/web/progressive-web-apps/
* https://developer.mozilla.org/en-US/docs/Web/Manifest

Examples:

* https://github.com/webmaxru/pwa-workshop-angular
* https://github.com/angular/angular-cli/commit/cb2e418
* https://github.com/angular/mobile-toolkit/issues/138
* https://github.com/laco0416/angular-plarform-server-example
