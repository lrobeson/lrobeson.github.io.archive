// Gruntfile v2
// http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
//
// Grunt refresher:
// 1. Define the configuration for all the tasks
//    - handled by .js files in grunt directory
//
// 2. Tell Grunt what plugins we plan to use
//    - handled by this file
//
// 3. Tell Grunt what to do when we type "grunt" into the terminal
//    - handled by aliases.js in grunt directory

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times.
  require('time-grunt')(grunt);

  // Load configuration file(s) from grunt directory to keep this file simple
  // This plugin uses load-grunt-tasks so it doesn't need to be added
  require('load-grunt-config')(grunt);

};
