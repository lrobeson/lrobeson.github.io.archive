// Watch:
// Watch for changes and runs tasks based on the type of changed files
// https://github.com/gruntjs/grunt-contrib-watch

module.exports = {
  configFiles: {
    files: [ 'Gruntfile.js', 'grunt/*.js' ],
    options: {
      reload: true
    }
  },

  // recompile CSS using Compass
  patternlabSass: {
    files: [
      'source/sass/**/*.scss'
    ],
    tasks: [
      'compass:patternlabDev'
    ],
    options: {
      interrupt: true,
      spawn: false,
    }
  },

  // reload Pattern Lab if CSS, markup, or data changes
  reload: {
    files: [
      'source/css/styles.css', // don't reload until final CSS is compiled (prevent multiple reloads)
      'source/_data/**',
      'source/_patterns/**',
    ],
    options: {
      spawn: false,
      livereload: true,
      livereloadOnError: false,
    }
  }

};
