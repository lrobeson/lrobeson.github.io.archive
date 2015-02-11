// Compass: compile Sass files to CSS & (optionally) create debug files
// https://github.com/gruntjs/grunt-contrib-compass

module.exports = {

  dist: {
    options: {
      assetCacheBuster: false,
      bundleExec: true, // tell Grunt's Compass to use Bundler (Gemfile)
      cssDir: 'css',
      debugInfo: true,
      fontsDir: 'css/fonts',
      force: true,
      imagesDir: 'img',
      javascriptsDir: 'js',
      require: ['breakpoint', 'sass-globbing', 'singularitygs', 'singularity-extras'],
      sassDir: 'sass',
      sourcemap: true,
      noLineComments: false,
      outputStyle: 'expanded',
      relativeAssets: true,
    }
  },

  dev: {
    options: {
      // settings here override config.rb
      // http://compass-style.org/help/documentation/configuration-reference
      bundleExec: true,  // use Bundler specified versions
      config: '../public/sites/all/themes/grand-challenges/config.rb',  // use Compass config file for most settings
      outputStyle: 'expanded',
      sourcemap: false,
    }
  },

  patternLab: {
    options: {
      // settings here override config.rb
      // http://compass-style.org/help/documentation/configuration-reference
      bundleExec: true,  // use Bundler specified versions
      config: 'config.rb',  // use Compass config file for most settings
      outputStyle: 'expanded',
      sourcemap: true,
    }
  },

  stage: { // production settings
    options: {
      assetCacheBuster: true,
      bundleExec: true,
      // force: true,
      sourcemap: false,
      noLineComments: true,
      outputStyle: 'compressed',
    }
  }

};