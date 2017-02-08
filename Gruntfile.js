module.exports = function(grunt) {
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Task configuration compile and minfy css
        compass: {                  // Task
            // dist: {                   // Target
            //     options: {              // Target options
            //         sassDir: '/sass',
            //         cssDir: '/style',
            //         environment: 'production'
            //     }
            // },
            dev: {                    // Another target
                options: {
                    sassDir: 'sass',
                    cssDir: 'style'
                }
            }
        },

        reload: {
            proxy: {
                host: 'file:///Users/maitegrace/Documents/PROJECTS/GRID/grid.html',
            }
        },

        watch: {
	      compass: {
	        files: ['sass/*.scss'],
	        tasks: ['compass', 'reload']
            }
        }
	});

    // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-compass');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-reload');

    // Default task.
//        grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['compass', 'watch']);
};
