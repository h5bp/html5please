// Resources
// https://gist.github.com/2489540

/*global config:true, task:true*/
module.exports = function( grunt ) {

	var task = grunt.task;
	var file = grunt.file;
	var utils = grunt.utils;
	var log = grunt.log;
	var verbose = grunt.verbose;
	var fail = grunt.fail;
	var option = grunt.option;
	var config = grunt.config;
	var template = grunt.template;

	grunt.loadNpmTasks('grunt-closure-compiler');

	grunt.initConfig({

		qunit: {
			files: "test/index.html"
		},

		'closure-compiler': {
			frontend: {
				js: [
					'js/libs/augment.js',
					'js/libs/list.js',
					'js/libs/classList.js',
					'js/script.js'
				],
				jsOutputFile: 'js/script.min.js',
				options: {
					'create_source_map':'./script.min.js.map',
					'source_map_format':'V3'
				}
			}
		}

	});

	// Default grunt.
	grunt.registerTask( "default", "qunit" );

};
