'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'assets/js/*.js',
				'!assets/js/scripts.min.js'
			]
		},
		less: {
			dev: {
				files: {
					'assets/css/main.min.css': [
						'assets/less/app.less'
					]
				},
				options: {
					sourceMap: true,
					sourceMapFilename: 'assets/css/main.min.css.map',
					sourceMapRootpath: '../../'
				}
			},
			dist: {
				files: {
					'assets/css/main.min.css': [
						'assets/less/app.less'
					]
				},
				options: {
					compress: true,
					sourceMap: false,
				}
			}
		},
		uglify: {
			dev: {
				files: {
					'assets/js/scripts.min.js': [
						'assets/bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js',
						'assets/js/app.js'
					]
				},
				options: {
					sourceMap: true,
					sourceMapName: 'assets/js/scripts.min.js.map',
					sourceMappingURL: 'scripts.min.js.map'
				}
			},
			dist: {
				files: {
					'assets/js/scripts.min.js': [
						'assets/bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js',
						'assets/js/app.js'
					]
				},
				options: {
					sourceMap: false
				}
			}
		},
		watch: {
			less: {
				files: [
					'assets/less/*.less'
				],
				tasks: ['less:dev']
			},
			js: {
				files: [
					'<%= jshint.all %>'
				],
				tasks: ['uglify:dev']
			},
			all: {
				options: {
					livereload: {
						port: 4002
					},
				},
				files: [
					'assets/css/main.min.css',
					'assets/js/scripts.min.js',
					'*.html'
				]
			}
		},
		clean: {
			dist: [
				'assets/css/main.min.css',
				'assets/css/main.min.css.map',
				'assets/js/scripts.min.js',
				'assets/js/scripts.min.js.map'
			]
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', [
		'dev'
	]);
	grunt.registerTask('dev', [
		'clean',
		'less:dev',
		'uglify:dev',
		'watch'
	]);
	grunt.registerTask('build', [
		'clean',
		'less:dist',
		'jshint',
		'uglify:dist'
	]);

};
