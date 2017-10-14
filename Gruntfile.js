module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//sass
		sass: {
			options: {
				sourceMap: true,
				style: 'expanded'
			},
			dist: {
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},
		//imagemin
		imagemin: {
			dynamic: {
				options: {
					optimalizationLevel: 7
				},
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png, jpg, gif}', '!build/**/*.{png, jpg, gif}'],
					dest: 'images/build'
				}]
			}
		},
		//watch
		watch: {
			scripts: {
				files: ['scss/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
		},
		//browser-sync
		browserSync: {
			bsFile: {
				src: [
					'/css/*.css', '/*.html'
				]
			},
			options: {
				server: './',
				watchTask: true
			}
		}

	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
	grunt.registerTask('image', ['imagemin']);
	grunt.registerTask('browser', ['browserSync']);
};
