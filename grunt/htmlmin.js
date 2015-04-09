// HTMLmin: minify HTML
// https://github.com/gruntjs/grunt-contrib-htmlmin

module.exports = {

  dist: {
    options: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true,
      removeOptionalTags: true
    },
    files: [{
      expand: true,
      src: ['*.html', 'scripts/{,**/}*.html', 'views/**/*.html'],
    }]
  }

};