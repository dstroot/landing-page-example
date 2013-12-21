## [Landing Page Example](http://dstroot.github.io/landing-page-example)

### Background

I wanted to create a reasonably nice landing page as a learning process.  Feel free to use and abuse as you see fit. 

The key files are only:

* HTML Page: `index.htm`
* Stylesheet (built with LESS): `/less/style.less`

### Technical Dependencies

* You need Nodejs installed if you want to build and run locally
* You need Grunt and other stuff indicated below for Live Reload

### Steps to build and run locally

1. Run `npm install`
2. Copy the latest Bootstrap .less source into `less/bootstrap`.
3. Type `node app` to start up the server
4. Browse to "http://localhost:3000" on your machine
5. Voila!

### Live Reload

1. Install the free LiveReload addin from the Chrome [Web Store](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
2. From the project directory run Gruntjs: `Grunt`.  This does a bunch of stuff but most importantly it starts the watch/reload process.
3. Fire up the server: `node app`.
4. Browse to "http://localhost:3000" on your machine
5. Click the LiveReload applet in Chrome to activate it.  The center dot should become solid.
6. Make some changes... boom!

### Credits and Resources

* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [jQuery](http://jquery.com/)
* [Animate CSS](https://daneden.me/animate/)
* [Google Fonts](http://www.google.com/fonts)
* [{less}](http://lesscss.org/)
