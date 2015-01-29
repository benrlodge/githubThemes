module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: { style: 'expanded' },
        files: {
          'css/darktheme.css': 'sass/darktheme.scss'
        }
      }
    },
   
    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['sass/**/*.scss'], tasks: 'sass'
      },
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);

};