// Aliases:
// Used by load-grunt-config to define task aliases
module.exports = {

  // environment variable for tasks:
  // var environment = grunt.option('stage') || 'dev';
  'build': [
    'compass:patternlabStage',
    'optimize',
    // 'shell:themeImagesCopy',
    // 'shell:themeSassCopy',
  ],

  // default tasks to run with 'grunt' command
  'default': [
    'concurrent:patternlab'
  ],

  // Optimization tasks, run with 'grunt optimize' command
  'optimize': [
    'optimize-css',
    // 'optimize-images',
    // 'optimize-markup',
    // 'optimize-js'
  ],

  // CSS testing & optimization tasks, run with 'grunt optimize-css'
  'optimize-css': [
    // 'uncss',          // 1. remove unused CSS rules
    // 'csslint:lax',    // 2. check it for errors
    'combine_mq',   // 3. combine media queries
    'cssmin'          // 4. minify it
  ],

  // Image optimization tasks, run with 'grunt optimize-images'
  'optimize-images': [
    'imagemin',
    'imageoptim',
    'svgmin'
  ],

  // Markup optimization tasks, run with 'grunt optimize-markup'
  'optimize-markup': [
    'htmlmin',
    'uglify'
  ],

  // JavaScript testing & optimization tasks, run with 'grunt optimize-js'
  'optimize-js': [
    'jshint'
  ],

  // Wraith: UI regression testing (image diff screenshots)
  'wraith': [
    'shell:wraith'
  ]

};