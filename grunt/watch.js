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


  dist: {
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

};