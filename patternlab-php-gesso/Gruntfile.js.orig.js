module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Compiles Sass to CSS and generates debug files if requested
    compass: {
      options: {
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      patternlab: {
        sassDir: 'patternlab/source/sass',
        cssDir: 'patternlab/css',
        generatedImagesDir: 'patternlab/images',
        imagesDir: 'patternlab/images',
        javascriptsDir: 'patternlab/js',
        fontsDir: 'patternlab/fonts',
      },
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      patternlab: {
        tasks: [
          'shell:patternlab',
          'watch'
        ],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    shell: {
      patternlab: {
        command: [  // generate patterns & enable live reloading
          'php patternlab/core/builder.php -gp',
          'php patternlab/core/autoReloadServer.php'
        ].join('&&')
      }
    },

    // Watch files for changes and runs tasks based on the changed files
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      html: {
        files: ['patternlab/source/_patterns/**/*.mustache', 'patternlab/source/_patterns/**/*.json', 'patternlab/source/_data/*.json'],
        tasks: ['shell:patternlab'],
        options: {
          livereload: true,
        }
      },
      patternlab: {
        files: ['patternlab/source/sass/**/*.scss'],
        tasks: ['compass:patternlab'],
        options: {
          livereload: true,
        },
      }
    },

  });

  grunt.registerTask('patternlab', [
    'concurrent:patternlab',
    'shell:patternlab',
    'watch'
  ]);

};
