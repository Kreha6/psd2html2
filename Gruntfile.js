module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks
    sass: { // Begin Sass Plugin
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['**/*.scss'],
          dest: 'css',
          ext: '.css'
      }]
      }
    },
    cssmin: { // Begin CSS Minify Plugin
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
    }]
      }
    },
    uglify: { // Begin JS Uglify Plugin
     build: {
       src: ['./js/*.js'],
       dest: './script.min.js'
     }
    },
    watch: { // Compile everything into one task with Watch Plugin
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'cssmin']
      }
      ,
      js: {
       files: './js/*.js',
       tasks: ['uglify']
      }
    }
  });
  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
};




// module.exports = function(grunt) {
// grunt.initConfig({
//   pkg: grunt.file.readJSON('package.json'),
//     sass: {
//       dist: {
//         options: {
//           sourcemap: false,
//           compress: false,
//           yuicompress: false,
//           style: 'expanded',
//         },
//         files: {
//           'css/style.css' : 'sass/style.scss'
//         }
//       },
//     },
//     watch: {
//       css: {
//         files: '**/*.scss',
//         tasks: ['sass']
//       }
//     }
//   });
// grunt.loadNpmTasks('grunt-contrib-sass');
// grunt.loadNpmTasks('grunt-contrib-watch');
// grunt.registerTask('default',['watch']);
// }
