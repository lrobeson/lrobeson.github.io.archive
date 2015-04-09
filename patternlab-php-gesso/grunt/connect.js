// Connect:
// Run http server to serve files
// https://github.com/gruntjs/grunt-contrib-connect

module.exports = {

  server: {
    options: {
      base: {
        path: 'public',
        options: {
          index: 'index.html',
        }
      },
      hostname: '127.0.0.1',
      keepalive: true,
      livereload: true, // needed for live reload setting in Watch tasks
      open: false, // open in a new tab when started
      port: 8000,
    }
  }

};