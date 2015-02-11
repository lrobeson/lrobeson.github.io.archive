// Used by load-grunt-config to define task aliases
module.exports = {

  // environment variable for tasks:
  // var environment = grunt.option('stage') || 'dev';
  'build': [
    'compass:stage', // compile production CSS
    'optimize', // optimize all the things
    'wraith' // capture screenshots
  ],

  // default tasks to run with 'grunt' command
  'default': [
    'concurrent:watch'
  ],

  // Optimization tasks, run with 'grunt optimize' command
  'optimize': [
    'optimize-css',
    'optimize-images',
    'optimize-markup',
    'optimize-js'
  ],

  // CSS testing & optimization tasks, run with 'grunt optimize-css'
  'optimize-css': [
    'newer:uncss',          // 1. remove unused CSS rules
    'newer:csslint:lax',    // 2. check it for errors
    'newer:combine_mq',   // 3. combine media queries
    'newer:cssmin'          // 4. minify it
  ],

  // Image optimization tasks, run with 'grunt optimize-images'
  'optimize-images': [
    'newer:imagemin',
    'newer:imageoptim',
    'newer:svgmin'
  ],

  // Markup optimization tasks, run with 'grunt optimize-markup'
  'optimize-markup': [
    'newer:htmlmin',
    'newer:uglify'
  ],

  // JavaScript testing & optimization tasks, run with 'grunt optimize-js'
  'optimize-js': [
    'newer:jshint'
  ],

  // Wraith: UI regression testing
  'wraith': [
    'shell:wraith'
  ]

};