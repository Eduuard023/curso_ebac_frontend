module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dev/scripts/main.js': 'src/scripts/main.js'
                }
            }
        },
        mkdir: {
            all: {
                options: {
                    create: ['dev']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mkdir');

    grunt.registerTask('default', ['mkdir', 'less', 'uglify']);
};
