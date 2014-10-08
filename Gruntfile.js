module.exports = function (grunt) {

  // 1. Define the configuration for all the tasks
  grunt.initConfig({

    // Combine Media Queries
    // https://github.com/frontendfriends/grunt-combine-mq
    combine_mq: {
      default_options: {
        expand: true,
        src: 'styles.css', // generated by cssmin
        dest: 'styles.css'
      }
    },

    // Compass: compile Sass files to CSS & (optionally) create debug files
    // https://github.com/gruntjs/grunt-contrib-compass
    compass: {
      dist: {
        options: {
          config: 'config.rb', // use default Compass config
          bundleExec: true, // tell Grunt's Compass to use Bundler (Gemfile)
          require: ['breakpoint', 'singularitygs', 'sass-globbing'] // tell Grunt's Compass which gems (like Breakpoint) you want to use
        }
      }
    },

    // Concurrent: run some tasks in parallel to speed up the build process
    // https://github.com/sindresorhus/grunt-concurrent
    concurrent: {
      dev: [
        'compass',
      ],
      optimize: [
        'compass',
        'htmlmin',
        'imagemin',
        'svgmin',
      ]
    },

    // CSS Lint: check for errors
    // https://github.com/gruntjs/grunt-contrib-csslint
    csslint: {
      strict: {
        options: {
          import: 2 // value of 2 will set it to become an error
        },
        src: ['css/*.css']
      },
      lax: {
        options: {
          import: false // value of false ignores the rule
        },
        src: ['css/*.css']
      }
    },

    // CSSmin: minify CSS
    // https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      combine: {
        files: {
          'css/styles.css' : ['css/styles.css'] // output CSS : input CSS
        }
      }
    },

    // HTML Inspector: validate HTML
    // https://github.com/gotdibbs/grunt-html-inspector
    // ADD TASK

    // HTMLmin: minify HTML
    // https://github.com/gruntjs/grunt-contrib-htmlmin
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          src: ['*.html', 'scripts/{,**/}*.html', 'views/**/*.html'],
        }]
      }
    },

    // Imagemin: minify images (JPGs & PNGs)
    // https://github.com/gruntjs/grunt-contrib-imagemin
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '/images',
          src: '**/*.{png,jpg,jpeg,gif}',
          dest: '/images'
        }]
      }
    },

    // JSHint: validate JavaScript
    // https://github.com/gruntjs/grunt-contrib-jshint
    // ADD TASK

    // Newer: configure another task to run with src files that are
    // either newer than the dest files or newer than the last
    // successful run
    // https://github.com/tschaub/grunt-newer
    // This task doesn't require any special configuration.
    // To use it, just add newer as the first argument when running other tasks, e.g., 'newer:csslint'.

    // Photobox: CSS regression testing / screenshots
    // https://github.com/lrobeson/grunt-photobox
    photobox: {
      task : {
        options: {
          indexPath       : 'testing/photobox/',
          urls            : [ 'http://www.grandchallenges.org/', 'http://stage.ggc.forumone.com/' ],
          // userName        : '',
          // password        : '',
          screenSizes    : [ '350', '960', '1200' ],
          template       : {
            name    : 'canvas',
            options : {
              highlightColor : '#0000ff',  // blue
              diffFilter     : 'grayscale' //  default == no filter | 'grayscale' | 'darker' | 'brighter'
            }
          }
        }
      }
    },

    // Play: sound notifications
    // https://github.com/astronaughts/grunt-play
    play: {
      compassComplete: {
        file: '/System/Library/Sounds/purr.aiff'
      },
      testingComplete: {
        file: '/System/Library/Sounds/hero.aiff'
      },
    },

    // SVGmin: minify SVGs
    // https://github.com/sindresorhus/grunt-svgmin
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '/images',
          src: '**/*.svg',
          dest: '/images'
        }]
      }
    },

    // Uglify: uglify source files
    // https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {
      dist: {
        files: {
          '/scripts/scripts.js': [
            '/scripts/scripts.js'
          ]
        }
      }
    },

    // UnCSS: remove unused CSS rules
    // https://github.com/addyosmani/grunt-uncss
    uncss: {
      dist: {
        // options: {
        //   csspath : 'css/',
        // },
        files: {
          'css/styles.css' : ['index.html'] // output CSS : comparison HTML
        }
      }
    },

    // Shell: run shell commands
    // https://github.com/sindresorhus/grunt-shell
    shell: {
      options: {
        stderr: false
      },
      wraith: {
        command: 'wraith capture default'
      }
    },

    // Watch: watch for changes and runs tasks based on the type of changed files
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      // 2. Configuration for task goes here.
      compass: {
        files: ['sass/*.scss', 'sass/**/*.scss'],
        tasks: ['compass', 'play:compassComplete']
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: [],
        options: {}
      },
      js: {
        files: ['/scripts/**/*.js'],
        tasks: ['optimize-js']
      }
    }

  });


  // 2. Tell Grunt what plug-ins we plan to use.

  // Load grunt tasks automatically from package.json
  // https://github.com/sindresorhus/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times.
  require('time-grunt')(grunt);


  // 3. Tell Grunt what to do when we type "grunt" into the terminal

  // default tasks to run with 'grunt' command
  grunt.registerTask('default', [
    'concurrent:dev',
    'watch'
  ]);

  // Optimization tasks, run with 'grunt optimize' command
  grunt.registerTask('optimize', [
    // 'concurrent:optimize',
    'optimize-css',
    'optimize-images',
    'optimize-markup',
    'optimize-js'
  ]);

  // CSS testing & optimization tasks, run with 'grunt optimize-css'
  grunt.registerTask('optimize-css', [
    'newer:uncss',        // 1. remove unused CSS rules
    'newer:csslint:lax',  // 2. check it for errors
    'newer:combine_mq',   // 3. combine media queries
    'newer:cssmin'        // 4. minify it
  ]);

  // Image optimization tasks, run with 'grunt optimize-images'
  grunt.registerTask('optimize-images', [
    'newer:imagemin',
    'newer:svgmin',
  ]);

  // Markup optimization tasks, run with 'grunt optimize-markup'
  grunt.registerTask('optimize-markup', [
    'newer:htmlmin',
    'newer:uglify'
  ]);

  // JavaScript testing & optimization tasks, run with 'grunt optimize-js'
  grunt.registerTask('optimize-js', [
    'newer:jshint'
  ]);

  // Wraith: UI regression testing
  grunt.registerTask('wraith'), [
    'shell:wraith'
  ]);

};
