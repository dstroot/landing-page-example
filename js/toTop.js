/* ========================================================================
 * totop.js v0.0.1
 * ========================================================================
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013 Daniel J. Stroot
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * ======================================================================== 
 * 
 * Requirements: 
 *
 * - jQuery      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 * - FontAwesome <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" media="screen">
 * - CSS:
 *
 *     #toTop { 
 *       position: fixed; 
 *       bottom: 5px; 
 *       right: 25px; 
 *       font-size: 4em; 
 *       color: #ccc; 
 *       cursor: pointer;
 *       display: none;
 *     }
 *     #toTop:hover { 
 *       color: #666;
 *     }

 *  Asynch load pattern:
 *
 *  <script>
 *    $(document).ready(function() {
 *      // Async Load
 *      $.getScript("toTop.js")
 *      .done(function(script, textStatus) {
 *        console.log("ToTop loaded.");
 *        $().toTop();
 *      })
 *      .fail(function(jqxhr, settings, exception) {
 *        console.log("ToTop load failed.");
 *      });
 *    });
 *  </script>
 *
 * ======================================================================== */

(function ( $ ) {
 
    $.fn.toTop = function( options ) {
 
        var settings = $.extend({

            // These are the defaults:
            containerId:        'toTop',
            fontAwesomeIcon:    'fa-chevron-circle-up',
            minDistanceFromTop: 250,
            fadeInDelay:        750,
            fadeOutDelay:       250,
            scrollSpeed:        250,
            easingType:         'swing'  // swing or linear

            // NOTE: jQuery core ships with two easings: linear, which  
            // progresses at a constant pace throughout the animation, and  
            // swing (jQuery core's default easing), which progresses  
            // slightly slower at the beginning and end of the animation 
            // than it does in the middle of the animation. 

            // jQuery UI provides several additional easing functions, 
            // ranging from variations on the swing behavior to customized 
            // effects such as bouncing.  http://api.jqueryui.com/easings/

        }, options );

        var containerIdHash = '#' + settings.containerId;

        // First let's add the DOM element
        $('body').append('<a id="'+settings.containerId+'"><i class="fa '+settings.fontAwesomeIcon+' fa-4x"></i></a>');

        // Now append the styles
        $('head').append('<style>#toTop { position: fixed; bottom: 10px; right: 20px; font-size: 1em; color: #ccc; cursor: pointer; display: none; } #toTop:hover { color: #666; }</style>');

        $(window).scroll(function () {

            // Show the icon if the window has been scrolled down more than the minimum distance
            if ($(this).scrollTop() > settings.minDistanceFromTop) {
                $(containerIdHash).fadeIn(settings.fadeInDelay);
            } else {
                $(containerIdHash).fadeOut(settings.fadeOutDelay);
            }

            // Scroll to top on click
            $(containerIdHash).click(function (e) {
                e.preventDefault();
                $('html, body').stop().animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType);
            });

        });
    };

}( jQuery ));