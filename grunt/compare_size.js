// Compare Size: 
// https://github.com/rwaldron/grunt-compare-size

module.exports = {

    files: [
      "css/styles.css",
      "css/no-mq.css",
      "js/scripts.js",
    ],
    options: {
      // Location of stored size data
      cache: ".sizecache.json",

      // Compressor label-function pairs
      // compress: {
      //   gz: function( fileContents ) {
      //     return require("gzip-js").zip( fileContents, {} ).length;
      //   },
      //   otherCompressorLabel: function( fileContents ) {
      //     return compressedSize( fileContents );
      //   },
      //   ...
      // }
    }
  }