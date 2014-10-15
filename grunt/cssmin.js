// CSSmin: minify CSS
// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {

  dist: {
    combine: {
      files: {
        'css/styles.css' : ['css/styles.css'] // output CSS : input CSS
      }
    }
  }

};
