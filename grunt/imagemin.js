// Imagemin: minify images (JPGs & PNGs)
// https://github.com/gruntjs/grunt-contrib-imagemin
module.exports = {

  dist: {
    files: [{
      expand: true,
      cwd: '/images',
      src: '**/*.{png,jpg,jpeg,gif}',
      dest: '/images'
    }]
  }

};
