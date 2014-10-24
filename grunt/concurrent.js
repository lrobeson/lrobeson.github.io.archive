// Concurrent: run multiple tasks in parallel
// https://npmjs.org/package/grunt-concurrent

module.exports = {

  first: ['watch'],
  second: ['uglify', 'imagemin']

};
