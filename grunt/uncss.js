// UnCSS: remove unused CSS rules
// https://github.com/addyosmani/grunt-uncss
module.exports = {

  dist: {
    // options: {
    //   csspath : 'css/',
    // },
    files: {
      'css/styles.css' : ['index.html'] // output CSS : comparison HTML
    }
  }

};
