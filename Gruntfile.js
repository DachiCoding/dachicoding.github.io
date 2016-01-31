grunt.initConfig({
  jekyll: {                             // Task
    options: {                          // Universal options
      bundleExec: true,
      src : '<%= app %>'
    },
    dist: {                             // Target
      options: {                        // Target options
        dest: '<%= dist %>',
        config: '_config.yml,_config.build.yml'
      }
    },
    serve: {                            // Another target
      options: {
        serve: true,
        dest: '.jekyll',
        drafts: true,
        future: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-jekyll');

grunt.registerTask('default', ['jshint', 'jekyll']);
