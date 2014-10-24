// Used by load-grunt-config to define task aliases
module.exports = function(grunt) {

  // environment variable for tasks
  // var environment = grunt.option('stage') || 'dev';
  grunt.registerTask('build', [
    'compass:stage'
  ]);

  // default tasks to run with 'grunt' command
  grunt.registerTask('default', [
    'concurrent:first',
  ]);

  // Optimization tasks, run with 'grunt optimize' command
  grunt.registerTask('optimize', [
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
    'newer:svgmin'
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
  grunt.registerTask('wraith', [
    'shell:wraith'
  ]);

};
