// ImageOptim: another image minifier
// https://github.com/JamieMason/grunt-imageoptim

module.exports = {

  dist: {
    options: {
      jpegMini: false,
      imageAlpha: false,
      quitAfter: true
    },
    src: ['images']
  }

};