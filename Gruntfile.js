module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    minified : {
      files: {
        src: 'js/script.js',
        dest: 'js/script.js'
      },
      options : {
        allinone: false
      }
    },

    uglify: {
      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    },

    concat:{
      options: {
        // separator:'\n \n'
      },
      css: {
        src: ['css/normalize.css', 'libs/bootstrap/bootstrap.css', 'libs/magnificPopup/magnific-popup.css', 'css/fonts.css', 'css/main.css'],
        dest: 'css/main.css'
      },
      js: {
        src: ['libs/jquery/jquery-1.11.3.min.js','libs/angular/angular.min.js','libs/angular/angular-animate.min.js', 'libs/validate/jquery.validate.min.js', 'libs/maskedinput/jquery.maskedinput.min.js', 'libs/magnificPopup/jquery.magnific-popup.min.js', 'libs/scrol/jquery.malihu.PageScroll2id.js', 'js/main.js'],
        dest: 'js/script.js'
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'css',
          ext: '.css'
        }]
      },
      options: {
        sourcemap: "auto"
      }
    },

    watch: {
      sass: {
        files: ['sass/*.sass'],
        tasks: ['sass', 'postcss'],
        options: {
          livereload:true
        }
      },

      html:{
        files: ['index.html'],
        options: {
          livereload:true
        }
      }

    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({browsers: ['last 3 version']})
        ]
      },
      your_target: {
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      your_target: {
        src: 'js/main.js',
        dest: 'js/main.js'
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      css: {
        src: 'css/main.css',
        dest: 'css/main.min.css'
      }
    }



  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Default task(s).
  grunt.registerTask('default', ['babel']);
  grunt.registerTask('prod', ['concat', 'uglify', 'cssmin']);
};