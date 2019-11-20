# A Notebook

This here, as above, is a collection of thoughts, links, and ideas, as well as being a little tester for [PWA](https://developers.google.com/web/progressive-web-apps)-enabled (Progressive Web App) static sites.

It's made using [jekyll/jekyll](https://github.com/jekyll/jekyll) with some small edits (like the addition of a [service worker](https://github.com/jpwilliams/notebook/blob/master/sw.js)) to allow the site to load _very_ reliably, _very_ quickly. Not only does this mean that the site can be viewed in full offline, but also that it can be loaded as a native app on Android, iOS, and Windows. It satsifies all the basic requirements of a PWA:

- Site is served over HTTPS (via [GitHub Pages](https://pages.github.com/))
- Pages are responsive on tablets & mobile devices
- All app URLs load while offline
- Metadata provided for Add to Home screen (via [manifest.json](https://github.com/jpwilliams/notebook/blob/master/manifest.json))
- First load very (<5s) fast even on 3G
- Site works cross-browser
- Page transitions don't feel like they block on the network
- Each page has a URL
- Site uses cache-first networking

The plan for this is to somewhat over-engineer it to cover the features of a PWA-enabled single-page application.
