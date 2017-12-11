module.exports = {
    paths: {
        sassComp: './src/styles/**/**/*.scss',
        sass: './src/styles/main.scss',
        entry: './src/js/index.js',
        js: './src/js/**/*.js',
        html: './src/*.html',
        fonts: './src/fonts/**/*',
        dist: './dist/',
        images: './src/images/**/*',
        json: './src/data.json'
    },
    output: {
        dist: './dist/',
        html: './dist/',
        fonts: './dist/fonts',
        js: './dist/js',
        css: './dist/css',
        images: './dist/images'
    },
    production: false
};
