module.exports = function(grunt) {
	grunt.initConfig({
	  connect: {
	    server: {
	      options: {
	        port: 8000,
	        hostname: 'localhost',
	        base:'.',
	        keepalive:true,
	        open:true
	      }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('serve',['connect:server']);
};