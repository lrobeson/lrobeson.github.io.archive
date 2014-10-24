// SVGmin: minify SVGs
// https://github.com/sindresorhus/grunt-svgmin
module.exports = {

  dist: {
    files: [{
      expand: true,
      cwd: '/images',
      src: '**/*.svg',
      dest: '/images'
    }]
  }

};
