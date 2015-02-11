// Shell: run shell commands
// https://github.com/sindresorhus/grunt-shell

module.exports = {

  options: {
    stderr: false
  },

  patternlabStart: {
    command: [
      'php core/builder.php -g', // Generate patterns
    ].join('&&')
  },

  patternlabWatch: {
    command: [
      'php core/builder.php -wr', // Start the Watch & Auto-Reload Server
    ].join('&&')
  },

  wraith: {
    command: 'wraith capture default'
  }

};