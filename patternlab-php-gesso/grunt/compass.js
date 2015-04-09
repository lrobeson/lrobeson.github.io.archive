// Compass:
// Compile Sass files to CSS & (optionally) create debug files
// https://github.com/gruntjs/grunt-contrib-compass

module.exports = {

  patternlabDev: {
    options: {
      // assetCacheBuster: true,
      basePath: 'source',
      bundleExec: true,
      config: 'config.rb',
      cssDir: 'css',
      fontsDir: 'css/fonts',
      force: true,
      imagesDir: 'images',
      javascriptsDir: 'js',
      outputStyle: 'expanded',
      relativeAssets: true,
      require: ['breakpoint', 'compass', 'sass-globbing', 'singularitygs', 'singularity-extras'],
      sassDir: 'sass',
      sourcemap: false,
    }
  },

  patternlabStage: {
    options: {
      // assetCacheBuster: true,
      basePath: 'source',
      bundleExec: true,
      config: 'config.rb',
      cssDir: 'css',
      fontsDir: 'css/fonts',
      force: true,
      imagesDir: 'images',
      javascriptsDir: 'js',
      outputStyle: 'compressed',
      relativeAssets: true,
      require: ['breakpoint', 'compass', 'sass-globbing', 'singularitygs', 'singularity-extras'],
      sassDir: 'sass',
      sourcemap: false,
    }
  }

};
