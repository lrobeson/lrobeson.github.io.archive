// CSS Lint: check for errors
// https://github.com/gruntjs/grunt-contrib-csslint

module.exports = {

  strict: {
    options: {
      import: 2 // value of 2 will set it to become an error
    },
    src: ['css/*.css']
  },
  lax: {
    options: {
      import: false // value of false ignores the rule
    },
    src: ['css/*.css']
  }

};