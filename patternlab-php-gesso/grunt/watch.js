// Watch: watch for changes and runs tasks based on the type of changed files
// https://github.com/gruntjs/grunt-contrib-watch
//
// NOTE: these tasks work in conjunction with concurrent.js

module.exports = {

  gruntfiles : {
    files : ['Gruntfile.js', 'grunt/*.js'],
    tasks : []
  },

  javascript : {
    files : ['source/js/**/*.js', '../public/sites/all/themes/grand-challenges/js/**/*.js'],
    tasks : ['optimize-js']
  },

  patternlabSass: {
    files: ['source/sass/**/*.scss'],
    tasks: ['compass:patternLab'],
    options: {
      spawn: false,
    }
  },

  themeSass: {
    files: ['../public/sites/all/themes/grand-challenges/sass/*.scss', '../public/sites/all/themes/grand-challenges/sass/**/*.scss'],
    tasks: ['compass:dev'],
    options: {
      spawn: false,
    }
  }

};