module.exports = function(grunt) {

  grunt.initConfig({
 
    pkg: grunt.file.readJSON('package.json'),

    // Clean-up Task configuration.
    clean: {
      dist: ['css/*', 'js/*.min.js']
    },

    // HTML Validation Task Configuration
    validation: {
      options: {
        charset: 'utf-8',
        doctype: 'HTML5',
        failHard: true,
        reset: true,
        relaxerror: [
          'Bad value X-UA-Compatible for attribute http-equiv on element meta.'
          // 'Element img is missing required attribute src.'
        ]
      },
      files: {
        src: ['*.html']
      }
    },

    // JS Validation Task Configuration
    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      js: {
        src: ['js/toTop.js']
      }
    },

    // JS Minification
    uglify: {
      options: {
        mangle: true,
        report: 'min'
      },
      js: {
        files: {
          'js/toTop.min.js': ['js/toTop.js']
        }
      }
    },

    // LESS Configuration
    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'css/style.css.map',
          sourceMapFilename: 'css/style.css.map'
        },
        files: {
          'css/style.css': 'less/style.less'
        }
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'css/style.min.css': 'css/style.css'
        }
      }
    },

    // CSS Lint Configuration
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['css/style.css']
    },

    //Watch and LiveReload configuration
    watch: {
      js: {
        files: ['js/*.js'],
        //tasks: ['concat:js', 'uglify:js'],
        //tasks: ['uglify:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['less/*.less', 'less/bootstrap/*.less'],
        //tasks: ['less:style'],
        options: {
          livereload: true,
        }
      },
      html: {
        files: ['*.html'],
        //tasks: ['validation'],
        options: {
          livereload: true,
        }
      }
    }

  });


 /*  This section is where we require the necessary
  *  plugins.  We can list each like so:
  *
  *  grunt.loadNpmTasks('grunt-contrib-concat');
  *
  *  Or, we can be more elegant and just tell Grunt
  *  to read our package.json devDependencies:
  */
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});



 /*  
  *  This section is where we setup the Grunt tasks
  *
  */

  // HTML validation task
  grunt.registerTask('validate-html', ['validation']);

  // Compile LESS
  grunt.registerTask('compile-less', ['less']);

  // Process Javascript
  grunt.registerTask('process-js', ['jshint', 'uglify']);

  // Lint CSS
  grunt.registerTask('validate-css', ['csslint']);

  // Default Task (drives LiveReload)
  grunt.registerTask('default', [ 'clean', 'less', 'validation', 'process-js', 'watch' ]);

};
