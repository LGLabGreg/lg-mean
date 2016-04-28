
/*!
 * @description Grunt@!!!!!
 */

module.exports = function(grunt) {

	var jsFiles = [
		//Vendors
		'src/app/vendors/lodash.min.js',
		
		//App
		'src/app/app.module.js',
		'src/app/app.config.js',
		'src/app/app.run.js',
		'src/app/app.route.js',

		//Config
		'src/app/config/config.js',

		//Services
		'src/app/services/api/apiService.js',
		'src/app/services/helper/helperService.js',
		'src/app/services/lodash/lodash.js',

		//Controllers
		'src/app/controllers/home/HomeCtrl.js',
		'src/app/controllers/header/HeaderCtrl.js',
		'src/app/controllers/footer/FooterCtrl.js'

		//Directives


	];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
		  build: ["build"],
		  images: ["build/images"],
		  sounds: ["build/sounds"],
		  json: ["build/**/*.json"],
		  html: ["build/**/*.html"]
		},
		copy: {
	      images: {
	        files: [{
	          expand: true,
	          cwd: 'src',
	          src: ['images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
	          dest: 'build'
	        }]
	      },
	      sounds: {
	        files: [{
	          expand: true,
	          cwd: 'src',
	          src: ['sounds/*.{wav,mp3,ogg,aac}'],
	          dest: 'build'
	        }]
	      },
	      html: {
	        files: [{
	          expand: true,
	          cwd: 'src',
	          src: ['**/*.html'],
	          dest: 'build'
	        }]
	      },
	      json: {
	        files: [{
	          expand: true,
	          cwd: 'src',
	          src: ['**/*.json'],
	          dest: 'build'
	        }]
	      }
	    },
		uglify: {
		  options: {
		    banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		    mangle: false
		  },
		  build: {
		    src: 'src/app/app.js',
		    dest: 'build/js/app.min.js'
		  }
		},
		concat: {
		  options: {
		  },
		  dist: {
		    src: [jsFiles],
		    dest: 'src/app/app.js'
		  }
		},
		compass: {
			compile: {
		     options: {
		        config: 'src/sass/config.rb'
		    }
		  }
		},
		cssmin: {
		  compress: {
		    files: {
		      'build/css/screen.min.css' : ['src/css/*.css']
		    }
		  }
		},
		connect: {
		  server: {
		    options: {
				keepalive: false,
				base: 'build/',
				hostname: 'localhost',
				port: 8000,
				options: {
					index: 'index.html',
					maxAge: 300000
				}
		    }
		  }
		},
		watch: {
		  scripts: {
		    files: ['Gruntfile.js',jsFiles],
		    tasks: ['concat','uglify'],
		    options: {
		      debounceDelay: 250
		    }
		  },
		  compass: {
		    files: 'src/sass/**/*.scss',
				tasks: ['compass','cssmin']
		  },
		  css: {
		    files: 'src/css/*.css',
				tasks: ['cssmin']
		  },
		  html: {
		    files: 'src/**/*.html',
				tasks: ['clean:html','copy:html']
		  },
		  json: {
		    files: 'src/**/*.json',
				tasks: ['clean:json','copy:json']
		  },
		  images: {
		  	options: {
			  event: ['changed', 'added', 'deleted']
			},
		    files: ['src/images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				tasks: ['clean:images', 'copy:images']
		  },
		  sounds: {
		    files: 'src/sounds/*.{wav,mp3,ogg,aac}',
				tasks: ['clean:sounds', 'copy:sounds']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	

	grunt.registerTask('development', ['clean', 'concat','uglify','compass','cssmin','copy','watch']);
	grunt.registerTask('build', ['clean', 'concat','uglify','compass','cssmin','copy']);

};
