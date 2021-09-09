const path = require( 'path' );

module.exports = {
    styleguideDir : "docs",

    skipComponentsWithoutExample : false,
    
    require : [
        path.join( __dirname, 'node_modules/materialize-css/dist/css/materialize.min.css' ),
        path.join( __dirname, 'styleguide.globals.js' ),
    ],

    template : {
        head : {
            links : [
                {
                    rel : 'stylesheet',
                    href : 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        },
    },

    ignore : [
        '**/components/**/common.js',
    ],
    pagePerSection : true,

    sections : [
        {
            name : 'jsdocs',
            href : '../jsdocs/index.html',
            external : true,
        },
        {
            name : 'Components',
            components : 'src/components/**/*.js',
            sectionDepth : 1,
        },
    ],
    //
    // STYLES
    styles : './styleguide.styles.js',
};