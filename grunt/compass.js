// Compass:
// Compile Sass files to CSS & (optionally) create debug files
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

  stage: {
    options: {
      assetCacheBuster: false,
      bundleExec: true,
      cssDir: 'css',
      debugInfo: false,
      fontsDir: 'css/fonts',
      force: true,
      imagesDir: 'img',
      javascriptsDir: 'js',
      require: ['breakpoint', 'sass-globbing', 'singularitygs', 'singularity-extras'],
      sassDir: 'sass',
      sourcemap: false,
      noLineComments: true,
      outputStyle: 'compressed',
      relativeAssets: true,
    }
  }

};