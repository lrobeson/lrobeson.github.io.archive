// Shell:
// Run shell commands
// https://github.com/sindresorhus/grunt-shell

module.exports = {

  options: {
    stderr: false
  },

  // 'php core/builder.php' generates patterns (build out public directory)
  // '-w' flag uses native watch feature to monitor changes to CSS or markup and copy source files to public (following settings in config.ini)
  patternlab: {
    command: [
      'php core/builder.php -w'
    ].join('&&')
  }

};
