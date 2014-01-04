
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9002,
          base: 'api-stubs/',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  var options = {
    pathnameOnly: true,
    router: {
      '/api': '127.0.0.1:9002',
      '/client': '127.0.0.1:9001'
    }
  }

  var httpProxy = require('http-proxy');
  grunt.registerTask('proxy', 'Start a standard proxy.', function() {
    httpProxy.createServer(options).listen(8000);
    var done = this.async();
  });

}
