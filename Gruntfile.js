module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['client/js/app.js']
    },
    webpack: {
      build: {
        entry: './source/scripts/app.js',
        debug: true,
        devtool: '#source-map',
        output: {
            path: 'client/js/',
            filename: 'app.js'
        },
        stats: {
            // Configure the console output
            colors: false,
            modules: true,
            reasons: true
        },
        module: {
          loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
          ]
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'source/scripts/**/*.js'],
      options: {
        globals: {
          console: true
        },
        additionalSuffixes: ['.js']
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      dev: {
        files: ['<%= jshint.files %>', 'source/**/*.js', 'components/**/*.js'],
        tasks: ['jshint', 'webpack']
      },
    }
  });

  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint', 'webpack']);

};
