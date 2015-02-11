// Concurrent: run multiple tasks in parallel
// https://npmjs.org/package/grunt-concurrent
//
// NOTE: this task works in conjunction with watch.js

module.exports = {

  // Watch for Pattern Lab and theme changes
  watch: {
    tasks : [
      'shell:patternlabWatch',   // use Pattern Lab's native Watch task for HTML & CSS changes
      'watch'                     // watch for all the things
    ],
    options: {
      logConcurrentOutput: true
    }
  }

};