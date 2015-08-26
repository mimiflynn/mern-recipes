module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['client/js/app.js']
    },
    concurrent: {
      target: {
        tasks: ['watch', 'connect:server'],
        options: {
          logConcurrentOutput: true,
          limit: 5
        }
      }
    },
    webpack: {
      build: {
        entry: './source/scripts/app.jsx',
        output: {
            path: 'client/js/',
            filename: 'app.js',
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
        additionalSuffixes: ['.js', '.jsx']
      }
    },
    watch: {
      dev: {
        files: ['<%= jshint.files %>', 'source/**/*.jsx', 'source/sass/**/*.scss', 'source/**/*.js', 'app/views/**/*.jsx'],
        tasks: ['jshint', 'compass', 'browserify']
      },
    },
    connect: {
      server: {
        port: 1337,
        base: 'public'
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint', 'webpack']);

};
