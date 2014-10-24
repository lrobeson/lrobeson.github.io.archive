// Shell: run shell commands
// https://github.com/sindresorhus/grunt-shell
module.exports = {

  dist: {
    options: {
      stderr: false
    },
    wraith: {
      command: 'wraith capture default'
    }
  },

};
