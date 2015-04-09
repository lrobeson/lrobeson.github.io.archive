// Concurrent:
// Run multiple tasks in parallel
// https://npmjs.org/package/grunt-concurrent

module.exports = {

  patternlab: {
    tasks : [
      'connect',
      'shell:patternlab',
      'watch'
    ],
    options: {
      logConcurrentOutput: true
    }
  }

};