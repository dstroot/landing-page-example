## [Landing Page Example](http://dstroot.github.io/landing-page-example)


[![Dependency Status](https://david-dm.org/dstroot/landing-page-example.png)](https://david-dm.org/dstroot/landing-page-example)
[![devDependency Status](https://david-dm.org/dstroot/landing-page-example/dev-status.png)](https://david-dm.org/dstroot/landing-page-example#info=devDependencies)



### Background

I wanted to create a reasonably nice landing page as a learning process.  Feel free to use and abuse as you see fit.

The key files are only:

* HTML Page: `index.htm`
* Stylesheet (built with LESS): `/less/style.less`

### Technical Dependencies

* [Nodejs](http://nodejs.org/)
* [Gruntjs](http://gruntjs.com/)

### Steps to build and run locally

1. Clone this repository. `git clone https://github.com/dstroot/landing-page-example.git && cd landing*`
2. Run `npm install`.
3. Copy the latest Bootstrap .less source into `less/bootstrap` (I don't keep it in the repository).
4. You need to have the Grunt CLI installed.  If you don't you can install it with: `npm install -g grunt-cli`.
5. Type `grunt` to [do a bunch of stuff and] start up the server.
6. Browse to "http://localhost:3000" on your machine.
7. Voila!  Type `ctrl+c` to exit.

### Live Reload

1. Install the free LiveReload addin from the Chrome [Web Store](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en-US)
2. **When Grunt is serving the page:** Click the LiveReload applet in Chrome to activate it.  The center dot should become solid.
3. Make some changes to the code and save the changes...and...boom!

### Credits and Resources

* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [jQuery](http://jquery.com/)
* [Animate CSS](https://daneden.me/animate/)
* [Google Fonts](http://www.google.com/fonts)
* [{less}](http://lesscss.org/)
* [David](https://david-dm.org/)

#### Build Tooling

* [Sublime Text](http://www.sublimetext.com/)
* [Nodejs](http://nodejs.org/)
* [Gruntjs](http://gruntjs.com/)
* [Bower](http://bower.io/)

Bower has one minor quirk that you need to be aware of – it will install components into a “bower_components” directory by default, which unfortunately is not under the public directory. I suggest you create a directory called “vendor” under “public/js.” You can do this by running the command `mkdir public/js/vendor.` Next, in the app directory, create a plain text file called “.bowerrc” that contains:

`{ "directory" : "public/js/vendor" }`

This configuration file will tell Bower to install tools into the “public/javascripts/vendor” directory.

#### Design and Utilities

* [Picturefill](https://github.com/scottjehl/picturefill) Responsive Images
* [Scrollto](https://github.com/flesler/jquery.scrollTo) Scroll to parts on the page
* [Leaflet](https://github.com/Leaflet/Leaflet) Open Street Map maps
* [Swipe](https://github.com/bradbirdsall/Swipe) Swipable carousel

#### Parallax

* [Stellar.js](https://github.com/markdalgleish/stellar.js) Simple parallax library
* [Parallax.js](http://wagerfield.github.io/parallax/) very cool!













